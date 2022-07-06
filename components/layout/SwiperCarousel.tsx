import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { get_random_color } from "../../libs/generateRandomColor";
import NextLink from "next/link";
import "swiper/css";
import "swiper/css/bundle";
import { ReactNode } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from "swiper";
import { Box, Button, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const DummyContainer: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Flex
      width={"100%"}
      height={"20rem"}
      bgColor={get_random_color()}
      zIndex={"hide"}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
      //   textAlign={"center"}
      fontSize={"6xl"}
    >
      {children}
    </Flex>
  );
};
const SwiperComp: React.FC<{ slides: ReactNode[] }> = ({ slides }) => {
  return (
    <Swiper
      style={{ zIndex: 0 }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
      spaceBetween={100}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      keyboard={{ enabled: true }}
      slidesPerView={1}
      onSlideChange={() => console.log("slideChange: ")}
      onSwiper={(swiper) => console.log("Swiper: ", swiper)}
      onReachEnd={() => {}}
    >
      {"PHOTOGRAPHY".split("").map((letter, i) => (
        <SwiperSlide key={i}>
          <DummyContainer>{letter}</DummyContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComp;
