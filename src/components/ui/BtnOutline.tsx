import { Button, ButtonProps } from "@mui/material";

const BtnOutline = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="outlined"
      sx={{
        color: "rgb(138, 141, 147)",
        padding: "0.40625rem 1.3125rem",
        borderColor: "rgba(138, 141, 147, 0.5)",
        borderRadius: "5px",
        lineHeight: 1.71,
        "&:hover": {
          borderColor: "rgba(138, 141, 147)",
          backgroundColor: "transparent",
        },
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default BtnOutline;
