import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CONST from "../../../utils/constants";
export const courseSlice = createApi({
  reducerPath: "courseSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
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
        url: "/course",
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
      query: ({ id }) => ({
        url: `/course/${id}`,
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
