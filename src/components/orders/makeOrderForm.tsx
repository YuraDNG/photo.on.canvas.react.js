import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getCanvasThunk } from "../../store/canvas/actions";
import { makeOrderThunk } from "../../store/order/actions";
import { IMakeOrder, makeOrderEnum } from "../../store/order/types";
import { SubmitButton } from "../general/submitButton/submitButton";

export const MakeOrderForm: React.FC = () => {
  const canvas = useSelector((state: RootState) => state.canvas.canvasData)
  const dispatch = useDispatch()

  const [canvasName, setCanvasName] = useState('')

  const [name, setName] = useState(" ")
  const [phone, setPhone] = useState(" ")
  const [address, setAddress] = useState(" ")
  const [canvasId, setCanvasId] = useState(" ")

  useEffect(() => {
    dispatch(getCanvasThunk())
  }, [dispatch])

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    let formData = new FormData(event.target)
    formData.set("canvasId", canvasId)

    event.preventDefault()
    dispatch(makeOrderThunk(formData))
  }

  return <>
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Прізвище Імя</label>
        <input
          type="text"
          className="form-control"
          name={makeOrderEnum.customerName}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Номер телефону</label>
        <input
          type="tel"
          className="form-control"
          name={makeOrderEnum.phoneNumber}
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Адрес доставки</label>
        <input
          type="text"
          className="form-control"
          name={makeOrderEnum.address}
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Завантажити зображення</label>
        <input
          type="file"
          className="form-control"
          name={makeOrderEnum.image}
          accept="image/*"
        />
      </div>

      <div className="form-group">
        <label>Тип полотна</label>
        <select className="form-control"
          name={makeOrderEnum.canvasId}
          onChange={e => { setCanvasId(e.target.value);}}
        >
          {
            canvas.map((item) =>
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          }
        </select>
      </div>

      <SubmitButton text={"Замовити"}/>
    </form>
  </>
}