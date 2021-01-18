import Navbar from './components/Navbar';
import Video from './components/Video';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='container my-4'>
        <div className='row justify-content-between'>
          <Video />
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
