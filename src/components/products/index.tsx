import React from "react";
import Carousel from "react-multi-carousel";
import joia1 from "../../assets/img1.jpg"
import joia2 from "../../assets/img2.jpg"
import joia3 from "../../assets/img3.jpg"
import joia4 from "../../assets/img4.jpg"
import joia5 from "../../assets/img5.jpg"
import joia6 from "../../assets/img6.jpg"
import { Container, Title, SubTitle, ContainerSlide } from "./style";
import "react-multi-carousel/lib/styles.css";

const Products: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Container>
      <Title variant="h3">Produtos</Title>
      <SubTitle variant="h5">Teste</SubTitle>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <ContainerSlide>
          <img src={joia1} alt="" />  
        </ContainerSlide>
        <ContainerSlide>
          <img src={joia2} alt="" />  
        </ContainerSlide>
        <ContainerSlide>
          <img src={joia3} alt="" />  
        </ContainerSlide>
        <ContainerSlide>
          <img src={joia4} alt="" />  
        </ContainerSlide>
        <ContainerSlide>
          <img src={joia5} alt="" />  
        </ContainerSlide>
        <ContainerSlide>
          <img src={joia6} alt="" />  
        </ContainerSlide>
      </Carousel>
    </Container>
  );
};

export default Products;
