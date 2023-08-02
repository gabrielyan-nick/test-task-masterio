import React, { Dispatch } from "react";
import Cards from "react-credit-cards-2";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
} from "@mui/material";
import {
  StyledInput,
  SelectWrapper,
  StyledDialog,
  TextLight,
} from "../sharedStyledComponents";
import BtnContained from "../BtnContained";
import BtnOutline from "../BtnOutline";
import { IModalProps } from "../modals/modal.types";
import { IPaymentCardProps } from "./PaymentCard";
import { ICardInputs } from "./PaymentMethod";
import { cardExpiryFormat, cardNumberFormat } from "@/utils/cardInputs";
import { cardStatus } from "@/data/selectData";

interface IPaymentCardModalProps extends IModalProps, IPaymentCardProps {
  setValues: Dispatch<React.SetStateAction<ICardInputs>>;
}

const PaymentCardModal = ({
  open,
  onClose,
  name,
  number,
  expiry,
  cvc,
  setValues,
  status,
}: IPaymentCardModalProps) => {
  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: cardNumberFormat(value),
    }));
  };

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      expiry: cardExpiryFormat(e.target.value),
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setValues((prev) => ({ ...prev, status: e.target.value }));
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          maxWidth: "650px",
        },
      }}
    >
      <DialogTitle textAlign="center" fontSize="1.5rem">
        Edit Card
      </DialogTitle>
      <DialogContent
        sx={{
          padding: "0 1.25rem 1.25rem 1.25rem",
          [`@media (min-width: 600px)`]: {
            padding: "0 3.75rem 1.25rem 3.75rem",
          },
        }}
      >
        <TextLight textAlign="center" mb="1.75rem" variant="body2">
          Edit your saved card details
        </TextLight>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Cards number={number} expiry={expiry} cvc={cvc} name={name} />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <StyledInput
                    name="number"
                    label="Card Number"
                    variant="outlined"
                    placeholder="0000 0000 0000 0000"
                    onChange={handleInputNumberChange}
                    value={number}
                    fullWidth
                    autoComplete="off"
                    inputProps={{ maxLength: 19 }}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <StyledInput
                    name="name"
                    label="Name on Card"
                    variant="outlined"
                    placeholder="John Doe"
                    onChange={handleInputTextChange}
                    value={name}
                    fullWidth
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <StyledInput
                    name="expiry"
                    label="Expiry"
                    variant="outlined"
                    placeholder="MM/YY"
                    onChange={handleExpirationChange}
                    value={expiry}
                    inputProps={{ maxLength: 5 }}
                    autoComplete="off"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <SelectWrapper fullWidth>
                    <InputLabel id="card-status">Card Status</InputLabel>
                    <Select
                      labelId="card-status"
                      id="card-status"
                      value={status}
                      label="Card Status"
                      onChange={handleSelectChange}
                      MenuProps={{
                        sx: {
                          "& .MuiList-root": {
                            backgroundColor: "background.paper",
                          },
                        },
                      }}
                    >
                      {cardStatus.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </SelectWrapper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <StyledInput
                    name="cvc"
                    label="CVC"
                    variant="outlined"
                    placeholder="123"
                    onChange={handleInputNumberChange}
                    value={cvc}
                    inputProps={{ maxLength: 3 }}
                    autoComplete="off"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    sx={{
                      margin: "0 16px 0 -11px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "text.disabled",
                      },
                    }}
                  >
                    <Switch defaultChecked id="save-editing-card" />
                    <FormLabel
                      htmlFor="save-editing-card"
                      sx={{
                        color: "text.disabled",
                        cursor: "pointer",
                      }}
                    >
                      Save Card for future billing?
                    </FormLabel>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <BtnContained onClick={onClose} sx={{ marginRight: "0.5rem" }}>
          Submit
        </BtnContained>
        <BtnOutline onClick={onClose}>cancel</BtnOutline>
      </DialogActions>
    </StyledDialog>
  );
};

export default PaymentCardModal;
