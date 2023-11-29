import { useState } from "react"
import axios from "axios"

function Create() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        mobile: '',
        email: '',
        subscribe: false
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            name: formData.name,
            age: formData.age,
            mobile: formData.mobile,
            email: formData.email,
            subscribe: formData.subscribe
        }

        try {
            await axios.post('https://65210a08a4199548356cbe00.mockapi.io/data', user)
            alert('User data submitted successfully!');

            setFormData({
                name: '',
                age: '',
                mobile: '',
                email: '',
                subscribe: false,
            })
        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting user data.');
        }
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        if (type == 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked
            })
        }
        else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    }


    return (
        <div className="container mt-5">
            <h1>React Bootstrap Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                        Age
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                        Mobile
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email ID
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="subscribe"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="subscribe">
                        Subscribe to Newsletter
                    </label>
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Create