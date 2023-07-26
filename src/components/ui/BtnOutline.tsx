import { Button, ButtonProps } from "@mui/material";

const BtnOutline = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="outlined"
      color="inherit"
      sx={{
        color: "rgb(138, 141, 147)",
        padding: "0.40625rem 1.3125rem",
        borderColor: "rgba(138, 141, 147, 0.5)",
        "&:hover": {
          borderColor: "rgba(138, 141, 147)",
        },
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default BtnOutline;
