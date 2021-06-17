const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#0A2A66'}}>
      <div className="container-fluid">
        <a className="navbar-brand h1 my-0" href="#">
          {/* <img src="brand-logo.svg" className="d-inline-block align-text-top"> */}
          QPED
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <a className="nav-link" href="index.html">Início</a>
            <a className="nav-link" href="topicos.html">Tópicos</a>
            <a className="nav-link" href="#">Sobre</a>
            <a className="nav-link" href="#">Ajuda</a>
          </ul>
          <span className="navbar-text">
            Questões para Estrutura de Dados
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;