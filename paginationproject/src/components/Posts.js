import React from 'react'

const Posts = ({posts, loading}) => {

  if(loading) {
    return (
        <h2>Loading...</h2>
    )
  }

  return (
    <ul className='list-group mb-4'>
     {posts.map(item => (
        <li key={item.id} className='list-group-item'>
            {item.title}
        </li>
     ))}
    </ul>
  )
}

export default Posts
