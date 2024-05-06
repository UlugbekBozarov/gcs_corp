import { FC, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Checkbox, FormControlLabel } from "@mui/material";
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

import { Error } from "components";

interface ControlledCheckboxProps {
  labelKey?: string;
  name: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, any>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  labelPlacement?: "top" | "bottom" | "end" | "start" | undefined;
  disabled?: boolean | undefined;
}

const ControlledCheckbox: FC<ControlledCheckboxProps> = ({
  labelKey = "",
  name,
  rules,
  ...props
}) => {
  const { t } = useTranslation();
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { ref, disabled, ...field },
        fieldState: { error },
      }) => (
        <Fragment>
          <FormControlLabel
            label={t(labelKey)}
            {...props}
            {...field}
            inputRef={ref}
            value={field?.value || false}
            checked={field?.value || false}
            control={<Checkbox id={name} />}
          />
          <Error error={error} />
        </Fragment>
      )}
    />
  );
};

export default ControlledCheckbox;
