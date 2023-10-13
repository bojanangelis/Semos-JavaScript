import React, { Component } from 'react'

export default class Header extends Component {
    constructor(){
        super()
        this.state = {favoriteColor: 'red'}
    }

  render() {
    return (
      <div>
        {this.state.favoriteColor}
      <br/>
        <button>change color</button>
      </div>
    )
  }
}
