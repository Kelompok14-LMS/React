import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const categorySlice = createApi({
  reducerPath: "categorySlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    headers: {
      Authorization: `Bearer ${Auth.getAccessToken()}`,
    },
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/categories`,
      transformResponse: (response) => response.data,
      providesTags: ["Category"],
    }),
  }),
});
export const { useGetCategoriesQuery } = categorySlice;
