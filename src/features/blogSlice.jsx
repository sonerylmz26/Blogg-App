


import { createSlice } from "@reduxjs/toolkit"

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    error: false,
    blogs: [],
    // likes:[],

  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true
      state.error = false
    },
    getBlogSuccess: (state, { payload }) => {
      state.loading = false
      state[payload.url] = payload.data
    },



    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {
  fetchStart,
  fetchFail,
  getBlogSuccess,

} = blogSlice.actions
export default blogSlice.reducer


    // // ? Products, categories ve brands state'lerini güncelleyen action fonks.
    // getProdCatBrandsSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.products = payload[0]
    //   state.categories = payload[1]
    //   state.brands = payload[2]
    // },
