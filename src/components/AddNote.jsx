import { useState } from "react"
import Button from './shared/Button'

const AddNote = ({ handleAdd }) => {
    const initNote = { content: " ", important: false }
    const [note, setNote] = useState(initNote);

    const handleChange = (e) => {
        if(e.target.id === 'content') {
            setNote({...note, content: e.target.value})
        } else {
            setNote({...note, important: !note.important})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(note.content) {
            handleAdd({note})
            setNote(initNote)
        } else {
            alert('content can not be empty')
        }
    }

    return (
        <>
            <h1>Add note</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        value={note.content}
                        onChange={handleChange}
                        placeholder="Enter content" />
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="important"
                        checked={note.important}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="important">Check me out</label>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </>
    )
}

export default AddNote
