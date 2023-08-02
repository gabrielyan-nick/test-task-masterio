import React, { ReactNode } from "react";
import {
  ArrowDownwardOutlined,
  SaveOutlined,
  CheckOutlined,
  DonutSmall,
  ErrorOutlineOutlined,
  Send,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import { FlexBox, Text600 } from "../sharedStyledComponents";

interface IStatusCellProps {
  status: string;
  balance: string;
  date: string;
}

const icons: { [key: string]: { icon: ReactNode; color: string } } = {
  Downloaded: { icon: <ArrowDownwardOutlined />, color: "info" },
  Draft: { icon: <SaveOutlined />, color: "primary" },
  Paid: { icon: <CheckOutlined />, color: "success" },
  "Partial Payment": { icon: <DonutSmall />, color: "warning" },
  "Past Due": { icon: <ErrorOutlineOutlined />, color: "error" },
  Sent: { icon: <Send />, color: "secondary" },
};

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.grey[200],
    borderRadius: "6px",
  },
}));

const StatusCell = ({ status, balance, date }: IStatusCellProps) => {
  return (
    <StyledTooltip
      title={
        <Box>
          <Text600 variant="caption">{status}</Text600>
          <FlexBox>
            <Text600 variant="caption">Balance:&nbsp;</Text600>
            <Typography variant="caption">{balance}</Typography>
          </FlexBox>
          <FlexBox>
            <Text600 variant="caption">Due Date:&nbsp;</Text600>
            <Typography variant="caption">{date}</Typography>
          </FlexBox>
        </Box>
      }
    >
      <Avatar
        sx={{
          width: "30px",
          height: "30px",
          bgcolor: `${icons[status].color}.100`,
          "& svg": {
            width: "16px",
            height: "16px",
            color: `${icons[status].color}.main`,
          },
        }}
      >
        {icons[status].icon}
      </Avatar>
    </StyledTooltip>
  );
};

export default StatusCell;
