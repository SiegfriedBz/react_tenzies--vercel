import { useState } from 'react'
import Button from './shared/Button'

const Form = ({onSubmitText}) => {
    const initInput = { topText: '', bottomText: '', withBorder: true }
    const [input, setInput] = useState(initInput)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setInput(input => (
            { ...input, [name] : type === 'checkbox' ? checked : value }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitText(input)
        setInput(initInput)
    }

    return (
        <form className='my-3' onSubmit={handleSubmit}>
            <div className="d-flex flex-column my-2">
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control mx-2"
                        name="topText"
                        placeholder='Top text...'
                        value={input.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control mx-2"
                        name="bottomText"
                        placeholder='Bottom text...'
                        value={input.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-flex justify-content-center my-2">
                    <input
                        type='checkbox'
                        checked={input.withBorder}
                        onChange={handleChange}
                        name='withBorder'
                        id='withBorder'
                    />
                    <label
                        className='mx-2'
                        htmlFor='withBorder'>Apply a border on image</label>
                </div>
            </div>
            <Button type="submit" className="button">Submit</Button>
        </form>
    )
}

export default Form
