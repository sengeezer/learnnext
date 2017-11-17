import Link from 'next/link';
import Layout from '../components/Layout';

function getPosts() {
  return [
    {
      id: 'hello-next',
      title: 'Hello Next',
    },
    {
      id: 'this-is-cool',
      title: 'This is cool',
    },
    {
      id: 'and-so-is-this',
      title: 'And so is this',
    },
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>

  <style jsx>{`
    li {
      list-style: none;
      margin: 5px 0;
    }

    a {
      font-family: "Arial", sans-serif;
      text-decoration: none;
      color: blue;
    }

    a:hover { opacity: 0.6; }
  `}</style>
  </li>
);

export default () => (
  <Layout>
    <h1>The Blawg</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
    <style jsx>{`
      h1 { font-family: "Arial", sans-serif; }

      ul { padding: 0; }
    `}</style>
  </Layout>
);
