import React, { createContext, useState, useEffect, ReactNode } from 'react';
import IProduct from '../../models/IProduct';
import { AddProduct, DeleteProduct, GetAll, OrderProduct, ProceedOrder } from '../../data/productFunctions';

interface ProductContextProps {
  products: IProduct[];
  fetchProducts: () => void;
  deleteProduct: (id: number) => void;
  addProduct: (product: any) => void;
  orderProduct: (product: IProduct) => void;
}

export const ProductContext = createContext<ProductContextProps | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    GetAll().then((res) => {
        setProducts(res.data.sort((a, b) => b.count - a.count));
    })      
    .catch(e => {
      console.error(e);
    });
  }

  const deleteProduct = (id: number) => {
    DeleteProduct(id)
    .then(() => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    })
    .catch((error) => {
        console.error(error);
    });
  }

  const addProduct = (product: any) => {
    AddProduct(product)
    .then(response => {
      const updatedProducts = [...products, ...response.data];
      console.log(updatedProducts, response.data, response)
      setProducts(updatedProducts);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const orderProduct = (product: IProduct) => {
    OrderProduct(product)
        .then(_ => {
          const updatedProduct = product;
          updatedProduct.count -= 1;
          setProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((p) =>
              p.id === updatedProduct.id ? updatedProduct : p
            );
            ProceedOrder(product)
            .then(a => console.log('succes'))
            .catch(error => console.log("Error on sending", error));

            return updatedProducts;
          });
        })
        .catch((error) => {
          console.error(error);
        });

       
  };

  const contextValue: ProductContextProps = {
    products,
    fetchProducts,
    deleteProduct,
    addProduct,
    orderProduct
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};