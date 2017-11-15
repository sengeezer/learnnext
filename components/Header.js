import Link from 'next/link';

const plainLinkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={plainLinkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={plainLinkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
