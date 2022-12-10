import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CONST from "../../../utils/constants";
export const courseSlice = createApi({
  reducerPath: "courseSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2FmMDljYTMtNjhlMy00ZjY4LWFmZGItOTA1ZmVjNDVhNTFjIiwibWVudG9yX2lkIjoiYjhhZDdiNDMtMTBjOC00NDk1LTgwZDQtNTkzZWIxY2Q1Y2E5Iiwicm9sZSI6Im1lbnRvciIsImV4cCI6MTY3MDY4NzAzOX0.F0Wb44QW4OT4xlw9fcXdmIqKozJM5D-YxQ68I3ne8x0",
    },
  }),
  tagTypes: ["Course"],
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/courses",
      transformResponse: (response) => response.data,
      providesTags: ["Course"],
    }),
    getCourse: builder.query({
      query: (id) => `/courses/${id}`,
      transformResponse: (response) => response.data,
      providesTags: ["Course"],
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: "/courses",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Course"],
    }),
    updateCourse: builder.mutation({
      query: ({ id, thumbnail, title, category_id, description }) => {
        return {
          url: `/course/${id}`,
          method: "PUT",
          body: { thumbnail, title, category_id, description },
        };
      },
      invalidatesTags: ["Course"],
    }),
    deleteCourse: builder.mutation({
      query: ({ course_id }) => ({
        url: `/courses/${course_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Course"],
    }),
  }),
});
export const {
  useGetCoursesQuery,
  useGetCourseQuery,
  useAddCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseSlice;
