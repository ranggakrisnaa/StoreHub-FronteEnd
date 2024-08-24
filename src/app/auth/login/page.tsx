import { Box, Button, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Box bg="#A4A4A4" h="100vh">
        <Heading>Hello, Login Page!</Heading>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </Box>
    </>
  );
}
