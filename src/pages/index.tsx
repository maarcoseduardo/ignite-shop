import { GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";

import { useKeenSlider } from "keen-slider/react";

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import Link from "next/link";
import { CartButton } from "../components/CartButton";
import { IProduct, useCart } from "../context/cartContext";
import { MouseEvent } from "react";

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const { addToCart, checkIfItemAlreaddyExists } = useCart();

  function handleAddToCart(
    event: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    event.preventDefault();
    addToCart(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <CartButton
                  color="green"
                  size="large"
                  disabled={checkIfItemAlreaddyExists(product.id)}
                  onClick={(event) => handleAddToCart(event, product)}
                />
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0]!,
      price: new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
      numberPrice: price.unit_amount! / 100,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2 hours
  };
};
