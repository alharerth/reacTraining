import './App.css';

import Home from './componants/home';
import News from './componants/news';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='news' element={<News/>}/>
    </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;
