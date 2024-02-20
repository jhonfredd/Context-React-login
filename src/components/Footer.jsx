import React from 'react'

const Footer = () => {
    return (
        <nav className='navbar navbar-dark bg-dark border-bottom border-body'>
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <span className="navbar-brand mb-0 h1"> Jhon Freddy - &copy; {new Date().getFullYear()} </span>
            </div>
        </nav>

    )
}

export default Footer
