import SideNav from '@/app/ui/dashboard/sidenav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;
