import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/home/:query' element={<Home />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </ThemeProvider>


  );
}

export default App;
