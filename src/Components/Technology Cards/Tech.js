import './Tech.css'

function Tech() {
    return (
        <main className="tech">
            <section className='container'>
                <h1>Learn 4.0 Technologies</h1>
                <p>Get trained by alumni of IITs and top companies like Amazon, Microsoft, intel,Nvidia, Qualcomm, etc. Learn directly from professionals involved in Product Development.</p>

                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card data">
                            <div class="card-body">
                                <h5 class="card-title">Data Scientist</h5>
                                <p class="card-text">Data Scientist gather and analyze sets of structured and unstructured data</p>
                                <div className='text-end'>
                                    <img src='https://assets.ccbp.in/frontend/react-js/data-scientist-img.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card iot">
                            <div class="card-body">
                                <h5 class="card-title">IOT Developer</h5>
                                <p class="card-text">IOT Developer are professionals who can develop, manage and monitor IoT Devices</p>
                                <div className='text-end'>
                                    <img src='https://assets.ccbp.in/frontend/react-js/iot-developer-img.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card vrdevelop">
                            <div class="card-body">
                                <h5 class="card-title">VR Developer</h5>
                                <p class="card-text">A VR developer creates completely new digital environments that people can see.</p>
                                <div className='text-end'>
                                    <img src='https://assets.ccbp.in/frontend/react-js/vr-developer-img.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mlEngineer">
                            <div class="card-body">
                                <h5 class="card-title">ML Engineer</h5>
                                <p class="card-text">Machine Learning engineers feed data into models defined by data scientists.</p>
                                <div className='text-end'>
                                    <img src='https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Tech