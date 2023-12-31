"use client";

import {
  Main,
  StyledTab,
  Wrapper,
} from "@/components/ui/sharedStyledComponents";
import { Tabs } from "@mui/material";
import React, { useState } from "react";
import { PersonOutline, BookmarkBorderOutlined } from "@mui/icons-material";
import AccountForm from "@/components/ui/AccountForm";
import DeleteAccountForm from "@/components/ui/DeleteAccountForm";
import BillingPlan from "@/components/ui/billingPlan/BillingPlan";
import PaymentMethod from "@/components/ui/paymentMethod/PaymentMethod";
import BillingAdressForm from "@/components/ui/BillingAdressForm";
import BillingHistoryTable from "@/components/ui/billingHistoryTable/BillingHistoryTable";

export default function SettingsPage() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (e: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <Main>
      <Wrapper>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="settings-tabs"
          sx={{
            marginBottom: "1.5rem",
            minHeight: "40px",
            "& .MuiTabs-indicator": { display: "none" },
          }}
        >
          <StyledTab
            label="Account"
            icon={<PersonOutline />}
            iconPosition="start"
          />
          <StyledTab
            label="Billing"
            icon={<BookmarkBorderOutlined />}
            iconPosition="start"
          />
        </Tabs>

        {tabIndex === 0 && (
          <>
            <AccountForm />
            <DeleteAccountForm />
          </>
        )}

        {tabIndex === 1 && (
          <>
            <BillingPlan />
            <PaymentMethod />
            <BillingAdressForm />
            <BillingHistoryTable />
          </>
        )}
      </Wrapper>
    </Main>
  );
}
