const Card = ({ memeText, imgUrl }) => {
    return (
        <div className="card mx-auto my-3" style={{'width': '36rem'}}>
            <img src={imgUrl} className="card-img-top" alt="meme image" />
        </div>
        )
}

export default Card
