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
    updateProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/mentors/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
    updatePassword: builder.mutation({
      query: ({ user_id, old_password, new_password }) => ({
        url: `/mentors/${user_id}/update-password`,
        method: "PUT",
        body: { old_password, new_password },
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});
export const { useGetProfileQuery, useUpdateProfileMutation, useUpdatePasswordMutation } = profileSlice;
