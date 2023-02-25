import logo from '../../assets/images/logo192.png'

const Navbar = () => {
    return (
        <div className="nav--wrapper">
            <nav className="navbar">
                <div className="container-fluid">
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            {/*<img src={logo} alt="logo" className="logo" />*/}
                            <span className='nav--title'>Meme Generator</span>
                        </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
