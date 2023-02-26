import { useState, useEffect } from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Form from './components/Form'
import Card from './components/Card'

const API_URL = 'https://api.imgflip.com/get_memes'

function App() {
    const [allMemeImages, setAllMemeImages] = useState([])
    const [meme, setMeme] = useState({
        url: '',
        topText: '',
        bottomText: '',
        withBorder: true
    })

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(API_URL)
                const data = await response.json()
                if(data.success) {
                    setAllMemeImages(data.data.memes)
                } else {
                    console.log(`status: ${data.success}`)
                    return
                }
            } catch(error) {
                console.log(error)
            }
        })()
    }, [])

    const onSubmitText = (input) => {
        if (allMemeImages) {
            const rdm = Math.floor(Math.random() *  allMemeImages.length)
            setMeme({
                url: allMemeImages[rdm].url,
                topText: input.topText ,
                bottomText: input.bottomText,
                withBorder: input.withBorder
            })
        } else { return }
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <main>
                    <Form onSubmitText={onSubmitText} />
                    <Card meme={meme} />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default App;
