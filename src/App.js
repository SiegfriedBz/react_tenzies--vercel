import { useEffect } from 'react'
import useResourceService from './services/resourceService'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Button from './components/Button'

function App() {
    const { resource, getResource, addResource, updateResource, deleteResource } = useResourceService()

    useEffect(() => {
        (async () => {
            await getResource()
        })()
    }, [])

    console.log(resource)

    const handleAdd = async() => {
        await addResource({
            content: "note from react",
            id: 2,
            important: true
        })
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Hey</h1>
                <Button className='button'>Hey</Button>
                <Button onClick={handleAdd}>Hey</Button>
            </div>
            <Footer />
        </>
    );
}

export default App;
