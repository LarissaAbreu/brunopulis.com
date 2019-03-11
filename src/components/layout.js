import React from "react"
import Header from "../components/header"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 950, padding: `0 1rem` }}>
    <Header />
    {children}
  </div>
)
