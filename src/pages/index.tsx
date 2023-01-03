import { styled } from "../styles";
import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/Home";
import Camisea1 from "../assets/Camisetas/Camiseta1.png"
import Camisea2 from "../assets/Camisetas/Camiseta2.png"

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Product>
          <Image src={Camisea1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
        </Product>
        <Product>
          <Image src={Camisea2} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
        </Product>
      </HomeContainer>
    </>
  );
}
