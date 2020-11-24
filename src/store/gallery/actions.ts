import Axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import { api } from "../api";
import { GalleryActionsTypesEnum, IImages } from "./types";

const showLoaderGallery = (data: boolean) => {
  return {
    type: GalleryActionsTypesEnum.showLoader,
    payload: data
  }
}

const showAlertGallery = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: GalleryActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: GalleryActionsTypesEnum.hideAlert })
    }, 5000)
  }
}

const fetchImages = (data: IImages) => {
  return {
    type: GalleryActionsTypesEnum.fetchImages,
    payload: data
  }
}

export const getImagesThunk = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderGallery(true))

    Axios.get(api.galleryGetImages)
      .then(res => {
        dispatch(fetchImages(res.data))
      })
      .catch(err => {
        dispatch(showAlertGallery("Помилка сервера!"))
      })

    dispatch(showLoaderGallery(false))
  }
}

export const addImageThunk = (data: FormData) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderGallery(true))
    
    let headers: AxiosRequestConfig = { headers: { 'Content-Type': 'multipart/form-data' } }
    Axios.post(api.galleryAddImage, data, headers)
      .then(res => {
        dispatch(showAlertGallery(res.statusText))
      })
      .catch(err => {
        dispatch(showAlertGallery("Помилка сервера!"))
      })

    dispatch(showLoaderGallery(false))
  }
}

export const deleteImageThunk = (imageId: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderGallery(true))

    Axios.delete(api.galleryDeleteImage, { params: { imageId } })
      .then(res => {
        dispatch(showAlertGallery(res.statusText))
      })
      .catch(err => {
        dispatch(showAlertGallery("Помилка сервера!"))
      })

    dispatch(showLoaderGallery(false))
  }
}


