const Button = (props) => {

    const btnClass = (
        props.className ? props.className : 'btn btn-secondary'
    )

    return (
        <button className={btnClass}>
            {props.children}
        </button>
    )
}

export default Button
