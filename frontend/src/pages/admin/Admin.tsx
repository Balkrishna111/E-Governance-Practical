import { useNavigate } from "react-router-dom";
import Footer from "../../layouts/footer/Footer";
import Navbar from "../../layouts/navbar/Navbar";
import "./admin.css";
import { useQuery } from "@tanstack/react-query";
import { getReports } from "../../services/apiQuery";
import ReportTableRow from "./ReportTableRow";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Admin = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn !== "true") {
      toast.error("Login to access admin page", { toastId: "admin-error" });
      navigate("/login");
    }
  }, []);

  const { data: reportData } = useQuery({
    queryKey: ["report"],
    queryFn: () => getReports(),
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <div className='w-full p-4 flex justify-end'>
        <button
          className='px-4 py-2 bg-red-600 text-white rounded-lg'
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            navigate("/");
            toast.success("Logged out successfully", {
              toastId: "admin-error",
            });
          }}
        >
          Logout
        </button>
      </div>
      <section className='w-full  px-20 mb-5'>
        <div className='pb-5 text-3xl font-bold underline w-full flex justify-center items-center'>
          Pothole Reports
        </div>
        <table className='table-fixed w-full'>
          <thead>
            <tr className='bg-slate-600 text-white'>
              <th>Reported By</th>
              <th>Location</th>
              <th>Nearest Landmark</th>
              <th>Dimensions</th>
              <th>Actions</th>
            </tr>
          </thead>
          {reportData?.data.length > 0 ? (
            <tbody className='w-full'>
              {reportData?.data.map((item: any) => (
                <ReportTableRow details={item} />
              ))}
            </tbody>
          ) : (
            <h1 className='text-2xl my-5 text-red-600'>No Reports to show</h1>
          )}
        </table>
      </section>
      <div className='fixed bottom-0 left-0'>
        <Footer />
      </div>
    </div>
  );
};
export default Admin;
