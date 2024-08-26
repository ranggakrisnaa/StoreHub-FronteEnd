import { Box, Button, Heading } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
    return (
        <Box>
            <Heading>Home Page</Heading>
            <Link href="/auth/login">
                <Button colorScheme="blue">Go to Login Page</Button>
            </Link>
        </Box>
    );
}
