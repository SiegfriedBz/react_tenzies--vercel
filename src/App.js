import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Button from './components/Button'

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Hey</h1>
                <Button className='button'>Hey</Button>
            </div>
            <Footer />
        </>
);
}

export default App;
