
import Link from 'next/link';
import { DeviceMobileIcon} from "@heroicons/react/outline";
const Hero = () => {
    return (
        <section className="w-11/12 mx-auto h-h-nav flex flex-col justify-center sm:grid grid-cols-2 gap-2 content-center  ">
          <div className="sm:mx-5">
          <img
            src='/kannada.png'
            alt='logo'
            width={700}
            height={500}
          />
              </div>  
              <div className="sm:self-center">
              {/* <h3  style={{color:"#ED4374",fontSize:"20px",fontWeight:"bold"}}>ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ಧಿಕ ಶುಭಾಶಯಗಳು</h3> */}
              <h3 className="text-2xl font-semibold py-5 sm:text-3xl" style={{color:"#26395f"}}>ಕನ್ನಡಿಗರಿಗೆ IT Job-Ready

                ಮಾಡುವ ಅಭಿಯಾನ</h3>
                <div className="hidden sm:block">
                <div className="mt-3">
              <a href="https://courses.microdegree.work/pages/premium-courses" className=" px-3 py-3 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-3 py-3 text-lg " style={{backgroundColor:"#FFE532",color:"#26395f"}}>View Our Courses</a>
              <a href="https://play.google.com/store/apps/details?id=org.microdegree.com.app.exp" className="ml-4 px-3 py-3 border rounded shadow-xl " style={{borderColor:"#F92F15",color:"#F92F15",backgroundColor:"#ffff",color:"#F92F15"}}><i class="fa fa-download" aria-hidden="true" style={{color:"#F92F15"}}></i>  Download Mobile App</a>
              </div>
              </div>
              <div className="block sm:hidden">
              <div className="mt-3">
              <a href="https://courses.microdegree.work/pages/premium-courses" className=" px-3 py-3 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-3 py-3 text-lg " style={{backgroundColor:"#FFE532",color:"#26395f",fontSize:"10px"}}>View Our Courses</a>
              <a href="https://play.google.com/store/apps/details?id=org.microdegree.com.app.exp" className="ml-4 px-3 py-3 border rounded shadow-xl " style={{borderColor:"#F92F15",color:"#F92F15",backgroundColor:"#ffff",color:"#F92F15",fontSize:"10px"}}><i class="fa fa-download" aria-hidden="true" style={{color:"#F92F15"}}></i>  Download Mobile App</a>
              </div>
              </div>
              </div>
        </section>
    )
}

export default Hero
