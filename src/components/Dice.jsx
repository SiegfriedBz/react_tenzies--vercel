import Button from './shared/Button'
import clsx from 'clsx'

const Dice = ({dice, selectDice, selectedValue}) => {
    const { id, value, isSelected } = dice

    const diceClass = clsx('btn-dice', {
        'btn-selected': isSelected,
    })

    const valueClass = clsx({
        'selected-value': isSelected,
    })

    return (
            <Button
                className={diceClass}
                disabled={selectedValue && selectedValue !== value}
                onClick={() => selectDice(id, value)}
            >
                <span className={valueClass}>{value}</span>
            </Button>
        )
}

export default Dice
