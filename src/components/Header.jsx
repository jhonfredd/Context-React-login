import '../App.css';


const Header = ({ isDarkTheme, setIsDarkTheme }) => {
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <nav className="navbar navbar-dark bg-dark border-bottom border-body">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand mb-0 h1"></span>
        <span className="navbar-brand mb-0 h1">Agenda de Contactos</span>
        <div className="d-flex align-items-center">
          <button style={{ top: '5px', position: 'static' }} className="btn btn-primary toggle-button" onClick={toggleTheme}>
            Cambiar Tema
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header;