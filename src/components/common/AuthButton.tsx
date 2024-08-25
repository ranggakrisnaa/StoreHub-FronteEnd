import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';

interface AuthButtonProps {
    type: 'login' | 'register';
    label?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ type, label }) => {
    const router = useRouter();

    const handleClick = () => {
        if (type === 'login') {
            router.push('/login');
        } else if (type === 'register') {
            router.push('/register');
        }
    };

    return (
        <Button colorScheme="" onClick={handleClick}>
            {label || (type === 'login' ? 'Login' : 'Register')}
        </Button>
    );
};

export default AuthButton;
