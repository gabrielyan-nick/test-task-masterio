import React, { SyntheticEvent, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import {
  CheckCircleOutlineOutlined,
  HighlightOffOutlined,
} from "@mui/icons-material";
import ModalTemplate from "./modals/ModalTemplate";
import BtnContained from "./BtnContained";
import { ContentHeader, ContentWrapper, WrapperBg } from "./sharedStyledComponents";
import ConfirmModal from "./modals/ConfirmModal";

const DeleteAccountForm = () => {
  const [checked, setChecked] = useState(false);
  const [isHelperTextShow, setIsHelperTextShow] = useState(false);
  const [isDelBtnTouch, setIsDelBtnTouch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSuccessModalOpen = () => {
    setIsSuccessModalOpen(true);
  };

  const handleCancelModalOpen = () => {
    setIsCancelModalOpen(true);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
  };

  const handleCancelModalClose = () => {
    setIsCancelModalOpen(false);
  };

  const handleCheckboxChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setChecked(checked);
  };

  const handleDelBtn = () => {
    setIsDelBtnTouch(true);
    setIsHelperTextShow(true);
    checked && setIsModalOpen(true);
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
                  onChange={handleCheckboxChange}
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

      <ConfirmModal
        open={isModalOpen}
        onClose={handleModalClose}
        openSuccessModal={handleSuccessModalOpen}
        openCancelModal={handleCancelModalOpen}
      />

      <ModalTemplate
        open={isSuccessModalOpen}
        onClose={handleSuccessModalClose}
        icon={
          <CheckCircleOutlineOutlined
            color="success"
            sx={{ fontSize: "5.5rem" }}
          />
        }
        title="Deleted!"
        text="Your subscription cancelled successfully."
      />

      <ModalTemplate
        open={isCancelModalOpen}
        onClose={handleCancelModalClose}
        icon={
          <HighlightOffOutlined color="error" sx={{ fontSize: "5.5rem" }} />
        }
        title="Cancelled"
        text="Unsubscription Cancelled!!"
      />
    </>
  );
};

export default DeleteAccountForm;
