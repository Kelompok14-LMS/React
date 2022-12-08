import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CONST from "../../../utils/constants";
export const materialSlice = createApi({
  reducerPath: "materialSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: CONST.BASE_URL,
  }),
  tagTypes: ["Material"],
  endpoints: (builder) => ({
    getMaterial: builder.query({
      query: (material_id) => `/materials/${material_id}`,
      transformResponse: (response) => response.data,
      providesTags: ["Material"],
    }),
    addMaterial: builder.mutation({
      query: ({ module_id, title, description, video }) => ({
        url: `/materials`,
        method: "POST",
        body: { module_id, title, description, video },
      }),
      invalidatesTags: ["Material"],
    }),
    updateMaterial: builder.mutation({
      query: ({ material_id, module_id, title, description, video }) => {
        return {
          url: `/materials/${material_id}`,
          method: "PUT",
          body: { module_id, title, description, video },
        };
      },
      invalidatesTags: ["Material"],
    }),
    deleteMaterial: builder.mutation({
      query: ({ material_id }) => ({
        url: `/materials/${material_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Material"],
    }),
  }),
});
export const { useGetMaterialQuery, useAddMaterialMutation, useUpdateMaterialMutation, useDeleteMaterialMutation } =
  materialSlice;
