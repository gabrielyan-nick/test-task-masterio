import React from "react";
import {
  ContentHeader,
  ContentWrapper,
  FlexBetweenBox,
  FlexBox,
  Text600,
  WrapperBg,
} from "./microComponents";
import { Avatar, Typography, styled } from "@mui/material";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import {
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  Timeline,
  TimelineProps,
} from "@mui/lab";
import { TButtonColors } from "@/types/theme.types";

const TimelineBox = styled(Timeline)<TimelineProps>(({ theme }) => ({
  padding: 0,
  [`& .${timelineItemClasses.root}:before`]: {
    flex: 0,
    padding: 0,
  },
  "& .MuiTimelineConnector-root": {
    backgroundColor: theme.palette.info.light,
  },
  "& .MuiTimelineContent-root": {
    marginBottom: "0.6875rem",
  },
}));

const ActivityTimeline = () => {
  return (
    <WrapperBg>
      <ContentHeader
        avatar={<TimelineOutlinedIcon />}
        title="Activity Timeline"
      />
      <ContentWrapper>
        <TimelineBox>
          <TimelineItemBox
            dotColor="error"
            dotShadowColor="255, 76, 81, 0.12"
            date="Wednesday"
            itemImg="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/icons/file-icons/pdf.png"
            itemText="invoice.pdf"
            title="8 Invoices have been paid"
          />

          <TimelineItemBox
            dotColor="success"
            dotShadowColor="145, 85, 253, 0.12"
            date="April, 18"
            itemImg="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png"
            itemImgType="avatar"
            itemText="John Doe (Client)"
            title="Create a new project for client 😎"
          />

          <TimelineItemBox
            dotColor="info"
            dotShadowColor="22, 177, 255, 0.12"
            date="January, 10"
            title="Order #37745 from September"
          />

          <TimelineItemBox
            dotColor="warning"
            dotShadowColor="255, 180, 0, 0.12"
            date="September, 30"
            title="Public Meeting"
            isLast
          />
        </TimelineBox>
      </ContentWrapper>
    </WrapperBg>
  );
};

interface ITimelineItemBoxProps {
  dotColor: TButtonColors;
  dotShadowColor: string;
  title: string;
  itemImg?: string;
  itemImgType?: "avatar" | "img";
  itemText?: string;
  date: string;
  isLast?: boolean;
}

const TimelineItemBox = ({
  dotColor,
  dotShadowColor,
  itemImg,
  itemText,
  title,
  date,
  itemImgType = "img",
  isLast = false,
}: ITimelineItemBoxProps) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={dotColor}
          sx={{ boxShadow: `rgba(${dotShadowColor}) 0px 0px 0px 3px` }}
        />
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <FlexBetweenBox sx={{ marginBottom: "0.625rem" }}>
          <Text600>{title}</Text600>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {date}
          </Typography>
        </FlexBetweenBox>
        {!isLast && (
          <Typography
            variant="body2"
            sx={{ marginBottom: "0.625rem", color: "text.disabled" }}
          >
            Invoices have been paid to the company.
          </Typography>
        )}
        {itemImg && (
          <FlexBox sx={{ alignItems: "center" }}>
            {itemImgType === "avatar" ? (
              <Avatar src={itemImg} sx={{ width: "24px", height: "24px" }} />
            ) : (
              <img width={24} height={24} src={itemImg} alt={itemText} />
            )}
            <Text600
              variant="subtitle2"
              sx={{ color: "text.disabled", marginLeft: "0.625rem" }}
            >
              {itemText}
            </Text600>
          </FlexBox>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

export default ActivityTimeline;
