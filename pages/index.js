import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <p>Hello thurr</p>
    <Link href="/about"><a style={{ fontSize: 14 }}>About</a></Link>
  </Layout>
);

export default Index;
