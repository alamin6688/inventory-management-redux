import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["item"],
  endpoints: (build) => ({
    getItems: build.query({
      query: () => `items`,
      providesTags: ["item"],
    }),

    addItems: build.mutation({
      query: (body) => ({
        url: "items",
        method: "POST",
        body,
      }),
      invalidatesTags: ["item"],
    }),
  }),
});

export const { useGetItemsQuery, useAddItemsMutation } = itemsApi;
