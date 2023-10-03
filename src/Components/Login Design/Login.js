import './Login.css'

function Login() {
    return (
        <main className='login'>
            <section className='login-section text-center rounded'>
                <div>
                    <img src='https://www.ucartz.com/img/ssl/ssl-certificates-ucartz.png' width={'300px'} />
                </div>
                <div>
                    <h3>Member Login</h3>
                    <input type='text' placeholder='Enter Your Email' />
                    <br />
                    <input type='password' placeholder='Enter Your Password'/>
                    <br />
                    <button className='btn btn-success'>Login</button>
                    <p>Forgot <span className='text-success'>Username/Password</span></p>
                    <p className='text-success'>Create account</p>

                </div>
            </section>
        </main>
    )
}

export default Login