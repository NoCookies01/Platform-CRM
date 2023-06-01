import React, { useContext, useState } from 'react';
import './table.css'
import { ProductContext } from '../context/ProductContext';

function AddItemForm() {
    const [item, setItem] = useState({
        Count: 0,
        Image: '',
        Title: '',
        Price: 0
    });

    const { addProduct } = useContext(ProductContext)!;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const copy = {...item};
        copy.Count = Number(copy.Count);
        copy.Price = Number(copy.Price);

        addProduct(copy)
    };

    return (
        <div className='form-spacing'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Image"
                    value={item.Image}
                    onChange={handleInputChange}
                    placeholder="Image"
                    className="form-control"
                />
                <input
                    type="text"
                    name="Count"
                    value={item.Count}
                    onChange={handleInputChange}
                    placeholder="Count"
                    className="form-control"
                />

                <input
                    type="text"
                    name="Title"
                    value={item.Title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    className="form-control"
                />

                <input
                    type="text"
                    name="Price"
                    value={item.Price}
                    onChange={handleInputChange}
                    placeholder="Price"
                    className="form-control"
                />
                {/* Other input fields */}
                <button type="submit" className='btn btn-dark'>Submit</button>
            </form>
        </div>
    );
}

export default AddItemForm;