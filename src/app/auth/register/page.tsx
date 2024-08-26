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
                        subText="Register"
                        type="register"
                    >
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Email address"
                                placeholder="Email"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <Box display="flex" w="475px" gap="15px">
                                <InputGroup formLabel="Username" placeholder="Username" size="md" borderRadius="8px" />
                                <InputGroup formLabel="Name" placeholder="Name" size="md" borderRadius="8px" />
                            </Box>
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Phone Number"
                                placeholder="+628123456"
                                size="md"
                                w="full"
                                borderRadius="8px"
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Password"
                                placeholder="password"
                                size="md"
                                w="475px"
                                borderRadius="8px"
                            />
                        </Box>
                        <Box paddingBottom="32px">
                            <InputGroup
                                formLabel="Confirm Password"
                                placeholder="password"
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
