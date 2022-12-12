import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Auth from "../../../utils/Auth";
import CONST from "../../../utils/constants";

export const moduleSlice = createApi({
  reducerPath: "moduleSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
    headers: {
      Authorization: `Bearer ${Auth.getAccessToken()}`,
    },
  }),
  tagTypes: ["Module"],
  endpoints: (builder) => ({
    getModules: builder.query({
      query: (module_id) => `/modules/${module_id}`,
      transformResponse: (response) => response.data,
      providesTags: ["Module"],
    }),
    addModule: builder.mutation({
      query: ({ course_id, title }) => ({
        url: `/modules`,
        method: "POST",
        body: { course_id, title },
      }),
      invalidatesTags: ["Module"],
    }),
    updateModule: builder.mutation({
      query: ({ module_id, course_id, title }) => ({
        url: `/modules/${module_id}`,
        method: "PUT",
        body: { module_id, course_id, title },
      }),
      invalidatesTags: ["Module"],
    }),
    deleteModule: builder.mutation({
      query: ({ module_id }) => ({
        url: `/modules/${module_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Module"],
    }),
  }),
});
export const { useGetModulesQuery, useAddModuleMutation, useUpdateModuleMutation, useDeleteModuleMutation } =
  moduleSlice;
