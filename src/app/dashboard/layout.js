const DashboardLayout = ({ children, users, revenue, notification }) => {
  return (
    <div className="p-6">
      <div>{children}</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="border border-blue-600">{users}</div>
          <div className="border border-blue-600">{revenue}</div>
        </div>
        <div className="border border-blue-600">{notification}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
