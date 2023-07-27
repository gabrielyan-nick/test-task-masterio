"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { ContentWrapper, FlexBox, Text600, WrapperBg } from "./microComponents";
import BtnOutline from "./BtnOutline";
import BtnContained from "./BtnContained";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { country, currency, language, timezone } from "@/data/selectData";
import TextInput from "./form/TextInput";
import SelectInput from "./form/SelectInput";
import { usePostAccountDataMutation } from "@/api/dataApi";

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  country: string;
  language: string;
  timezone: string;
  currency: string;
  phoneNumber?: string;
  address?: string;
  state?: string;
  zipCode?: string;
}

const defaultValues = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  organization: "ThemeSelection",
  phoneNumber: "",
  address: "",
  state: "",
  zipCode: "",
  currency: "USD",
  country: "Australia",
  language: "Arabic",
  timezone: "(GMT-12:00) International Date Line West",
};

const AccountForm = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [submit, { isLoading, isSuccess }] = usePostAccountDataMutation();
  const { handleSubmit, reset, control } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const avatar = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(avatar);
    reader.onload = () => {
      setAvatar(reader.result as string);
    };
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
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
    <WrapperBg>
      <ContentWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FlexBox
            sx={{
              alignItems: "center",
              "& img": {
                width: "120px",
                height: "120px",
                borderRadius: "4px",
                marginRight: "1.25rem",
                objectFit: "cover",
              },
            }}
          >
            <img
              src={
                avatar ??
                "https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/avatars/1.png"
              }
              alt="Profile Pic"
            />
            <div>
              <BtnContained
                //@ts-ignore
                component="label"
                htmlFor="account-settings-upload-image"
                sx={{ marginRight: "1rem" }}
              >
                UPLOAD NEW PHOTO
                <input
                  hidden
                  type="file"
                  accept="image/png, image/jpeg"
                  id="account-settings-upload-image"
                  onChange={onChangeAvatar}
                />
              </BtnContained>
              <BtnOutline onClick={() => setAvatar(null)}>RESET</BtnOutline>
              <Typography
                component="p"
                variant="caption"
                mt="1rem"
                sx={{ color: "text.secondary" }}
              >
                Allowed PNG or JPEG. Max size of 800K.
              </Typography>
            </div>
          </FlexBox>

          <Grid
            container
            spacing={2.5}
            sx={{
              paddingTop: "2.5rem",
            }}
          >
            <Grid item xs={12} sm={6}>
              <TextInput
                label="First Name"
                name="firstName"
                control={control}
                placeholder="John"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Last Name"
                name="lastName"
                control={control}
                placeholder="Doe"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Email"
                name="email"
                control={control}
                placeholder="john.doe@example.com"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Organization"
                name="organization"
                control={control}
                placeholder="ThemeSelection"
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
              <TextInput label="Address" name="address" control={control} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput label="State" name="state" control={control} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Zip Code"
                name="zipCode"
                type="number"
                control={control}
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
            <Grid item xs={12} sm={6}>
              <SelectInput
                name="language"
                label="Language"
                defaultValue={0}
                control={control}
                data={language}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectInput
                name="timezone"
                label="Timezone"
                defaultValue={0}
                control={control}
                data={timezone}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectInput
                name="currency"
                label="Currency"
                defaultValue={0}
                control={control}
                data={currency}
              />
            </Grid>
            <Grid item xs={12}>
              <BtnContained type="submit" sx={{ marginRight: "1rem" }}>
                {isLoading ? (
                  <CircularProgress size={25} color="secondary" />
                ) : (
                  "SAVE CHANGES"
                )}
              </BtnContained>
              <BtnOutline onClick={() => reset()}>RESET</BtnOutline>
              {showSuccessMessage && (
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

export default AccountForm;
