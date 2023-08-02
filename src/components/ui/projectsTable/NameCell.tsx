import { Avatar, Typography } from "@mui/material";
import { FlexBox } from "../sharedStyledComponents";
import { stringAvatar } from "@/utils/avatar";

interface INameCellProps {
  avatar?: string;
  title: string;
  date: string;
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
