import Navbar from "../comps/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            { children }
        </>
    );
}
 
export default Layout;