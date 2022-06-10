import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar/Navbar';
import MovieCard from './component/movie_card/MovieCard';
import { ButtonGroup ,Button, Container} from 'react-bootstrap';
import ToggleButton from './component/toggle_button/ToggleButton';
import CategoryView from './component/category-view/CategoryView';
import SearchPoster from './component/search-poster/SearchPoster';
import LeatherBoard from './component/leatherboard/LeatherBoard';

function App() {
  return (
    <div>
      <NavBar/>

<Container>

<SearchPoster></SearchPoster>



<CategoryView></CategoryView>
<CategoryView></CategoryView>

<LeatherBoard></LeatherBoard>

</Container>

    </div>
  );
}

export default App;
