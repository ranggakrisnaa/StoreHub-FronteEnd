'use client';

import cakraTheme from '@/theme/cakraTheme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={cakraTheme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
