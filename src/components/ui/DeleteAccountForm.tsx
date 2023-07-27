import React, { SyntheticEvent, useState } from "react";
import { ContentHeader, ContentWrapper, WrapperBg } from "./microComponents";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import BtnContained from "./BtnContained";

const DeleteAccountForm = () => {
  const [checked, setChecked] = useState(false);
  const [isHelperTextShow, setIsHelperTextShow] = useState(false);
  const [isDelBtnTouch, setIsDelBtnTouch] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // const handleDialogOpen = () => {
  //   setIsDialogOpen(true);
  // };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setChecked(checked);
  };

  const handleDelBtn = () => {
    setIsDelBtnTouch(true);
    setIsHelperTextShow(true);
    setIsDialogOpen(true);
  };

  return (
    <>
      <WrapperBg sx={{ marginTop: "1.5rem" }}>
        <ContentHeader title="Delete Account" />
        <ContentWrapper>
          <form>
            <Box mb="1rem">
              <FormControl>
                <FormControlLabel
                  control={<Checkbox size="small" name="del" />}
                  checked={checked}
                  onChange={handleChange}
                  label="I confirm my account deactivation"
                  sx={{
                    "& .MuiCheckbox-root": {
                      color: isHelperTextShow ? "error.main" : "text.disabled",
                    },
                    "& .MuiTypography-root": {
                      color:
                        isHelperTextShow && !checked
                          ? "error.main"
                          : "text.primary",
                    },
                    "& .MuiCheckbox-root.Mui-checked": {
                      color: "primary.main",
                    },
                  }}
                />
                {isHelperTextShow && !checked && (
                  <FormHelperText id="del" sx={{ color: "error.main" }}>
                    Please confirm you want to delete account
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <BtnContained
              color="error"
              sx={{ "&:hover": { backgroundColor: "error.dark" } }}
              onClick={handleDelBtn}
              disabled={isDelBtnTouch && !checked}
            >
              Deactivate Account
            </BtnContained>
          </form>
        </ContentWrapper>
      </WrapperBg>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogContent>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Disagree</Button>
          <Button onClick={handleDialogClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteAccountForm;
