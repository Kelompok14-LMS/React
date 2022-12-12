import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../utils/Auth";
import CONST from "../../utils/constants";

export const profileSlice = createApi({
  reducerPath: "profileSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    headers: {
      Authorization: `Bearer ${Auth.getAccessToken()}`,
    },
  }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => `/mentors/profile`,
      transformResponse: (response) => response.data,
      providesTags: ["Profile"],
    }),
  }),
});
export const { useGetProfileQuery } = profileSlice;
