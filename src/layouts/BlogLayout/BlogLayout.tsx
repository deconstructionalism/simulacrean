import { Outlet } from "react-router";
import NavBar from "../../components/NavBar";

const BlogLayout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default BlogLayout;
