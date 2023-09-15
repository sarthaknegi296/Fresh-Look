import React from 'react'
import { Avatar, Button, Container, Heading, Input, Text, VStack, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import rectangle from "../assets/rectangle.png"

function Signup() {
    return (
        <Box bgColor={"blackAlpha.900"} bgImage={rectangle}  minH={"100vh"} fontFamily={"Syne"} color={"white"}>
        <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
            <form>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full", "96"]} m={"auto"} my={"8"}>

                    <Heading fontFamily={"Syne"} fontSize={"6xl"} textAlign={"center"}>Fresh Look</Heading>
                    <Avatar alignSelf={"center"} boxSize={"32"}/>

                    <Input placeholder={"Name"} type='text' required border={"1px"} focusBorderColor={"white"}/>

                    <Input placeholder={"Email"} type='email' required border={"1px"} focusBorderColor={"white"}/>

                    <Input placeholder={"Password"} type='password' required border={"1px"} focusBorderColor={"white"}/>

                    <Button variant={'ghost'} colorScheme={"white"} outlineColor={"white"} type={'submit'}>Sign Up</Button>
                    
                    <Text textAlign={"right"}>
                        Already a User ? {" "}
                        <Button variant={'link'} colorScheme='white'>
                            <Link to={"/login"}>Log In</Link>
                        </Button>
                    </Text>
                    

                    
                </VStack>
            </form>
        </Container>
        </Box>
    )
}

export default Signup
