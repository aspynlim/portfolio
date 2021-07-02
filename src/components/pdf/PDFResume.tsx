import { Component } from 'react'
import { Document } from 'react-pdf'

export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{ width: 600 }}>
          <Document file="../../dist/pdf/HyejungLim_Resume.pdf"></Document>
        </div>
      </div>
    )
  }
}
