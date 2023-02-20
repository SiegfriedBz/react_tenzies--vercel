const EXPRESS_URL = 'http://localhost:3001/api/notes'

const noteService = () => {

    const myFetch = async (url, method, newData={}) => {
        try{
            const response = await fetch(url, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newData)
                }
                )
            return await response.json()
        } catch(error) {
            console.log(error)
        }
    }

    const getNotes = async () => {
        try{
            const response = await fetch(EXPRESS_URL)
            return await response.json()
        } catch(error) {
            console.log(error)
        }
    }

    const addNote = async (newData) => {
        await myFetch(EXPRESS_URL, 'POST', newData)
    }

    const updateNote = async (id, newData) => {
        await myFetch(`${EXPRESS_URL}/:${id}`, 'PATCH', newData)
    }

    const deleteNote = async (id) => {
        await myFetch(`${EXPRESS_URL}/:${id}`, 'DELETE')
    }

    return { getNotes, addNote, updateNote, deleteNote }
}

export default noteService
