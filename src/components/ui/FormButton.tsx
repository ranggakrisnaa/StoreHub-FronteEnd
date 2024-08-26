'use client';

import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ButtonProps {
    type?: 'login' | 'register';
    label?: string;
    w: string;
    borderRadius: string;
}

const FormButton: React.FC<ButtonProps> = ({ type, label, w, borderRadius }: ButtonProps) => {
    const router = useRouter();
    const handleClick = () => {
        type === 'login' ? router.push('/') : type === 'register' ? router.push('/login') : null;
    };

    return (
        <Button variant="primary" w={w} borderRadius={borderRadius} onClick={handleClick}>
            {label || (type === 'login' ? 'Login' : 'Register')}
        </Button>
    );
};

export default FormButton;
