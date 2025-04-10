import { useLocation } from "react-router-dom";
import Footer from "../../layouts/footer/Footer";
import Navbar from "../../layouts/navbar/Navbar";

const ReportDetails = () => {
  const location = useLocation();
  const { details } = location.state;
  console.log(details);
  return (
    <div>
      <Navbar />

      <div className='px-20 py-10'>
        <div className='mb-5 mt-3'>
          <h1 className='text-4xl mb-10 font-semibold underline'>
            Reporter's Details
          </h1>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl font-semibold'>Reporter's Name:</p>
              <p className='text-xl'>{details.name}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl font-semibold'>Reporter's Email:</p>
              <p className='text-xl'>{details.email}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl font-semibold'>Reporter's Phone number:</p>
              <p className='text-xl'>{details.phoneNumber}</p>
            </div>
          </div>
        </div>
        <div className='mb-5 mt-3'>
          <h1 className='text-4xl mb-10 mt-5 font-semibold underline'>
            Pothole Details
          </h1>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl font-semibold'>Pothole location:</p>
              <p className='text-xl'>{details.potholeLocation}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl font-semibold'>
                Nearest landmark from pothole:
              </p>
              <p className='text-xl'>{details.nearestLandmark}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-2xl font-semibold'>
                Approximate size of pothole:
              </p>
              <div className='flex justify-start gap-6 items-center w-full'>
                <p className='text-xl'>Length: {details.length}"</p>
                <p className='text-xl'>Breadth: {details.breadth}"</p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
        <div className='mb-5 mt-3'>
          <h1 className='text-4xl mb-10 mt-5 font-semibold underline'>
            Pothole Images
          </h1>
          <div className='flex justify-start gap-4 w-full'>
            {details.images.map((image: string) => (
              <div style={{ height: "200px" }} className='p-2 border'>
                <img
                  src={`http://localhost:3000/${image}`}
                  alt=''
                  className='h-full w-full'
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ReportDetails;
