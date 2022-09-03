import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
