//rafce
// import React from 'react'
// const StudentProfile = ({ grade, name, program }) => {
//   return (
//     <div>
//       <h2>Student Profile</h2>
//       <p>Name: {name}</p>
//       <p>Grade: {grade}</p>
//       <p>Program: {program}</p>
//       <p>
//       </p>
//     </div>
//   )
// }
// export default StudentProfile

//rcc (react class component)
import React, { Component } from 'react'

export default class StudentProfile extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.grade}
        {this.props.program}
      </div>
    )
  }
}

