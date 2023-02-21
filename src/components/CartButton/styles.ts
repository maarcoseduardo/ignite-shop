import { styled } from "../../styles";

export const CartButtonContainer = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: 6,
  position: "relative",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  backgroundColor: "$gray800",
  color: "$gray500",

  width: "3rem",
  height: "3rem",

  variants: {
    color: {
      gray: {
        background: "$gray800",
        color: "gray500",
      },
      green: {
        background: "$green500",
        color: "$white",

        "&:not(:disabled):hover": {
          backgroundColor: "$green300",
        },
      },
    },
    size: {
      medium: {
        width: "3rem",
        height: "3rem",

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: "3.5rem",
        height: "3.5rem",

        svg: {
          fontSize: 32,
        },
      },
    },
  },

  defaultVariants: {
    color: "gray",
    size: "medium",
  },
});
