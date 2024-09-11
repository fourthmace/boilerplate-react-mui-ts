// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import {
  InputBaseComponentProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

// ----------------------------------------------------------------------

/**
 * HIS V3 Teams &
 * Einsa / SangpenciptaJS / Lasteinsa / Ruby
 * @see {@link https://github.com/dev-system-2022/his-frontend/issues/11} - Read More
 */

interface IProps {
  name: string;
  alignText?: "right" | "left";
  isNumber?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  inputComponent?: React.ElementType<InputBaseComponentProps>;
}

export default function RHFTextField({
  name,
  alignText,
  startAdornment,
  endAdornment,
  inputComponent,
  isNumber,
  onBlur,
  onFocus,
  ...other
}: IProps & TextFieldProps) {
  const { control, setValue, watch } = useFormContext();
  const values = watch();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            {...field}
            {...other}
            ref={undefined}
            inputRef={field.ref}
            fullWidth
            autoComplete="off"
            error={!!error}
            helperText={error?.message}
            onFocus={
              isNumber
                ? () => {
                    values[name] === "0" && setValue(name, "");
                  }
                : onFocus
            }
            onBlur={
              isNumber
                ? () => {
                    values[name] === "" && setValue(name, "0");
                  }
                : onBlur
            }
            inputProps={{
              min: 0,
              max: 5,
              style: { textAlign: alignText === "right" ? "right" : "left" },
            }}
            InputProps={{
              startAdornment,
              endAdornment,
              inputComponent: inputComponent as any,
              ...other.InputProps,
            }}
          />
        </>
      )}
    />
  );
}
