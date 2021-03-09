import React from 'react'

export default function Home(props) {

  const handleClick = () => {
    props.history.push('/about')
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to About</button>
    </div>
  )
}
