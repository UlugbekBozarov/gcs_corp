import { Box, Button, Grid, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ControlledCheckbox, ControlledInput } from "controller";

const formNames = {
  name: "name",
  email: "email",
  key: "key",
  secret: "secret",
  rememberMe: "rememberMe",
};

const SignUp = () => {
  const navigate = useNavigate();

  const formStore = useForm({
    defaultValues: {},
  });

  const { handleSubmit } = formStore;

  const submitHandler = handleSubmit((data) => {
    try {
    } catch (error) {}
  });

  return (
    <FormProvider {...formStore}>
      <form onSubmit={submitHandler}>
        <Box
          minHeight="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="100%" maxWidth="400px">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4">Sign in</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ControlledInput
                  labelKey="Name"
                  name={formNames.name}
                  rules={{
                    required: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <ControlledInput
                  labelKey="Email"
                  name={formNames.email}
                  rules={{
                    required: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <ControlledInput
                  labelKey="Key"
                  name={formNames.key}
                  rules={{
                    required: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <ControlledInput
                  labelKey="Secret"
                  name={formNames.secret}
                  rules={{
                    required: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <ControlledCheckbox
                  labelKey="Remember me"
                  name={formNames.rememberMe}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default SignUp;
