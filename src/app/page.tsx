import { Box, Button, Heading } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
    return (
        <Box p={4}>
            <Heading mb={4}>Home Page</Heading>
            <Link href="/auth/login">
                <Button colorScheme="blue">Go to Dashboard</Button>
            </Link>
        </Box>
    );
}
