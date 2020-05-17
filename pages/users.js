import Link from 'next/link';
// use this library because we make api calls on server now
import fetch from 'isomorphic-unfetch';

const Users = (props) => {

    return (
        <div>
            <Link href="/">
                <button> Back to Home </button>
            </Link>
            <h1>Users</h1>
            <div>
                {
                    props.users.map(user => 
                        <li key={user.id}>
                            <Link href={`users/${user.id}`} >
                            <button>{ user.name }</button>
                            </Link>
                        </li>  
                      
                    )
                }
            </div>
        </div>
    );
};

Users.getInitialProps = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        users: data
    }
}

export default Users;