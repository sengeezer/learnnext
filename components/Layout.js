import Header from './Header';

const layoutStyle = {
  margin: 15,
  padding: 15,
  border: '1px solid #ccc'
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
