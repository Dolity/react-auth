import { Link } from 'react-router-dom'

function Nav({ name, setName }) {
    const logout = async () => {
        await fetch('http://localhost:8000/api/v1/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Origin': 'http://localhost:3000',
            },
            credentials: 'include',
        });

        setName('');
    }

    let menu;
    console.log("nav: " + name);


    if (name === '' || name === undefined || name === null) {
        console.log('name is empty');

        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link " >Login</Link>
                </li>

                <li className="nav-item active">
                    <Link to="/register" className="nav-link" >Register</Link>
                </li>
            </ul>

        )
    } else {
        console.log('have name');
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link" onClick={logout} >Logout</Link>
                </li>
            </ul>

        )
    }



    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Re Go JWT</Link>



                <div>

                    {menu}

                </div>
            </div>
        </nav >
    )
}


export default Nav