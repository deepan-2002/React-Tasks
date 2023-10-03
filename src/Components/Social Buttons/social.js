import './Social.css'

function Social() {
    return (
        <main className="social">
            <div>
                <h1>Social Buttons</h1>
                <div className='btn-container'>
                    <button className='btn btn-warning'>Like</button>
                    <button className='btn btn-light'>Comment</button>
                    <button className='btn btn-primary'>Share</button>
                </div>
            </div>
        </main>
    )
}

export default Social