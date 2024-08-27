'use client';

import { Box, FormControl, FormLabel } from '@chakra-ui/react';
import FormInput from '../ui/FormInput';

interface InputGroupProps {
    formLabel: string;
    placeholder: string;
    w?: string;
    size: string;
    borderRadius: string;
    typeInput: string;
}

const InputGroup = ({ formLabel, placeholder, w, size, borderRadius, typeInput }: InputGroupProps) => {
    return (
        <FormControl>
            <Box textStyle="label1" mb="4px">
                {formLabel}
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" gap="10px">
                {formLabel == 'Phone Number' ? (
                    <Box
                        padding="8px"
                        fontWeight="bold"
                        border="2px solid"
                        fontSize="14px"
                        borderRadius="8px"
                        borderColor="primary.500"
                        bgColor="primary.100"
                    >
                        +62
                    </Box>
                ) : (
                    ''
                )}
                <FormInput
                    placeholder={placeholder}
                    w={w}
                    size={size}
                    borderRadius={borderRadius}
                    typeInput={typeInput}
                />
            </Box>
        </FormControl>
    );
};

export default InputGroup;
