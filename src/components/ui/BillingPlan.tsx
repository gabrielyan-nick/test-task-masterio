import React, { useState } from "react";
import {
  ContentHeader,
  ContentWrapper,
  FlexBetweenBox,
  FlexBox,
  Text600,
  TextLight,
  WrapperBg,
} from "./sharedStyledComponents";
import {
  Alert,
  AlertTitle,
  Box,
  Chip,
  Grid,
  LinearProgress,
} from "@mui/material";
import BtnContained from "./BtnContained";
import BtnOutline from "./BtnOutline";
import BillingPlanModal from "./modals/BillingPlanModal/BillingPlanModal";
import ConfirmModal from "./modals/ConfirmModal";
import ModalTemplate from "./modals/ModalTemplate";
import {
  CheckCircleOutlineOutlined,
  HighlightOffOutlined,
} from "@mui/icons-material";

const BillingPlan = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isCancelSuccessModalOpen, setIsCancelSuccessModalOpen] =
    useState(false);
  const [isCancelDeniedModalOpen, setIsCancelDeniedModalOpen] = useState(false);

  // UPGRADE MODAL
  const handleUpgradeModalOpen = () => {
    setIsUpgradeModalOpen(true);
  };
  const handleUpgradeModalClose = () => {
    setIsUpgradeModalOpen(false);
  };

  // CANCEL MODAL
  const handleCancelModalOpen = () => {
    setIsCancelModalOpen(true);
  };
  const handleCancelModalClose = () => {
    setIsCancelModalOpen(false);
  };

  // CANCEL SUCCESS MODAL
  const handleCancelSuccessModalOpen = () => {
    setIsCancelSuccessModalOpen(true);
  };
  const handleCancelSuccessModalClose = () => {
    setIsCancelSuccessModalOpen(false);
  };

  // CANCEL DENIED MODAL
  const handleCancelDeniedModalOpen = () => {
    setIsCancelDeniedModalOpen(true);
  };
  const handleCancelDeniedModalClose = () => {
    setIsCancelDeniedModalOpen(false);
  };

  return (
    <>
      <WrapperBg>
        <ContentHeader title="Current Plan" />
        <ContentWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box mb="1.5rem">
                <Text600 mb="0.25rem">Your Current Plan is Basic</Text600>
                <TextLight>A simple start for everyone</TextLight>
              </Box>
              <Box mb="1.5rem">
                <Text600 mb="0.25rem">Active until Dec 09, 2021</Text600>
                <TextLight>
                  We will send you a notification upon Subscription expiration
                </TextLight>
              </Box>
              <Box>
                <FlexBox gap="0.5rem">
                  <Text600 mb="0.25rem">$199 Per Month</Text600>
                  <Chip
                    label="Popular"
                    size="small"
                    sx={{
                      backgroundColor: "primary.300",
                      color: "primary.main",
                    }}
                  />
                </FlexBox>
                <TextLight>
                  Standard plan for small to medium businesses
                </TextLight>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Alert
                severity="warning"
                onClose={() => {}}
                sx={{
                  marginBottom: "1.5rem",
                  backgroundColor: "warning.light",
                  "& .MuiAlert-message, .MuiAlert-icon, .MuiAlert-action": {
                    color: "warning.dark",
                  },
                }}
              >
                <AlertTitle>We need your attention!</AlertTitle>
                Your plan requires update
              </Alert>
              <div>
                <FlexBetweenBox>
                  <Text600 fontSize={14}>Days</Text600>
                  <Text600 fontSize={14}>24 of 30 Days</Text600>
                </FlexBetweenBox>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{
                    margin: "0.375rem 0",
                    height: "8px",
                    borderRadius: "36px",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: "36px",
                    },
                  }}
                />
              </div>
              <TextLight variant="caption">
                6 days remaining until your plan requires update
              </TextLight>
            </Grid>
            <Grid item xs={12}>
              <FlexBox gap="1rem" mt="0.75rem">
                <BtnContained onClick={handleUpgradeModalOpen}>
                  Upgrade Plan
                </BtnContained>
                <BtnOutline onClick={handleCancelModalOpen}>
                  Cancel Subscription
                </BtnOutline>
              </FlexBox>
            </Grid>
          </Grid>
        </ContentWrapper>
      </WrapperBg>

      <BillingPlanModal // UPGRADE MODAL
        open={isUpgradeModalOpen}
        onClose={handleUpgradeModalClose}
      />

      <ConfirmModal // CANCEL MODAL
        open={isCancelModalOpen}
        onClose={handleCancelModalClose}
        openSuccessModal={handleCancelSuccessModalOpen}
        openCancelModal={handleCancelDeniedModalOpen}
      />

      <ModalTemplate // CANCEL SUCCESS MODAL
        open={isCancelSuccessModalOpen}
        onClose={handleCancelSuccessModalClose}
        icon={
          <CheckCircleOutlineOutlined
            color="success"
            sx={{ fontSize: "5.5rem" }}
          />
        }
        title="Unsubscribed!"
        text="Your subscription cancelled successfully."
      />

      <ModalTemplate // CANCEL DENIED MODAL
        open={isCancelDeniedModalOpen}
        onClose={handleCancelDeniedModalClose}
        icon={
          <HighlightOffOutlined color="error" sx={{ fontSize: "5.5rem" }} />
        }
        title="Cancelled"
        text="Unsubscription Cancelled!!"
      />
    </>
  );
};

export default BillingPlan;
