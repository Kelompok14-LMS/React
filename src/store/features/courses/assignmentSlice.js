import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const assignmentSlice = createApi({
  reducerPath: "assignmentSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    headers: {
      Authorization: `Bearer ${Auth.getAccessToken()}`,
    },
  }),
  tagTypes: ["Assignment"],
  endpoints: (builder) => ({
    getAssignmentByCourse: builder.query({
      query: (course_id) => `/assignments/courses/${course_id}`,
      transformResponse: (response) => response.data,
      providesTags: ["Assignment"],
    }),
    addAssignment: builder.mutation({
      query: (data) => ({
        url: "/assignments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Assignment"],
    }),
    updateAssignment: builder.mutation({
      query: ({ assignment_id, course_id, title, description }) => ({
        url: `/assignments/${assignment_id}`,
        method: "PUT",
        body: { course_id, title, description },
      }),
      invalidatesTags: ["Assignment"],
    }),
    deleteAssignment: builder.mutation({
      query: (assignment_id) => ({
        url: `/assignments/${assignment_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Assignment"],
    }),
  }),
});
export const {
  useGetAssignmentByCourseQuery,
  useAddAssignmentMutation,
  useUpdateAssignmentMutation,
  useDeleteAssignmentMutation,
} = assignmentSlice;
