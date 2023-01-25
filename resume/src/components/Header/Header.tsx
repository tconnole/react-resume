import { Link, useLocation } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import './Header.css';


const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    borderRadius: '3rem',
}

const menuLinkStyle = {
    border: '0.1rem black solid',
    padding: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderRadius: '3rem',
    textDecoration: 'none',
    color: 'black',
    width: '70%',
    alignText: 'center',
}

function Header() {
    const location = useLocation();

    const selected = (link: string) => {
        return location.pathname.includes(link) ? ' selected-link' : ''
    }

    return (
        <div className="container">
            <div className="user">
                <img src='https://media.licdn.com/dms/image/C4E03AQGKAfaG09Kx_g/profile-displayphoto-shrink_800_800/0/1534289422413?e=1680134400&v=beta&t=IYnFL92hX0e-j-CI78-hPhwfJdl3urdBAnhfuFanFOY' className="image"/>
                <div className='title'>
                    <h3>THOMAS CONNOLE</h3>
                    <div className="spacer"></div>
                    <h3 className="job">SOFTWARE ENGINEER</h3>
                </div>
                <div className="menu-button">
                    <NavMenu>
                        <Link style={menuLinkStyle} to='experience'>EXPERIENCE</Link>
                        <Link style={menuLinkStyle} to='projects'>PROJECTS</Link>
                        <Link style={menuLinkStyle} to='contact'>CONTACT INFORMATION</Link>
                    </NavMenu>
                </div>
            </div>
            <div className="links">
                <Link style={linkStyle} to='experience'>
                    <div className='link-container'><h4 className={'link' + selected('experience')}>EXPERIENCE</h4></div>
                </Link>
                <Link style={linkStyle} to='projects'>
                    <div className='link-container'><h4 className={'link' + selected('project')}>PROJECTS</h4></div>
                </Link>
                <Link style={linkStyle} to='contact'>
                    <div className='link-container'><h4 className={'link' + selected('contact')}>CONTACT INFORMATION</h4></div>
                </Link>
            </div>
            <div className="page-labels">
                <h1 style={{display: selected('experience') ? '': 'none'}}>WORK EXPERIENCE</h1>
                <h1 style={{display: selected('project') ? '': 'none'}}>PROJECTS</h1>
                <h1 style={{display: selected('contact') ? '': 'none'}}>CONTACT INFORMATION</h1>
            </div>
        </div>
    );
  }
  
  export default Header;  