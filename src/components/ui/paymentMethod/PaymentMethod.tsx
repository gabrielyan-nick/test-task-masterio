"use client";

import React, { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import {
  ContentHeader,
  ContentWrapper,
  WrapperBg,
} from "../sharedStyledComponents";
import {
  Box,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  TextFieldProps,
  styled,
} from "@mui/material";
import BtnContained from "../BtnContained";
import BtnOutline from "../BtnOutline";
import { usePostDataMutation } from "@/api/dataApi";

export interface ICardInputs {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus?: string;
}

const CardInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  "& label": { color: "text.disabled" },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.text.secondary,
  },
  "&& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
}));

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [values, setValues] = useState<ICardInputs>({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const [submit, { isLoading, isSuccess }] = usePostDataMutation();

  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value
        .replace(/[^0-9]/gi, "")
        .replace(/(.{4})/g, "$1 ")
        .trim(),
    }));
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, focus: e.target.name }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod((e.target as HTMLInputElement).value);
  };

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      expiry: e.target.value
        .replace(
          /^([1-9]\/|[2-9])$/g,
          "0$1/" // 3 > 03/
        )
        .replace(
          /^(0[1-9]|1[0-2])$/g,
          "$1/" // 11 > 11/
        )
        .replace(
          /^([0-1])([3-9])$/g,
          "0$1/$2" // 13 > 01/3
        )
        .replace(
          /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
          "$1/$2" // 141 > 01/41
        )
        .replace(
          /^([0]+)\/|[0]+$/g,
          "0" // 0/ > 0 and 00 > 0
        )
        .replace(
          /[^\d\/]|^[\/]*$/g,
          "" // To allow only digits and `/`
        )
        .replace(
          /\/\//g,
          "/" // Prevent entering more than 1 `/`
        ),
    }));
  };

  const submitForm = () => {
    submit(values);
    resetForm();
  };

  const resetForm = () => {
    setValues({
      number: "",
      expiry: "",
      cvc: "",
      name: "",
      focus: "",
    });
  };

  return (
    <WrapperBg sx={{ marginTop: "1.5rem" }}>
      <ContentHeader title="Payment Method" />
      <ContentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RadioGroup
                  row
                  aria-labelledby="payment"
                  name="payment"
                  onChange={handleRadioChange}
                  value={paymentMethod}
                >
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="Credit/Debit/ATM Card"
                  />
                  <FormControlLabel
                    value="cheque"
                    control={<Radio />}
                    label="COD/Cheque"
                  />
                </RadioGroup>
              </Grid>
              {paymentMethod === "card" ? (
                <>
                  <Grid item xs={12}>
                    <Box mb="1.5rem" sx={{ "& .rccs": { margin: 0 } }}>
                      <Cards
                        number={values.number}
                        expiry={values.expiry}
                        cvc={values.cvc}
                        name={values.name}
                        focused={values.focus as Focused | undefined}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <CardInput
                      name="number"
                      label="Card Number"
                      variant="outlined"
                      placeholder="0000 0000 0000 0000"
                      onChange={handleInputNumberChange}
                      onFocus={handleInputFocus}
                      value={values.number}
                      fullWidth
                      autoComplete="off"
                      inputProps={{ maxLength: 23 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CardInput
                      name="name"
                      label="Name on Card"
                      variant="outlined"
                      placeholder="John Doe"
                      onChange={handleInputTextChange}
                      onFocus={handleInputFocus}
                      value={values.name}
                      fullWidth
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CardInput
                      name="expiry"
                      label="Expiry"
                      variant="outlined"
                      placeholder="MM/YY"
                      onChange={handleExpirationChange}
                      onFocus={handleInputFocus}
                      value={values.expiry}
                      inputProps={{ maxLength: 5 }}
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CardInput
                      name="cvc"
                      label="CVC"
                      variant="outlined"
                      placeholder="123"
                      onChange={handleInputNumberChange}
                      onFocus={handleInputFocus}
                      value={values.cvc}
                      inputProps={{ maxLength: 3 }}
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Switch defaultChecked id="save-card" />
                    <FormLabel
                      htmlFor="save-card"
                      sx={{ color: "text.primary", cursor: "pointer" }}
                    >
                      Save Card for future billing?
                    </FormLabel>
                  </Grid>
                </>
              ) : (
                <Box></Box>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} mt="8px">
            <BtnContained sx={{ marginRight: "1rem" }} onClick={submitForm}>
              Save changes
            </BtnContained>
            <BtnOutline onClick={resetForm}>Reset</BtnOutline>
          </Grid>
        </Grid>
      </ContentWrapper>
    </WrapperBg>
  );
};

export default PaymentMethod;
