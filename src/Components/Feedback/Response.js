import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Response() {
    return (
        <main className="feedback">
            <section className="container">
                <div className="heart">
                    <FontAwesomeIcon icon={faHeart} style={{ color: "#c20505", }} />
                </div>
                <div>
                    <h3>Thank You!</h3>
                </div>
                <div>
                    <p>We will use your feedback to improve our customer support performance.</p>
                </div>
            </section>
        </main>
    )
}
export default Response