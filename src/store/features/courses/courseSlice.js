import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const courseSlice = createApi({
  reducerPath: "courseSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    headers: {
      Authorization: `Bearer ${Auth.getAccessToken()}`,
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
    getDetailCourse: builder.query({
      query: (id) => `/courses/${id}/details`,
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
      query: ({ course_id, data }) => ({
        url: `/courses/${course_id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Course"],
    }),
    deleteCourse: builder.mutation({
      query: ({ course_id }) => ({
        url: `/courses/${course_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Course"],
    }),
    addModule: builder.mutation({
      query: (data) => ({
        url: `/modules`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Course"],
    }),
    updateModule: builder.mutation({
      query: ({ module_id, course_id, title, description }) => ({
        url: `/modules/${module_id}`,
        method: "PUT",
        body: { course_id, title, description },
      }),
      invalidatesTags: ["Course"],
    }),
    deleteModule: builder.mutation({
      query: ({ module_id }) => ({
        url: `/modules/${module_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Course"],
    }),
  }),
});
export const {
  useGetCoursesQuery,
  useGetCourseQuery,
  useGetDetailCourseQuery,
  useAddCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  useAddModuleMutation,
  useUpdateModuleMutation,
  useDeleteModuleMutation,
} = courseSlice;
