import Dice from './Dice'

const Dices = ({dices, selectDice, selectedValue}) => {

    return (
            <div className="dices-grid-wrapper">
                <div className='dices-grid-container'>
                    {dices && dices.map(dice => {
                        return (
                            <Dice
                                className='dices-grid-item'
                                key={dice.id}
                                dice={dice}
                                selectDice={selectDice}
                                selectedValue={selectedValue}
                            />
                        )
                    })}
                </div>
            </div>
        )
}

export default Dices


