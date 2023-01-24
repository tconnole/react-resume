import './NavMenu.css';
import { useState } from "react";

export interface NavMenuProps {
    children: JSX.Element[]
}

function NavMenu(props: NavMenuProps) {
    const [open, setOpen] = useState(false);

    return (
      <div className="nav-menu-container">
        <a className='icon' style={{display: open ? 'none' : 'block'}} onClick={() => setOpen(true)}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <rect x="12" y="12" width="0.01" height="0.01" stroke="#ffffff" stroke-width="3.75" stroke-linejoin="round"></rect> <rect x="12" y="5" width="0.01" height="0.01" stroke="#ffffff" stroke-width="3.75" stroke-linejoin="round"></rect> <rect x="12" y="19" width="0.01" height="0.01" stroke="#ffffff" stroke-width="3.75" stroke-linejoin="round"></rect> <defs><rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"></rect></defs> </g></svg>
        </a>
        <div className="cover" onClick={() => setOpen(false)} style={{right: open ? '0' : '-100vw'}}>
            <div className='panel' style={{right: open ? '0' : '-90vw', opacity: open ? '1': '0'}}>
                {props.children}
            </div>
        </div>
        <a className='icon' style={{display: open ? 'block' : 'none'}} onClick={() => setOpen(false)}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0f0f0f"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <g> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs><rect width="24" height="24" fill="white"></rect> </defs> </g></svg>
        </a>
      </div>
    );
  }
  
  export default NavMenu;