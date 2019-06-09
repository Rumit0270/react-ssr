import Link from 'next/link';
import Image from '../components/Image';

const About = () => {
    return (
        <div style={{ fontSize: '20px', color: 'blue'}}>
            <h1>About Me</h1>
            <Link href="/">
                <button>Back To Home</button>
            </Link>

            <Image />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi et expedita nesciunt! Tempora ducimus non ex, at, iusto eos amet sapiente maxime quas incidunt vero nam, excepturi placeat totam quam!</p>
        </div>
    );
};

export default About;