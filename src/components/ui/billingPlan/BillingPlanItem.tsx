import React from "react";
import {
  Box,
  BoxProps,
  Chip,
  ChipProps,
  Stack,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";
import { FlexBox, FlexCentredBox, TextLight } from "../sharedStyledComponents";
import { FiberManualRecordOutlined } from "@mui/icons-material";
import { _clientUrl } from "@/constants";
import BtnOutline from "../BtnOutline";
import BtnContained from "../BtnContained";

interface IBillingPlanItemProps {
  title: "Basic" | "Standard" | "Enterprise";
  subTitle: string;
  monthPrice: number;
  monthPriceIfAnnuallyPlan?: number;
  yearPrice?: number;
  isAnnualyPlan: boolean;
  list: string[];
  isCurrentPlan?: boolean;
  isPopular?: boolean;
}

const ItemBox = styled(Box)<BoxProps>({
  position: "relative",
  padding: "3.6875rem 1.5rem 1.5rem",
  borderRadius: "6px",
  borderStyle: "solid",
  borderWidth: "1px",
});

const Price = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.primary.main,
  fontWeight: 600,
  lineHeight: 1.17,
  [`@media (min-width: 600px)`]: {
    fontSize: "2.5707rem",
  },
  [`@media (min-width: 900px)`]: {
    fontSize: "2.7849rem",
  },
  [`@media (min-width: 1200px)`]: {
    fontSize: "2.9991rem",
  },
}));

const StyledChip = styled(Chip)<ChipProps>(({ theme }) => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  backgroundColor: "rgba(145, 85, 253, 0.12)",
  color: theme.palette.primary.main,
  "& .MuiChip-label": {
    padding: "0 0.4375rem",
    fontWeight: 600,
    fontSize: "0.75rem",
  },
}));

const BillingPlanItem = ({
  title,
  subTitle,
  monthPrice,
  monthPriceIfAnnuallyPlan,
  yearPrice,
  isAnnualyPlan,
  list,
  isCurrentPlan = false,
  isPopular = false,
}: IBillingPlanItemProps) => {
  return (
    <ItemBox sx={{ borderColor: isPopular ? "primary.300" : "info.light" }}>
      {isPopular && <StyledChip label="Popular" size="small" />}
      <FlexCentredBox mb="1.25rem">
        <img
          src={`${_clientUrl}/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/pages/pricing-tree-${
            title === "Basic" ? "1" : title === "Standard" ? "2" : "3"
          }.png`}
          alt={`${title}-plan-img`}
        />
      </FlexCentredBox>
      <Box textAlign="center">
        <Typography variant="h5" fontWeight={500} mb="0.375rem">
          {title}
        </Typography>
        <TextLight variant="body2">{subTitle}</TextLight>
      </Box>

      <Box my="1.75rem" sx={{ position: "relative" }}>
        <FlexBox justifyContent="center">
          <TextLight
            variant="body2"
            fontWeight={600}
            alignSelf="flex-start"
            mt="0.4rem"
          >
            $
          </TextLight>
          <Price variant="h3">
            {isAnnualyPlan
              ? monthPriceIfAnnuallyPlan ?? monthPrice
              : monthPrice}
          </Price>
          <TextLight
            variant="body2"
            fontWeight={600}
            alignSelf="flex-end"
            mb="0.4rem"
          >
            /month
          </TextLight>
          {isAnnualyPlan && title !== "Basic" && (
            <TextLight
              variant="caption"
              component="span"
              sx={{
                position: "absolute",
                top: "50px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              USD {yearPrice}/year
            </TextLight>
          )}
        </FlexBox>
      </Box>
      <Box mb="1.25rem">
        <Stack component="ul" direction="column" gap="1rem">
          {list.map((item, i) => (
            <FlexBox key={i} component="li" gap="0.5rem" alignItems="center">
              <FiberManualRecordOutlined
                sx={{ color: "text.disabled", width: "15px", height: "15px" }}
              />
              <TextLight variant="body2">{item}</TextLight>
            </FlexBox>
          ))}
        </Stack>
      </Box>
      {isCurrentPlan ? (
        <BtnOutline
          sx={{
            color: "success.main",
            borderColor: "success.300",
            "&:hover": {
              borderColor: "success.main",
              backgroundColor: "success.light",
            },
          }}
          fullWidth
        >
          Your Current Plan
        </BtnOutline>
      ) : isPopular ? (
        <BtnContained fullWidth>Upgrade</BtnContained>
      ) : (
        <BtnOutline
          sx={{
            color: "primary.main",
            borderColor: "primary.300",
            "&:hover": {
              borderColor: "primary.main",
              backgroundColor: "primary.200",
            },
          }}
          fullWidth
        >
          Upgrade
        </BtnOutline>
      )}
    </ItemBox>
  );
};

export default BillingPlanItem;
