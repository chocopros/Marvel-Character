import React from 'react'

const Card_Characters = ({character}) => {

    console.log(character)
  return (
    <div className="card">

        <h2 className='card-title'>{character?.name}</h2>
        <img src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} alt="" />
        <div className="body-card">
            <p>{character?.description}</p>
        </div>
    </div>
  )
}

export default Card_Characters