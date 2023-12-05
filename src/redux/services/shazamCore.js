import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f9502e2286msh7588ffe137fc0a6p1dae88jsn90dd2e14b4c0',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};

fetch('https://shazam.p.rapidapi.com/charts/list', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidApi-Key', 'f9502e2286msh7588ffe137fc0a6p1dae88jsn90dd2e14b4c0');
            headers.set('locale', 'en-US');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track'}),
    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;