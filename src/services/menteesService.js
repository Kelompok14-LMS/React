import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import  { constants }  from "../constant";


export const menteesService = createApi({
    reducerPath: "menteesService",
    baseQuery: fetchBaseQuery({
        baseUrl: constants.BASE_URL,
        headers: {
            "Content-Type": "application/json",
        }
    }),
    tagTypes: ["MENTOR"],
    endpoints: (builder) => ({
        getMenteesCourses : builder.query({
            query: ({courseId}) => `/courses/${courseId}/mentees`,
            providesTags: ["MENTOR"]
        }),
        deleteAccessCourse : builder.mutation({
            query: ({courseId, menteeId}) => ({
                url: `/courses/${courseId}/mentees/${menteeId}/delete-access`,
                method: "DELETE"
            }),
            invalidatesTags: ["MENTOR"]
        }),
    })
})

export const {
    useGetMenteesCoursesQuery,
    useDeleteAccessCourseMutation
} = menteesService;
