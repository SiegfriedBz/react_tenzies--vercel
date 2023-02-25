import { useState } from 'react'
import Button from './shared/Button'

const Form = ({onSubmitText}) => {
    const initInput = { textTop: '', textBottom: '' }
    const [input, setInput] = useState(initInput)

    const handleChange = (e) => {
        setInput({...input, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitText(input)
        setInput(initInput)
    }

    return (
        <form className='my-3' onSubmit={handleSubmit}>
            <div className="d-flex my-3">
                <input
                    type="text"
                    className="form-control mx-2"
                    id="textTop"
                    placeholder='Enter text...'
                    value={input.textTop}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form-control mx-2"
                    id="textBottom"
                    placeholder='Enter text...'
                    value={input.textBottom}
                    onChange={handleChange}
                />
            </div>
            <Button type="submit" className="button">Submit</Button>
        </form>
    )
}

export default Form
