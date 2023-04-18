import React from 'react'

const Bootstrap = () => {
  return (
    <div>
        <h1>Bootstrap Example</h1>
        <div className="row">
            <form action="" className="col-md-4 offset-2">
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control mt-1" id="email" />
                </div>
                <button className="btn btn-info mt-3">Blue Color</button>
            </form>
        </div>

    </div>
  )
}

export default Bootstrap