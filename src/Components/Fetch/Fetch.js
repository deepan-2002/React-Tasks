import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Card } from "react-bootstrap"
import './Fetch.css'

const Fetch = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=5')
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                console.error('Error Fetching Data: ', error)
            })
    })

    return (
        <main className="fetch">
            <div className="container text-center p-4">
                <h1>Products</h1>
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <Card style={{ width: '18rem', boxShadow: '4px 4px 5px #ccc'}} className="h-100 p-2">
                                <Card.Img variant="top" src={product.image} style={{ height: '250px' }} className="p-3" />
                                <Card.Body style={{borderTop: '1px solid #aaa'}}>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        ₹ {product.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </main >
    )
}

export default Fetch