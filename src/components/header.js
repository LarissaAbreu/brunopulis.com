import React from "react"
import { Link } from "gatsby"

const Item = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default props => (
  <header style={{ marginBottom: `1.5rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>brunopulis</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <Item to="/about/">Sobre</Item>
      <Item to="/portfolio/">Portfolio</Item>
      <Item to="/blog/">Blog</Item>
      <Item to="/talks/">Talks</Item>
      <Item to="/a11y/">Acessibilidade</Item>
    </ul>
  </header>
)
