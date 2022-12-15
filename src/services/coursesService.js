import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constants } from "../constant";


export const coursesService = createApi({
  reducerPath: "courseSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: constants.BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  tagTypes: ["COURSES"],
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/courses",
      providesTags: ["COURSES"],
    }),
  }),
});

export const {
  useGetCoursesQuery,
} = coursesService;
