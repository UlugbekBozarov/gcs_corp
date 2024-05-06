import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { STORAGE_NAMES } from "constants/Storage.constants";
import { get } from "lodash";
import { getItemCookie } from "services";

export type ISignUp = {
  name: string;
  email: string;
  key: string;
  secret: string;
};

export type ISignUpRequest = {
  data: {
    id: string;
    name: string;
    email: string;
    key: string;
    secret: string;
  };
  isOk: boolean;
  message: string;
};

export type IBook = {
  title: string;
  cover: string;
  author: string;
  published: string;
  pages: string;
};

export type IBookEdit = {
  id: string;
  title: string;
  cover: string;
  author: string;
  published: string;
  pages: string;
};

export type IBookRequest = {
  data: {
    book: {
      id: string;
      title: string;
      cover: string;
      author: string;
      published: string;
      pages: string;
    };
  };
  isOk: boolean;
  message: string;
};

export type IBookEditRequest = {
  data: {
    book: {
      title: string;
      cover: string;
      author: string;
      published: string;
      pages: string;
    };
  };
  isOk: boolean;
  message: string;
};

export type IBooksResponse = Array<IBookEdit>;

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://no23.lavina.tech/",
    headers: {
      Key: getItemCookie(STORAGE_NAMES.authorizationKey),
      Sign: getItemCookie(STORAGE_NAMES.authorizationSecret),
    },
  }),
  tagTypes: ["SignUp", "Books"],
  endpoints: (build) => ({
    signUp: build.mutation<Partial<ISignUpRequest>, ISignUp>({
      query: (body) => ({
        url: `signup`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "SignUp", id: "DATA" }],
    }),
    getBooks: build.query<IBooksResponse, Partial<string | undefined>>({
      query: (params: string | undefined) =>
        `books${params ? `?${params}` : ""}`,
      // query: (params) => `books?${params}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Books" as const, id })),
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }],
    }),
    getBook: build.query<IBook, Partial<string>>({
      query: (bookId) => `books/${bookId}`,
      providesTags: (result) =>
        result
          ? [
              { type: "Books", id: get(result, "id") },
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }],
    }),
    addBook: build.mutation<IBookRequest, Partial<IBook>>({
      query: (body) => ({
        url: `books`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),
    editBook: build.mutation<IBookEditRequest, Partial<IBookEdit>>({
      query: ({ id, ...body }) => ({
        url: `books/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),
    deleteBook: build.mutation<any, Partial<string>>({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),
  }),
});

// Auto-generated hooks
export const {
  useSignUpMutation,
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = Api;
