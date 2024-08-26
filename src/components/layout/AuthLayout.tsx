import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface AuthProps {
    mainText: string;
    subText: string;
    textStyle1: string;
    textStyle2: string;
    type: 'login' | 'register';
    children?: React.ReactNode;
}

const AuthLayout = ({ mainText, subText, textStyle1, textStyle2, type, children }: AuthProps) => {
    const label =
        type == 'login' ? (
            <Box color="neutral.500" textStyle="text2" display="flex">
                Don’t have an Account ?{' '}
                <Link href="/auth/register">
                    <Box color="primary.500" fontWeight="bold" paddingLeft="10px">
                        Register
                    </Box>
                </Link>
            </Box>
        ) : (
            <Box color="neutral.500" textStyle="text2" display="flex">
                Already have an Account ?{' '}
                <Link href="/auth/login">
                    <Box color="primary.500" fontWeight="bold" paddingLeft="10px">
                        Log In
                    </Box>
                </Link>
            </Box>
        );

    return (
        <>
            <Box w="auto" h="auto" bg="base.white" opacity="80%" borderRadius="40px" padding="86px 32px" boxShadow="xl">
                <Box mb="32px">
                    <Box textStyle={textStyle1} mb="16px">
                        {mainText}
                    </Box>
                    <Box textStyle={textStyle2}>{subText}</Box>
                </Box>
                <Box mb="84px">{label}</Box>
                <Box>{children}</Box>
            </Box>
        </>
    );
};

export default AuthLayout;
