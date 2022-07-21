import { Types } from 'pokenode-ts'
import React from 'react'
import Type from './Type'

const TypeList = ({selectedPokemonDetails}) => {
  return (
    <div className="flex">
        {selectedPokemonDetails?.types?.map((types, index) => 
            <Type
                type={types}
                index={index}
            />
            )}
            
    </div>
  )
}

export default TypeList