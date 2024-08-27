'use client';

import { Input } from '@chakra-ui/react';
import React from 'react';

interface InputProps {
    placeholder: string;
    w?: string;
    size: string;
    borderRadius: string;
    typeInput: string;
}

const FormInput: React.FC<InputProps> = ({ placeholder, w, size, borderRadius, typeInput }: InputProps) => {
    return <Input placeholder={placeholder} w={w} size={size} borderRadius={borderRadius} type={typeInput} />;
};

export default FormInput;
