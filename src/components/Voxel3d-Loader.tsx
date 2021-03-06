import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import React from 'react';
export const ObjectSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

/* eslint-disable react/display-name */
export const ObjectContainer = forwardRef(
  ({ children }: { children: JSX.Element | false }, ref) => (
    <Box
      ref={ref as React.LegacyRef<HTMLDivElement>}
      m="auto"
      mb={["-20px", "-60px", "-120px"]}
      mt={["-40px", "-140px", "-200px"]}
      minW="full"
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {children}
    </Box>
  )
);

const Loader = () => {
  return (
    <ObjectContainer>
      <ObjectSpinner />
    </ObjectContainer>
  );
};

export default Loader;
