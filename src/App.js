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
import UpdatePostForm from './pages/pokemons/UpdatePostForm';
import Profile from "./pages/user/Profile"
import CreateComments from './components/CreateComments';
import IsPrivate from './components/IsPrivate';
import NonUser from './components/NonUser';

function App() {

  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<IsPrivate> <Profile /> </IsPrivate>} />
        <Route path='/pokemon/all' element={<AllPokemons />} />
        <Route path='/pokemon/:id/details' element={<IsPrivate> <PokemonDetails /> </IsPrivate>} />
        <Route path='/pokemon/random' element={<IsPrivate> <RandomPokemon /> </IsPrivate>} />
        <Route path='/pokemon/games' element={<IsPrivate> <AllPokemonGames /> </IsPrivate>} />
        <Route path='/pokemon/:url/games' element={<IsPrivate> <SingleGame /> </IsPrivate>} />
        <Route path='/pokemon/news' element={<IsPrivate><PokemonNews /></IsPrivate>} />
        <Route path='/pokemon/:id/news' element={<IsPrivate><UpdatePostForm /></IsPrivate>} />
        <Route path='/register' element={<NonUser><Register /></NonUser>} />
        <Route path='/login' element={<NonUser><Login /></NonUser>} />

        {/* Errors */}
        <Route path='/*' element={<NotFound />} />
        <Route path='/error' element={<Error />} />

      </Routes>

    </div>
  );
}

export default App;
