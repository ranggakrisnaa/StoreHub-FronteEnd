'use client';

import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';

interface InputProps {
    placeholder: string;
    w?: string;
    size: string;
    borderRadius: string;
    typeInput: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const FormInput: React.FC<InputProps> = ({
    placeholder,
    w,
    size,
    borderRadius,
    typeInput,
    onChange,
    value,
}: InputProps) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <InputGroup>
            <Input
                placeholder={placeholder}
                w={w}
                size={size}
                borderRadius={borderRadius}
                type={typeInput === 'password' && show ? 'text' : typeInput}
                onChange={onChange}
                value={value}
            />
            {typeInput === 'password' && (
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            )}
        </InputGroup>
    );
};

export default FormInput;
