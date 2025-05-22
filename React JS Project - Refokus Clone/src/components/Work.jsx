import React from 'react'

const Work = () => {

    var images = [
        {url: "https://images.unsplash.com/photo-1739641375724-dfea74e0df69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8", top: "50%", left: "50%", isActive: true},
        {url: "https://images.unsplash.com/photo-1739518805568-41e07e3318b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8", top: "56%", left: "44%", isActive: false},
        {url: "https://images.unsplash.com/photo-1739532049391-2867bd1a71e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8", top: "45%", left: "56%", isActive: false},
        {url: "https://images.unsplash.com/photo-1739590485766-fad3dadd2056?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8", top: "60%", left: "53%", isActive: false},
        {url: "https://images.unsplash.com/photo-1723249593422-905f4022457e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D", top: "43%", left: "40%", isActive: false},
        {url: "https://images.unsplash.com/photo-1724220634852-301f49b04cfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8", top: "65%", left: "55%", isActive: false},
    ]
  return (
    <div className='w-full mt-10'>
        <div className='relative max-w-screen-xl m-auto text-center'>
            <h1 className='text-[30vw] leading-none font-medium select-none tracking-tight'>work</h1>
            <div className='absolute top-0 w-full h-full'>
                {images.map((elem, index)=>(elem.isActive && (<img className='absolute w-52 h-70 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top: elem.top, left: elem.left}} alt="" />)))}
            </div>
        </div>
    </div>
  )
}

export default Work