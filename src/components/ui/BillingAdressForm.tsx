import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CircularProgress, Grid, InputAdornment } from "@mui/material";
import {
  ContentHeader,
  ContentWrapper,
  Text600,
  WrapperBg,
} from "./sharedStyledComponents";
import { usePostDataMutation } from "@/api/dataApi";
import TextInput from "./formInputs/TextInput";
import SelectInput from "./formInputs/SelectInput";
import BtnContained from "./BtnContained";
import BtnOutline from "./BtnOutline";
import { country } from "@/data/selectData";

export interface IBillingAdressInput {
  companyName: string;
  email: string;
  taxId: string;
  vat: string;
  phoneNumber?: string;
  country: string;
  address: string;
  state?: string;
  zipCode?: string;
}

const defaultValues = {
  companyName: "",
  email: "",
  taxId: "",
  vat: "",
  phoneNumber: "",
  country: "Australia",
  address: "",
  state: "",
  zipCode: "",
};

const BillingAdressForm = () => {
  const [submit, { isLoading, isSuccess }] = usePostDataMutation();
  const { handleSubmit, reset, control } = useForm<IBillingAdressInput>({
    defaultValues: defaultValues,
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit: SubmitHandler<IBillingAdressInput> = (data) => {
    submit(data);
  };

  useEffect(() => {
    if (isSuccess) {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSuccess]);

  return (
    <WrapperBg sx={{ marginTop: "1.5rem" }}>
      <ContentHeader title="Billing Address" />
      <ContentWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Company Name"
                name="companyName"
                control={control}
                placeholder="ThemeSelection"
                rules={{ required: "This field is required" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Billing Email"
                name="email"
                control={control}
                placeholder="john.doe@example.com"
                rules={{ required: "This field is required" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="TAX ID"
                name="taxId"
                control={control}
                placeholder="Enter TAX ID"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="VAT Number"
                name="vat"
                control={control}
                placeholder="Enter VAT Number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Phone Number"
                name="phoneNumber"
                control={control}
                type="number"
                placeholder="202 555 0111"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        "& .MuiTypography-root": { color: "text.disabled" },
                      }}
                    >
                      US (+1)
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectInput
                name="country"
                label="Country"
                defaultValue={0}
                control={control}
                data={country}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                label="Billing Address"
                name="address"
                control={control}
                placeholder="Billing Address"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="State"
                name="state"
                control={control}
                placeholder="California"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Zip Code"
                name="zipCode"
                type="number"
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <BtnContained
                type="submit"
                sx={{ marginRight: "1rem", minWidth: "152.5px" }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={25} color="secondary" />
                ) : (
                  "SAVE CHANGES"
                )}
              </BtnContained>
              <BtnOutline onClick={() => reset()} disabled={isLoading}>
                Discard
              </BtnOutline>
              {showSuccessMessage && !isLoading && (
                <Text600
                  m="15px 0 0 25px"
                  fontSize={18}
                  sx={{ color: "success.main" }}
                >
                  Successful
                </Text600>
              )}
            </Grid>
          </Grid>
        </form>
      </ContentWrapper>
    </WrapperBg>
  );
};

export default BillingAdressForm;
