import "./Navbar.css"
import avatar from "../../assets/avatar.png"

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fas fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="produtos">Produtos</a>
                <a href="usuarios">Usuários</a>
                <a href="admin" className="active_link">Admin</a>
            </div>

            <div className="navbar__right">
                <a href="pesquisa">
                    <i className="fas fa-search"></i>
                </a>
                <a href="relogio">
                    <i className="far fa-clock"></i>
                </a>
                <a href="avatar">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;