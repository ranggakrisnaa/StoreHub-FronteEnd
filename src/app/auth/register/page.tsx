import InputGroup from '@/components/common/InputGroup';
import AuthLayout from '@/components/layout/AuthLayout';
import FormButton from '@/components/ui/FormButton';
import { Box, Image } from '@chakra-ui/react';

export default function Page() {
    return (
        <>
            <Box bg="neutral.100" h="auto" display="flex" justifyContent="center" position="relative" overflow="hidden">
                <Box position="absolute" top="0" left="-70px" p={4} zIndex="99">
                    <Image src="/image2.png" alt="Left Image" w="500px" />
                </Box>
                <Box position="absolute" bottom="0" right="-70px" p={4}>
                    <Image src="/image1.png" alt="Right Image" w="500px" />
                </Box>
                <Box margin="106px 451px">
                    <AuthLayout
                        mainText="Welcome to StoreHub"
                        textStyle1="heading3"
                        textStyle2="heading"
                        subText="Register"
                        type="register"
                    >
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Email address"
                                placeholder="Email"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                                typeInput="email"
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <Box display="flex" w="475px" gap="15px">
                                <InputGroup
                                    formLabel="Username"
                                    placeholder="Username"
                                    size="md"
                                    borderRadius="8px"
                                    typeInput="text"
                                />
                                <InputGroup
                                    formLabel="Name"
                                    placeholder="Name"
                                    size="md"
                                    borderRadius="8px"
                                    typeInput="text"
                                />
                            </Box>
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Phone Number"
                                placeholder="8123456"
                                size="md"
                                w="full"
                                borderRadius="8px"
                                typeInput="number"
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Password"
                                placeholder="Password"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                                typeInput="Password"
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Confirm Password"
                                placeholder="Confirm Password"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                                typeInput="Password"
                            />
                        </Box>
                        <FormButton w="475px" borderRadius="10px" type="login" />
                    </AuthLayout>
                </Box>
            </Box>
        </>
    );
}
