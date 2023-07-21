import { Avatar, Badge, styled } from "@mui/material";

interface IAvatar {
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  cursor: "pointer",
  "& .MuiBadge-badge": {
    backgroundColor: "rgb(86, 202, 0)",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));

const AvatarWithBadge = ({ handleClick }: IAvatar) => {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
      onClick={handleClick}
    >
      <Avatar
        alt="John Doe"
        src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png"
      />
    </StyledBadge>
  );
};

export default AvatarWithBadge;
