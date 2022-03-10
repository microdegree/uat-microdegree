import { course } from "../../data";
import Link from "next/link";
const Course = () => {
  return (
  
    <section className='my-8'  style={{backgroundColor:"#f1f1f1"}}>
      <h1 className='text-4xl text-center pt-7'>Courses</h1>
      
      <div className='w-10/12 mx-auto mt-8 sm:grid grid-cols-3 gap-3 hidden sm:block' >
        {course.map((courses) => (
          <>
            <a href={courses.url}>
              <div className=' my-5 shadow-xl border border-gray-200 rounded' style={{backgroundColor:"#ffff"}}>
              <div className='rounded'>
              <img src={courses.image} alt='img' style={{width:"500px",height:"230px"}}  />
                  {/* <h1 style={{textAlign:"right",paddingRight:"10px"}} >kannadadalli</h1> */}
                <h1 className='text-xl py-2 text-center' style={{fontWeight:"bold"}}>{courses.name}</h1>
                {/* <h1 className='text-sm py-2'>{courses.course}</h1> */}
                <p className='px-3 text-center' style={{fontSize:"10px"}}>{courses.review}</p>
                <p className='px-3 text-center' style={{fontSize:"15px",marginTop:"5px",color:"#35992C",fontWeight:"bold"}}>{courses.price}</p>
              </div>
           
              <div className='my-2 row'>
                
              <a href= {courses.url}  style={{color:"#9b9b9b",fontSize:"12px",paddingLeft:"10px"}}>
              <i className="fa fa-clock-o" aria-hidden="true"></i> {courses.lessons}
                </a>
            
                <a href= {courses.url} style={{color:"#EB5C74",fontWeight:"bold",float:"right",paddingRight:"10px"}}>
                Enrol Now <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
            
                {/* <a href= {courses.url} style={{color:"",backgroundColor:"purple"}} className='text-center  px-1 py-1 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-3 py-3 text-lg shadow-xl'>
                Enrol Now <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a> */}
              </div>
              
            </div>
            </a>
          </>
        ))}
      </div>

      <div className='w-10/12 mx-auto mt-8 sm:grid grid-cols-3 gap-3 block sm:hidden' >
        {course.map((courses) => (
          <>
          <a href={courses.url}>
            <div className=' my-5 shadow-xl border border-gray-200 rounded' style={{backgroundColor:"#ffff"}}>
              <div className='rounded'>
              <img src={courses.image} alt='img' style={{width:"500px",height:"230px"}}  />
                  {/* <h1 style={{textAlign:"right",paddingRight:"10px"}} >kannadadalli</h1> */}
                <h1 className='text-xl py-2 text-center' style={{fontWeight:"bold"}}>{courses.name}</h1>
                {/* <h1 className='text-sm py-2'>{courses.course}</h1> */}
                <p className='px-3 text-center' style={{fontSize:"10px"}}>{courses.review}</p>
                <p className='px-3 text-center' style={{fontSize:"15px",marginTop:"5px",color:"#35992C",fontWeight:"bold"}}>{courses.price}</p>
              </div>
           
              <div className='my-2 row'>
                
              <a href= {courses.url}  style={{color:"#9b9b9b",fontSize:"12px",paddingLeft:"10px"}}>
              <i className="fa fa-clock-o" aria-hidden="true"></i> {courses.lessons}
                </a>
              
                <a href= {courses.url} style={{color:"#EB5C74",fontWeight:"bold",float:"right",paddingRight:"10px"}}>
                Enrol Now <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
            
                {/* <a href= {courses.url} style={{color:"",backgroundColor:"purple"}} className='text-center  px-1 py-1 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-3 py-3 text-lg shadow-xl'>
                Enrol Now <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a> */}
              </div>
              
            </div>
            </a>
          </>
        ))}
      </div>
      <div className='text-center mt-8'>
        <a href='https://courses.microdegree.work/pages/premium-courses'>
          <a className='text-center px-3 py-3 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-3 py-3 text-lg shadow-xl' style={{backgroundColor:"#EB5C74"}}>
            View More
          </a>
        </a>
      </div>
    </section>

   
  );
};

export default Course;
