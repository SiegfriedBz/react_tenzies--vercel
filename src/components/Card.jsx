const Card = ({ meme }) => {
    const { url, textTop, textBottom } = meme

    return (
            <>
                {url && textTop && textBottom &&
                    <div className="card--wrapper">
                        <img src={url} class='card--img' alt="meme image" />
                        <span className='card--userTextTop'>{textTop}</span>
                        <span className='card--userTextBottom'>{textBottom}</span>
                    </div>
                }
            </>
        )
}

export default Card
