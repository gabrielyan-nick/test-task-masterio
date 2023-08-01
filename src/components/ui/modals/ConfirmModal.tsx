import { DialogActions, DialogContent, Typography } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { FlexCentredBox, StyledDialog } from "../sharedStyledComponents";
import BtnContained from "../BtnContained";
import BtnOutline from "../BtnOutline";
import { IConfirmModalProps } from "./modal.types";

const ConfirmDelAccountModal = ({
  open,
  onClose,
  openCancelModal,
  openSuccessModal,
}: IConfirmModalProps) => {
  const onOpenSuccessModal = () => {
    onClose();
    openSuccessModal();
  };
  const onOpenCancelModal = () => {
    onClose();
    openCancelModal();
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent
        sx={{
          padding: "2rem 1.25rem 1.25rem",
          [`@media (min-width: 600px)`]: {
            padding: "3.125rem 3.75rem 1.5rem",
          },
        }}
      >
        <FlexCentredBox sx={{ flexDirection: "column", textAlign: "center" }}>
          <ErrorOutlineOutlinedIcon
            color="warning"
            sx={{ fontSize: "5.5rem" }}
          />
          <Typography mt="1.5rem">
            Are you sure you would like to cancel your subscription?
          </Typography>
        </FlexCentredBox>
      </DialogContent>
      <DialogActions>
        <BtnContained
          onClick={onOpenSuccessModal}
          sx={{ marginRight: "0.5rem" }}
        >
          yes
        </BtnContained>
        <BtnOutline onClick={onOpenCancelModal}>cancel</BtnOutline>
      </DialogActions>
    </StyledDialog>
  );
};

export default ConfirmDelAccountModal;
