import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CONST from "../../utils/constants";
export const userSlice = createApi({
  reducerPath: "userSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    credentials: 'include'
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    loginMentor: builder.mutation({
      query: ({email, password}) => ({
        url: "/auth/mentor/login",
        method: "POST",
        body: {email, password}
      })
    }),
    loginMentee: builder.mutation({
        query: ({email, password}) => ({
        url: "/auth/mentee/login",
        method: "POST",
        body: {email, password}
      })
    }),
    registerMentor: builder.mutation({
      query: ({fullname, email, password}) => ({
        url: "/auth/mentor/register",
        method: "POST",
        body: {fullname, email, password},
      }),
    }),
    registerMentee: builder.mutation({
      query: ({fullname, email, password}) => ({
        url: "/auth/mentee/register",
        method: "POST",
        body: {fullname, email, password},
      }),
    }),
  })
});
export const {
  useLoginMentorMutation,
  useLoginMenteeMutation,
  useRegisterMentorMutation,
  useRegisterMenteeMutation
} = userSlice;