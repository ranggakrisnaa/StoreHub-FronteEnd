// pages/verify.tsx
'use client';

import { Box, Button, Input, Image, Text, Link, useToast, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/contexts/stores/authFormStore';
import { verify } from '@/services/userService';
import { getUserData, saveUserData } from '@/utils/UserData';
import { useCallback, useEffect, useState } from 'react';

export default function VerifyPage() {
    const { verifyLoginData, setVerifyLoginData } = useAuthStore();
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const toast = useToast();

    const handleChange = (field: keyof typeof verifyLoginData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerifyLoginData(field, +e.target.value);
    };
    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            try {
                const response = await verify({ otp: +verifyLoginData.otp, email: getUserData('email') as string });
                setLoading(false);
                saveUserData('accessToken', response.data.accessToken);
                saveUserData('refreshToken', response.data.refreshToken);
                toast({
                    position: 'top',
                    title: 'Verification Login successful!',
                    description: response.message,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                router.push('/');
            } catch (error: any) {
                console.error(error);
                toast({
                    position: 'top',
                    title: 'Verification Login failed!',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }
        },
        [verifyLoginData, router, toast],
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
        <Box
            bg="neutral.100"
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
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
                <Image src="/image2.png" alt="Left Image" w={{ base: '200px', md: '340px', xl: '500px' }} maxW="100%" />
            </Box>
            <Box position="absolute" bottom={{ base: '10px', md: '0' }} right={{ base: '0', md: '-80px', xl: '-70px' }}>
                <Image
                    src="/image1.png"
                    alt="Right Image"
                    w={{ base: '200px', md: '340px', xl: '500px' }}
                    maxW="100%"
                />
            </Box>
            <Box bg="white" p="40px" borderRadius="8px" boxShadow="md" maxW="400px" textAlign="center">
                <Text fontSize="2xl" fontWeight="bold" mb="8px">
                    Verify Your Account
                </Text>
                <Text fontSize="md" color="gray.600" mb="24px">
                    Please enter the verification code sent to your email.
                </Text>
                <Input
                    placeholder="Enter Verification Code"
                    size="md"
                    borderRadius="8px"
                    mb="24px"
                    type="number"
                    value={verifyLoginData.otp}
                    onChange={handleChange('otp')}
                />
                <Button colorScheme="teal" size="md" w="full" borderRadius="8px" type="submit">
                    Verify
                </Button>
                <Box mt="16px">
                    <Text fontSize="sm">
                        Didnt receive the code?{' '}
                        <Link href="/resend" color="teal.500">
                            Resend Code
                        </Link>
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}
