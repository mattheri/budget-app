import { useEffect, useState, DependencyList, useRef } from "react";

const INTERVAL_THRESHOLD = 5000;
const INTERVAL = 100;

interface Props {
  onThresholdExceeded?: () => void;
  maxThreshold?: number;
  deps?: DependencyList;
}

type UseUserToken = (props?: Props) => string | null;

const useUserToken: UseUserToken = (
  { onThresholdExceeded, maxThreshold = INTERVAL_THRESHOLD, deps } = {
    maxThreshold: INTERVAL_THRESHOLD,
  }
) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const currentTime = useRef<number>(0);

  const pollUserToken = () => {
    if (interval.current) {
      clearInterval(interval.current);
      currentTime.current = 0;
    }

    interval.current = setInterval(async () => {
      currentTime.current += INTERVAL;

      if (currentTime.current >= maxThreshold) {
        if (onThresholdExceeded) onThresholdExceeded();

        clearInterval(interval.current!);
        return;
      }

      const userToken = localStorage.getItem("token");

      if (!userToken) return;

      clearInterval(interval.current!);
      setUserToken(userToken);
    }, INTERVAL);
  };

  useEffect(() => {
    pollUserToken();

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        currentTime.current = 0;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), setUserToken]);

  return userToken;
};

export default useUserToken;
