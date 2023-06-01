import * as React from 'react';
import { connect } from 'react-redux';
import { Product } from '../../models/Product';
import AddItemForm from './AddItemForm';
import './table.css'

export const Table = () => {

  const [window, setWindow] = React.useState(false);

  const handleWindow = () => {
    setWindow(!window)
  }

  return(
    <div className='container'>
      <table className="table table-hover ">
        <thead className='thead-dark '>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Count</th>
            <th scope="col">Photo</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Function</th>
            <th scope="col"><button className='btn btn-light' onClick={handleWindow}>add product</button></th>
          </tr>
        </thead>
        <tbody>
          <Product/>
        </tbody>
      </table>
      {window && <AddItemForm/>}
    </div>
  )
}

connect()(Table);
