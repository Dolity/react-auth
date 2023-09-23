import { useState } from 'react'
import { Navigate } from 'react-router-dom';


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/v1/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        });
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/login" />
    }

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>


                <div className="form-floating">
                    <input className="form-control" placeholder="Name" required
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Name</label>
                </div>

                <div className="form-floating">
                    <input type="email" className="form-control" placeholder="name@example.com" required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>

                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default Register