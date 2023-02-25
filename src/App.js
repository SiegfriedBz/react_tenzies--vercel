import { useState, useEffect } from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Form from './components/Form'
import Card from './components/Card'

function App() {
    const initMemeText = { partA: '', partB: '' }
    const [memeText, setMemeText] = useState(initMemeText)
    const [imgUrl, setImgUrl] = useState('')



    const onSubmitText = async (input) => {
        setMemeText(input)
        // fetch img
        setImgUrl()
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <Form onSubmitText={onSubmitText}
                />
                <Card
                    memeText={memeText}
                    imgUrl={imgUrl}/>
            </div>
            <Footer />
        </>
    );
}

export default App;
