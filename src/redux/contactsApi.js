import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['contacts', 'auth'],
  endpoints: builder => ({
    signup: builder.mutation({
      query: values => ({
        url: '/users/signup',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['auth'],
    }),

    login: builder.mutation({
      query: values => ({
        url: '/users/login',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['auth'],
    }),

    logout: builder.mutation({
      query: values => ({
        url: '/users/logout',
        method: 'POST',
        body: values,
      }),
    }),

    currentUser: builder.query({
      query: () => ({
        url: '/users/current',
      }),
      providesTags: ['auth'],
    }),

    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['contacts', 'auth'],
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['contact'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),

    filterContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useFilterContactMutation,
  useCurrentUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
} = contactsApi;

export const contactsReducer = contactsApi.reducer;
