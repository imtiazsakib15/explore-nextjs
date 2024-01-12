
const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold border-b">Header</h1>
      <div className="h-screen">{children}</div>
      <h1 className="text-3xl font-semibold border-t mt-auto">Footer</h1>
    </div>
  );
};

export default Layout;
