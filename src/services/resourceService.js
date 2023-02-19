import { useState } from 'react'

const EXPRESS_URL = 'http://localhost:3001/api'

const useResourceService = () => {
    const initResource = {}
    const [resource, setResource] = useState(initResource)

    const myFetch = async (url, method, newData={}) => {
        console.log('in myFetch')
        try{
            const response = await fetch(url, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newData)
                }
                )
            const data = await response.json()
            setResource(data)
        } catch(error) {
            console.log(error)
        }
    }

    const getResource = async () => {
        try{
            const response = await fetch(EXPRESS_URL)
            const data = await response.json()
            setResource(data)
        } catch(error) {
            console.log(error)
        }
    }

    const addResource = async (newData) => {
        console.log('in addResource')
        await myFetch(EXPRESS_URL, 'POST', newData)
    }

    const updateResource = async (newData) => {
        const id = newData.id
        await myFetch(`${EXPRESS_URL}/:${id}`, 'PATCH', newData)
    }

    const deleteResource = async (id) => {
        await myFetch(`${EXPRESS_URL}/:${id}`, 'DELETE')
    }

    return { resource, getResource, addResource, updateResource, deleteResource }
}

export default useResourceService
