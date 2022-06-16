import logo from './logo.svg';
import './App.css';
import './style/global-style.css'
import MovieCard from './component/movie_card/MovieCard';
import { ButtonGroup, Button, Container } from 'react-bootstrap';
import ToggleButton from './component/toggle_button/ToggleButton';
import CategoryView from './component/category-view/CategoryView';
import SearchPoster from './component/search-poster/SearchPoster';
import LeatherBoard from './component/leatherboard/LeatherBoard';
import MovieDetails from './view/movie-details/MovieDetails';
import Login from './view/login/Login';
import Signup from './view/sign-up/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './view/home/Home';
import ListView from './view/list-view/ListView';
import { NavBar } from './component/navbar';
import Footer from './component/footer/Footer';
import Search from './view/search/Search';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuthStatus } from './redux/action/auth-action';
import Dicussion from './view/dicussion/Dicussion';
import dicussion from './assets/json/dicussions.json';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAuthStatus());

    var localDicussion = localStorage.getItem('dicussion');
    if(localDicussion == null){
      localStorage.setItem('dicussion', JSON.stringify(dicussion));
    }    
  })


  return (
    <div>
      <NavBar />
      <div className='route-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="details/:type/:id" element={<MovieDetails />} />
          <Route path="list/:type/:filter" element={<ListView />} />
          <Route path="search/:query" element={<Search />} />
          <Route path="dicussion" element={<Dicussion />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
