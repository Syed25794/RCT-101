import React from "react";
import { Text,Menu, MenuButton, MenuList, Button, MenuItem } from "@chakra-ui/react";

export const ChakraNavbar = () => {
  return (
    <div style={{display:"flex" , marginTop:"10px",borderBottom:"1px solid gray",paddingBottom:"10px"}}>
    <Text style={{marginLeft:"10px"}} fontSize='2xl'>Logo</Text>
      <div>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="gray"
            background="white"
            style={{marginLeft:"10px"}}  >
            Inspiration
          </MenuButton>
          <MenuList>
            <MenuItem>Explore Design Work</MenuItem>
            <MenuItem>New & Noteworthy</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="gray"
            background="white"
            style={{marginLeft:"10px"}} 
            >
            Find Work
          </MenuButton>
          <MenuList>
            <MenuItem>Job Board</MenuItem>
            <MenuItem>Freelance Projects</MenuItem>
          </MenuList>
        </Menu>
      <Button colorScheme="white" color="gray" style={{marginLeft:"10px"}} >Learn Design</Button>
      <Button colorScheme="white" color="gray" style={{marginLeft:"10px"}} >Higher Designers</Button>
      </div>
      <div style={{marginLeft:"250px"}}>
      <Button style={{marginLeft:"10px"}} colorScheme='white' color='gray'>Sign in</Button>
      <Button style={{marginLeft:"10px"}} colorScheme='pink' color="white">Sign Up</Button>
      </div>
    </div>
  );
};
