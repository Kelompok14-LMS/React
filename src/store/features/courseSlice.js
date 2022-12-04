import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CONST from "../../utils/constants";
export const courseSlice = createApi({
  reducerPath: "courseSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }),
  tagTypes: ["Course"],
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/v1/course",
      providesTags: ["Course"],
    }),
    getCourse: builder.query({
      query: ({ id }) => `/v1/course/${id}`,
      providesTags: ["Course"],
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: "/v1/course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Course"],
    }),
    updateCourse: builder.mutation({
      query: ({ id, thumbnail, title, category_id, description }) => {
        return {
          url: `/v1/course/${id}`,
          method: "PUT",
          body: { thumbnail, title, category_id, description },
        };
      },
      invalidatesTags: ["Course"],
    }),
    deleteCourse: builder.mutation({
      query: ({ id }) => ({
        url: `/v1/course/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Course"],
    }),
    getModules: builder.query({
      query: () => "/v1/course/module",
      providesTags: ["Course"],
    }),
    addModule: builder.mutation({
      query: ({ course_id, title, video, slide, assignment }) => ({
        url: `/v1/course/${course_id}/module`,
        method: "POST",
        body: { course_id, title, video, slide, assignment },
      }),
      invalidatesTags: ["Course"],
    }),
    updateModule: builder.mutation({
      query: ({ course_id, module_id, title, video, slide, assignment }) => {
        return {
          url: `/v1/course/${course_id}/module/${module_id}`,
          method: "PUT",
          body: { course_id, title, video, slide, assignment },
        };
      },
      invalidatesTags: ["Course"],
    }),
    deleteModule: builder.mutation({
      query: ({ module_id }) => ({
        url: `/v1/course/module/${module_id}`,
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
  useGetModulesQuery,
  useAddModuleMutation,
  useUpdateModuleMutation,
  useDeleteModuleMutation,
} = courseSlice;
