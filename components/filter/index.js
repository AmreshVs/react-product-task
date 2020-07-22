import React, { createRef } from 'react';

const index = ({ handleFilter, handleClear }) => {

  let min = createRef(null);
  let max = createRef(null);

  const handleMinMax = () => {
    handleFilter(min.current.value, max.current.value)
  }

  return(
    <>
      <input type="text" className="filter" placeholder="Min" ref={min} />
      <input type="text" className="filter" placeholder="Max" ref={max} />
      <button className="submitButton" onClick={handleMinMax}>Submit</button>
      <button className="submitButton" onClick={handleClear}>Clear</button>
    </>
  )
}

export default index;