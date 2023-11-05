import React, { Component } from 'react'
// import Hero from './hero'

export default class Databe extends Component {
  render() {
    const date = new Date();
    return (
      <>
      {/* <Hero></Hero> */}
      
      <h1>{date}</h1>

      </>
    )
  }
}
