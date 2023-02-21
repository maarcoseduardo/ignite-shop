import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  button: {
    marginLeft: "auto",
  },

  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 22,
    height: 22,
    background: "$green300",
    position: "absolute",
    top: 20,
    right: -2,
    borderRadius: "50%",
  },
});
