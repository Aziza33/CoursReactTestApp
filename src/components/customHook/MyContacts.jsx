import { useState, useEffect } from 'react'
import Search from "./Search"
import useUpdateDocTitle from "./useUpdateDocTitle"
import msgDisplay from './msgDisplay'
import TableUsers from '../TableUsers'

const MyContacts = () => {
  
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);

  console.log(users)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      setUsers(json);
      setIsLoading(false);
  })
  .catch(error => console.log(error.message))
  }, []);

  useUpdateDocTitle(search);

  const filterUsers = () => {
    const foundUsers = users.filter( user => {
        return Object.values(user)
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())
    })

    setResultSearch(foundUsers);
}

useEffect(() => {
    if (search !== '') {
      // Filter
      filterUsers();
    } else {
      setResultSearch([])
    }
}, [search]);

const handleChange = e => {
    setSearch(e.target.value)
  }

  return ( 
    <>  
      {
        isLoading ? msgDisplay('Veuillez patienter', 'red') : (
        <Search 
          searchStr={search}
          searchHandler={handleChange}
        />  
      ) 
      }
      
  
      {
        resultSearch.length === 0 && search !== '' 
        ? msgDisplay('Pas de résultat !', 'red') 
        : search === '' ? msgDisplay('Veuillez effectuer une recherche', 'green')
        // : search === '' ? null 
        :
        <TableUsers 
            dataArray = {resultSearch}
        />
      } 
    </>
  )
}

export default MyContacts
