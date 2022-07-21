import React from 'react'
import TarjetaPokemon from './tarjetaPokemon/TarjetaPokemon'

const ColeccionPokemones = (props) => {
  return (
    <div className='flex flex-wrap justify-center items-center mt-[30px]'>
    {props.allPokemons.map((pokemon, index) =>             
      <TarjetaPokemon
        
        id={pokemon.id}
        image={pokemon.sprites.other.dream_world.front_default}
        name={pokemon.name}
        type={pokemon.types[0].type.name}
        key={index}
      />              
      )}
    </div> 
  )
}

export default ColeccionPokemones