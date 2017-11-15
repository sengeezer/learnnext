import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <p>A boot!</p>
    <Link href="/"><button>Index</button></Link>
  </Layout>
);

export default About;
