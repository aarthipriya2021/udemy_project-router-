import React from 'react';
import { useParams} from 'react-router-dom';

export const ProductDetails = () => {
    const params = useParams();

    console.log(params.productId);

    return (
        <section>
            <h2>Product Detail</h2>
            <p>{params.productId}</p>
        </section>
    )
}

export default ProductDetails
