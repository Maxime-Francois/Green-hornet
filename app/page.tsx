import Banner from "./components/Banner";

import ContainerSlide from "./components/products/ContainerSlide";


export default function Home() {
  return (
    <div>
          <Banner/>
          <ContainerSlide category="fleur"/>
          <ContainerSlide category="résine"/>
          <ContainerSlide category="huile"/>
        
    </div>
  )
}
