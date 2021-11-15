import Navbar from "../comps/Navbar";

const Layout = ({ children }) => {
    return (
        <div className="container px-5 mx-auto">
            <Navbar />
            { children }
        </div>
    );
}
 
export default Layout;