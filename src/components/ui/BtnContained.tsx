import { Button, ButtonProps } from "@mui/material";

interface IBtnContainedProps extends ButtonProps {
  htmlFor?: string;
}

const BtnContained = ({ children, ...props }: IBtnContainedProps) => {
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        borderRadius: "5px",
        lineHeight: 1.71,
        padding: "0.46875rem 1.375rem",
        "&:hover": {
          backgroundColor: "secondary.dark",
          boxShadow: "rgba(58, 53, 65, 0.56) 0px 6px 18px -8px",
        },
        boxShadow: "rgba(58, 53, 65, 0.42) 0px 4px 8px -4px",
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default BtnContained;
