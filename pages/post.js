import Layout from '../components/Layout.js';
import Markdown from 'react-markdown';

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <div className="markdown">
      <Markdown source={`
        ### This is a title
        Yes. We can have a [link](/link).
        And here's the content.
        `} />
    </div>
    <style jsx global>{`
      .markdown { font-family: 'Arial', sans-serif; }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover { opacity: 0.6; }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
      `}</style>
  </div>
);

export default (props) => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);
