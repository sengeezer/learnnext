import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>The Blawg</h1>
    <ul>
      <PostLink title="Hello Next" />
      <PostLink title="This is cool" />
      <PostLink title="And so is this" />
    </ul>
  </Layout>
);
