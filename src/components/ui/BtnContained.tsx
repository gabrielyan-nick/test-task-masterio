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
        padding: "0.46875rem 1.375rem",
        "&:hover": { backgroundColor: "secondary.dark" },
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default BtnContained;
