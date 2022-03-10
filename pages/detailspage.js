import {curriculums} from '../data';
import {useState} from 'react'

import Curriculum from '../components/Curriculum';

import {studentData} from '../data'
import Slider  from 'react-slick'



const details = () => {
  const [responsive, setResponsive] = useState(true)

  var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4.6775,
      slidesToScroll: 1,
      cssEase: "linear",
      arrows:true,
      className:"slides"
    };

    var settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1.59,
      slidesToScroll: 1,
      cssEase: "linear",
      arrows:true,
      className:"slides"
    };
    return (
      <div>
      <div className="hidden sm:block mx-auto">
      <section className="my-8">
           
            <div className="w-10/12 mx-auto mt-8 sm:grid grid-cols-2 justify-items-center">
          
           <div className="my-7">
               <h1 className="text-3xl py-5 font-semibold" style={{color:"#26395f",fontSize:"45px"}} >Python Live Course</h1>
               <p className="text-gray-700 py-2" style={{color:"#26395f",fontSize:"25px"}}>ಬನ್ನಿ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಅನ್ನು ಸುಲಭವಾಗಿ ಕನ್ನಡದಲ್ಲಿ ಕಲಿಯೋಣ.</p>
               <p className="text-gray-700 py-2" style={{color:"#26395f",fontSize:"20px"}}>3 Weeks | 7 PM to 9 PM | Batch Starts July 15th</p>
               <div className="mt-4">
               <a href="https://courses.microdegree.work/users/sign_in"><a className=" px-2 py-2 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-2 text-lg" style={{backgroundColor:"#07A872",borderRadius:"30px"}}>Enquiry : 8310882795</a></a>
               &nbsp;&nbsp;&nbsp;<a href="https://courses.microdegree.work/users/sign_in" ><a className=" px-2 py-2 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-2 text-lg" style={{backgroundColor:"#1D9BF0",borderRadius:"30px"}}>Enrol at ₹1,500 ₹15,000</a></a>
               </div>
           </div>

           <div>
               <iframe src="https://www.youtube.com/embed/01qSumyUrpU"  className="w-iframemob h-iframemob sm:w-iframeweb h-iframeWeb"></iframe>
           </div>

           </div>
        </section>

        <section className="my-12" style={{backgroundColor:"#"}}>
        <h1 className='text-4xl text-center pt-7'>Course Highlights</h1>
           <div className="w-10/12 mx-auto mt-8 sm:grid grid-cols-3 justify-items-center">
         
          <div className="my-2">
          <div>
          <img  src="batch.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Batch Starts July 12th</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="sand.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Duration of 3 Weeks</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="calander.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Every Mon, Wed, Fri</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="time.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>7 PM to 9 PM</span>
        </div>
             
          </div>

          <div className="my-2">
          <div>
          <img  src="batch.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Batch Starts July 12th</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="sand.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Duration of 3 Weeks</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="calander.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Every Mon, Wed, Fri</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="time.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>7 PM to 9 PM</span>
        </div>
             
          </div>

          <div className="my-2">
          <div>
          <img  src="batch.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Batch Starts July 12th</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="sand.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Duration of 3 Weeks</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="calander.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Every Mon, Wed, Fri</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="time.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>7 PM to 9 PM</span>
        </div>
             
          </div>

          <div className="my-2">
          <div>
          <p style={{fontSize:"20px",fontWeight:"bold",color:"#07A872"}}>Who Should Attend</p>
          </div>
          <div style={{marginTop:"7px"}}>
          <img  src="batch.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Batch Starts July 12th</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="sand.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Duration of 3 Weeks</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="calander.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Every Mon, Wed, Fri</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="time.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>7 PM to 9 PM</span>
        </div>
             
          </div>

          </div>
       </section>
     
        <section className="my-8">
        <h1 className='text-4xl text-center pt-7'>Course curriculum</h1>
        <center>
           <div className=" grid-cols-1 justify-items-center" style={{width:"900px"}}>
           <div>
           <div className="w-10/12 mx-auto mt-8" >
          {curriculums.map((curriculum)=> (
           <Curriculum curriculum={curriculum}/>
           ))}
      </div>
          </div>
          {/* <div className="my-7">
              <h1 className="text-3xl py-5 font-semibold" style={{color:"#26395f"}} >Completion Certificate by MicroDegree</h1>
              <p className="text-gray-700 py-2">On completion of course become a proud alumni of MicroDegree. MicroDegree is chosen among top innovative startups by Government of Karnataka's flagship Elevate Call-2 program</p>
             
              <div className="mt-4">
              <a href="https://courses.microdegree.work/users/sign_in"><a className=" px-3 py-3 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-4 text-lg" style={{backgroundColor:"#EB5C74"}}>ಬನ್ನಿ ಕೈಜೋಡಿಸಿ </a></a>
              </div>
          </div> */}
          </div>
          </center>
       </section>
        <section className="my-8">
           
           <div className="w-10/12 mx-auto mt-8 sm:grid grid-cols-2 justify-items-center">
           <div>
              <img src="/Certificate.png"  className="w-iframemob h-iframemob sm:w-iframeweb h-iframeWeb"/>
          </div>
          <div className="my-7">
              <h1 className="text-3xl py-5 font-semibold" style={{color:"#26395f"}} >Completion Certificate by MicroDegree</h1>
              <p className="text-gray-700 py-2">On completion of course become a proud alumni of MicroDegree. MicroDegree is chosen among top innovative startups by Government of Karnataka's flagship Elevate Call-2 program</p>
             
              <div className="mt-4">
              <a href="https://courses.microdegree.work/users/sign_in"><a className=" px-2 py-2 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-2 text-lg" style={{backgroundColor:"#07A872",borderRadius:"30px"}}>Enquiry : 8310882795</a></a>

              </div>
          </div>
          </div>
       </section>

       <section className="my-8 mb-5" style={{backgroundColor:"#1D9BF0",height:"350px"}}>
       <h1 className='text-4xl text-center pt-7' style={{color:"#fff"}}>Expert Instructor</h1>
           <div className="w-10/12 mx-auto mt-8 mb-5 sm:grid grid-cols-2 justify-items-center">
           <div style={{marginTop:"0px"}}>
              <a style={{display:"inline-block"}}><img src="/Dheeraj.png" width="200px" /></a>
  
          </div>

          <div className="my-1 ">
              <h1 className="text-3xl py-5 font-semibold " style={{color:"#fff"}} >Rakesh Kothari</h1>
              <h4>Co-founder & CTO</h4>
              <p className="text-gray-700 py-2" style={{fontSize:"12px",color:"#fff"}}>Rakesh has 12+ years of industry experience building enterprise applications at scale. He has worked across banking and insurance domains with top companies. He is an Engineering graduate from BMS College of Engineering, Bangalore and has expertise across technologies like Python, Java, Android, Javascript and MERN Stack. Rakesh recommends Python as the go-to programming language for beginners. He feels it is the best to start with as a newbie into the programming world and has simple easy to understand english-like statements.</p>
             
           
          </div>
          </div>
       </section>

       <section className="mt-10 ">
        <h1 className="text-4xl text-center py-7">Learner Review</h1>
       
        <div className="hidden sm:block w-11/12 mx-auto" >
        <Slider {...settings} >
            {studentData.map((sd)=> (
                <>
                
                 <div className="my-6 mx-3 flex flex-col shadow-xl rounded-xl border border-white-400">
                 
                        
                     <div className="py-4 px-4 text-center bg-white">
                  <h2 className =" font-semibold pt-2" style={{color:"#062A42"}}>{sd.name}</h2>
                  <p className="text-center text-gray-500">{sd.role}</p>
                  <p className="text-gray-500">{sd.company}</p>
                  </div>
                 </div>
                 {/* <div>
                 <Image src={sd.image} alt="image" width={200} height={150} className="rounded"/>
                 <h2 >{sd.name}</h2>
                  <p>{sd.role}</p>
                  <p>{sd.company}</p>
                 </div> */}
                
                </>
            ))}
           </Slider>
             
        </div>
        </section>

        <section className="my-8">
        <center>
           <div className=" grid-cols-1 justify-items-center" style={{width:"900px"}}>
           <div>
           <div className="w-10/12 mx-auto mt-8" >
           <img  src="image-2.png" alt="" style={{width:"600px",display:"inline-block"}} />
           <h2 style={{fontSize:"25px"}}>Friends ಗೆ Refer ಮಾಡಿರಿ ಹಾಗೂ ಪಡೆಯಿರಿ Cash upto ₹15,000</h2>
           <div className="mt-4">
              <a href="https://courses.microdegree.work/users/sign_in"><a className=" px-2 py-2 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-2 text-lg" style={{backgroundColor:"#07A872",borderRadius:"30px"}}>Enrol Now</a></a>

              </div>
          </div>
          </div>
          </div>
          </center>
       </section>
      </div>


      <div className="block w-12/12 mx-auto sm:hidden">
      <section >
           
            <div className="justify-items-center" style={{padding:"10px"}}>
          
           <div>
               <h1 className="text-3xl py-5 font-semibold" style={{color:"#26395f",fontSize:"35px"}} >Python Live Course</h1>
               <p className="text-gray-700 py-2" style={{color:"#26395f",fontSize:"17px"}}>ಬನ್ನಿ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಅನ್ನು ಸುಲಭವಾಗಿ ಕನ್ನಡದಲ್ಲಿ ಕಲಿಯೋಣ.</p>
               <p className="text-gray-700 py-2" style={{color:"#26395f",fontSize:"14px"}}>3 Weeks | 7 PM to 9 PM | Batch Starts July 15th</p>
               <div style={{marginTop:"10px"}}>
               <a href="https://courses.microdegree.work/users/sign_in"><a className=" px-2 py-2 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-2 text-lg" style={{backgroundColor:"#07A872",borderRadius:"30px",fontSize:"12px"}}>Enquiry : 8310882795</a></a>
               &nbsp;&nbsp;&nbsp;<a href="https://courses.microdegree.work/users/sign_in" ><a className=" px-2 py-2 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-2 text-lg" style={{backgroundColor:"#1D9BF0",borderRadius:"30px",fontSize:"12px"}}>Enrol at ₹1,500 ₹15,000</a></a>
               </div>
           </div>

           <div style={{marginTop:"17px"}}>
           <iframe src="https://www.youtube.com/embed/01qSumyUrpU"  className="w-iframemob h-iframemob sm:w-iframeweb h-iframeWeb" ></iframe>
           </div>

           </div>
        </section>

        <section >
        <h1 className='text-4xl text-center pt-7'>Course Highlights</h1>
           <div className="w-10/12 mx-auto mt-8 sm:grid grid-cols-3 justify-items-center">
         
          <div className="my-2">
          <div>
          <img  src="batch.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Batch Starts July 12th</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="sand.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Duration of 3 Weeks</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="calander.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Every Mon, Wed, Fri</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="time.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>7 PM to 9 PM</span>
        </div>
             
          </div>

          <div className="my-2">
          <div>
          <img  src="batch.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Batch Starts July 12th</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="sand.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Duration of 3 Weeks</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="calander.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Every Mon, Wed, Fri</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="time.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>7 PM to 9 PM</span>
        </div>
             
          </div>

          <div className="my-2">
          <div>
          <img  src="batch.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Batch Starts July 12th</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="sand.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Duration of 3 Weeks</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="calander.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Every Mon, Wed, Fri</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="time.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>7 PM to 9 PM</span>
        </div>
             
          </div>

          <div className="my-2">
          <div>
          <p style={{fontSize:"20px",fontWeight:"bold",color:"#07A872"}}>Who Should Attend</p>
          </div>
          <div style={{marginTop:"7px"}}>
          <img  src="batch.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Batch Starts July 12th</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="sand.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Duration of 3 Weeks</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="calander.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>Every Mon, Wed, Fri</span>
        </div>
        <div style={{marginTop:"7px"}}>
          <img  src="time.png" alt="" style={{width:"20px",display:"inline-block"}} />
          <span style={{display:"inline-block",marginLeft:"5px"}}>7 PM to 9 PM</span>
        </div>
             
          </div>

          </div>
       </section>
     
        <section className="my-8">
        <h1 className='text-4xl text-center pt-7'>Course curriculum</h1>
        <center>
           <div className=" grid-cols-1 justify-items-center">
           <div>
           <div className="w-10/12 mx-auto mt-8" >
          {curriculums.map((curriculum)=> (
           <Curriculum curriculum={curriculum}/>
           ))}
      </div>
          </div>
          {/* <div className="my-7">
              <h1 className="text-3xl py-5 font-semibold" style={{color:"#26395f"}} >Completion Certificate by MicroDegree</h1>
              <p className="text-gray-700 py-2">On completion of course become a proud alumni of MicroDegree. MicroDegree is chosen among top innovative startups by Government of Karnataka's flagship Elevate Call-2 program</p>
             
              <div className="mt-4">
              <a href="https://courses.microdegree.work/users/sign_in"><a className=" px-3 py-3 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-4 text-lg" style={{backgroundColor:"#EB5C74"}}>ಬನ್ನಿ ಕೈಜೋಡಿಸಿ </a></a>
              </div>
          </div> */}
          </div>
          </center>
       </section>
        <section className="my-8">
           
           <div className="w-10/12 mx-auto mt-8 sm:grid grid-cols-2 justify-items-center">
           <div>
              <img src="/Certificate.png" />
          </div>
          <div className="my-7">
              <h1 className="text-3xl py-5 font-semibold" style={{color:"#26395f"}} >Completion Certificate by MicroDegree</h1>
              <p className="text-gray-700 py-2">On completion of course become a proud alumni of MicroDegree. MicroDegree is chosen among top innovative startups by Government of Karnataka's flagship Elevate Call-2 program</p>
             
              <div className="mt-4">
              <a href="https://courses.microdegree.work/users/sign_in"><a className=" px-2 py-2 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-2 text-lg" style={{backgroundColor:"#07A872",borderRadius:"30px"}}>Enquiry : 8310882795</a></a>

              </div>
          </div>
          </div>
       </section>

       <section className="my-8 mb-5" style={{backgroundColor:"#1D9BF0"}}>
       <h1 className='text-4xl text-center pt-7' style={{color:"#fff"}}>Expert Instructor</h1>
           <center><div className="w-10/12 mx-auto mt-8 mb-5 sm:grid grid-cols-2 justify-items-center">
           <div style={{marginTop:"0px"}}>
              <a style={{display:"inline-block"}}><img src="/Dheeraj.png" width="200px" /></a>
  
          </div>

          <div className="my-1 ">
              <h1 className="text-3xl py-5 font-semibold " style={{color:"#fff"}} >Rakesh Kothari</h1>
              <h4>Co-founder & CTO</h4>
              <p className="text-gray-700 py-2" style={{fontSize:"12px",color:"#fff"}}>Rakesh has 12+ years of industry experience building enterprise applications at scale. He has worked across banking and insurance domains with top companies. He is an Engineering graduate from BMS College of Engineering, Bangalore and has expertise across technologies like Python, Java, Android, Javascript and MERN Stack. Rakesh recommends Python as the go-to programming language for beginners. He feels it is the best to start with as a newbie into the programming world and has simple easy to understand english-like statements.</p>
             
           
          </div>
          </div>
          </center>
       </section>

       <section className="mt-10 ">
        <h1 className="text-4xl text-center py-7">Learner Review</h1>
       
        {responsive && (
            <div className="block w-10/12 mx-auto sm:hidden" >
            <Slider {...settings1} >
                {studentData.map((sd)=> (
                    <>
                    
                    <div className="my-12 mx-3 flex flex-col shadow-xl rounded-xl border border-white-400">
                 
                        
                 <div className="py-4 px-4 text-center bg-white">
              <h2 className =" font-semibold pt-2" style={{color:"#062A42"}}>{sd.name}</h2>
              <p className="text-center text-gray-500">{sd.role}</p>
              <p className="text-gray-500">{sd.company}</p>
              </div>
             </div>
                     {/* <div>
                     <Image src={sd.image} alt="image" width={200} height={150} className="rounded"/>
                     <h2 >{sd.name}</h2>
                      <p>{sd.role}</p>
                      <p>{sd.company}</p>
                     </div> */}
                    
                    </>
                ))}
               </Slider>
                 
            </div>
       )}
        </section>

        <section className="my-8">
        <center>
           <div className=" grid-cols-1 justify-items-center">
           <div>
           <div className="w-10/12 mx-auto mt-8" >
           <img  src="image-2.png" alt="" style={{width:"500px",display:"inline-block"}} />
           <h2 style={{fontSize:"15px"}}>Friends ಗೆ Refer ಮಾಡಿರಿ ಹಾಗೂ ಪಡೆಯಿರಿ Cash upto ₹15,000</h2>
           <div className="mt-4">
              <a href="https://courses.microdegree.work/users/sign_in"><a className=" px-4 py-2 shadow-xl rounded text-gray-100 font-semibold mt-3 sm:px-5 py-2 text-lg" style={{backgroundColor:"#07A872",borderRadius:"30px"}}>Enrol Now</a></a>

              </div>
          </div>
          </div>
          </div>
          </center>
       </section>
      </div>
      </div> 

      
    );
  };
  
  export default details;