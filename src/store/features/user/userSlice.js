import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const userSlice = createApi({
  reducerPath: "userSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    loginMentor: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/mentor/login",
        method: "POST",
        body: { email, password },
      }),
      transformResponse(response) {
        Auth.storeUserInfoToCookie(response.data);
      },
      providesTags: ["Auth"],
    }),
    registerMentor: builder.mutation({
      query: ({ fullname, email, password }) => ({
        url: "/auth/mentor/register",
        method: "POST",
        body: { fullname, email, password },
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});
export const { useLoginMentorMutation, useRegisterMentorMutation } = userSlice;
