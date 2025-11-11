import React from 'react'
import { motion, useScroll } from 'motion/react';

const App = () => {

  const {scrollYProgress} = useScroll();
  return (
    <div>
      <motion.div
      style={{
        scaleX: scrollYProgress
      }}
      className='bg-red-500 h-3 w-full fixed origin-left'>

      </motion.div>
      <div className='h-screen px-80 p-20'>
        <h2 className='font-bold font-mono text-4xl m-5'>sheryians coding school</h2>
        <p className='font-medium text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur nostrum aliquam? Tempora cumque blanditiis beatae officia accusamus facere tempore porro consequuntur voluptatem adipisci dolorum quaerat minus totam non deleniti sed, magnam eos odio quae, sequi in fugit. Tempora hic iste rem nemo vitae, nisi praesentium, voluptate veniam, nobis rerum obcaecati? Porro pariatur ducimus consequuntur numquam. Libero atque possimus ut numquam officia, placeat obcaecati modi, illo velit, enim sunt necessitatibus? Voluptatibus quia quo veniam voluptas omnis, reiciendis, aliquid voluptatem excepturi minus nesciunt sint cum atque consequuntur fugit incidunt ratione tenetur dicta obcaecati corporis nisi esse animi ea! Minus, harum! Officia.</p>
      </div>
      <div className='h-screen px-80 p-20'>
        <h2 className='font-bold font-mono text-4xl m-5'>sheryians coding school</h2>
        <p className='font-medium text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur nostrum aliquam? Tempora cumque blanditiis beatae officia accusamus facere tempore porro consequuntur voluptatem adipisci dolorum quaerat minus totam non deleniti sed, magnam eos odio quae, sequi in fugit. Tempora hic iste rem nemo vitae, nisi praesentium, voluptate veniam, nobis rerum obcaecati? Porro pariatur ducimus consequuntur numquam. Libero atque possimus ut numquam officia, placeat obcaecati modi, illo velit, enim sunt necessitatibus? Voluptatibus quia quo veniam voluptas omnis, reiciendis, aliquid voluptatem excepturi minus nesciunt sint cum atque consequuntur fugit incidunt ratione tenetur dicta obcaecati corporis nisi esse animi ea! Minus, harum! Officia.</p>
      </div>
      <div className='h-screen px-80 p-20'>
        <h2 className='font-bold font-mono text-4xl m-5'>sheryians coding school</h2>
        <p className='font-medium text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aspernatur nostrum aliquam? Tempora cumque blanditiis beatae officia accusamus facere tempore porro consequuntur voluptatem adipisci dolorum quaerat minus totam non deleniti sed, magnam eos odio quae, sequi in fugit. Tempora hic iste rem nemo vitae, nisi praesentium, voluptate veniam, nobis rerum obcaecati? Porro pariatur ducimus consequuntur numquam. Libero atque possimus ut numquam officia, placeat obcaecati modi, illo velit, enim sunt necessitatibus? Voluptatibus quia quo veniam voluptas omnis, reiciendis, aliquid voluptatem excepturi minus nesciunt sint cum atque consequuntur fugit incidunt ratione tenetur dicta obcaecati corporis nisi esse animi ea! Minus, harum! Officia.</p>
      </div>
    </div>
  )
}

export default App