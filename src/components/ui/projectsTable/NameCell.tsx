import { Avatar, Typography } from "@mui/material";
import { FlexBox } from "../microComponents";

interface INameCellProps {
  avatar?: string;
  title: string;
  date: string;
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: `${stringToColor(name)}1f`,
      color: stringToColor(name),
      width: "35px",
      height: "35px",
      marginRight: "0.5rem",
      fontSize: "0.875rem",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const NameCell = ({ avatar, title, date }: INameCellProps) => {
  return (
    <FlexBox sx={{ alignItems: "center" }}>
      <Avatar
        src={
          avatar &&
          `https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/project-icons/${avatar}.png`
        }
        {...stringAvatar(title)}
      />
      <div>
        <Typography
          sx={{ fontSize: "1rem", fontWeight: 700, color: "text.disabled" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "0.875rem", color: "text.secondary" }}
        >
          {date}
        </Typography>
      </div>
    </FlexBox>
  );
};

export default NameCell;
