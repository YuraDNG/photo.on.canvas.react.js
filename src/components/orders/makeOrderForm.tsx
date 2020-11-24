import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useInput } from "../../helpers/useInput"
import { RootState } from "../../store"
import { getCanvasThunk } from "../../store/canvas/actions"
import { makeOrderThunk } from "../../store/order/actions"
import { makeOrderEnum } from "../../store/order/types"
import { SubmitButton } from "../general/submitButton/submitButton"
import { nameValidators, phoneValidators, addressValidators, canvasIdValidators } from "./orderValidations"

export const MakeOrderForm: React.FC = () => {
  const canvas = useSelector((state: RootState) => state.canvas.canvasData)
  const dispatch = useDispatch()

  const name = useInput("", nameValidators)
  const phone = useInput("", phoneValidators)
  const address = useInput("", addressValidators)
  const canvasId = useInput("", canvasIdValidators)

  useEffect(() => {
    dispatch(getCanvasThunk())
  }, [dispatch])

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    let formData = new FormData(event.target)
    formData.set("canvasId", canvasId.value)

    event.preventDefault()
    dispatch(makeOrderThunk(formData))
  }

  return <>
    <form onSubmit={submitHandler}>
      <div className="form-group" style={name.style}>
        <label>Прізвище Імя</label>
        <input
          type="text"
          className="form-control"
          name={makeOrderEnum.customerName}
          value={name.value}
          onChange={e => name.onChange(e)}
          onBlur={e => name.onBlur(e)}
        />
      </div>

      {name.error.length !== 0 &&
        <span className="error-span">{name.error}</span>
      }

      <div className="form-group" style={phone.style}>
        <label>Номер телефону</label>
        <input
          type="tel"
          className="form-control"
          name={makeOrderEnum.phoneNumber}
          value={phone.value}
          onChange={e => phone.onChange(e)}
          onBlur={e => phone.onBlur(e)}
        />
      </div>

      {phone.error.length !== 0 &&
        <span className="error-span">{phone.error}</span>
      }

      <div className="form-group" style={address.style}>
        <label>Адрес доставки</label>
        <input
          type="text"
          className="form-control"
          name={makeOrderEnum.address}
          value={address.value}
          onChange={e => address.onChange(e)}
          onBlur={e => address.onBlur(e)}
        />
      </div>

      {address.error.length !== 0 &&
        <span className="error-span">{address.error}</span>
      }

      <div className="form-group">
        <label>Завантажити зображення</label>
        <input
          type="file"
          className="form-control"
          name={makeOrderEnum.image}
          accept="image/*"
        />
      </div>

      <div className="form-group" style={canvasId.style}>
        <label>Тип полотна</label>
        <select className="form-control"
          name={makeOrderEnum.canvasId}
          onChange={e => canvasId.onChange(e)}
          onBlur={e => canvasId.onBlur(e)}
        >
          <option disabled selected>Виберіть тип полотна</option>
          {
            canvas.map((item) =>
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          }
        </select>
      </div>

      {canvasId.error.length !== 0 &&
        <span className="error-span">{canvasId.error}</span>
      }

      <SubmitButton text={"Замовити"}/>
    </form>
  </>
}