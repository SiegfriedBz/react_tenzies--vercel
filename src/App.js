import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Dices from './components/Dices'
import Button from './components/shared/Button'

function App() {

    let initialDices = []
    for(let i = 0; i < 9; i += 1) {
        initialDices.push(
        {id: i, value: undefined, isSelected: false}
        )
    }

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

    const rdm = () => Math.floor(Math.random() * 7)

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
                <div className='game-wrapper'>
                    {isGameOver() &&
                        <Confetti
                            width={window.innerWidth || 300}
                            height={window.innerHeight || 200}
                        />
                    }
                    <Dices
                        dices={dices}
                        selectDice={selectDice}
                        selectedValue={selectedValue}
                    />
                    <Button
                        onClick={rollDices}
                        className='btn-play'
                    >{btnText}</Button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
