import React from "react";
import {
  ContentWrapper,
  WrapperBg,
  FlexBox,
  FlexBetweenBox,
  Text600,
  FlexCentredBox,
} from "./microComponents";
import {
  Avatar,
  Box,
  Chip,
  ChipProps,
  Typography,
  styled,
} from "@mui/material";
import SectionHeaderWithMenu from "./SectionHeaderWithMenu";
import { _clientUrl } from "@/constants";
import { TChipColors } from "@/types/theme.types";

interface ITeamsListProps {
  avatar: string;
  members: number;
  title: string;
  ChipColor: TChipColors;
  chipText: string;
}

const chipColorsMap: { [key: string]: string } = {
  success: "145, 85, 253",
  primary: "145, 85, 253",
  secondary: "138, 141, 147",
  error: "255, 76, 81",
  info: "22, 177, 255",
  warning: "255, 180, 0",
};

const StyledChip = styled(Chip)<ChipProps>(({ color }) => ({
  color: `rgb(${chipColorsMap[color as string]})`,
  backgroundColor: `rgb(${chipColorsMap[color as string]}, 0.12)`,
  cursor: "pointer",
}));

const TeamsList = ({ data }: { data: ITeamsListProps[] | undefined }) => {
  return (
    <WrapperBg>
      <SectionHeaderWithMenu title="Teams" />

      <ContentWrapper>
        {data?.map((item, i) => (
          <FlexBetweenBox key={i} sx={{ marginBottom: "1rem" }}>
            <FlexBox sx={{ alignItems: "center" }}>
              <Avatar
                src={`${_clientUrl}${item.avatar}`}
                sx={{ width: "38px", height: "38px", marginRight: "0.875rem" }}
              />
              <div>
                <Text600 sx={{ fontSize: "0.875rem" }}>{item.title}</Text600>
                <Typography variant="caption" sx={{ color: "text.disabled" }}>
                  {item.members} Members
                </Typography>
              </div>
            </FlexBox>
            <Box component="a" href="/" sx={{ alignSelf: "flex-start" }}>
              <StyledChip
                color={item.ChipColor}
                label={item.chipText}
                size="small"
              />
            </Box>
          </FlexBetweenBox>
        ))}
        <FlexCentredBox sx={{ marginTop: "0.875rem" }}>
          <Typography
            component="a"
            href="/"
            sx={{ textDecoration: "none", color: "primary.main" }}
          >
            View all teams
          </Typography>
        </FlexCentredBox>
      </ContentWrapper>
    </WrapperBg>
  );
};

export default TeamsList;
