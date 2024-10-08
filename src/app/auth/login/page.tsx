'use client';

import InputGroup from '@/components/common/InputGroup';
import AuthLayout from '@/components/layout/AuthLayout';
import FormButton from '@/components/ui/FormButton';
import { useAuthStore } from '@/contexts/stores/authFormStore';
import { login } from '@/services/userService';
import { saveUserData } from '@/utils/UserData';
import { Box, Image, Button, useToast, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function Page() {
    const { loginData, setLoginData } = useAuthStore();
    const [loading, setLoading] = useState(true);
    const toast = useToast();
    const router = useRouter();

    const handleChange = (field: keyof typeof loginData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData(field, e.target.value);
    };
    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);
            try {
                const response = await login(loginData);
                saveUserData('email', response.data.email);
                toast({
                    position: 'top',
                    title: 'Login successful!',
                    description: response.message,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                router.push('/auth/verify');
            } catch (error: any) {
                console.error(error);
                toast({
                    position: 'top',
                    title: 'Login failed',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            } finally {
                setLoading(false);
            }
        },
        [loginData, router, toast],
    );

    useEffect(() => {
        setLoading(false);
    }, [handleSubmit]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Heading>Loading...</Heading>
            </Box>
        );
    }

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
                                value={loginData.usernameOrEmail}
                                onChange={handleChange('usernameOrEmail')}
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <Box>
                                <InputGroup
                                    formLabel="Enter your Password"
                                    placeholder="Password"
                                    size="md"
                                    w="475px"
                                    borderRadius="8px"
                                    typeInput="password"
                                    value={loginData.password}
                                    onChange={handleChange('password')}
                                />
                            </Box>
                            <Link href="">
                                <Box textStyle="text2" marginTop="16px">
                                    Forgot Password ?
                                </Box>
                            </Link>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center" gap="20px">
                            <FormButton w="full" borderRadius="10px" type="login" typeButton="submit" />
                            <Box textStyle="text2">Or</Box>
                            <Box
                                padding="14px"
                                bg="primary.300"
                                borderRadius="8px"
                                cursor="pointer"
                                _hover={{ bg: 'primary.500' }}
                            >
                                <Image src="/google.png" alt="Right Image" w="20px" />
                            </Box>
                        </Box>
                    </AuthLayout>
                </Box>
            </Box>
        </>
    );
}
