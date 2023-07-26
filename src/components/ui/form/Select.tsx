import { MenuItem, TextField } from "@mui/material";
import React from "react";

interface ISelectProps {
  data: { value: string; label: string }[];
  defaultValue: string;
  label: string;
  id: string;
}

const Select = ({ data, defaultValue, label, id }: ISelectProps) => {
  return (
    <TextField id={id} select label={label} defaultValue={defaultValue}>
      {data.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
