import { IFormInput } from "@/components/ui/AccountForm";
import { IData } from "@/types/data.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hooper.onrender.com/materio" }),
  endpoints: (builder) => ({
    getData: builder.query<IData, void>({
      query: () => `/`,
    }),
    postAccountData: builder.mutation<void, IFormInput>({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetDataQuery, usePostAccountDataMutation } = dataApi;
