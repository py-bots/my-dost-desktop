const Layout = ({ children }) => {
    return (
      <>
        <nav>
          <h2>Nav Logo</h2>
          {/* more navbar code here */}
        </nav>
        <main>{children}</main>
      </>
    );
  };
  
export default Layout;