import React from 'react'
import { Table } from 'react-bootstrap'

export default function ItemCard(props) {
  return (
    <div>
      <Table responsive striped bordered hover variant="dark" >
  <thead>
    <tr>
      <th>Content</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}
