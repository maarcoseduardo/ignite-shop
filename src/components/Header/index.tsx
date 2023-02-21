import { HeaderContainer } from "./styles";
import logoImg from "../../assets/logo.svg";
import Link from "next/link";
import { Cart } from "../Cart";
import { useCart } from "../../context/cartContext";

export function Header() {
  const { cartItems } = useCart();
  return (
    <HeaderContainer>
      <Link href="/">
        <img src={logoImg.src} alt="" />
      </Link>
      <Cart />
      <div>{cartItems.length}</div>
    </HeaderContainer>
  );
}
