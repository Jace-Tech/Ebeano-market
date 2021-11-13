import { usePagination } from "@mui/material"

import "./style.css"

const Pagination = ({ count }) => {
    const { items: paginationItems } = usePagination({
        count
    })

    return (
        <ul className="pagination">
            {
                paginationItems.map(({page, selected, type, ...item}, index) => {
                    let children = null

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = "-"
                    }
                    else if(type === 'page'){
                        children = (
                            <button className={`pagination-btn-outline ${selected && "selected"}`}
                                {...item}
                            >
                                {page}
                            </button>
                        )
                    }
                    else{
                        children = (
                            <button className={`addBtn pagination-btn ${type !== 'next' && "outlined"}`}
                                {...item}
                            >
                                {type}
                            </button>
                        )
                    }

                    return <li className="pagination-item" key={index}> {children} </li>
                })
            }
        </ul>
    )
}

export default Pagination
