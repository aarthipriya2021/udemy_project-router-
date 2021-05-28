import React from 'react';
import { Link} from 'react-router-dom';

export const Products = () => {
    return (
        <section>
            <h2>Product page</h2>
            <ul>
                <li>
                    <Link to='/products/p1'>Realme</Link>
                </li>
                <li>
                    <Link to='/products/p2'>Redmi</Link>
                </li>
                <li>
                    <Link to='/products/p3'>Apple</Link>
                </li>
            </ul>
            
        </section>
    )
}

export default Products ;
