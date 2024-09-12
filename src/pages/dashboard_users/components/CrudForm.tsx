// Libraries
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// Component - Global
import RHFTextField from "@/components/hook-form/RHFTextField";
import FormProvider from "@/components/hook-form/FormProvider";
import RHFAutocomplete from "@/components/hook-form/RHFAutocomplete";
// Types
import { UserIForm, UserInput, UserLevelType } from "../models/Types";
import {
  CrudUserDefaultValues,
  CrudUserSchema,
} from "../models/ValidationSchema";
// Functions
import { CrudUser, GetUser, GetUserLevels } from "../models/Functions";

// Main
const CrudForm = () => {
  // Hooks
  const { user_id } = useParams();
  const navigate = useNavigate();

  // State
  const [userLevel, setUserLevel] = useState<UserLevelType[]>([]);
  const [disableFieldLevel, setDisableFieldLevel] = useState(false);

  // fetch data levels
  const fetchDataLevels = async () => {
    setDisableFieldLevel(true);
    const data = await GetUserLevels();
    setUserLevel(data);
    setDisableFieldLevel(false);
  };
  useEffect(() => {
    fetchDataLevels();
  }, []);

  // Setup Form
  const methods = useForm<UserIForm>({
    resolver: yupResolver(CrudUserSchema),
    defaultValues: CrudUserDefaultValues,
  });
  const {
    reset,
    resetField,
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = methods;

  // fill field if update
  const fetchDatauser = async (userId: string) => {
    const data = await GetUser(userId);

    if (data) {
      reset({
        user_id: data.user_id,
        email: data.email,
        user_level: data.user_level,
      });
    } else {
      navigate("/404");
    }
  };
  useEffect(() => {
    if (user_id) {
      fetchDatauser(user_id);
    }
  }, [user_id]);

  // Hanle Submit
  const onSubmit = async (data: UserIForm) => {
    const newData: UserInput = {
      user_id: data.user_id,
      user_level_id: (data.user_level as UserLevelType).user_level_id,
      email: data.email,
      password: data.password,
    };
    const resData = await CrudUser(newData);
    if (resData) {
      if (data.user_id) {
        resetField("password");
      } else {
        reset();
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ paddingX: 3, paddingY: 4 }}>
        <Grid container spacing={4} sx={{ width: "50%" }}>
          <Grid item sm={12}>
            <RHFAutocomplete
              label="User Level"
              name="user_level"
              freeSolo={false}
              options={userLevel}
              disabled={disableFieldLevel}
              getOptionLabel={(opt) => opt.name || ""}
              isOptionEqualToValue={(opt, val) =>
                opt.user_level_id === val.user_level_id
              }
            />
          </Grid>
          <Grid item sm={12}>
            <RHFTextField name="email" label="Email" />
          </Grid>
          <Grid item sm={12}>
            <RHFTextField name="password" label="Password" type="Password" />
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

export default CrudForm;
