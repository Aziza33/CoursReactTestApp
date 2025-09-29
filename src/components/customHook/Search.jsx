import React from 'react'

const Search = ({searchStr, searchHandler}) => {
  return (
    <div>
        <input 
            type="text"
            placeholder="Chercher.."
            value={searchStr}
            onChange={searchHandler}
        />
    </div>
  )
}



export default Search
// export {msgDisplay}