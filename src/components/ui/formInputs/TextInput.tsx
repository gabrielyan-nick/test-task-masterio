import { Control, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface ITextInputProps {
  name: string;
  label: string;
  control: Control<any>;
  placeholder?: string;
  type?: string;
  InputProps?: object;
}

const TextInput = ({
  name,
  control,
  label,
  type,
  InputProps,
  placeholder,
}: ITextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          type={type}
          placeholder={placeholder}
          InputProps={InputProps}
          sx={{
            "& label": { color: "text.disabled" },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.secondary",
            },
            "&& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgb(145, 85, 253)",
            },
          }}
        />
      )}
    />
  );
};

export default TextInput;
