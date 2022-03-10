import Link from "next/link";

const Offer = () => {
  return (
    <section style={{backgroundColor:"#FFE532",textAlign:"center"}} >
 <div className="hidden sm:block">
 <a href="https://courses.microdegree.work/pages/premium-courses"><h6 className='text-2xl' style={{color:"#26395f",fontSize:"14px"}}>ನಾಡ ಹಬ್ಬದ offer ನೋಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ <i class="fa fa-angle-double-right"></i></h6></a>

 </div>
 <div className="block sm:hidden">
 <a href="https://courses.microdegree.work/pages/premium-courses"><h6 className='text-2xl' style={{color:"#26395f",fontSize:"10px"}}>ನಾಡ ಹಬ್ಬದ offer ನೋಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ <i class="fa fa-angle-double-right"></i></h6></a>

 </div>
        
    </section>
  );
};

export default Offer;
