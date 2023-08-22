import {
  fetchFail,
  fetchStart,
  getBlogSuccess,
 
} from "../features/blogSlice"
import { useDispatch } from "react-redux"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./use.Axios"
import { useState } from "react"

const useBlogCall = () => {
  const [toogle, setToogle] = useState(true)
  const dispatch = useDispatch()
  const { axiosWithToken } = useAxios()

  const getBlogData = async (url) => {
    dispatch(fetchStart())
    try {
      const { data } = await axiosWithToken(`/api/${url}/`)
      dispatch(getBlogSuccess({ data, url }))
    } catch (error) {
      dispatch(fetchFail())
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

  // const getLikeData = async (url, id) => {
  //   dispatch(fetchStart())
  //   try {
  //     const { data } = await axiosWithToken(`/api/${url}/${id}/`)
  //     dispatch(getBlogSuccess({ data, url }))
  //   } catch (error) {
  //     dispatch(fetchFail())
  //     console.log(error)
  //   }
  // }

  const postBlogLikeData = async (url, id) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`/api/${url}/${id}/`)
      // setToogle(!true)
      // {
      //   toogle ? (toastSuccessNotify(`${url} Like Alındı :)`)) : (   toastErrorNotify(`${url} Like Hata Oldu!`))
      // }
      
      getBlogData("blogs")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify(`${url} Like Hata Oldu!`)
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
    postBlogLikeData
  
  }
}

export default useBlogCall
