import React from 'react';

const index = ({ handleSearch }) => {
  return(
    <>
      <input type="text" className="search" placeholder="Search..." onKeyUp={handleSearch} />
    </>
  )
}

export default index;