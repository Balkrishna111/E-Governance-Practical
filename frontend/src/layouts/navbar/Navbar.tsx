import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{ minWidth: "100vw", maxWidth: "100vw" }}
      className='px-20 py-6 shadow-sm bg-slate-800 text-white'
    >
      <div className='flex justify-between items-center'>
        <Link to={"/"}>
          <div className='logo text-2xl font-semibold'>
            Pothole Reporting System
          </div>
        </Link>
        <div className='navigation-list'>
          <ul className='flex justify-between items-center gap-10 text-xl'>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/report"}>Create a Report</Link>
            </li>
            <li>
              <Link to={"/admin"}>Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
