import React from 'react'

function List({listItems}) {
  return (
    <>
      {listItems.map(x => {
        const {id, name} = listItems
        console.log(name)
        return ( 
          
          <article key={id} className='grocery__itemContainer'>
          <p className="grocery__item">{name}</p>
           </article>
        )
      })}
    </>
  )
}

export default List
