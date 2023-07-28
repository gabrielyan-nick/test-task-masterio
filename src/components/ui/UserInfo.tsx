import { IData, IPropValIcon } from "@/types/data.types";
import React from "react";
import {
  ContentWrapper,
  FlexBox,
  SectionTitle,
  Text600,
  WrapperBg,
} from "./sharedStyledComponents";
import { Box, CardContent, Typography, styled } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

interface IUserInfoProps {
  about: IPropValIcon[] | undefined;
  contacts: IPropValIcon[] | undefined;
  teams: IPropValIcon[] | undefined;
  overview: IPropValIcon[] | undefined;
}

const DataBox = styled(Box)({
  marginBottom: "1.5rem",
  "&:last-child": {
    marginBottom: 0,
  },
});

const ItemBox = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
  display: "flex",
  color: theme.palette.text.disabled,
  "&:last-child": {
    marginBottom: 0,
  },
}));

const ItemTextBox = styled(FlexBox)({
  marginLeft: "0.5rem",
  gap: "0.5rem",
});

const iconsData: { [key: string]: React.JSX.Element } = {
  "mdi:account-outline": <PermIdentityOutlinedIcon />,
  "mdi:check": <CheckOutlinedIcon />,
  "mdi:star-outline": <StarBorderOutlinedIcon />,
  "mdi:flag-outline": <FlagOutlinedIcon />,
  "mdi:translate": <TranslateOutlinedIcon />,
  "mdi:phone-outline": <LocalPhoneOutlinedIcon />,
  "mdi:message-outline": <ChatBubbleOutlineOutlinedIcon />,
  "mdi:email-outline": <EmailOutlinedIcon />,
  "mdi:view-grid-plus-outline": <GridViewOutlinedIcon />,
};

const UserInfo = ({ about, contacts, teams, overview }: IUserInfoProps) => {
  return (
    <>
      <WrapperBg>
        <ContentWrapper>
          <DataBox>
            <DataBlock dataArr={about} title="about" />
          </DataBox>
          <DataBox>
            <DataBlock dataArr={contacts} title="contacts" />
          </DataBox>
          <DataBox>
            <DataBlock dataArr={teams} title="teams" />
          </DataBox>
        </ContentWrapper>
      </WrapperBg>

      <WrapperBg sx={{ marginTop: "1.5rem" }}>
        <ContentWrapper>
          <DataBlock dataArr={overview} title="overview" />
        </ContentWrapper>
      </WrapperBg>
    </>
  );
};

interface IDataBlockProps {
  dataArr: IPropValIcon[] | undefined;
  title: string;
}

const DataBlock = ({ dataArr, title }: IDataBlockProps) => {
  return (
    <>
      <SectionTitle variant="caption">{title}</SectionTitle>
      {dataArr?.map((item, i) => (
        <ItemBox key={`${title}-${i}`}>
          {iconsData[item.icon]}
          <ItemTextBox>
            <Text600>{`${item.property}:`}</Text600>
            <Typography>{item.value}</Typography>
          </ItemTextBox>
        </ItemBox>
      ))}
    </>
  );
};

export default UserInfo;
