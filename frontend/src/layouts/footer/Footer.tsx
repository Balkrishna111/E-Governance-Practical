const Footer = () => {
  return (
    <div
      style={{ maxWidth: "100vw", minWidth: "100vw" }}
      className='px-20 py-4 flex justify-between items-center bg-slate-800 text-white'
    >
      <p>
        Online Pothole Reporting System &copy; {new Date().getFullYear()} - All
        Rights Reserved.
      </p>
      <p>Developed By: Balkrishna Gautam - 28164 - ASCOL</p>
    </div>
  );
};
export default Footer;
