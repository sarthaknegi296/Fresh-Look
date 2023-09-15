import React from 'react'
import { Box, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { Card,  CardBody, Button } from '@chakra-ui/react'


import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"



function Products() {
    return (
        <Product />
    )
}

const Product = () => {
    return (
    <Box >
            <Container maxW={"container.xl"} minH={"100vh"} p="10" >
                <Heading fontFamily={"Syne"} p="2" w={"fit-content"}  borderBottom={"2px solid"} m={"auto"}>Our Products</Heading>
                
                <Stack direction={["column", "row"]} pt={"16"}>
                    <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                        <Cards product={product1}/>
                    </VStack>
                    <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                        <Cards product={product2}/>
                    </VStack>
                    <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                        <Cards product={product3}/>
                    </VStack>
                </Stack>
                <Stack direction={["column", "row"]} pt={"16"}>
                    <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                        <Cards product={product1}/>
                    </VStack>
                    <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                        <Cards product={product2}/>
                    </VStack>
                    <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                        <Cards product={product3}/>
                    </VStack>
                </Stack>
            </Container>
            
        </Box>
    )
}

const Cards = (props) => {
    return (

        <>
            <Card maxW='sm' cursor={"pointer"}>
                <CardBody>
                    <Image
                        src={props.product}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading fontFamily={"Syne"} size='md'>Florida Jacket</Heading>
                        <Text fontFamily={"Syne"} >
                            Suffered alteration in some form,
                            by suffalterattion in some form,
                            by injected humor, or randomised.
                        </Text>
                        <Text fontFamily={"Syne"} color="blackAlpha.900" fontSize='2xl'>
                            $100
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default Products
