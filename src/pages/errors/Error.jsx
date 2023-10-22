import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div style={{ padding: "3rem", backgroundColor: "black", height: "100vh" }}>
      <h1 style={{ color: "red" }}>Ha habido un error !!!</h1>
      <Link to={"/"}>
        <button style={{ padding: "0.75rem 1rem", borderRadius: "5px", textDecoration: "none", color: "whitesmoke", backgroundColor: "black", marginTop: "2rem", fontSize: "1.25rem", border: "1px solid whitesmoke" }}>Sal de aquí</button>
      </Link>
    </div>
  )
}

export default Error