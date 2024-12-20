
//       Form handling - react hook form





// import React from 'react';
// import { useForm } from 'react-hook-form'

// const App = () => {
//   const {register, handleSubmit} = useForm();
//   console.log(register());
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit(data => console.log(data))}>
//         <input {...register('name')} type="text" placeholder='name' />
//         <input {...register('email')} type="email" placeholder='email' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App












































//         Form handling by - controlled components





// import React from 'react';
// import { useState } from 'react';

// const App = () => {
//   const [val, setVal] = useState({name: "", email: ""})

//   const handleClick = (event)=>{
//     const realVal = setVal({...val, name: event.target.value}) 
//     const realVal1 = setVal({...val, email: event.target.value}) 
//   }


//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     console.log(val);

//   }

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit} className='p-5'>
//         <input onChange={handleClick} type="text" placeholder='name' />
//         <input onChange={handleClick} type="email" placeholder='email' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App



































//    Form handling by useRef




// import React from 'react';
// import { useRef } from 'react';

// const App = () => {
//   const name = useRef(null);
//   const age = useRef(null);

//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     console.log(name.current.value);
//     console.log(age.current.value);
//   }

//   return (
//    <form action="" onSubmit={handleSubmit} className='p-4 border-2'>
//     <input ref={name} placeholder='name' type="text"  />
//     <input ref={age} placeholder='age' type="text"  />
//     <input type="submit" />
//    </form>
//   )
// }

// export default App