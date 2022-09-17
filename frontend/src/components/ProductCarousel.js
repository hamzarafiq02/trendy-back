// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { Carousel, Image } from 'react-bootstrap'
// import Loader from './Loader'
// import Message from './Message'
// import { listTopProducts } from '../actions/productActions'

// function ProductCarousel() {
//     const dispatch = useDispatch()

//     const productTopRated = useSelector(state => state.productTopRated)
//     const { error, loading, products } = productTopRated

//     useEffect(() => {
//         dispatch(listTopProducts())
//     }, [dispatch])

//     return (loading ? <Loader />
//         : error
//             ? <Message variant='danger'>{error}</Message>
//             : (
//                 <Carousel pause='hover' className='bg-dark'>
//                     {products.map(product => (
//                         <Carousel.Item key={product._id}>
//                             <Link to={`/product/${product._id}`}>
//                                 <Image src={product.image} alt={product.name} fluid />
//                                 <Carousel.Caption className='carousel.caption'>
//                                     <h4>{product.name} (${product.price})</h4>
//                                 </Carousel.Caption>
//                             </Link>
//                         </Carousel.Item>
//                     ))}
//                 </Carousel>
//             )

//     )
// }

// export default ProductCarousel



import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function ProductCarousel() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="\images\Banner12.jpeg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="\images\Banner13.jpeg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="\images\Banner1.png"
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default ProductCarousel
