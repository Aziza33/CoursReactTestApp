import React from 'react'

const TableUsers = ({dataArray}) => {
  return (
    <table id="table">
        <thead>
            <tbody>
                {
                    dataArray.map(({id, name, username, email, address}) => {
                        return (
                             <tr key={id}>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{address.street} {address.suite} {address.city} {address.zipcode}</td>
                            </tr>

                        )
                    })
                   
                }
            </tbody>
            
        </thead>
    </table>
  )
}

export default TableUsers
