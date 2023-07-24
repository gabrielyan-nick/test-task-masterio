import { IData } from "@/types/data.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hooper.onrender.com/materio" }),
  endpoints: (builder) => ({
    getData: builder.query<IData, void>({
      query: () => `/`,
    }),
  }),
});

export const { useGetDataQuery } = dataApi;
