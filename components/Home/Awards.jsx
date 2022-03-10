
const Awards = () => {
    return (
        <section className="hidden sm:grid  mt-4 py-2">
            <h1 className="text-4xl text-center ">Our Recognition</h1>
           
        <div className="w-10/12 mx-auto  mt-10 grid grid-cols-4 content-center"  >
            <div className="mt-2 justify-self-center" style={{paddingLeft:"0px"}}>
           <img src="/startup.png" alt="startup" width={170} height={50}/>
           </div>
           <div className="mt-2 justify-self-center" style={{paddingLeft:"50px"}}>
           <img src="/riidl.jpg" alt="startup" width={100} height={50}/>
           </div>
           <div className="mt-2 justify-self-center" style={{paddingLeft:"50px",marginTop:"-15px"}}>
           <img src="/toi.png" alt="startup" width={170} height={50}/>
           </div>
           <div className="mt-2 justify-self-center" style={{paddingLeft:"50px"}}>
           <img src="/xvc.png" alt="startup" width={110} height={50}/>
           </div>
           <div className="mt-2 justify-self-center" style={{paddingLeft:"0px"}}>
           <img src="/sv.png" alt="startup" width={150} height={50}/>
           </div>
           <div className="mt-2 justify-self-center" style={{paddingLeft:"50px"}}>
           <img src="/ys.png" alt="startup" width={170} height={50}/>
           </div>
           <div className="mt-2 justify-self-center" style={{paddingLeft:"50px"}}>
           <img src="/ent.png" alt="startup" width={150} height={50}/>
           </div>
  
           
        </div>

        
        </section>
    )
}

export default Awards
