import React from 'react'
import { Button, Container, Heading, Input, Text, VStack, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import rectangle from "../assets/rectangle.png"

function Login() {
    return (
        <Box bgColor={"blackAlpha.900"} bgImage={rectangle}  minH={"100vh"} fontFamily={"Syne"}>
        <Container maxW={"container.xl"} h={"100vh"} p={"8"}>
            <form>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full", "96"]} m={"auto"} my={"16"} color={"whiteAlpha.900"}>

                    <Heading textAlign={"center"} fontSize={"6xl"} fontFamily={"Syne"}>Hey! Welcome Back</Heading>
                    <Input placeholder={"Email"} type='email' required border={"1px"} focusBorderColor={"white"}/>
                    <Input placeholder={"Password"} type='password' required border={"1px"} focusBorderColor={"white"}/>
                    <Button variant={'link'} alignSelf={"flex-end"} colorScheme='white'>
                        <Link to={"/forgotpassword"}>Forget Password ?</Link>
                    </Button>

                    <Button border={"2px"} borderColor={"blackAlpha.900"} fontFamily={"Syne"} size={"lg"}>Login</Button>
                    
                    <Text textAlign={"right"}>
                        New User ? {" "}
                        <Button variant={'link'} colorScheme='#000000'>
                            <Link to={"/signup"}>Sign Up</Link>
                        </Button>
                    </Text>
                    
                </VStack>
            </form>
        </Container>
        </Box>
    )
}

export default Login
