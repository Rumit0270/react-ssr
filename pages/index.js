import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Hello world</h1>
        <a href="/about">About</a>
        <br/>
        <Link href="/about">
            <a>About Me</a>
        </Link>
    </div>
);

export default Index;
