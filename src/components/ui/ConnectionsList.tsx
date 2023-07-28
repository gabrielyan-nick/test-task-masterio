import React from "react";
import {
  ContentWrapper,
  WrapperBg,
  FlexBox,
  FlexBetweenBox,
  Text600,
  FlexCentredBox,
} from "./sharedStyledComponents";
import {
  Avatar,
  Button,
  ButtonBaseProps,
  Typography,
  styled,
} from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SectionHeaderWithMenu from "./SectionHeaderWithMenu";
import { _clientUrl } from "@/constants";

interface IConnectionsListProps {
  avatar: string;
  connections: string;
  name: string;
  isFriend: boolean;
}

const ToggleFriendBtn = styled(Button)<ButtonBaseProps>({
  padding: "0.375rem",
  borderRadius: "5px",
  border: "1px solid rgba(145, 85, 253, 0.5)",
  minWidth: "38px",
});

const ConnectionsList = ({
  data,
}: {
  data: IConnectionsListProps[] | undefined;
}) => {
  return (
    <WrapperBg>
      <SectionHeaderWithMenu title="Connections" />

      <ContentWrapper>
        {data?.map((item, i) => (
          <FlexBetweenBox key={i} sx={{ marginBottom: "1rem" }}>
            <FlexBox sx={{ alignItems: "center" }}>
              <Avatar
                src={`${_clientUrl}${item.avatar}`}
                sx={{ width: "38px", height: "38px", marginRight: "0.875rem" }}
              />
              <div>
                <Text600 sx={{ fontSize: "0.875rem" }}>{item.name}</Text600>
                <Typography variant="caption" sx={{ color: "text.disabled" }}>
                  {item.connections} Connections
                </Typography>
              </div>
            </FlexBox>
            <ToggleFriendBtn variant={item.isFriend ? "contained" : "outlined"}>
              <PermIdentityOutlinedIcon
                color={item.isFriend ? "inherit" : "success"}
              />
            </ToggleFriendBtn>
          </FlexBetweenBox>
        ))}
        <FlexCentredBox sx={{ marginTop: "0.875rem" }}>
          <Typography
            component="a"
            href="/"
            sx={{ textDecoration: "none", color: "primary.main" }}
          >
            View all connections
          </Typography>
        </FlexCentredBox>
      </ContentWrapper>
    </WrapperBg>
  );
};

export default ConnectionsList;
