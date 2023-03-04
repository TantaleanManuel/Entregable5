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
    <main  style={{maxWidth: "1400px", margin:"20px auto" }}>
    <p className='Pokedex_mensaje' ><span> Welcome {nameTrainer},</span> here you can find information about your favorite pokemon</p>
    <form className='caja' onSubmit={handleSubmit}>
      <div className='caja1'>
        <input  type="text" id='pokemonName' placeholder='search your pokemon' />
        <button>Search</button>
      </div  >
      <select className='caja2' Pokedex_search onChange={handleChangeSelect} >  
        <option  Pokedex_search value="">All</option>
        {
           types.map(type => <option   key={type.url}>  {type.name}</option>)
        }
      </select>
    </form>


      <section className='Pokedex_pagina'>
      {  
        pokemonsInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
        
      }
      </section >

        <section >
        <ul className='Pokedex_numero'>
                 <li  onClick={handlePreviousPage}><button  className='Pokedex_button' >{ "<<"} </button> </li>
          <li   onClick={() => setCurrentPage()}></li>
          
        {
        pagesInBlock.map(page => <li  onClick={() => setCurrentPage(page)} key={page}>{page}</li> )
        } 
       
        <li  onClick={() => setCurrentPage(lastPage)}> <button className='Pokedex_button'>{">>"}</button> </li>
        <li  onClick={handleNextPage}></li>
        </ul>
        </section>
    </main>
  )
}

export default Pokedex