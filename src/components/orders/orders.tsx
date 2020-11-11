import React, { useEffect } from "react"
import { Spinner } from "../general/spinner"
import { Alert } from "../general/alert"
import { RootState } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { OrdersList } from "./ordersList"
import { getOrdersThunk } from "../../store/order/actions"
import { IOrder } from "../../store/order/types"

export const Orders: React.FC = () => {
  const dispatch = useDispatch()
  const showLoader = useSelector((state: RootState) => state.order.showLoader)
  const alert = useSelector((state: RootState) => state.order.alert)
  const orders: IOrder[] = useSelector((state: RootState) => state.order.ordersData.data)

  useEffect(() => {
    dispatch(getOrdersThunk({}))
  }, [dispatch])

  return <>
    {
      showLoader ? <Spinner /> :
        alert.showAlert ? <Alert text={alert.text} /> :
          !orders.length ? <h3>Замовлень немає</h3> :
            <OrdersList />
    }
  </>
}