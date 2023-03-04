import React from 'react'
import { useDispatch } from 'react-redux';
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice';
import "./styles/Home.css"

const Home = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {  
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(setNameTrainerGlobal(nameTrainer));

  };

  return (
    <main >
      <section className='Home'>
        <div className='img' >
          <img   src="/images/pokedex.png" alt="" />
          </div>
          <h2 >Hello trainer!</h2>
          <p >Give me your name to start!</p>
          <form  onSubmit={handleSubmit}>
            <input  required
            id="nameTrainer" 
            type="text" 
            placeholder='your name...'
            />
            <button className='Home_buttom'>Start</button>
          </form>
          <footer  ></footer>
      </section>

    </main>
  )
}

export default Home