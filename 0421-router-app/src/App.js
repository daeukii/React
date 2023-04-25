import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import NavHeader from './components/NavHeader';
import StoryList from './page/StoryList';


function App() {
  return (
    <div className="App">
      <NavHeader/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/storylist' element={<StoryList/>}/>
        <Route path='/storylist/:name' element={<StoryList/>}/>
      </Routes>

    </div>
  );
}

export default App;
