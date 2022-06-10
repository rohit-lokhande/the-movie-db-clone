import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import '../../styles/navbar.css'


function NavDropdown(props) {

  const [options, setOptions] = useState();
  useEffect(() => {
    let options = props.links.map((link) =>
      <a href={link.herf}>{link.title}</a>
    );
    setOptions(options);
  }, []);

  return (
    <div className="dropdown">
      <Nav.Link className="dropbtn">{props.title}</Nav.Link>
      <div className="dropdown-content">
        {options}
      </div>
    </div>
  )
}

export class DropdownItem {
  constructor(title, herf) {
    this.title = title;
    this.herf = herf;
  }
}

export default NavDropdown;