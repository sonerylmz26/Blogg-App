import {
  fetchFail,
  fetchStart,
  getBlogSuccess,
  getBlogDetail,
  getCatagorySuccess,
  postNewBlogSuccess
 
} from "../features/blogSlice"
import { useDispatch, useSelector } from "react-redux"
import { toastErrorNotify, toastSuccessNotify,  toastSuccess } from "../helper/ToastNotify"
import useAxios from "./use.Axios"
import { useState } from "react"

const useBlogCall = () => {
  const dispatch = useDispatch()
  const { axiosWithToken, axiosPublic } = useAxios()
  const {blogs, details} = useSelector((state)=> state.blog)

const {data} = useSelector((state)=> state.auth)
//!getBlogData
  const getBlogData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosPublic(`/api/${url}/`)
      dispatch(getBlogSuccess({ data, url }))
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }
//! getCatagoryData
  const getCatagoryData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/api/${url}/`)
      dispatch(getCatagorySuccess({ data, url }))
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }

// ! getBlogDetailsData
  const getBlogDetailsData = async (url, id) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/api/${url}/${id}/`)
      dispatch(getBlogDetail(data))
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }

//! postBlogLikeData

  const postBlogLikeData = async (url, id) => {
    dispatch(fetchStart())
  
    try {
      await axiosWithToken.post(`/api/${url}/${id}/`)
      getBlogDetailsData("blogs", id)
      getBlogData("blogs")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} Like Hata Oldu!`)
      console.log(error)
    }
  }
//! commentPost
  const commentPost = async (url, detailsId, values) => {

    dispatch(fetchStart())

    try {
      await axiosWithToken.post(`/api/${url}/${detailsId}/`, values)

      toastSuccessNotify(`${url} Başarılı! `)
      getBlogDetailsData("blogs", detailsId)

    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} Hata Oldu!`)
      console.log(error)
    }
  }

//! newBlogPost
const createNewBlog = async (url, values) => {

  dispatch(fetchStart())

  try {
  const {data } =   await axiosWithToken.post(`/api/${url}/`, values)
dispatch(postNewBlogSuccess(data))
    toastSuccessNotify(`${url} Başarılı! `)
    getBlogData("blogs")
    

  } catch (error) {
    dispatch(fetchFail())
    toastErrorNotify(`${url} Hata Oldu!`)
    console.log(error)
  }
}



  const deleteBlogData = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.delete(`/api/${url}/${id}/`)
      toastSuccessNotify(`${url} succesfuly deleted`)
      getBlogData(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be deleted`)
      console.log(error)
    }
  }

  const postBlogData = async (url, info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`/api/${url}/`, info)
      toastSuccessNotify(`${url} succesfuly posted`)
      getBlogData("blogs")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be posted`)
      console.log(error)
    }
  }

 




  const putBlogData = async (url,id , values) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/api/${url}/${id}/`, values)
      toastSuccessNotify(`${url} succesfuly updated`)
      getBlogData(url)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be updated`)
      console.log(error)
    }
  }

  return {
    getBlogData,
    deleteBlogData,
    postBlogData,
    putBlogData,
    postBlogLikeData,
    getBlogDetailsData ,
    commentPost,
    getCatagoryData,
    createNewBlog
  
  }
}

export default useBlogCall
