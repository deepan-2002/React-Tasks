import { Link } from 'react-router-dom'
import './Feedback.css'

function Feedback() {
    return (
        <main className="feedback">
            <section className="container">
                <h3>How satisfied are you with our customer support performance?</h3>
                <div className='emoji-container'>
                    <div>
                        <Link to='/response'>
                            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/48909/sad-but-relieved-face-emoji-clipart-xl.png" alt="sad" width={'100px'} />
                            <p>Sad</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/response'>
                            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55321/neutral-face-emoji-clipart-md.png" alt="neutral" width={'100px'} />
                            <p>Neutral</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/response'>
                            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/48463/slightly-smiling-face-emoji-clipart-xl.png" alt="happy" width={'100px'} />
                            <p>Happy</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Feedback