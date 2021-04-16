import './Nav.css'
import NavItem from './NavItem'



export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="#/" icon="home" title="Inícios"></NavItem>

            <NavItem href="#/users" icon="users" title="Usuários"></NavItem>
        </nav>
    </aside>