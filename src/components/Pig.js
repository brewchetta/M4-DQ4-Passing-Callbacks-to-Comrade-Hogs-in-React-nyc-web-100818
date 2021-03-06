import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => {
    return <img className="exclamation" src={exclamation} alt="" />
  }

  panicPigs = () => {
     return this.props.environment === 'inhospitable' ? this.panic() : null
  }

  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {this.panicPigs()}
      </div>
    )
  }
}
