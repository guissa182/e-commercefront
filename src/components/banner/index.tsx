/* Controla as rotas em que cada compenente será renderizado */
import React from "react";
import naruto1 from "../../assets/naruto1.jpg"
import naruto2 from "../../assets/naruto2.jpg"
import naruto3 from "../../assets/naruto3.jpg"
import { Container } from "./style";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Banner: React.FC = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop:true,
  },
  [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ]
  )
  return (  
    <Container ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src={naruto1} alt="Imagem foda do narutinho"/>
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src={naruto2} alt="Imagem foda do narutinho"/>
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src={naruto3} alt="Imagem foda do narutinho"/>
      </div>
    </Container>
  );
};

export default Banner;
