import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>The Blawg</h1>
    <ul>
      <PostLink id="hello-next" title="Hello Next" />
      <PostLink id="this-is-cool" title="This is cool" />
      <PostLink id="and-so-is-this" title="And so is this" />
    </ul>
  </Layout>
);
