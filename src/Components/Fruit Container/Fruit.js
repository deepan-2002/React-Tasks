import { useState } from "react"
import './Fruit.css'

function Fruit() {
    const [grape, setGrape] = useState(0)
    const [apple, setApple] = useState(0)
    return (
        <main className="fruits">
            <h1>I ate {grape} Grapes and {apple} Apples</h1>
            <div className="container d-flex flex-row justify-content-around rounded w-75">
                <div className="grape">
                    <img src="https://freepngimg.com/thumb/grapes/134710-vector-black-grapes-download-hq.png" width={'200px'} /><br/>
                    <button className="btn btn-success" onClick={() => { setGrape(grape + 1) }}>Eat Grape</button>
                </div>
                <div className="apple">
                    <img src="https://pngimg.com/d/apple_PNG12491.png" width={'200px'} /><br/>
                    <button className="btn btn-danger" onClick={() => { setApple(apple + 1) }}>Eat Apple</button>
                </div>
            </div>
        </main>
    )
}
export default Fruit