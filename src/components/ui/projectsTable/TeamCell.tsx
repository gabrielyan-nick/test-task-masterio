import { Avatar, AvatarGroup } from "@mui/material";

const TeamCell = ({ avatars }: { avatars: string[] }) => {
  return (
    <AvatarGroup>
      {avatars.map((item, i) => (
        <Avatar
          key={i}
          src={`https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/${item}.png`}
          sx={{
            width: "26px",
            height: "26px",
            transition: "transform .3s",
            cursor: "pointer",
            borderColor: "secondary.light",
            "&:hover": {
              transform: "translateY(-5px)",
              zIndex: 10,
            },
          }}
        />
      ))}
    </AvatarGroup>
  );
};

export default TeamCell;
