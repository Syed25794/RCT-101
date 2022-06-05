import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  RadioGroup,
  Button,
  Heading,
  Stack,
  Box
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";


export const ChakraSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <Button
        colorScheme="blue"
        onClick={onOpen}
        style={{ margin: "10px 0px 0px 480px" }}
      >
        Open Sidebar
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Heading fontSize="2xl" style={{ margin: "20px 0px 0px 30px" }}>
            Logo
          </Heading>
          <DrawerBody>
          <Stack spacing={4} >
          <div>
          <SettingsIcon/>
            <Button variant="ghost">Home</Button>
            </div>
            <Button variant="ghost">Trending</Button>
            <Button variant="ghost">Explore</Button>
            <Button variant="ghost">Favourites</Button>
            <Button variant="ghost">Settings</Button>
        </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
