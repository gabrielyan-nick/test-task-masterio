"use client";

import React, { useState } from "react";
import { ICardInputs } from "./PaymentMethod";
import { Box, BoxProps, Chip, styled } from "@mui/material";
import { FlexBox, Text600, TextLight } from "../sharedStyledComponents";
import BtnOutline from "../BtnOutline";
import PaymentCardModal from "./PaymentCardModal";
import { _clientUrl } from "@/constants";

export interface IPaymentCardProps extends ICardInputs {
  isPrimary?: boolean;
}

const CardBox = styled(Box)<BoxProps>(({ theme }) => ({
  // @ts-ignore
  backgroundColor: theme.palette.secondary[200],
  padding: "1.25rem",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [`@media (min-width: 600px)`]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

const BtnsBox = styled(Box)<BoxProps>({
  marginTop: "0.75rem",
  textAlign: "start",
  [`@media (min-width: 600px)`]: {
    marginTop: 0,
    textAlign: "end",
  },
});

const PaymentCard = ({
  name,
  number,
  expiry,
  cvc,
  isPrimary = false,
}: IPaymentCardProps) => {
  const [values, setValues] = useState<ICardInputs>({
    number,
    name,
    expiry,
    cvc,
    status: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setValues({ number, name, expiry, cvc });
  };

  return (
    <>
      <CardBox>
        <div>
          <img
            src={`${_clientUrl}/marketplace/materio-mui-react-nextjs-admin-template/demo-5/images/logos/${
              number.startsWith("5") ? "mastercard" : "visa"
            }.png`}
            alt="card-label"
            height="25px"
          />

          <FlexBox alignItems="center" mt="0.25rem" mb="0.625rem">
            <Text600>{values.name}</Text600>
            {isPrimary && (
              <Chip
                label="Primary"
                size="small"
                sx={{
                  backgroundColor: "primary.100",
                  color: "primary.main",
                  marginLeft: "1rem",
                }}
              />
            )}
          </FlexBox>
          <TextLight variant="body2">{`**** **** **** ${values.number.slice(
            -4
          )}`}</TextLight>
        </div>
        <BtnsBox>
          <BtnOutline
            sx={{
              marginRight: "1rem",
              color: "primary.main",
              borderColor: "primary.300",
              "&:hover": {
                borderColor: "primary.main",
                backgroundColor: "primary.200",
              },
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Edit
          </BtnOutline>
          <BtnOutline>Delete</BtnOutline>
          <TextLight mt="1rem" variant="body2">
            Card expires at {values.expiry}
          </TextLight>
        </BtnsBox>
      </CardBox>

      <PaymentCardModal
        open={isModalOpen}
        onClose={closeModal}
        name={values.name}
        number={values.number}
        expiry={values.expiry}
        cvc={values.cvc}
        setValues={setValues}
      />
    </>
  );
};

export default PaymentCard;
