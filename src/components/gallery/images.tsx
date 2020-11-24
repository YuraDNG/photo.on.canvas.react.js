import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getImagesThunk, addImageThunk, deleteImageThunk } from "../../store/gallery/actions"
import { RootState } from "../../store/"

import "./images.css"

export const Images = (): JSX.Element => {
  const dispatch = useDispatch()
  const images = useSelector((state: RootState) => state.gallery.images)

  useEffect(() => {
    dispatch(getImagesThunk())
  }, [dispatch])

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    let formData = new FormData(event.target)

    event.preventDefault()
    dispatch(addImageThunk(formData))
  }

  const addImageButton = () => {
    if (true) {
      return <>
        <form onSubmit={submitHandler}>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            name="Image"
          />

          <button className="add-button">
            <span className="material-icons add-icon">add</span>
          </button>
        </form>
      </>
    }
  }

  return <>
    {addImageButton()}

    {images.map((item) =>
      <div key={item.id}>
        <img className="list-img" src={"data:image/png;base64," + item.image} alt="..." />
        {true && 
          <button onClick={e => dispatch(deleteImageThunk(item.id))}>Delete</button>
        }
      </div>
    )}
  </>
}