'use client';

import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ButtonProps {
    type?: 'login' | 'register';
    label?: string;
    w: string;
    borderRadius: string;
    typeButton: 'button' | 'submit' | 'reset';
}

const FormButton: React.FC<ButtonProps> = ({ type, label, w, borderRadius, typeButton }: ButtonProps) => {
    const router = useRouter();
    // const handleClick = () => {
    //     type === 'login' ? router.push('/') : type === 'register' ? router.push('/login') : null;
    // };

    return (
        <Button variant="primary" w={w} borderRadius={borderRadius} type={typeButton}>
            {label || (type === 'login' ? 'Login' : 'Register')}
        </Button>
    );
};

export default FormButton;
