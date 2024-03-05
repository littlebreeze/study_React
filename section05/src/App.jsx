import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
      <Button text={'메일'} color='greenyellow' />
      <Button text={'카페'} />
      <Button text={'블로그'} />
    </>
  );
}

export default App;
