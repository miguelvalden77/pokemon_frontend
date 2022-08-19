// Paquetes
import { Route, Routes } from 'react-router-dom';

//Estilos
import './App.css';

// Pages
import Home from './pages/Home';
import AllPokemons from './pages/pokemons/AllPokemons';
import PokemonDetails from './pages/pokemons/PokemonDetails';
import NotFound from './pages/errors/NotFound';
import Error from './pages/errors/Error';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

// Components
import Navbar from './components/Navbar';
import RandomPokemon from './pages/pokemons/RandomPokemon';
import AllPokemonGames from './pages/pokemons/AllPokemonGames';
import SingleGame from './pages/pokemons/SingleGame';
import PokemonNews from './pages/pokemons/PokemonNews';

function App() {
  return (
    <div className="App">
      
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon/all' element={<AllPokemons/>}/>
        <Route path='/pokemon/:id/details' element={<PokemonDetails/>}/>
        <Route path='/pokemon/random' element={<RandomPokemon/>}/>
        <Route path='/pokemon/games' element={<AllPokemonGames/>}/>
        <Route path='/pokemon/:url/games' element={<SingleGame/>}/>
        <Route path='/pokemon/news' element={<PokemonNews/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

        {/* Errors */}
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/error' element={<Error/>}/>

      </Routes>

    </div>
  );
}

export default App;
