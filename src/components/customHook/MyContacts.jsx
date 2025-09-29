import { useState } from 'react'
import Search from "./Search"
import useUpdateDocTitle from "./useUpdateDocTitle";

const MyContacts = () => {
  
  const [search, setSearch] = useState('');
  console.log(search)

  useUpdateDocTitle(search);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <Search 
      searchStr={search}
      searchHandler={handleChange}
    />
  )
}

export default MyContacts
