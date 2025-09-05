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
        url: `items`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["item"],
    }),

    updateItem: build.mutation({
      query: ({ id, body }) => ({
        url: `items/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["item"],
    }),
  }),
});

export const { useGetItemsQuery, useAddItemsMutation, useUpdateItemMutation } =
  itemsApi;
