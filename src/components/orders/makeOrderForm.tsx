import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useInput } from "../../helpers/useInput"
import { RootState } from "../../store"
import { getUserDataThunk } from "../../store/auth/actions"
import { getCanvasThunk } from "../../store/canvas/actions"
import { makeOrderThunk } from "../../store/order/actions"
import { makeOrderEnum } from "../../store/order/types"
import { SubmitButton } from "../general/submitButton/submitButton"
import { nameValidators, phoneValidators, addressValidators, canvasIdValidators } from "./orderValidations"

import "./makeOrder.css"

export const MakeOrderForm: React.FC = () => {
  const canvas = useSelector((state: RootState) => state.canvas.canvasData)
  const [image, setImage] = useState<string>()
  const dispatch = useDispatch()

  const name = useInput("", nameValidators)
  const phone = useInput("", phoneValidators)
  const address = useInput("", addressValidators)
  const canvasId = useInput("", canvasIdValidators)
  const info = useInput("",)

  useEffect(() => {
    dispatch(getCanvasThunk())
    dispatch(getUserDataThunk())
  }, [dispatch])

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    let formData = new FormData(event.target)
    formData.set("canvasId", canvasId.value)

    event.preventDefault()
    dispatch(makeOrderThunk(formData))
  }

  const imgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files.length) {
      setImage(URL.createObjectURL(event.target.files[0]))
    } else {
      setImage("")
    }
  }

  const nameInput = () => {
    return <>
      <div className="form-group">
        <label>Прізвище Імя*</label>
        <input
          type="text"
          className="form-control"
          name={makeOrderEnum.customerName}
          value={name.value}
          onChange={e => name.onChange(e)}
          onBlur={e => name.onBlur(e)}
          style={name.style}
        />
        {name.error.length !== 0 &&
          <span className="error-span">{name.error}</span>
        }
      </div>
    </>
  }

  const phoneInput = () => {
    return <>
      <div className="form-group">
        <label>Номер телефону*</label>
        <input
          type="tel"
          className="form-control"
          name={makeOrderEnum.phoneNumber}
          value={phone.value}
          onChange={e => phone.onChange(e)}
          onBlur={e => phone.onBlur(e)}
          style={phone.style}
        />
        {phone.error.length !== 0 &&
          <span className="error-span">{phone.error}</span>
        }
      </div>
    </>
  }

  const addressInput = () => {
    return <>
      <div className="form-group">
        <label>Адрес доставки*</label>
        <input
          type="text"
          className="form-control"
          name={makeOrderEnum.address}
          value={address.value}
          onChange={e => address.onChange(e)}
          onBlur={e => address.onBlur(e)}
          style={address.style}
        />
        {address.error.length !== 0 &&
          <span className="error-span">{address.error}</span>
        }
      </div>
    </>
  }

  const imageInput = () => {
    return <>
      <div className="form-group">
        <label>Завантажити зображення*</label>
        <input
          type="file"
          className="form-control"
          name={makeOrderEnum.image}
          accept="image/*"
          onChange={(e) => imgHandler(e)}
        />
      </div>
    </>
  }

  const canvasInput = () => {
    return <>
      <div className="form-group" >
        <label>Розмір полотна*</label>
        <select className="form-control"
          name={makeOrderEnum.canvasId}
          onChange={e => canvasId.onChange(e)}
          onBlur={e => canvasId.onBlur(e)}
          style={canvasId.style}
        >
          <option disabled selected>Виберіть розмір полотна</option>
          {
            canvas.map((item) =>
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          }
        </select>
        {canvasId.error.length !== 0 &&
          <span className="error-span">{canvasId.error}</span>
        }
      </div>
    </>
  }

  const imagePreview = () => {
    return <>
      <img className="order-img" src={image} alt="Зображення відсутнє" />
    </>
  }

  const infoInput = () => {
    return <>
      <div className="form-group">
        <textarea
          placeholder="тут ви можете ввести додаткову інформацію"
          className="form-control"
          name={makeOrderEnum.info}
          value={info.value}
          onChange={e => info.onChange(e)}
          onBlur={e => info.onBlur(e)}
          style={info.style}
          rows={10}
        />
        {info.error.length !== 0 &&
          <span className="error-span">{info.error}</span>
        }
      </div>
    </>
  }

  const button = () => {
    return <>
      <SubmitButton
        text={"Замовити"}
        disabled={
          name.disabledButton ||
          phone.disabledButton ||
          address.disabledButton ||
          canvasId.disabledButton
        }
      />
    </>
  }

  return <>
    <form className="makeorder-form" onSubmit={submitHandler}>
      <div className="row">
        <div className="col">{nameInput()}</div>
        <div className="col">{phoneInput()}</div>
      </div>

      <div className="row">
        <div className="col">{addressInput()}</div>
        <div className="col"></div>
      </div>

      <div className="row">
        <div className="col">{canvasInput()}</div>
        <div className="col">{imageInput()}</div>
      </div>

      <div className="row">
        <div className="col">{infoInput()}</div>
        <div className="col">{imagePreview()}</div>
      </div>

      {button()}
    </form>
  </>
}