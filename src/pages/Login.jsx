import { useState } from 'react'
import { Navigate } from 'react-router-dom';

function Login({ setName }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e) => {
        console.log("submit: " + redirect);

        e.preventDefault();

        const res = await fetch('http://localhost:8000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Origin': 'http://localhost:3000',
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            }),
        });
        const content = await res.json();

        setRedirect(true);
        setName(content.name);
        console.log("login: " + content.name, redirect);
    }

    if (redirect) {
        console.log("redirect -> /");
        return <Navigate to="/" />
    }

    return (

        <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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

                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            </form>
        </main>

    )
}

export default Login