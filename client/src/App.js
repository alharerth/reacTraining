import './App.css';
import { Link } from 'react-router-dom';
import Home from './componants/home';
import News from './componants/news';
import Counter from './componants/counter';
import Namelist from './componants/nameList';
import ProductDetails from './componants/details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home name=" alhareth "/>}/>
      <Route path='news' element={<News/>}/>
      <Route path='counter' element={<Counter/>}/>
      <Route path='namelist' element={<Namelist/>}/>
      <Route path='/details' element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;
