import { useFormContext, Controller } from "react-hook-form";
// @mui
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";

// ----------------------------------------------------------------------

interface Props<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode;
  textfieldParam?: TextFieldProps;
  required?: boolean;
}

export type RHFAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = Omit<Props<T, Multiple, DisableClearable, FreeSolo>, "renderInput">;

export default function RHFAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  name,
  label,
  placeholder,
  helperText,
  required,
  textfieldParam,
  ...other
}: RHFAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          onChange={(_, newValue) =>
            setValue(name, newValue, {
              shouldValidate: true,
              shouldDirty: true,
            })
          }
          renderInput={(params) => (
            <TextField
              label={label}
              placeholder={placeholder}
              error={!!error}
              helperText={error ? error?.message : helperText}
              required={required}
              {...textfieldParam}
              {...params}
            />
          )}
          {...other}
        />
      )}
    />
  );
}
