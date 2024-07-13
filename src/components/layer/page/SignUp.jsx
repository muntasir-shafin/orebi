import React, { useState } from 'react'
import Breadcrumb from '../../Breadcrumb'
import Container from '../Container'
import Button from '../Button';

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { IoIosEyeOff, IoMdEye  } from "react-icons/io";


function SignUp (){

   // let [eye , setEye]= useState(false)

   let [name ,setname]= useState("")
   let [nameerror, setNameerror]= useState("")

   let [email ,setEmail]= useState("")
   let [emailerror, setEmailerror]= useState("")

   // const auth = getAuth();

   let [password ,setpassword]= useState("")
   let [passworderror, setpassworderror]= useState("")

   let changepassword=(e)=>{
      setpassword(e.target.value);
      setpassworderror("")
   }
   let changeName=(e)=>{
      setname(e.target.value);
      setNameerror("")
      
   }
  
   let changeEmail=(e)=>{
      setEmail(e.target.value);
      setEmailerror("")
      
   }



   let submit = ()=>{
      if(!name){
         setNameerror("Name is required")
      }
      if(!email){
         setEmailerror("mail is required")
      }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(myForm.emailAddr.value)) {
         setEmailerror("You have entered an invalid email address!")
      }
      if(!password){
         setpassworderror("password is required")
      }else if(!/(?=.*[a-z])/.test(password)){
         setpassworderror("1 lowercase is required")
      }else if(!/(?=.*[A-Z])/.test(password)){
         setpassworderror("1 uppercase is required")
      }else if(!/(?=.*[0-9])/.test(password)){
         setpassworderror("1 numeric is required")
      }else if(!/(?=.*[!@#$%^&*])/.test(password)){
         setpassworderror("1 special character is required")
      }else if(!/(?=.{8,})/.test(password)){
         setpassworderror("Must be 8 character is required")
      }
      
      // if(name&&email&&password &&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(myForm.emailAddr.value)){
      //    createUserWithEmailAndPassword(auth, email, password)
      //    .then((userCredential) => {
      //       // Signed up 
      //       const user = userCredential.user;
      //       console.log(user);
      //       // ...
      //    })
      //    .catch((error) => {
      //       const errorCode = error.code;
      //       console.log(errorCode);
      //       // ..
      //    });
      // }
   


   
   }

  return (
    <div>
      <Container className="">
        <Breadcrumb title="sign up" text="signup"/>
        <div className='border-b-2 border-[#F0F0F0] mb-[57px]'>
        <p className='max-w-[644px] mt-32 leading-7 pb-16 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni qui sed blanditiis ea maxime expedita ipsum suscipit exercitationem nam.</p>
        </div>
      <div className="main  ">
         <h2 className=' mb-10 text-[39px] font-bold text-[#262626]'>
        Your Personal Details
        </h2>  
   
   <div className="label flex flex-wrap gap-10 pb-[70px] border-b-2 border-[#F0F0F0]">

   <div 
      className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0] relative'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">First Name *</label>
        <input
        
        value={name}
        onChange={changeName}
         className='pt-[33px] pb-4 outline-none ' type="text" placeholder='First Name' 
         />
        {
         nameerror &&
         <p className='absolute top-full  text-xs text-white  bg-red-400 p-1 my-1  rounded-md'>{nameerror}</p>
        }
      </div>
      

      <div 
      className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">Last Name</label>
        <input
         className='pt-[33px] pb-4 outline-none ' type="text" placeholder='Last Name' />
      </div>

      <div 
      className='w-[507px] relative flex flex-col  border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">Email address</label>
        <input
        value={email}
        onChange={changeEmail}
         className='pt-[33px] pb-4 outline-none ' type="email" placeholder='mail' />
        {
         emailerror &&
         <p className='absolute top-full  text-xs text-white bg-red-400 p-1 my-1 rounded-md'>{emailerror}</p>
        }
         
      </div>

      <div 
      className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">Telephone</label>
        <input
         className='pt-[33px] pb-4 outline-none ' type="tel" placeholder='Your phone number' />
      </div>

   </div>
      
      </div>

      <div className="main my-14">
         <h2 className=' mb-10 text-[39px] font-bold text-[#262626]'>
         New Customer
        </h2> 


        <div className="label flex flex-wrap gap-10  ">

   <div 
      className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">Address 1</label>
        <input
         className='pt-[33px] pb-4 outline-none ' type="text" placeholder='Address 1' />
      </div>

      <div 
      className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">Address 2</label>
        <input
         className='pt-[33px] pb-4 outline-none ' type="text" placeholder='Address 2' />
      </div>

      <div 
      className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">City</label>
        <input
         className='pt-[33px] pb-4 outline-none ' type="text" placeholder='City' />
      </div>

      <div 
      className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">Post Code</label>
        <input
         className='pt-[33px] pb-4 outline-none ' type="number" placeholder='Post Code' />
      </div>

      <div 
      className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">Division</label>
       <select className='pt-[33px] pb-4 outline-none '   name="" id="">
        <option  value="">Dhaka</option>
        <option  value="">chitagoan</option>
        <option  value="">shylet</option>
        <option  value="">teknaf</option>
        <option  value="">Dhaka</option>
       </select>
      </div>
      <div 
      className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">District</label>
       <select className='pt-[33px] pb-4 outline-none '   name="" id="">
        <option  value="">Dhaka</option>
        <option  value="">tongi</option>
        <option  value="">gazipur</option>
        <option  value="">comilla</option>
        <option  value="">feni</option>
       </select>
      </div>
    
   
   </div>
      
      </div>

      <div className="main mb-[70px] ">
         <h2 className=' mb-10 text-[39px] font-bold text-[#262626]'>
         Your Password
        </h2>  
   
   <div className="label flex flex-wrap gap-10 pb-[70px] border-b-2 border-[#F0F0F0]">

   <div 
      className='w-[507px] flex flex-col relative border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">Password</label>
       
       <input onChange={changepassword} className='pt-[33px] pb-4 outline-none relative' type="password" placeholder='Password' />
       {
         passworderror &&
         <p className='absolute top-full  text-xs text-white bg-red-400 p-1 my-1 rounded-md'>{passworderror}</p>
        }

      {/* {eye?(
         <IoIosEyeOff  onClick={()=> setEye(!eye)} className='absolute right-0 top-1/2 '/>
      ):(
      <IoMdEye onClick={()=> setEye(!eye)} className='absolute right-0 top-1/2 '/>
     ) }

       <IoMdEye className='absolute right-0 top-1/2 '/>
       <IoIosEyeOff className='absolute right-0 top-1/2 '/> */}
       
      </div>

      <div 
      className='w-[507px] flex flex-col  border-b-2 border-[#F0F0F0]'>  
      <label
      className='text-base font-bold text-[#262626]' 
       htmlFor="">Repeat Password</label>
       <div className='flex justify-between items-center'>
       <input className='pt-[33px] pb-4 outline-none  ' type="password" placeholder='Repeat Password' />
      
       </div>

    </div>

    </div>
   </div>
     
    <div className='flex items-center gap-x-4'>
      <input type="checkbox" />
    <p className='font-DM text-sm text-[#767676]'>I have read and agree to the Privacy Policy</p>
    </div>
    <div className='flex items-center gap-x-4 my-6'>
    <p className='font-DM text-sm text-[#767676]'>Subscribe Newsletter</p>
    <label className='font-DM text-sm text-[#767676] flex items-center ' htmlFor="Yes">
     
   <input className='' id='Yes' type="radio" name='id' />Yes</label>
   <div>
   <label
     className='font-DM text-sm text-[#767676]  flex items-center' htmlFor="No">
     <input  className='' id='No' type="radio" name='id' />No</label>
   </div>
  </div>
 <div className='mt-7'>
    <Button onClick={submit} className="w-[200px] " text="Log in"/>
    </div>  
      </Container>
    </div>
  )
}

export default SignUp;
