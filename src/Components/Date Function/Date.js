import './Date.css'

function Coursedate() {

    let dateFunction = () => {
        let courseDate = document.getElementById('courseDate').value
        let date = new Date(courseDate)
        date.setDate(date.getDate() + 90)
        let outputEl = document.getElementById('output')
        outputEl.textContent = `Course Ending Date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    return (
        <main className="date">
            <section className="container text-bg-dark w-25 text-center py-5 bg-gradient rounded">
                <h5>Input Course Starting Date: </h5>
                <input type="date" id="courseDate" className='p-1 mx-2' />
                <button className="btn btn-success" onClick={dateFunction}>Get Date</button>
                <h5 id="output" className='mt-4'></h5>
            </section>
        </main>
    )
}

export default Coursedate