import * as React from 'react';
import IProduct from './IProduct';
import { ProductContext } from '../components/context/ProductContext';
import { useContext } from 'react';

export const Product = () => {
  const { products, fetchProducts, deleteProduct, orderProduct } = useContext(ProductContext)!;

  const handleDelete = (id: number) => {
    deleteProduct(id)
  }

  const handleOrder = (product: IProduct) => {
    orderProduct(product)
  }

  React.useEffect(() => {
    fetchProducts()
  }, []);

  const viewProducts = products.map((p, id) => {
    return(
      <tr key={id}>
        <th scope="row">{p.id}</th>
        <td>{p.count}</td>
        <td><img src={p.image} className='rounded'/></td>
        <td>{p.title}</td>
        <td>{p.price}$</td>
        <td><button className='btn btn-dark' onClick={() => handleOrder(p)}>Order</button></td>
        <td><button className='btn btn-dark' onClick={() => handleDelete(p.id)}>Delete</button></td>
      </tr>
    )
  })

  return (
    <>
      {viewProducts}
    </>
  );
}
