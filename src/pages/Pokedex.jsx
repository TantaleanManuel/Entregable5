import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokedex/PokemonCard'
import usePokedex from '../hooks/usePokedex'
import "./styles/Pokedex.css"


const Pokedex = () => {
  const nameTrainer = useSelector(store => store.nameTrainer)

  const {handleSubmit, 
    handleChangeSelect, 
    types, 
    pokemonsInPage, 
    handleNextPage, 
    handlePreviousPage,
    setCurrentPage,
    pagesInBlock,
    lastPage
  } = usePokedex() 
  
  return (
    <main style={{maxWidth: "1400px", margin:"20px auto" }}>
    <p><span> Welcome {nameTrainer},</span> here you can find information about your favorite pokemon</p>
    <form onSubmit={handleSubmit}>
      <div>
      <input type="text" id='pokemonName' placeholder='search your pokemon' />
        <button>Search</button>
      </div>
      <select onChange={handleChangeSelect} >  
        <option value="">All</option>
        {
           types.map(type => <option key={type.url}> {type.name}</option>)
        }
      </select>
    </form>
      <section className='Pokedex_pagina'>
      {  
        pokemonsInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
        
      }
      </section >
        <section >
        <ul >
        <button className='Pokedex_numeros'>
          <li  onClick={handlePreviousPage}><button>{"<<"}</button>  </li>
          <li   onClick={() => setCurrentPage()} ></li>
       
        {
        pagesInBlock.map(page => <li onClick={() => setCurrentPage(page)} key={page}>{page}</li> )
        } 
       
        <li  onClick={() => setCurrentPage(lastPage)}> <button>{">>"}</button>  </li>
        </button>
        <li  onClick={handleNextPage}></li>
        </ul>
        </section>
    </main>
  )
}

export default Pokedex