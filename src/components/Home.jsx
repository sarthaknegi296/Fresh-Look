import React from 'react'
import { Box, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { Card,  CardBody, Button } from '@chakra-ui/react'


import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import rectangle from "../assets/rectangle.png"
import model from "../assets/model.png"

import star3 from "../assets/star-3.png"
import star4 from "../assets/star-4.png"
import line23 from "../assets/line-23.png"


function Home() {
    return (
        <Box >
            
           <Box bgColor={"blackAlpha.900"} bgImage={rectangle}  minH={"102vh"} pt={"10"} color={"white"} >
                <Container>
                    <div className="absolute w-[1444px] h-[659px] top-[129px] left-0">
                        <div className="relative w-[1440px] h-[659px]">
                            <div className="absolute w-[993px] h-[354px] top-[216px] left-[447px] bg-[#f07e15]" />
                            <img className="absolute w-[365px] h-[372px] top-0 left-[1011px]" alt="Star" src={star3} />
                            <Image
                                className="absolute w-[432px] h-[655px] top-[4px] left-[899px] object-cover"
                                alt="model"
                                src={model}
                                
                            />
                            <div className="absolute w-[993px] h-[354px] top-[216px] left-[447px] bg-[color:var(--pimary-colour)] opacity-20" />
                            <img className="absolute w-[64px] h-[89px] top-[503px] left-[944px]" alt="Star" src={star4} />
                            <div className="absolute w-[117px] top-[486px] left-[1300px] [font-family:'Work_Sans',_Helvetica] font-normal text-[#161615] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                                OREGON JACKET
                            </div>
                            <div className="absolute w-[31px] top-[505px] left-[1300px] [font-family:'Work_Sans',_Helvetica] font-normal text-[#161615] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                                $124
                            </div>
                            <img
                                className="absolute w-[976px] h-px top-[550px] left-0 object-cover"
                                alt="Line"
                                src={line23}
                            />
                        </div>
                    </div>
                    <Heading fontSize={"140px"} fontWeight={"extrabold"} fontFamily={"Syne"} letterSpacing={"wider"} className='absolute w-[689px] top-[250px] left-[100px] '>Fresh</Heading>
                    <Heading fontSize={"140px"} fontWeight={"extrabold"} fontFamily={"Syne"} letterSpacing={"wider"} textColor={"#f07e15"} className="absolute w-[689px] top-[350px] left-[390px] font-outline-2">2022</Heading>
                    <Heading fontSize={"140px"} fontWeight={"extrabold"} fontFamily={"Syne"} letterSpacing={"wider"} className='top-[470px] left-[180px] text-white  whitespace-nowrap absolute'>Look</Heading>
                </Container>
           </Box>

            <Container maxW={"container.xl"} minH={"100vh"} p="16" fontFamily={"Syne"}>
                <Heading p="2" w={"fit-content"}  borderBottom={"2px solid"} fontFamily={"Syne"}>New Products</Heading>
                
                <Stack direction={["column", "row"]} pt={"8"} fontFamily={"Syne"}>
                    <VStack pr={"4"} py={"4"}>
                        <Button colorScheme="blackAlpha.900" variant='link' size={"lg"}>
                            Apparel
                        </Button>
                        <Button colorScheme="blackAlpha.900" variant='link' size={"lg"}>
                            Accessories
                        </Button>
                        <Button colorScheme="blackAlpha.900" variant='link'size={"lg"}>
                            Best sellers
                        </Button>
                        <Button colorScheme="blackAlpha.900" variant='link' size={"lg"}>
                            50% off
                        </Button>
                    </VStack>
                    <VStack alignItems={"stretch"} w={"full"} px={"4"} >
                        <Card maxW='sm' cursor={"pointer"}>
                            <CardBody >
                                <Image
                                src={product1}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3' >
                                <Heading size='md' fontFamily={"Syne"}>Florida Jacket</Heading>
                                <Text fontFamily={"Syne"}>
                                    Suffered alteration in some form,
                                    bysuffalterattion in some form,
                                    by injected humor, or randomised.
                                </Text>
                                <Text fontFamily={"Syne"} color="blackAlpha.900" fontSize='2xl'>
                                    $100
                                </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </VStack>
                    <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                    <Card maxW='sm' cursor={"pointer"}>
                            <CardBody>
                                <Image
                                src={product2}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='md' fontFamily={"Syne"}>Florida Jacket</Heading>
                                <Text fontFamily={"Syne"}>
                                    Suffered alteration in some form,
                                    bysuffalterattion in some form,
                                    by injected humor, or randomised.
                                </Text>
                                <Text fontFamily={"Syne"} color="blackAlpha.900" fontSize='2xl'>
                                    $100
                                </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </VStack>
                    <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                        <Card maxW='sm' cursor={"pointer"}>
                            <CardBody>
                                <Image
                                src={product3}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md' fontFamily={"Syne"}>Florida Jacket</Heading>
                                    <Text fontFamily={"Syne"}>
                                        Suffered alteration in some form,
                                        bysuffalterattion in some form,
                                        by injected humor, or randomised.
                                    </Text>
                                    <Text fontFamily={"Syne"} color="blackAlpha.900" fontSize='2xl'>
                                        $100
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </VStack>
                </Stack>
            </Container>
        </Box>
    )
}


export default Home
