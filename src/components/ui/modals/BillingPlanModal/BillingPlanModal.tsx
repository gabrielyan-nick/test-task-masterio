import {
  Box,
  DialogContent,
  FormLabel,
  FormLabelProps,
  Grid,
  IconButton,
  Switch,
  Typography,
  styled,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import {
  FlexCentredBox,
  StyledDialog,
  TextLight,
} from "../../sharedStyledComponents";
import { IModalProps } from "../modal.types";
import React, { SyntheticEvent, useState } from "react";
import BillingPlanItem from "./BillingPlanItem";

const SwitchLabel = styled(FormLabel)<FormLabelProps>(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontSize: "0.875rem",
  fontWeight: 600,
}));

const BillingPlanModal = ({ open, onClose }: IModalProps) => {
  const [isAnnualyPlan, setIsAnnualyPlan] = useState(true);

  const handleSwitchChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setIsAnnualyPlan(checked);
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      scroll="body"
    >
      <DialogContent
        sx={{ position: "relative", padding: "3.125rem 3.75rem !important" }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: "1rem",
            top: "1rem",
            padding: "5px",
          }}
        >
          <Close />
        </IconButton>

        <Box mb="1rem" sx={{ textAlign: "center" }}>
          <Typography variant="h5" fontWeight={500} mb="0.75rem">
            Find the right plan for your site
          </Typography>
          <TextLight variant="body2">
            Get started with us - it's perfect for individuals and teams. Choose
            a subscription plan that meets your needs.
          </TextLight>
        </Box>

        <FlexCentredBox mb="1rem">
          <SwitchLabel htmlFor="billing-plan">Monthly</SwitchLabel>
          <Switch
            checked={isAnnualyPlan}
            onChange={handleSwitchChange}
            id="billing-plan"
          />
          <SwitchLabel htmlFor="billing-plan">Annually</SwitchLabel>
        </FlexCentredBox>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <BillingPlanItem
              title="Basic"
              subTitle="A simple start for everyone"
              monthPrice={0}
              isCurrentPlan
              isAnnualyPlan={isAnnualyPlan}
              list={[
                "100 responses a month",
                "Unlimited forms and surveys",
                "Unlimited fields",
                "Basic form creation tools",
                "Up to 2 subdomains",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <BillingPlanItem
              title="Standard"
              subTitle="For small to medium businesses"
              monthPrice={49}
              monthPriceIfAnnuallyPlan={40}
              yearPrice={480}
              isPopular
              isAnnualyPlan={isAnnualyPlan}
              list={[
                "Unlimited responses",
                "Unlimited forms and surveys",
                "Instagram profile page",
                "Google Docs integration",
                "Custom “Thank you” page",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <BillingPlanItem
              title="Enterprise"
              subTitle="Solution for big organizations"
              monthPrice={99}
              monthPriceIfAnnuallyPlan={80}
              yearPrice={960}
              isAnnualyPlan={isAnnualyPlan}
              list={[
                "PayPal payments",
                "Logic Jumps",
                "File upload with 5GB storage",
                "Custom domain support",
                "Stripe integration",
              ]}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </StyledDialog>
  );
};

export default BillingPlanModal;
