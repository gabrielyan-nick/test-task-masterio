import { DialogActions, DialogContent, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { FlexCentredBox, StyledDialog } from "../sharedStyledComponents";
import BtnContained from "../BtnContained";
import { IModalTemplateProps } from "./modal.types";

const ModalTemplate = ({
  open,
  onClose,
  icon,
  text,
  title,
}: IModalTemplateProps) => {
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
          {icon}
          <Typography m="2rem 0 1.25rem" variant="h4" fontWeight={500}>
            {title}
          </Typography>
          <Typography>{text}</Typography>
        </FlexCentredBox>
      </DialogContent>
      <DialogActions>
        <BtnContained
          onClick={onClose}
          sx={{
            color: "#fff",
            "&:hover": { backgroundColor: "success.dark" },
          }}
          color="success"
        >
          ok
        </BtnContained>
      </DialogActions>
    </StyledDialog>
  );
};

export default ModalTemplate;
