import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

import {
  useDeleteBookMutation,
  useGetBookQuery,
  useEditBookMutation,
} from "../../../provider/redux/features/Api";

const formNames = {
  title: "title",
  author: "author",
  published: "published",
  cover: "cover",
  pages: "pages",
};

const BookEdit = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const { data, isLoading } = useGetBookQuery(bookId as string);
  const [deleteBook, { isLoading: isDeleteLoading }] = useDeleteBookMutation();
  const [editBook, { isLoading: isSubmitLoading }] = useEditBookMutation();

  const formStore = useForm({
    defaultValues: {},
  });

  const { handleSubmit, reset } = formStore;

  const handleCancel = () => {
    navigate(-1);
  };

  const submitHandler = handleSubmit((data) => {
    try {
      editBook({
        title: get(data, formNames.title, ""),
        cover: get(data, formNames.cover, ""),
        author: get(data, formNames.author, ""),
        published: get(data, formNames.published, ""),
        pages: get(data, formNames.pages, ""),
      });
    } catch (error) {}
  });

  const handleDelete = async () => {
    try {
      await deleteBook(bookId as string).then(() => {
        navigate(-1);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      reset({
        [formNames.title]: get(data, formNames.title, ""),
        [formNames.author]: get(data, formNames.author, ""),
        [formNames.published]: get(data, formNames.published, ""),
        [formNames.pages]: get(data, formNames.pages, ""),
      });
    }
  }, [isLoading, data, reset]);

  return (
    <LayoutMain>
      <FormProvider {...formStore}>
        <form onSubmit={submitHandler}>
          {false ? (
            "Loading..."
          ) : (
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
              <Box display="flex" justifyContent="space-between" mt="20px">
                <Box mr={2}>
                  <Button
                    size="large"
                    variant="contained"
                    color="error"
                    onClick={handleDelete}
                    disabled={isSubmitLoading || isDeleteLoading}
                    startIcon={
                      isDeleteLoading && (
                        <CircularProgress size="15px" color="inherit" />
                      )
                    }
                  >
                    Delete
                  </Button>
                </Box>
                <Stack direction="row" spacing={2}>
                  <Button
                    size="large"
                    variant="outlined"
                    disabled={isSubmitLoading || isDeleteLoading}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={isSubmitLoading || isDeleteLoading}
                    startIcon={
                      isSubmitLoading && (
                        <CircularProgress size="15px" color="inherit" />
                      )
                    }
                  >
                    Save
                  </Button>
                </Stack>
              </Box>
            </Box>
          )}
        </form>
      </FormProvider>
    </LayoutMain>
  );
};

export default BookEdit;
