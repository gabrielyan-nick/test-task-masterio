import { IFormInput } from "@/components/ui/AccountForm";
import { ICardInputs } from "@/components/ui/paymentMethod/PaymentMethod";
import { IData } from "@/types/data.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hooper.onrender.com/materio" }),
  endpoints: (builder) => ({
    getData: builder.query<IData, void>({
      query: () => `/`,
    }),
    postData: builder.mutation<void, IFormInput | ICardInputs>({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetDataQuery, usePostDataMutation } = dataApi;
