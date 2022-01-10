import React from 'react'


function Footer({setStatus, status}) {

    return (
        <div>
            <footer className="footer">
            {/* <!-- This should be `0 items left` by default --> */}
          

            <ul className="filters">
                <li>
                    <a onClick={() => {setStatus("All")}} className={status == "All" && "selected"}>All</a>
                </li>
                <li>
                    <a onClick={() => {setStatus("active")}} className={status == "active" && "selected"} >Active</a>
                </li>
                <li>
                    <a onClick={() => {setStatus("completed")}} className={status == "completed" && "selected"} >Completed</a>
                </li>
            </ul>

            {/* <!-- Hidden if no completed items are left ↓ --> */}

            </footer>


            <footer className="info">
            <p>Created by <a href="https://relre.dev">relre</a></p>
            </footer>
        </div>
    )
}

export default Footer
