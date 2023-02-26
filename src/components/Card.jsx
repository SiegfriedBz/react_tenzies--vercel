import clsx from 'clsx'

const Card = ({ meme }) => {
    const { url, topText, bottomText, withBorder } = meme

    const cardWrapperClass = clsx( 'd-flex justify-content-center card--wrapper', {
        'card--wrapper-border': withBorder
    })

    return (
            <>
                {url && topText && bottomText &&
                    <div className={cardWrapperClass} >
                        <img src={url} className='card--img' alt="meme image" />
                        <h1 className='card--topText'>{topText}</h1>
                        <h1 className='card--bottomText'>{bottomText}</h1>
                    </div>
                }
            </>
        )
}

export default Card
