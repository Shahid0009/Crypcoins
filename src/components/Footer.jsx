import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

// const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]} pl={"40"}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            This is a Crypto details website where you can see the details of every crypto currencyand this is developed by Shahid
          </Text>
        </VStack>

        <VStack w={"full"} pl={"40"} alignItems={"center"}>
          <Text>Developed By </Text>
          <button>          <Text color={"blue.900"}  fontWeight={"bold"} href="https://github.com/Shahid0009" target='_blank' >Shahid</Text>
</button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
