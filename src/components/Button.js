const Button = ({children, className='btn btn-secondary', ...rest}) => {

    return (
        <button className={className} {...rest}>
            {children}
        </button>
    )
}

export default Button
