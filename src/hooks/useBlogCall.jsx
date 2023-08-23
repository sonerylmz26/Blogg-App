import {
  fetchFail,
  fetchStart,
  getBlogSuccess,
  getBlogDetail,
  getCatagorySuccess
 
} from "../features/blogSlice"
import { useDispatch, useSelector } from "react-redux"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./use.Axios"
import { useState } from "react"

const useBlogCall = () => {
  const dispatch = useDispatch()
  const { axiosWithToken, axiosPublic } = useAxios()
  const {blogs, details} = useSelector((state)=> state.blog)

const {data} = useSelector((state)=> state.auth)

// const likeDat = blogs.likes_n.filter((item)=> item.user_id == data.id )
// console.log(likeDat)
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


  const postBlogLikeData = async (url, id) => {
  
    dispatch(fetchStart())
  

    try {
      await axiosWithToken.post(`/api/${url}/${id}/`)
      // setToogle(!true)
      // {
      //   toogle ? (toastSuccessNotify(`${url} Like Alındı :)`)) : (   toastErrorNotify(`${url} Like Hata Oldu!`))
      // }
      getBlogDetailsData("blogs", id)
      getBlogData("blogs")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} Like Hata Oldu!`)
      console.log(error)
    }
  }

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

 




  const putBlogData = async (url, info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.put(`/api/${url}/${info.id}/`, info)
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
    getCatagoryData
  
  }
}

export default useBlogCall
