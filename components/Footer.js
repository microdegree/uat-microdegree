import Link from "next/link";

const Footer = () => {
  return (
    <section className='mt-10 bg-white-100  shadow' style={{boxShadow:"2px 2px 15px #000000"}}>
      <div className='w-10/12 mx-auto sm:grid grid-cols-4 gap-1'>
        <div className='my-5   py-5' style={{textAlign:"start",color:"#062A42"}}>
          <h1 className='text-2xl uppercase' style={{fontWeight:"bold",color:"#062A42"}}>Company</h1>
          <div className='my-5'>
            <h1 className='py-2 text-xl'>
              <a href="https://pages.microdegree.work/about.html" style={{textDecoration:"none"}} target="_blank">About us</a></h1>
            <h1 className='py-2 text-xl'>
            <a href="https://pages.microdegree.work/termsnconditions.html" style={{textDecoration:"none"}} target="_blank">Terms & Conditions</a></h1>
            <h1 className='py-2 text-xl'>
              <a href="https://courses.microdegree.work/pages/premium-courses" style={{textDecoration:"none"}} target="_blank">Courses</a></h1>
          </div>
        </div>
        <div className='my-5 py-5'  style={{textAlign:"start",color:"#062A42"}}>
          <h1 className='text-2xl uppercase' style={{fontWeight:"bold",color:"#062A42"}}>Students</h1>
          <div className='my-5'>
            <h1 className='py-2 text-xl'>
            <a href="https://pages.microdegree.work/scholarship.html" style={{textDecoration:"none"}} target="_blank">Scholarship</a></h1>
            <h1 className='py-2 text-xl'>
            <a href="https://courses.microdegree.work/pages/free" style={{textDecoration:"none"}} target="_blank">Free Courses</a></h1>
            <h1 className='py-2 text-xl'>
            <a href="https://t.me/microdegreekannada" style={{textDecoration:"none"}} target="_blank">Community</a></h1>
            <h1 className='py-2 text-xl'>
            <a href="./register" style={{textDecoration:"none"}} target="_blank">Enquiry Form</a></h1>
          </div>
        </div>
        <div className='my-5  py-5'  style={{textAlign:"start",color:"#062A42"}}>
          <h1 className='text-2xl uppercase' style={{fontWeight:"bold",color:"#062A42"}}>Get In Touch</h1>
          <div className='my-5'>
            <h1 className='py-2 text-xl'>Phone : +91 83108 82795</h1>
            <h1 className='py-2 text-xl'>Email : hello@microdegree.work</h1>
            <h1 className='py-2 text-xl'>
              Pillpouch Healthtech Private Limited K-tech Innovation Hub 3rd
              Floor, Plama Building Bejai, Mangaluru , Karnataka 575004.
            </h1>
          </div>
        </div>
        <div className='my-5 py-5' >
          <div className='px-2 pt-1 mx-3 cursor-pointer text-center'>
            <center><a href='/'>
              <img
                src='/md-logo.png'
                alt='logo'
                width={250}
                height={140}
              />
              
            </a></center>
          </div>
          <center>
          <div className='flex justify-center '>
            <div className='text-2xl px-3 border border-gray-500 rounded-full h-10 w-10 flex items-center justify-center mx-2'>
              <a href="https://www.facebook.com/MicroDegree-101072281390361/?modal=admin_todo_tour "><i className='fa fa-facebook' /></a>
            </div>
            <div className='text-2xl px-3 border border-gray-500 rounded-full mx-2 rounded-full h-10 w-10 flex items-center justify-center'>
              <a href="https://www.youtube.com/channel/UCu8l4v6xqQd8LfOfd0kMPsA"><i className='fa fa-youtube' /></a>
            </div>
            <div className='text-2xl px-3 border border-gray-500 rounded-full mx-2 rounded-full h-10 w-10 flex items-center justify-center'>
            <a href="https://www.linkedin.com/company/microdegree/?viewAsMember=true"><i className='fa fa-linkedin' /></a>
            </div>
            <div className='text-2xl px-3 border border-gray-500 rounded-full mx-2 rounded-full h-10 w-10 flex items-center justify-center'>
            <a href="https://www.instagram.com/microdegree.work/?hl=en"><i className='fa fa-instagram' /></a>
            </div>
          </div>
          </center>
        </div>
       
      </div>
      <div style={{textAlign:"center",width:"100%",marginTop:"-30px"}}>
          
         <center> <img
                  src='/unnamed.png'
                  alt='logo'
                  width={400}
                  height={150}
                /></center>
                <h6 style={{color:"#000",fontSize:"12px",paddingBottom:"6px"}}>© MicroDegree 2021 All rights reserved.</h6>
          
                </div>
    </section>
  );
};

export default Footer;
