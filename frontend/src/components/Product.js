import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card className="shadow p-3 mb-5 bg-light rounded my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="h5">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text  as="div">
                    {product.brand}
                </Card.Text>

                <Card.Text  as="div">
                    <div className="my-3 ">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text  as="div">
                    Rs {product.price}
                </Card.Text>
               
            </Card.Body>
        </Card>
    )
}

export default Product
