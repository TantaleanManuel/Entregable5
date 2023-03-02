import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState()

  const {id} = useParams();

  const getPercentBar = (stat) => {
    const percent = (stat * 100) / 255
    return `${percent}%`
  }

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/?limit=1154`
    axios.get(URL)
    .then((res) => setPokemon(res.data))
    .catch((err) => console.log(err))
  }, [])
  

  return (
    <main >
      {/* parte superior */}
    <section >
      <section className='Pokemon'>
        <div >
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </div>
      </section>
    </section>
    
       {/* parte inferior o body*/}
    <section className='pokemon_color'>
    <h2 className='pokemon_stats-title'># {pokemon?.id}</h2>
    <h2 className='pokemon_stats-title'>{pokemon?.name}</h2> 

    {/* Box 1 */}
    <div className='pokemon_box1'>
      <div className='pokemon_left'>
      <h4 className='pokemon_title'>{pokemon?.weight}</h4>
      <h5 className='pokemon_title' >Weigth</h5>
      </div>

      <div className='pokemon_rigth'>
        <h4 className='pokemon_title'>{pokemon?.height}</h4>
        <h5 className='pokemon_title'>Heigth</h5>
      </div>
    </div>

    <div className="box2">
      <div >
         <div><h3 className='pokemon_title'>Type</h3></div>
        <div className='pokemon_stats-title'>
        {
           pokemon?.types.map((type) => (
           <div  key={type.type.name}>
            <span><button className="pokemon_button" >{type.type.name}</button></span>
            </div>
        ))}
        </div>
      </div>
      <div>
      <h3 className='pokemon_title'>Abilities</h3>
          <div className='pokemon_stats-title'>
          {
          pokemon?.abilities.map((ability) => (
          <div key={ability.ability.name}>
            <span><button className="pokemon_button" >{ability.ability.name}</button></span>
            </div>
          ))}
          </div>
      </div>
    </div>

    {/* Stats */}
    <section className='pokemon_stats'>
      <h2 className='pokemon_stats-title'>Stats</h2>
      <section className='pokemon_stats-info' >
        {pokemon?.stats.map(stat => (
        <article className='pokemon_stat' key= {stat.stat.name}>
        <div className='pokemon_stat-header'>
          <h4 className='pokemon_stat-name'>{stat.stat.name}</h4>
          <h5 className='pokemon_stat-value'>{stat.base_stat}/255</h5>
        </div>
        <div className='pokemon_stat-bar'>
          <div className='pokemon_stat-barGray'>
            <div className='pokemon_stat-barProgress' style={{width: getPercentBar(stat.base_stat)}}></div>
          </div>
        </div>
      </article>
      ))}
      </section>
    </section>
    </section>
  </main>
  )
}

export default Pokemon