import React, { useEffect, useState } from 'react';

export default function Characters(props) {
	const { characters, setCharacters } = props
  
  const resetCharacters = () => {
    setCharacters(null)
  }

  return (
      <div className='characters'>
  			<h1>Personajes</h1>
        <span className='back-home' onClick={resetCharacters}>Volver a la Home</span>
        <div className='container-characters'>
          {characters.map((ch, i) => (
            <div className='character-container' key={i}>
              <div>
                <img src={ch.image} alt={ch.name} />
              </div>
              <div>
                <h3>{ch.name}</h3>
                <h6>
                  {ch.status === 'Alive' ? (
                    <>
                      <span className='alive' />
                      Alive
                    </>
                  ) : (
                    <>
                      <span className='dead'/>
                      Dead
                    </>
                  )}
                </h6>
                <p className='text-grey'><span>Episodios: </span>
                    <span>{ch.episode.length}</span>
                </p>
                <p>
                    <span className='text-grey'>Especie: </span>
                    <span>{ch.species}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <span className='back-home' onClick={resetCharacters}>Volver a la Home</span>
      </div>
  )
}
