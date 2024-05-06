import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, Card, Grid, Stack } from "@mui/material";

import { LayoutMain } from "components";
import { ControlledInput } from "controller";

const formNames = {
  title: "title",
  author: "author",
  published: "published",
  pages: "pages",
};

const BooksAddOrEdit = () => {
  const navigate = useNavigate();
  // const { bookId } = useParams();

  const formStore = useForm({
    defaultValues: {},
  });

  const { handleSubmit } = formStore;

  const handleCancel = () => {
    navigate(-1);
  };

  const submitHandler = handleSubmit((data) => {
    try {
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
                <Button size="large" variant="outlined" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button size="large" type="submit" variant="contained">
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

export default BooksAddOrEdit;
