import {
  FC,
  MutableRefObject,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Box,
  useDisclosure,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export type SideBarHook = (el: JSX.Element) => void;
export type SideBarTitle = (title: string) => void;

interface SideBarHookRef {
  hook: SideBarHook;
  title: SideBarTitle;
}

export let sideBarHookRef: MutableRefObject<SideBarHookRef | null> = {
  current: null,
};

const Layout: FC = () => {
  const [Elements, setElements] = useState<JSX.Element | null>(() => null);
  const [title, setTitle] = useState<string>("");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const openMenuButtonRef = useRef(null);
  sideBarHookRef = useRef(null);

  useImperativeHandle(sideBarHookRef, () => ({
    hook: (el: JSX.Element) => setElements(el),
    title: (title: string) => setTitle(title),
  }));

  return (
    <Flex direction="column">
      <Box padding="1rem">
        <Stack direction="row">
          <ColorModeSwitcher />
          <Button ref={openMenuButtonRef} colorScheme="teal" onClick={onOpen}>
            Menu
          </Button>
        </Stack>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={openMenuButtonRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{title}</DrawerHeader>

            <DrawerBody>{Elements ? Elements : null}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box flexGrow={1} paddingInline="1.5rem">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;
