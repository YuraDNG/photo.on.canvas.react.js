import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Pagination, PaginationType } from "../general/pagination"
import { RootState } from "../../store"
import { deleteOrderThunk, getOrdersThunk, showAlertOrders } from "../../store/order/actions"
import { IOrder, IOrderResponse } from "../../store/order/types"
import { DeleteIcon } from "../general/deleteIcon/deleteIcon"

export const OrdersList: React.FC = () => {
  const dispatch = useDispatch()
  const pages: IOrderResponse = useSelector((state: RootState) => state.order.ordersData)
  const orders: IOrder[] = pages.data

  const pagProps: PaginationType = {
    handler: getOrdersThunk,
    totalPages: pages.totalPages,
    currentPage: pages.currentPage,
    hasNext: pages.hasNext,
    hasPrevious: pages.hasPrevious
  }

  const deleteOrder = (orderId: string) => {
    let result = window.confirm("Підтвердіть видалення")
    if (result) {
      dispatch(deleteOrderThunk(orderId))
    } else {
      dispatch(showAlertOrders("Видалення Відмінено!"))
    }
  }

  return <>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Імя</th>
          <th scope="col">Номер телефону</th>
          <th scope="col">Адрес</th>
          <th scope="col">Тип картини</th>
          <th scope="col">Зображення</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) =>
          <tr key={order.id}>
            <td>{order.customerName}</td>
            <td>{order.phoneNumber}</td>
            <td>{order.address}</td>
            <td>{order.canvas.name}</td>
            <td><img className="list-img" src={"data:image/png;base64," + order.image} alt="..." /></td>
            <td><DeleteIcon onClickHandler={() => deleteOrder(order.id)}/></td>
          </tr>
        )}
      </tbody>
    </table>

    <Pagination {...pagProps} />
  </>
}