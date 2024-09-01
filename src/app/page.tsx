'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { getUserData } from '@/utils/UserData';
import { useRouter } from 'next/navigation';

const validateToken = async (token: any) => {
    if (!token) return false;

    return true;
};

export default function Home() {
    const router = useRouter();
    const [isValidToken, setIsValidToken] = useState(false);
    const [loading, setLoading] = useState(true);
    const token = getUserData('accessToken');

    useEffect(() => {
        const checkToken = async () => {
            const valid = await validateToken(token);
            setIsValidToken(valid);
            setLoading(false);
            if (!valid) return router.push('/auth/login');
        };

        checkToken();
    }, [token, router]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Heading>Loading...</Heading>
            </Box>
        );
    }

    if (!isValidToken) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                textAlign="center"
            >
                <Heading mb={4}>Access Denied</Heading>
                <Text mb={4}>You do not have permission to view this page.</Text>
                <Link href="/auth/login">
                    <Button colorScheme="blue">Go to Login Page</Button>
                </Link>
            </Box>
        );
    }

    return (
        <Box>
            <Heading>Home Page Dashboard Store Hub</Heading>
            <Link href="/auth/logout">
                <Button colorScheme="red">Logout</Button>
            </Link>
        </Box>
    );
}
