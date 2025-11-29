import React, { useState } from "react"

type PaginationProps = {
  totalPages: number
  onPageChange?: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [page, setPage] = useState<number>(1)

  const goPrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const goNext = () => {
    if (page < totalPages) setPage(page + 1)
  }

  const onSelectPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPage = Number(e.target.value)
    setPage(newPage)
    if (onPageChange) onPageChange(newPage)
  }

  return (
    <div>
      <button onClick={goPrev} disabled={page === 1}>
        {"<"}
      </button>

      <span> Page </span>

      <select value={page} onChange={onSelectPage}>
        {Array.from({ length: totalPages }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <span> of {totalPages} </span>

      <button onClick={goNext} disabled={page === totalPages}>
        {">"}
      </button>
    </div>
  )
}

export default Pagination
