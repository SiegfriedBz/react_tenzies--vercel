import { useState } from 'react'
import Button from './shared/Button'

const Form = ({onSubmitText}) => {
    const initInput = { partA: '', partB: '' }
    const [input, setInput] = useState(initInput)

    const handleChange = (e) => {
        setInput({...input, [e.target.id] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await onSubmitText(input)
        setInput(initInput)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex my-3">
                <input
                    type="text"
                    className="form-control mx-2"
                    id="partA"
                    value={input.partA}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form-control mx-2"
                    id="partB"
                    value={input.partB}
                    onChange={handleChange}
                />
            </div>
            <Button type="submit" className="button">Submit</Button>
        </form>
    )
}

export default Form
