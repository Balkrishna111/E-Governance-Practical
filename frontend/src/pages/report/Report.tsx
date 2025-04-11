import { toast } from "react-toastify";
import Footer from "../../layouts/footer/Footer";
import Navbar from "../../layouts/navbar/Navbar";
import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getReports, uploadReport } from "../../services/apiQuery";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
    },
  });

  const formData = new FormData();

  const { mutate: postReport } = useMutation({
    mutationFn: () => uploadReport(formData),
    onSuccess: (data: any) => {
      navigate("/");
      toast.success("Report Filed Successfully", {
        toastId: "report-response",
      });
    },
    onError: (data: any) => {
      toast.error(data.response.data.message, { toastId: "report-response" });
    },
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path} className='list-disc'>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [fullName, setFullName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [landmark, setLandmark] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<number>(98);
  const [length, setLength] = useState<number | null>(null);
  const [breadth, setBreadth] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Append text fields
    formData.append("name", fullName || "");
    formData.append("email", email || "");
    formData.append("potholeLocation", location || "");
    formData.append("nearestLandmark", landmark || "");
    formData.append("phoneNumber", phoneNumber?.toString() || "");
    formData.append("length", length?.toString() || "");
    formData.append("breadth", breadth?.toString() || "");
    // formData.append("images", acceptedFiles);

    // Append each image with the same key: "images"
    acceptedFiles.forEach((file) => {
      formData.append("images", file);
    });
    // const imagePaths = acceptedFiles.map((file) => file.path);
    // formData.append("images", acceptedFiles);
    // acceptedFiles.forEach((file) => {
    //   formData.append("images", file); // 👈 key name matches Multer setup
    // });
    const nepaliPhoneRegex = /^(?:\+977[- ]?)?(98\d{8})$/;

    if (!nepaliPhoneRegex.test(phoneNumber)) {
      toast.error("Invalid phone number");
      return;
    } else {
      if (acceptedFiles.length > 0 && acceptedFiles.length <= 3) {
        postReport();
      } else {
        toast.error("Form field error");
      }
    }
  };

  useEffect(() => {
    console.log(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <>
      <Navbar />
      <section className=' mx-20 flex-col py-10 justify-center items-center'>
        <div>
          <h1 className='text-5xl font-bold mb-5'>Create a report</h1>
          <form
            action=''
            className='grid grid-cols-1 md:grid-cols-2 gap-8'
            onSubmit={handleSubmit}
          >
            <div>
              <div className='form-group flex flex-col justify-center items-start mb-4'>
                <label className='text-lg'>
                  Full Name: <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Full Name'
                  required
                  onChange={(e) => setFullName(e.target.value)}
                  className='border rounded-sm px-3 py-1 w-full'
                />
              </div>
              <div className='form-group flex flex-col justify-center items-start mb-4'>
                <label htmlFor='name' className='text-lg'>
                  Email:<span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  placeholder='E-Mail'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className='border rounded-sm px-3 py-1 w-full'
                />
              </div>
              <div className='form-group flex flex-col justify-center items-start mb-4'>
                <label htmlFor='name' className='text-lg'>
                  Phone Number:<span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  required
                  placeholder='Phone Number'
                  pattern='^(?:\+977[- ]?)?(98\d{8})$'
                  onChange={(e) => setPhoneNumber(Number(e.target.value))}
                  id='name'
                  className='border rounded-sm px-3 py-1 w-full'
                />
              </div>
              <div className='form-group flex flex-col justify-center items-start mb-4'>
                <label htmlFor='name' className='text-lg'>
                  Pothole Location:<span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Location'
                  required
                  onChange={(e) => setLocation(e.target.value)}
                  id='name'
                  className='border rounded-sm px-3 py-1 w-full'
                />
              </div>
              <div className='form-group flex flex-col justify-center items-start mb-4'>
                <label htmlFor='name' className='text-lg'>
                  Nearest Landmark from pothole:
                  <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Landmark'
                  required
                  onChange={(e) => setLandmark(e.target.value)}
                  id='name'
                  className='border rounded-sm px-3 py-1 w-full'
                />
              </div>

              <div className=' flex flex-col justify-center items-start'>
                <h4 className='text-lg mb-3'>
                  Approximate size of pothole in inches:
                </h4>
                <div className='flex items-center justify-between gap-5 w-full'>
                  <div className='form-group flex flex-col justify-center items-start mb-4 w-full'>
                    <label>Length:</label>
                    <input
                      type='number'
                      placeholder='Length'
                      required
                      id='name'
                      onChange={(e) => setLength(Number(e.target.value))}
                      className='border rounded-sm px-3 py-1 w-full'
                    />
                  </div>
                  <div className='form-group flex flex-col justify-center items-start mb-4 w-full'>
                    <label>Breadth:</label>
                    <input
                      type='number'
                      placeholder='Breadth'
                      required
                      id='name'
                      onChange={(e) => setBreadth(Number(e.target.value))}
                      className='border rounded-sm px-3 py-1 w-full'
                    />{" "}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='form-group flex flex-col justify-center items-start mb-4'>
                <label htmlFor='name' className='text-lg'>
                  Upload Images:
                  <span className='text-red-500'>*</span>{" "}
                  <i className='text-slate-600 text-sm'>(3 images at most)</i>
                </label>
                <div
                  {...getRootProps({
                    className:
                      "dropzone border flex justify-center items-center py-15 w-full rounded-xl mt-3",
                  })}
                >
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </div>
              <aside>
                <h4>Selected Images:</h4>
                <ul className='ps-20 mt-5'>{files}</ul>
              </aside>
            </div>

            <div className='my-2 w-full col-span-2 flex justify-center items-center mt-5'>
              <button
                type='submit'
                className='bg-slate-800 text-white w-1/4 py-2 rounded-sm cursor-pointer'
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Report;
