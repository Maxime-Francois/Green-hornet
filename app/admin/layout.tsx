import AdminNav from "../components/admin/AdminNav";


export const metadata = {
  title: "Green-hornet Admin",
  description: "Green-hornet Admin dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav/>
      {children}
    </div>
  );
};

export default AdminLayout;
