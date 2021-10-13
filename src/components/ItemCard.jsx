import React from 'react'
import { Table } from 'react-bootstrap'

export default function ItemCard(props) {
  return (
    <div>
      <Table responsive striped bordered hover variant="light" >
  <thead>
    <tr>
      <th className="contentWidth">Content</th>
      <th className="priceWidth" >Price</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <td>{props.text}</td>
      <td>{props.price}</td>
    </tr>

  </tbody>
</Table>
    </div>

  )
}
