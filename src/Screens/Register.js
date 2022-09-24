export default function Register() {
    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <h1>Register</h1>
                <div className="card p-4">
                    <form action="/action_page.php">
                        <div className="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="email"/>
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" id="pwd"/>
                        </div>
                        <div className="form-group form-check">
                        </div>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div> 
        </div>
        
    )
}