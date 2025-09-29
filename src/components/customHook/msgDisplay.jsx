import React from 'react'

const msgDisplay = (msg, color) => {
  return (
    <p style={{textAlign: 'center', color: color}}>
      {msg}
    </p>
  )
}

export default msgDisplay