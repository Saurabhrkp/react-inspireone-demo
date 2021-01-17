import { Container, Row } from 'react-bootstrap';

import NavBar from './components/NavBar';
import Sales from './components/Sales';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Sales />
          <Demo />
        </Row>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
