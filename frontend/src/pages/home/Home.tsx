import Footer from "../../layouts/footer/Footer";
import Navbar from "../../layouts/navbar/Navbar";
import heroImage from "../../assets/2.jpg";
import howItWorks from "../../assets/how-it-works.svg";
import whyUs from "../../assets/why-us.jpeg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className='grid grid-cols-3 gap-4 px-20 my-5'>
        <div className=' col-span-2'>
          <h1 className='text-3xl font-bold my-5'>
            Helping Build Safer Roads, One Report at a Time
          </h1>
          <br />
          <p className='text-xl'>
            Potholes aren't just an inconvenience—they're a danger to drivers,
            bikers, and pedestrians. Our mission is to make Nepal's roads safer
            and smoother by giving you the power to report potholes directly to
            the authorities.
          </p>
          <br />
          <p className='text-xl'>
            Whether you're walking in Kathmandu, riding through Pokhara, or
            driving anywhere across the country, you can now report potholes in
            seconds.
          </p>
        </div>
        <div className='w-full '>
          <img src={heroImage} alt='hero-image' className=' h-75' />
        </div>
      </section>
      <section className='px-20 my-10 bg-slate-200 py-5 grid grid-cols-3'>
        <div className='col-span-2'>
          <h1 className='text-3xl font-bold my-4'>How it works?</h1>
          <ul>
            <li className='list-disc text-xl font-semibold'>
              Spot a pothole on your route?
            </li>
            <li className='list-disc text-xl font-semibold'>
              Take a photo and note the location.
            </li>
            <li className='list-disc text-xl font-semibold'>
              Submit a report through our simple online form.
            </li>
            <li className='list-disc text-xl font-semibold'>
              Track progress as your report is reviewed and addressed.
            </li>
          </ul>
        </div>
        <div className='col-span-1'>
          <img src={howItWorks} alt='' className='h-50' />
        </div>
      </section>
      <section className='px-20 my-10 py-5 grid grid-cols-3'>
        <div className='col-span-2'>
          <img src={whyUs} alt='' className='h-50' />
        </div>
        <div className='col-span-1 flex flex-col justify-center items-start'>
          <h1 className='text-3xl font-bold my-4'>Why use this platform?</h1>
          <ul>
            <li className='list-disc text-xl font-semibold'>
              Fast & Easy Reporting
            </li>
            <li className='list-disc text-xl font-semibold'>
              Help Your Community
            </li>
            <li className='list-disc text-xl font-semibold'>
              Improve Road Safety
            </li>
            <li className='list-disc text-xl font-semibold'>
              Be a Part of the Solution
            </li>
          </ul>
        </div>
      </section>
      <section className='px-20 mt-10 py-5 grid grid-cols-3 bg-slate-200'>
        <div className='col-span-1 flex justify-start items-center'>
          <h1 className='text-4xl font-bold my-4'> Ready to Report?</h1>
        </div>
        <div className='col-span-2 flex flex-col justify-center items-start'>
          <h3 className='text-2xl font-bold'>
            Click below to file your first pothole report. It only takes a
            minute.
          </h3>

          <h2 className='text-xl font-semibold'>
            Together, let's make Nepal's roads safer for everyone.
          </h2>
          <div className='flex w-full justify-end items-center'>
            <button
              onClick={() => navigate("/report")}
              className='me-40 px-5 py-2 bg-slate-900 text-white rounded-md mt-5 cursor-pointer'
            >
              Report Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Home;
