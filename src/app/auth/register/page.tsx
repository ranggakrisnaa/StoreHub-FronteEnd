import InputGroup from '@/components/common/InputGroup';
import AuthLayout from '@/components/layout/AuthLayout';
import FormButton from '@/components/ui/FormButton';
import { useAuthStore } from '@/contexts/stores/authTokenStore';
import { Box, Image, useToast } from '@chakra-ui/react';

export default function Page() {
    const { registerData, setRegisterData } = useAuthStore();
    const toast = useToast();

    const handleChange = (field: keyof typeof registerData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData(field, e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // try {
        //     const response = await login(loginData.usernameOrEmail, loginData.password);
        //     toast({
        //         position: 'top',
        //         title: 'Login successful!',
        //         description: response.message,
        //         status: 'success',
        //         duration: 5000,
        //         isClosable: true,
        //     });
        // } catch (error: any) {
        //     console.error('Registration failed:', error);
        //     toast({
        //         position: 'top',
        //         title: 'Login failed',
        //         description: error.message,
        //         status: 'error',
        //         duration: 5000,
        //         isClosable: true,
        //     });
        // }
    };
    return (
        <>
            <Box
                bg="neutral.100"
                h="auto"
                display="flex"
                justifyContent="center"
                position="relative"
                overflow="hidden"
                as="form"
                onSubmit={handleSubmit}
            >
                <Box
                    position="absolute"
                    top={{ base: '10px', md: '0' }}
                    left={{ base: '0', md: '-80px', xl: '-70px' }}
                    zIndex="99"
                >
                    <Image
                        src="/image2.png"
                        alt="Left Image"
                        w={{ base: '200px', md: '340px', xl: '500px' }}
                        maxW="100%"
                    />
                </Box>
                <Box
                    position="absolute"
                    bottom={{ base: '10px', md: '0' }}
                    right={{ base: '0', md: '-80px', xl: '-70px' }}
                >
                    <Image
                        src="/image1.png"
                        alt="Right Image"
                        w={{ base: '200px', md: '340px', xl: '500px' }}
                        maxW="100%"
                    />
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
                                value={registerData.email}
                                onChange={handleChange('email')}
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
                                    value={registerData.usename}
                                    onChange={handleChange('username')}
                                />
                                <InputGroup
                                    formLabel="Name"
                                    placeholder="Name"
                                    size="md"
                                    borderRadius="8px"
                                    typeInput="text"
                                    value={registerData.name}
                                    onChange={handleChange('name')}
                                />
                            </Box>
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Phone Number"
                                placeholder="8123456789"
                                size="md"
                                w="full"
                                borderRadius="8px"
                                typeInput="number"
                                value={registerData.phoneNumber}
                                onChange={handleChange('phoneNumber')}
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Password"
                                placeholder="Password"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                                typeInput="password"
                                value={registerData.password}
                                onChange={handleChange('password')}
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Confirm Password"
                                placeholder="Confirm Password"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                                typeInput="password"
                                value={registerData.confirmPassword}
                                onChange={handleChange('confirmPassword')}
                            />
                        </Box>
                        <FormButton typeButton="submit" w="475px" borderRadius="10px" type="login" />
                    </AuthLayout>
                </Box>
            </Box>
        </>
    );
}
