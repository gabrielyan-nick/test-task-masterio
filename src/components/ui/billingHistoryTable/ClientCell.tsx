import React from "react";
import { FlexBox, Text600, TextLight } from "../sharedStyledComponents";
import { Avatar } from "@mui/material";
import { stringAvatar } from "@/utils/avatar";
import { _clientUrl } from "@/constants";

interface IClientCellProps {
  name: string;
  email: string;
  avatar: string;
}

const ClientCell = ({ name, email, avatar }: IClientCellProps) => {
  return (
    <FlexBox alignItems="center" gap="0.3rem">
      <Avatar
        src={
          avatar &&
          `${_clientUrl}/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/${avatar}.png`
        }
        {...stringAvatar(name, 30)}
      />
      <div>
        <Text600 variant="body2">{name}</Text600>
        <TextLight variant="caption">{email}</TextLight>
      </div>
    </FlexBox>
  );
};

export default ClientCell;
