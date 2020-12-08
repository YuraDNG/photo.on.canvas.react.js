import React from "react"
import { useDispatch } from "react-redux"
import { PageListQueryType } from "../../store/base/types"

export type PaginationType = {
  handler: (data: PageListQueryType) => void,
  totalPages: number,
  currentPage: number,
  hasNext: boolean,
  hasPrevious: boolean
}

export const Pagination = (props: PaginationType): JSX.Element => {
  const dispatch = useDispatch()

  const paginationHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    handler: (data: PageListQueryType) => void) => {

    switch (event.currentTarget.value) {
      case "Previous":
        dispatch(handler({ pageNumber: props.currentPage - 1 }))
      break;

      case "Next":
        dispatch(handler({ pageNumber: props.currentPage + 1 }))
      break;

      default:
        dispatch(handler({ pageNumber: Number(event.currentTarget.value)}))
      break;
    }
  }

  function numberOfPage(props: PaginationType) {
    var content: JSX.Element[] = [];

    for (let i = 1; i <= props.totalPages; i++) {
      content.push(
        <li key={i} className="page-item">
          <button
            className="btn btn-dark"
            value={i}
            onClick={e => paginationHandler(e, props.handler)}
            disabled={props.currentPage === i}
          >{i}</button>
        </li>
      )
    }
    return content;
  }

  return <>
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="btn btn-dark"
            onClick={e => paginationHandler(e, props.handler)}
            value="Previous"
            disabled={!props.hasPrevious}
          >Previous</button>
        </li>

        {numberOfPage(props)}

        <li className="page-item">
          <button
            className="btn btn-dark"
            onClick={e => paginationHandler(e, props.handler)}
            value="Next"
            disabled={!props.hasNext}
          >Next</button>
        </li>
      </ul>
    </nav>
  </>
}