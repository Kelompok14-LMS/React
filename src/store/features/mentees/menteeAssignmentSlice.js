import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const menteeAssignmentSlice = createApi({
  reducerPath: "menteeAssignmentSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    prepareHeaders: (headers) => {
      const token = Auth.getAccessToken();

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["MenteeAssignment"],
  endpoints: (builder) => ({
    getMenteeAssignments: builder.query({
      query: ({ assignment_id, page = 1 }) => `mentee-assignments/assignments/${assignment_id}?page=${page}`,
      transformResponse: (response) => response.data,
      providesTags: ["MenteeAssignment"],
    }),
    updateGrade: builder.mutation({
      query: ({ id, data }) => ({
        url: `mentee-assignments/grade/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["MenteeAssignment"],
    }),
  }),
});

export const { useGetMenteeAssignmentsQuery, useUpdateGradeMutation } = menteeAssignmentSlice;
