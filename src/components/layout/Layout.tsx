import { FC, useRef } from "react";
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
  Heading,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import useLayoutContextualMenu from "./hook/UseLayoutContextualMenu";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const Layout: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const openMenuButtonRef = useRef(null);

  const { title, menu } = useLayoutContextualMenu();

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

            <DrawerBody>
              {menu.map(({ element: Element, title, additionalProps }) => (
                <Box marginBottom="1.5rem">
                  <VStack gap="1rem" alignItems="start">
                    <Heading as="h5" width="100%" size="sm">
                      {title}
                    </Heading>
                    <Divider />
                    <Box width="100%">
                      <Element {...additionalProps} />
                    </Box>
                  </VStack>
                </Box>
              ))}
            </DrawerBody>
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
