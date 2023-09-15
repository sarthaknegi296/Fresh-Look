import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'


import footerimg from "../assets/footer.png"

function Footer() {
    return (
        <>
        <Box bgImage={footerimg}  minH={"40"} pt={"10"} color={"white"} fontFamily={"Syne"}>
            <Stack direction={["column", "row"]}>
                <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                    <Heading pl={"40"} pt={"10"} size={"md"} textTransform={"uppercase"} textAlign={["center", "left"]} fontFamily={"Syne"}>
                        NEWSLETTER
                    </Heading>
                    <Text  pl={"40"} fontFamily={"Syne"} >Get news about articles and updates in your inbox.</Text>
                    
                </VStack>
                <VStack alignItems={"stretch"} w={"full"} px={"4"} fontFamily={"Syne"}>
                    <HStack 
                        borderBottom={"2px solid white"}
                        py={"2"}
                    >
                        <Input placeholder='Name' border={"none"} borderRadius={"none"} outline={"none"} />
                    </HStack>
                    <HStack 
                        borderBottom={"2px solid white"}
                        py={"2"}
                    >
                        <Input placeholder='Email' border={"none"} borderRadius={"none"} outline={"none"} />
                    </HStack>
                    <HStack 
                        borderBottom={"2px solid white"}
                        py={"2"}
                    >
                        <Input placeholder='Message' border={"none"} borderRadius={"none"} outline={"none"} fontFamily={"Syne"} />
                        
                    </HStack>
                </VStack>
                
            </Stack>

            <Stack direction={["column", "row"]}>
                <VStack alignItems={"stretch"} w={"full"} px={"4"} pb={"4"} >
                    <Heading fontFamily={"Syne"} px={"15"} py={"2"} textTransform={"uppercase"} textAlign={["center", "left"]} fontSize={"9xl"} lineHeight={"102px"} fontWeight={"800"}>
                        get <br />
                        
                    </Heading>
                    <Heading fontFamily={"Syne"} pl={"15"} pb={"4"} textTransform={"uppercase"} textAlign={["center", "left"]} fontSize={"9xl"} lineHeight={"102px"} fontWeight={"800"}>
                        in Touch
                    </Heading>
                </VStack>
                <VStack w={"16"} py={"10"} pr={"300px"}>
    
                        <Button
                            p={"14"}
                            color='#F07E15'
                            variant={'ghost'}
                            borderRadius={"full"}
                            border={"2px"}
                            colorScheme="blackAlpha"
                        >
                            Send
                        </Button>
    
                    
                </VStack>
                
            </Stack>
        </Box>
        <Box bgColor={"#000000"} color={"white"} py={"3"} fontFamily={"Syne"}>
            <Text textAlign={"center"}>Copyright 2022 All Right Reserved By SG</Text>
        </Box>
        </>
    )
}

export default Footer
