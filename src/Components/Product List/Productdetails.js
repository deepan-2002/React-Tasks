import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import './products.css'

const Productdetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])

    if (!product) {
        return <div>...loading</div>
    }

    return (
        <main className="product-details">
            <div className="container rounded">
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt={product.title} width={'400px'}/>
                    </div>
                    <div className="col-md-6 my-auto">
                        <h2>{product.title}</h2>
                        <h4>₹{product.price}</h4>
                        <h5>{product.category}</h5>
                        <p>{product.description}</p>
                        <h6>Rating: {product.rating.rate}<FontAwesomeIcon icon={faStar} style={{color: "#e5a906",}} /> ({product.rating.count})</h6>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Productdetails