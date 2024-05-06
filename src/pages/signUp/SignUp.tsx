import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { get } from "lodash";

import { ControlledCheckbox, ControlledInput } from "controller";
import { useSignUpMutation } from "provider/redux/features/Api";
import { STORAGE_NAMES } from "constants/Storage.constants";
import { setItemCookie } from "services";

const formNames = {
  name: "name",
  email: "email",
  key: "key",
  secret: "secret",
  rememberMe: "rememberMe",
};

const SignUp = () => {
  const [signUp, { isLoading }] = useSignUpMutation();

  const formStore = useForm({
    defaultValues: {
      [formNames.name]: "Test17",
      [formNames.email]: "ulugbek@gmail.com",
      [formNames.key]: "test21",
      [formNames.secret]: "secretTest21",
    },
  });

  const { handleSubmit, setError } = formStore;

  const submitHandler = handleSubmit(async (data) => {
    try {
      await signUp({
        name: get(data, formNames.name, "") as string,
        email: get(data, formNames.email, "") as string,
        key: get(data, formNames.key, "") as string,
        secret: get(data, formNames.secret, "") as string,
      })
        .then((response) => {
          if (get(response, "error")) {
            setError(formNames.key, {
              type: "manual",
              message: get(
                response,
                "error.message",
                "User with this key already exists"
              ),
            });
          } else {
            const date = new Date();
            date.setMonth(date.getMonth() + 1);
            if (get(data, formNames.rememberMe)) {
              setItemCookie(
                STORAGE_NAMES.authorizationKey,
                get(response, "data.data.key"),
                {
                  expires: new Date(date),
                }
              );
              setItemCookie(
                STORAGE_NAMES.authorizationSecret,
                get(response, "data.data.secret"),
                {
                  expires: new Date(date),
                }
              );
            } else {
              setItemCookie(
                STORAGE_NAMES.authorizationKey,
                get(response, "data.data.key")
              );
              setItemCookie(
                STORAGE_NAMES.authorizationSecret,
                get(response, "data.data.secret")
              );
            }
            window.location.href = "/";
          }
        })
        .catch((error) => {
          console.log("error: ", error);
        });
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
                  disabled={isLoading}
                  startIcon={
                    isLoading && (
                      <CircularProgress size="15px" color="inherit" />
                    )
                  }
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
