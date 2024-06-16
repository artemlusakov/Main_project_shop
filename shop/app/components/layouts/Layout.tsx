import Header from "@/app/components/modules/Header/Header";

const Layout = ({children}:{
  children: React.ReactNode
}) => {
  return (
    <>
      <Header/>
      {children}
    </>
  );
};

export default Layout;
