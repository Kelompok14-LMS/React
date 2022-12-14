import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CONST from "../../utils/constants";
import Auth from "../../utils/Auth";

export const signInSlice = createApi({
  reducerPath: "signInSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    credentials: "include",
  }),
  tagTypes: ["SignIn"],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: "/auth/mentor/login",
        method: "POST",
        body: data,
      }),
      transformResponse(response) {
        Auth.storeUserInfoToCookie(response.data);
      },
      invalidatesTags: ["SignIn"],
    }),
  }),
});
export const { useSignInMutation } = signInSlice;
