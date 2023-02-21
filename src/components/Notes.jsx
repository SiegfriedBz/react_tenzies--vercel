import Note from './Note'

const Notes = ({ notes, handleUpdate, handleDelete }) => {

    return (
        <>
            <h1>Notes</h1>
            {notes &&
                <ul>
                    {notes.map(note => {
                            return (
                                <Note
                                    key={note.id}
                                    note={note}
                                    handleUpdate={handleUpdate}
                                    handleDelete={handleDelete}
                                />
                            )
                        }
                    )}
                </ul>
            }
        </>
    )
}

export default Notes
