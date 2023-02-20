import { useState, useEffect } from 'react'
import noteService from './services/noteService'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Button from './components/Button'

function App() {
    const initNotes = {}
    const [notes, setNotes] = useState(initNotes)
    const { getNotes, addNote, updateNote, deleteNote } = noteService()

    useEffect(() => {
        (async () => {
            const data = await getNotes()
            setNotes(data)
        })()
    }, [])

    const handleAdd = async() => {
        const data = await addNote({
            content: "note from react",
            id: 2,
            important: true
        })
        setNotes(data)
    }

    const handleUpdate = async (id, newData) => {
        let note = notes.find(n => n.id === id)
        note = {...note, ...newData}
        const data = await updateNote({
            content: "note from react",
            id: 2,
            important: true
        })
        setNotes(data)
    }

    const handleDelete = () => {

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
