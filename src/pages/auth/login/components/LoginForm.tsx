// Libraries
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Grid, Card, styled, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { LoadingButton } from "@mui/lab";
// Hooks
import { useAuth } from "@/hooks/useAuth";
// Component - Global
import RHFTextField from "@/components/hook-form/RHFTextField";
import FormProvider from "@/components/hook-form/FormProvider";
// Types
import { LoginReq } from "../model/Types";
import { LoginDefaultValues, LoginSchema } from "../model/ValidationSchema";
// Functions
import { Login } from "../model/Functions";

// Styled
const CardStyled = styled(Card)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const ContainerStyled = styled(Stack)(({ theme }) => ({
  height: "100dvh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 4,
  backgroundImage:
    "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage:
      "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
  }),
}));

// Main
const LoginForm = () => {
  // Hooks
  const { setLogin } = useAuth();
  const navigate = useNavigate();

  // Form setup
  const methods = useForm<LoginReq>({
    resolver: yupResolver(LoginSchema),
    defaultValues: LoginDefaultValues,
  });
  const {
    reset,
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = methods;

  // Hanle Submit
  const onSubmit = async (data: LoginReq) => {
    const resData = await Login(data);

    if (resData) {
      reset();
      setLogin(resData);
      navigate("/dashboard");
    }
  };

  return (
    <ContainerStyled>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <CardStyled>
          <Grid container spacing={4}>
            <Grid item sm={12}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Login Dashboard
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <RHFTextField name="email" label="Email" />
            </Grid>
            <Grid item sm={12}>
              <RHFTextField name="password" label="Password" type="password" />
            </Grid>
            <Grid item sm={12}>
              <LoadingButton
                sx={{ width: "100%", padding: "12px", marginTop: "28px" }}
                disabled={!isDirty}
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                login
              </LoadingButton>
            </Grid>
          </Grid>
        </CardStyled>
      </FormProvider>
    </ContainerStyled>
  );
};

export default LoginForm;
