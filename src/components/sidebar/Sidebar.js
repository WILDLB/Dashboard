import './Sidebar.css';
import logo from '../../assets/logo.png';


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return(
        <div className= {sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">

            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                        <h1>WBarbosa</h1>
                </div>
                <i onClick={() => closeSidebar()} className="fas fa-times" id="sidebarIcon" aria-hidden="true" />                  
            </div>  

                <div className="sidebar__menu">
                    <div className='sidebar__link active_menu_link'>
                        <i class='fas fa-minus-square' />
                        <a href='home'>Home</a>
                    </div>
                    <h2>ADMIN</h2>
                    <div className='sidebar__link'>
                        <i class='fas fa-tachometer-alt' />
                        <a href='adm'>Área administrativa</a>
                    </div>
                    <div className='sidebar__link'>
                        <i class='fas fa-building' />
                        <a href='adm'>Lojas</a>
                    </div>
                    <div className='sidebar__link'>
                        <i class='fas fa-archive' />
                        <a href='adm'>Produtos</a>
                    </div>
                    <div className='sidebar__link'>
                        <i className='fas fa-bars'></i>
                        <a href='adm'>Categorias</a>
                    </div>
                    <div className='sidebar__link'>
                        <i className='fas fa-utensils'></i>
                        <a href='adm'>Pedidos</a>
                    </div>
                    <h2>PESSOAS</h2>
                    <div className='sidebar__link'>
                        <i className='fa fa-male'></i>
                        <a href='adm'>Administradores</a>
                    </div>
                    <div className='sidebar__link'>
                        <i className='fa fa-user-circle'></i>
                        <a href='adm'>Usuários</a>
                    </div>
                    <div className='sidebar__link'>
                        <i className='fas fa-money-check-alt'></i>
                        <a href='adm'>Pagamentos e Custos</a>
                    </div>
                    <div className='sidebar__link'>
                        <i className='fas fa-tasks'></i>
                        <a href='adm'>A Plataforma</a>
                    </div>
                    <div className='sidebar__link'>
                        <i className='fas fa-file-alt'></i>
                        <a href='adm'>Política de Privacidade</a>
                    </div>
                    <div className='sidebar__logout'>
                        <i className='fas fa-power-off'></i>
                        <a href='adm'>Log out</a>
                    </div>
                </div>
        </div>
    )
}

export default Sidebar;