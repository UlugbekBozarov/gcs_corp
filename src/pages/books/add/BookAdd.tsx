import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Stack,
} from "@mui/material";
import { get } from "lodash";

import { LayoutMain } from "components";
import { ControlledInput } from "controller";

import { useAddBookMutation } from "../../../provider/redux/features/Api";

const formNames = {
  title: "title",
  cover: "cover",
  author: "author",
  published: "published",
  pages: "pages",
};

const BookAdd = () => {
  const navigate = useNavigate();

  const [addBook, { isLoading }] = useAddBookMutation();

  const formStore = useForm({
    defaultValues: {},
  });

  const { handleSubmit } = formStore;

  const handleCancel = () => {
    navigate(-1);
  };

  const submitHandler = handleSubmit((data) => {
    try {
      addBook({
        title: get(data, formNames.title, ""),
        cover: get(data, formNames.cover, ""),
        author: get(data, formNames.author, ""),
        published: get(data, formNames.published, ""),
        pages: get(data, formNames.pages, ""),
      });
    } catch (error) {}
  });

  return (
    <LayoutMain>
      <FormProvider {...formStore}>
        <form onSubmit={submitHandler}>
          <Box maxWidth="1000px">
            <Card>
              <Box p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <ControlledInput
                      labelKey="Title"
                      name={formNames.title}
                      rules={{
                        required: {
                          value: true,
                          message: "Required field",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ControlledInput
                      labelKey="Author"
                      name={formNames.author}
                      rules={{
                        required: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ControlledInput
                      labelKey="Cover"
                      name={formNames.cover}
                      rules={{
                        required: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ControlledInput
                      labelKey="Published"
                      name={formNames.published}
                      rules={{
                        required: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ControlledInput
                      type="number"
                      labelKey="Pages"
                      name={formNames.pages}
                      rules={{
                        required: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Card>
            <Box display="flex" justifyContent="flex-end" mt="20px">
              <Stack direction="row" spacing={2}>
                <Button
                  size="large"
                  variant="outlined"
                  disabled={isLoading}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button
                  size="large"
                  type="submit"
                  disabled={isLoading}
                  variant="contained"
                  startIcon={
                    isLoading && (
                      <CircularProgress size="15px" color="inherit" />
                    )
                  }
                >
                  Save
                </Button>
              </Stack>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </LayoutMain>
  );
};

export default BookAdd;
