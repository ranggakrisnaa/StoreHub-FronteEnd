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
                        subText="Log In"
                        type="login"
                    >
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Enter your username or email address"
                                placeholder="Username or Email"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                                typeInput="text"
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Enter your Password"
                                placeholder="Password"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                                typeInput="password"
                            />
                        </Box>
                        <FormButton w="475px" borderRadius="10px" type="login" />
                    </AuthLayout>
                </Box>
            </Box>
        </>
    );
}
