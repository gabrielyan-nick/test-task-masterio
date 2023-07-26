import React from "react";
import {
  Button,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import {
  FlexCentredBox,
  FlexBox,
  TextPrimary,
  WrapperBg,
} from "./microComponents";
import {
  InvertColorsOutlined,
  RoomOutlined,
  CalendarToday,
  PersonAddAltOutlined,
} from "@mui/icons-material";

const ProfileImg = styled("img")({
  width: "120px",
  height: "120px",
  borderRadius: "6px",
  border: "5px solid rgb(255, 255, 255)",
});

const ContentWrapper = styled(CardContent)({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "0rem 1.25rem 1.25rem",
  marginTop: "-2rem",
  gap: "1rem",
  "@media (min-width: 900px)": {
    gap: 0,
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  },
  "&:last-child": {
    paddingBottom: "1.25rem",
  },
});

const ContentInner = styled(FlexBox)({
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "flex-end",
  width: "100%",
  "@media (min-width: 600px)": {
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
  "@media (min-width: 900px)": {
    marginLeft: "1.5rem",
  },
});

const ContentBox = styled(FlexBox)({
  flexDirection: "column",
  marginBottom: "1.5rem",
  alignItems: "center",
  "@media (min-width: 600px)": {
    marginBottom: "0rem",
    alignItems: "flex-start",
  },
});

const UserName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: "0px 0px 1rem",
  fontWeight: 500,
  letterSpacing: "0px",
  lineHeight: "1.334",
  fontSize: "1.25rem",
  "@media (min-width: 600px)": {
    fontSize: "1.3118rem",
  },
  "@media (min-width: 900px)": {
    fontSize: "1.4993rem",
  },
}));

const ItemsWrapper = styled(FlexBox)({
  justifyContent: "center",
  flexWrap: "wrap",
  "& div:not(:last-child)": {
    marginRight: "1.25rem",
  },
  "@media (min-width: 600px)": {
    justifyContent: "flex-start",
  },
});

const UserCard = () => {
  const iconStyle = {
    color: "text.disabled",
    marginRight: "0.5rem",
  };

  return (
    <WrapperBg>
      <CardMedia
        component="img"
        height="150"
        image="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/pages/profile-banner.png"
        alt="profile-header"
        sx={{
          "@media (min-width: 900px)": {
            height: "250px",
          },
        }}
      />
      <ContentWrapper>
        <ProfileImg
          src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png"
          alt="profile-picture"
        />
        <ContentInner>
          <ContentBox>
            <UserName variant="h5">John Doe</UserName>
            <ItemsWrapper>
              <FlexCentredBox>
                <InvertColorsOutlined sx={iconStyle} />
                <TextPrimary>UX Designer</TextPrimary>
              </FlexCentredBox>
              <FlexCentredBox>
                <RoomOutlined sx={iconStyle} />
                <TextPrimary>Vatican City</TextPrimary>
              </FlexCentredBox>
              <FlexCentredBox>
                <CalendarToday sx={iconStyle} />
                <TextPrimary>Joined April 2021</TextPrimary>
              </FlexCentredBox>
            </ItemsWrapper>
          </ContentBox>
          <Button
            variant="contained"
            sx={{ "&:hover": { backgroundColor: "secondary.dark" } }}
          >
            <PersonAddAltOutlined
              fontSize="small"
              sx={{ marginRight: "8px" }}
            />
            Connected
          </Button>
        </ContentInner>
      </ContentWrapper>
    </WrapperBg>
  );
};

export default UserCard;
