import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface ISelectProps {
  name: string;
  label: string;
  defaultValue: number;
  control: Control<any>;
  data: { value: string; label: string }[];
}

const SelectInput = ({
  name,
  label,
  control,
  data,
  defaultValue,
}: ISelectProps) => {
  const labelId = `${name}-label`;

  return (
    <FormControl
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "text.secondary",
        },
        "&& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgb(145, 85, 253)",
        },
        "& svg": { color: "disabled.main" },
        "& label": { color: "text.disabled" },
      }}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Select
            labelId={labelId}
            label={label}
            defaultValue={data[defaultValue].label}
            onChange={onChange}
            value={value}
            MenuProps={{
              sx: { "& .MuiList-root": { backgroundColor: "secondary.main" } },
            }}
          >
            {data.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};
export default SelectInput;
