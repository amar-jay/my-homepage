import { Box } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Abdel-manan Abdel-rahman. All Rights
      Reserved.
    </Box>
  );
};

export default Footer;
