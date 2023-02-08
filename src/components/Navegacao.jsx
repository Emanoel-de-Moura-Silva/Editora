import React from 'react'
import { NavLink } from "react-router-dom"

let linkCorrente = {
  color: '#027399'
};

export default function Navegacao() {
  return (
   <ul>
    <li>
      <NavLink exact activeStyle={linkCorrente} to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to='/frontend'>FrontEnd</NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to='/programacao'>Programação</NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to='/design'>Design</NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to='/catalogo'>Catalago</NavLink>
    </li>
   </ul>
  )
}
