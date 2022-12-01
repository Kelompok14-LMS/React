import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CONST from "../../utils/constants";
export const courseSlice = createApi({
  reducerPath: "courseSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/v1/course",
      providesTags: ["Post"],
    }),
    addCourse: builder.mutation({
      query: ({ mentor_id, thumbnail, title, category_id, description }) => ({
        url: "/v1/course",
        method: "POST",
        body: { mentor_id, thumbnail, title, category_id, description },
      }),
      invalidatesTags: ["Post"],
    }),
    updateCourse: builder.mutation({
      query: ({ id, thumbnail, title, category_id, description }) => {
        return {
          url: `/v1/course/${id}`,
          method: "PUT",
          body: { thumbnail, title, category_id, description },
        };
      },
      invalidatesTags: ["Post"],
    }),
    deleteCourse: builder.mutation({
      query: ({ id }) => ({
        url: `/v1/course/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    getModules: builder.query({
      query: () => "/v1/course/module",
      providesTags: ["Post"],
    }),
    addModule: builder.mutation({
      query: ({ course_id, title, video, slide, assignment }) => ({
        url: "/v1/course/module",
        method: "POST",
        body: { course_id, title, video, slide, assignment },
      }),
      invalidatesTags: ["Post"],
    }),
    updateModule: builder.mutation({
      query: ({ module_id, title, video, slide, assignment }) => {
        return {
          url: `/v1/course/module/${module_id}`,
          method: "PUT",
          body: { title, video, slide, assignment },
        };
      },
      invalidatesTags: ["Post"],
    }),
    deleteModule: builder.mutation({
      query: ({ module_id }) => ({
        url: `/v1/course/module/${module_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
export const {
  useGetCoursesQuery,
  useAddCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  useGetModulesQuery,
  useAddModuleMutation,
  useUpdateModuleMutation,
  useDeleteModuleMutation,
} = courseSlice;
