import { extendTheme } from '@chakra-ui/react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const cakraTheme = extendTheme({
    components: {
        Button: {
            variants: {
                primary: {
                    bg: 'primary.500',
                    color: 'white',
                    _hover: {
                        bg: 'primary.700',
                    },
                },
                defaultProps: {
                    variant: 'outline',
                },
            },
        },
    },
    colors: {
        base: {
            white: '#FFFFFF',
            black: '#212121',
        },
        neutral: {
            100: '#F6F7F9',
            300: '#E3E5E8',
            500: '#9CA3AF',
            700: '#5A6472',
            900: '#333E4D',
        },
        primary: {
            100: '#D7FFF4',
            300: '#02F2B2',
            500: '#02A57A',
            700: '#017959',
            900: '#01513B',
        },
        success: {
            100: '#DCFCE7',
            500: '#16A34A',
            900: '#166534',
        },
        warning: {
            100: '#FEF9C3',
            500: '#FACC15',
            900: '#CA8A04',
        },
        error: {
            100: '#FEE2E2',
            500: '#DC2626',
            900: '#991B1B',
        },
    },
    shadows: {
        small: '0px 1px 2px 0px #1F2937 8%',
        medium: '0px 2px 4px 0px #1F2937 8%',
        large: '0px 4px 8px 0px #1F2937 8%',
    },
    textStyles: {
        heading: {
            fontSize: '64px',
            fontWeight: 'bold',
            lineHeight: '56px',
            letterSpacing: '-0.5%',
        },
        heading1: {
            fontSize: '48px',
            fontWeight: 'bold',
            lineHeight: '56px',
            letterSpacing: '-0.5%',
        },
        heading2: {
            fontSize: '32px',
            fontWeight: 'bold',
            lineHeight: '40px',
            letterSpacing: '-0.5%',
        },
        heading3: {
            fontSize: '24px',
            fontWeight: 'bold',
            lineHeight: '28px',
            letterSpacing: '-0.25%',
        },
        heading4: {
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '24px',
            letterSpacing: '-0.25%',
        },
        heading5: {
            fontSize: '18px',
            fontWeight: 'bold',
            lineHeight: '20px',
            letterSpacing: '-0.15%',
        },
        label1: {
            fontSize: '14px',
            fontWeight: 'semibold',
            lineHeight: '20px',
            letterSpacing: '0%',
        },
        label2: {
            fontSize: '12px',
            fontWeight: 'semibold',
            lineHeight: '18px',
            letterSpacing: '0%',
        },
        label3: {
            fontSize: '10px',
            fontWeight: 'semibold',
            lineHeight: '16px',
            letterSpacing: '0%',
        },
        text1: {
            fontSize: '14px',
            fontWeight: 'regular',
            lineHeight: '20px',
            letterSpacing: '0%',
        },
        text2: {
            fontSize: '12px',
            fontWeight: 'regular',
            lineHeight: '18px',
            letterSpacing: '0%',
        },
        text3: {
            fontSize: '10px',
            fontWeight: 'regular',
            lineHeight: '10px',
            letterSpacing: '0%',
        },
        button1: {
            fontSize: '14px',
            fontWeight: 'semibold',
            lineHeight: '16px',
            letterSpacing: '3%',
        },
        button2: {
            fontSize: '12px',
            fontWeight: 'semibold',
            lineHeight: '14px',
            letterSpacing: '2%',
        },
    },
    fonts: {
        heading: inter.style.fontFamily,
        body: inter.style.fontFamily,
    },
});

export default cakraTheme;
