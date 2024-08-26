import InputGroup from '@/components/common/InputGroup';
import AuthLayout from '@/components/layout/AuthLayout';
import FormButton from '@/components/ui/FormButton';
import FormInput from '@/components/ui/FormInput';
import { Box } from '@chakra-ui/react';

export default function Page() {
    return (
        <>
            <Box bg="neutral.100" h="auto" display="flex" justifyContent="center">
                <Box margin="106px 451px">
                    <AuthLayout
                        mainText="Welcome to StoreHub"
                        textStyle1="heading3"
                        textStyle2="heading"
                        subText="Log In"
                        type="login"
                    >
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Enter your username or email address"
                                placeholder="Username or Email"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Enter your Password"
                                placeholder="Password"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                            />
                        </Box>
                        <FormButton w="475px" borderRadius="10px" type="login" />
                    </AuthLayout>
                </Box>
            </Box>
        </>
    );
}
