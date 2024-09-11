// Libraries
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// Component - Global
import RHFTextField from "@/components/hook-form/RHFTextField";
import FormProvider from "@/components/hook-form/FormProvider";
// Types
import { ProfileIForm } from "../models/Types";
import {
  ProfileUpdateDefaultValues,
  ProfileUpdateSchema,
} from "../models/ValidationSchema";
// Hooks
import useContextUser from "@/hooks/useContextUser";
// Functions
import { UpdateProfile } from "../models/Functions";

// Main
const DashboardProfileForm = () => {
  // Hooks
  const { user } = useContextUser();

  // Setup Form
  const methods = useForm<ProfileIForm>({
    resolver: yupResolver(ProfileUpdateSchema),
    defaultValues: ProfileUpdateDefaultValues,
  });
  const {
    reset,
    resetField,
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = methods;

  // Set Values
  useEffect(() => {
    reset({
      email: user?.email,
    });
  }, [user]);

  // Hanle Submit
  const onSubmit = async (data: ProfileIForm) => {
    const resData = await UpdateProfile(data);

    if (resData) {
      resetField("password");
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ marginTop: 4, paddingX: 3, paddingY: 4 }}>
        <Grid container spacing={4} sx={{ width: "50%" }}>
          <Grid item sm={12}>
            <RHFTextField name="email" label="Email" />
          </Grid>
          <Grid item sm={12}>
            <RHFTextField name="password" label="Password" type="password" />
          </Grid>
          <Grid item sm={12}>
            <LoadingButton
              sx={{ paddingX: 2, paddingY: 1, marginTop: 2 }}
              disabled={!isDirty}
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              submit
            </LoadingButton>
          </Grid>
        </Grid>
      </Card>
    </FormProvider>
  );
};

export default DashboardProfileForm;
