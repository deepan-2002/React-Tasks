import { useState } from "react"
import './Hook.css'

function Hook() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)


    return (
        <main className="hook">
            <div>
                <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681132695/Croma%20Assets/Communication/Mobiles/Images/269892_wm7meq.png" />
                <h6>Added {count1}</h6>
                <button className="btn btn-primary" onClick={()=>{setCount1(count1+1)}}>Add</button>
            </div>
            <div>
                <img src="https://media.croma.com/image/upload/v1666100611/Croma%20Assets/Communication/Mobiles/Images/260094_0_un2ozj.png" />
                <h6>Added {count2}</h6>
                <button className="btn btn-primary" onClick={()=>{setCount2(count2+1)}}>Add</button>
            </div>
            <div>
                <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683554029/Croma%20Assets/Communication/Mobiles/Images/263570_0_xuhw81.png" />
                <h6>Added {count3}</h6>
                <button className="btn btn-primary" onClick={()=>{setCount3(count3+1)}}>Add</button>
            </div>
        </main>
    )
}

export default Hook