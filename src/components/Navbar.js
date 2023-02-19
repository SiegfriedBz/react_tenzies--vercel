import logo from '../assets/images/logo192.png'

const Navbar = () => {
    return (
        <div className="nav--wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid px-1">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link ps-0 active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown"
                                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Link
                                </a>
                                <ul className="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarScrollingDropdown">
                                    <li className='ps-1'><a className="nav-link" href="#">Action</a></li>
                                    <li className='ps-1'><a className="nav-link" href="#">Another action</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
