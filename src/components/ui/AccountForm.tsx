"use client";

import React, { ChangeEvent, useState } from "react";
import { ContentWrapper, FlexBox, WrapperBg } from "./microComponents";
import BtnOutline from "./BtnOutline";
import BtnContained from "./BtnContained";
import {
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { country } from "@/data/selectData";

const AccountForm = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

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

  return (
    <WrapperBg>
      <ContentWrapper>
        <form>
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
              "& .MuiTextField-root": { width: "100%" },
            }}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                defaultValue="John"
                placeholder="John"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                defaultValue="Doe"
                placeholder="Doe"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                defaultValue="john.doe@example.com"
                placeholder="john.doe@example.com"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Organization"
                defaultValue="ThemeSelection"
                placeholder="ThemeSelection"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                placeholder="202 555 0111"
                type="number"
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
              <TextField label="Address" placeholder="Address" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="State" placeholder="California" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Zip Code" placeholder="231465" type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                // id={id}
                select
                label="Country"
                defaultValue="Australia"
              >
                {country.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </form>
      </ContentWrapper>
    </WrapperBg>
  );
};

export default AccountForm;
