import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const menteeSlice = createApi({
  reducerPath: "menteeSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    headers: {
      Authorization: `Bearer ${Auth.getAccessToken()}`,
    },
  }),
  tagTypes: ["Mentee"],
  endpoints: (builder) => ({
    getMenteesCourses: builder.query({
      query: ({course_id, page = 1}) => `/courses/${course_id}/mentees?page=${page}`,
      transformResponse: (response) => response.data,
      providesTags: ["Mentee"],
    }),
    deleteAccessCourse: builder.mutation({
      query: ({ course_id, mentee_id }) => ({
        url: `/courses/${course_id}/mentees/${mentee_id}/delete-access`,
        method: "DELETE",
      }),
      invalidatesTags: ["Mentee"],
    }),
  }),
});

export const { useGetMenteesCoursesQuery, useDeleteAccessCourseMutation } = menteeSlice;
