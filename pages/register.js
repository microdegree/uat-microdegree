import Head from "next/head";

import Link from "next/link";
const register = () => {
  return (
    <>
      <head>
        <title>Enquiry Form</title>
      </head>
      <section className="my-8 hidden sm:block" >
            <div className="w-10/12 mx-auto mt-8 sm:grid grid-cols-2 justify-items-center">
           <div>
           <img
              src='/aws.png'
              alt='logo'
              width={430}
              height={430}
            />
           </div>
           <div className="my-7">
           <iframe class="bg" src="https://notionforms.io/forms/enquiry-form" width="640" height="420" frameborder="0" marginheight="0" marginwidth="0">Loading…
        </iframe>
           </div>
           </div>
        </section>

        <section className="my-8 block sm:hidden" >
        <div className="my-7">
           <iframe class="bg" src="https://notionforms.io/forms/enquiry-form" width="370" height="420" frameborder="0" marginheight="0" marginwidth="0">Loading…
        </iframe>
           </div>
            <div className="w-10/12 mx-auto mt-8 sm:grid grid-cols-2 justify-items-center">
           <div style={{marginTop:"-50px"}}>

           <img
              src='/aws.png'
              alt='logo'
              width={430}
              height={430}
            />           </div>
           
           </div>
        </section>
    </>
  );
};

export default register;
