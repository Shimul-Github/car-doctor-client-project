import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const specficService = useLoaderData()
    console.log(specficService)
    const {title,_id,price,img}=specficService;


   const handleServiceDetail =(e)=>{
    e.preventDefault()
    console.log('clicked')
   } 
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className='relative'>
            <img src={img} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
            <div className='flex items-center  absolute top-0 h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25'  >
                <p className=' text-5xl font-bold text-white mx-auto'>Check Out Form</p>
            </div>
            </div>
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                    <span className="block mb-2 dark:text-violet-600">Car Doctor Services</span>
                    <h1 className="text-5xl font-extrabold dark:text-gray-900">{title}</h1>
                    <p className="my-8">
                        <span className="font-medium dark:text-gray-900">Welcome to Our Service Home</span>Please Fill up the following form for your services
                    </p>
                    <form onSubmit={handleServiceDetail} className="self-stretch space-y-3">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div>
                            <label htmlFor="name" className="text-sm sr-only">Your First Name</label>
                            <input id="name" type="text" placeholder="Your name"
                            name='first-name'
                            className="border w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 px-2 py-2" fdprocessedid="rbht5" />
                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm sr-only">Your Last Name</label>
                            <input id="name" type="text" placeholder="Your name"
                            name='last-name'
                            className="border w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 px-2 py-2" fdprocessedid="rbht5" />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="text-sm sr-only">Your Photo</label>
                            <input id="lastname" type="text" placeholder="Your Photo URL"
                            name='photo'
                            className="border w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 px-2 py-2" fdprocessedid="ebxdwe" />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="text-sm sr-only">Email address</label>
                            <input id="lastname" type="email" placeholder="Email address"
                            name='email'
                            className="border w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 px-2 py-2" fdprocessedid="ebxdwe" />
                        </div>
                        </div>
                        
                        <input className=" btn btn-outline btn-secondary w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50" type="submit" value="Join the Waitlist" />
                    </form>
                </div>
                
            </div>
        </section>
    );
};

export default ServiceDetails;