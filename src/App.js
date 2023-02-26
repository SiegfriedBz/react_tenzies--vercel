import { useState, useEffect } from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Dices from './components/Dices'
import Button from './components/shared/Button'

const initialDices = [
    {id: 1, value: undefined, isSelected: false},
    {id: 2, value: undefined, isSelected: false},
    {id: 3, value: undefined, isSelected: false},
    {id: 4, value: undefined, isSelected: false},
    {id: 5, value: undefined, isSelected: false},
    {id: 6, value: undefined, isSelected: false},
    {id: 7, value: undefined, isSelected: false},
    {id: 8, value: undefined, isSelected: false},
    {id: 9, value: undefined, isSelected: false},
]

function App() {

    const [dices, setDices] = useState(initialDices)
    const [selectedValue, setSelectedValue] = useState(undefined)

    useEffect(() => {
        rollDices()
    }, [])

    const selectValue = (value) => {
        if(typeof selectedValue === "undefined") {
            setSelectedValue(value)
        }
    }

    const selectDice = (id, value) => {
        selectValue(value)
        const updatedDices = dices.map(dice => {
            return (
                {...dice, isSelected: dice.id !== id ? dice.isSelected : true}
            )
        })
        setDices(updatedDices)
    }

    const isGameOver = () => {
        return dices
            .filter(dice => dice.isSelected)
            .length === dices.length
    }

    const rdm = () => Math.floor(Math.random() * dices.length)

    const rollDices = () => {
        let updatedDices
        if(isGameOver()) {
            setSelectedValue(undefined)
            updatedDices = initialDices.map(dice => {
                return (
                    {...dice, value: rdm()}
                )
            })
        } else {
            updatedDices = dices.map(dice => {
                return (
                    {...dice, value: dice.isSelected ? dice.value : rdm()}
                )
            })
        }
        setDices(updatedDices)
    }

    const btnText = isGameOver() ? 'Restart Game' : 'Roll'

    return (
        <>
            <Navbar />
            <div className="container">
                <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
                    <Dices
                        dices={dices}
                        selectDice={selectDice}
                        selectedValue={selectedValue}
                    />
                    <Button
                        onClick={rollDices}
                        className='btn btn-primary w-50 my-1'
                    >{btnText}</Button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
