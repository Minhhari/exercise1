import logo from './logo.svg';
import './App.css';
import Counter from './ex1';
import ProfileForm from './ex2';
import ProductSelector from './ex3';
import ProductRadio from './ex4';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="mt-4">
      {/* <Counter /> */}
      {/* <ProfileForm /> */}
      {/* <ProductSelector /> */}
      <ProductRadio />
    </Container>
  );
}

export default App;