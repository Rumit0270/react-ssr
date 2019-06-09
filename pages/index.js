import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Hello world</h1>
        <Link href="/about">
            <a>About</a>
        </Link>
        
        <br/>
        <Link href="/about">
            <button>About Me</button>
        </Link>

        <Link href="/users">
            <button> Users </button>
        </Link>
    </div>
);

export default Index;
