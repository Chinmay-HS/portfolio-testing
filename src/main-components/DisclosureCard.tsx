// 'use client';

// import { useState } from 'react';
// import {
//   Disclosure,
//   DisclosureContent,
//   DisclosureTrigger,
// } from '../components/ui/disclosure';
// import { motion } from 'framer-motion';

// export function DisclosureCard({ 
//   imageUrl, 
//   imageAlt, 
//   title, 
//   description, 
//   emoji,
//   subtitle,
//   className = ''
// }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={`relative h-[350px] w-[290px] overflow-hidden rounded-xl ${className}`}>
      
//       {/* Image with Blur Effect */}
//       <motion.div 
//         className="absolute inset-0"
//         animate={{ filter: isOpen ? 'blur(3px)' : 'blur(0px)' }}
//         transition={{ duration: 0.4 }}
//       >
//         <img
//           src={imageUrl}
//           alt={imageAlt}
//           className="h-full w-full object-cover"
//         />
//       </motion.div>

//       {/* Overlay for Content */}
//       <Disclosure
//         onOpenChange={setIsOpen}
//         open={isOpen}
//         className="absolute bottom-0 left-0 right-0 bg-zinc-900 bg-opacity-100 px-4 pt-2 rounded-b-xl"
//       >
//         <DisclosureTrigger>
//           <button
//             className="w-full pb-2 text-left text-[14px] font-medium text-white"
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {title}
//           </button>
//         </DisclosureTrigger>
//         <DisclosureContent>
//           <div className="flex flex-col pb-4 text-[13px] text-zinc-300">
//             <p>{subtitle} {emoji}</p>
//             <p className="line-clamp-3">
//               {description}
//             </p>
//           </div>
//         </DisclosureContent>
//       </Disclosure>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import {
//   Disclosure,
//   DisclosureContent,
//   DisclosureTrigger,
// } from '../components/ui/disclosure';
// import { motion } from 'motion/react';

// export function DisclosureCard({ imageUrl, imageAlt, title, subtitle, description, emoji }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const imageVariants = {
//     collapsed: { scale: 1, filter: 'blur(0px)' },
//     expanded: { scale: 1.1, filter: 'blur(3px)' },
//   };

//   const contentVariants = {
//     collapsed: { opacity: 0, y: 0 },
//     expanded: { opacity: 1, y: 0 },
//   };

//   const transition = {
//     type: 'spring',
//     stiffness: 26.7,
//     damping: 4.1,
//     mass: 0.2,
//   };

//   return (
//     <div className='relative h-[350px] w-[290px] overflow-hidden rounded-xl'>
//       <div onClick={() => setIsOpen(!isOpen)}>
//         <motion.img
//           src={imageUrl} // Now supports user-defined local images
//           alt={imageAlt || 'Image'}
//           className='pointer-events-none h-auto w-full select-none object-cover'
//           animate={isOpen ? 'expanded' : 'collapsed'}
//           variants={imageVariants}
//           transition={transition}
//         />
//       </div>
//       <Disclosure
//         onOpenChange={setIsOpen}
//         open={isOpen}
//         className='absolute bottom-0 left-0 right-0 rounded-xl bg-zinc-900 px-4 pt-2 dark:bg-zinc-50'
//         variants={contentVariants}
//         transition={transition}
//       >
//         <DisclosureTrigger>
//           <button
//             className='w-full pb-2 text-left text-[14px] font-medium text-white dark:text-zinc-900'
//             type='button'
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {title}
//           </button>
//         </DisclosureTrigger>
//         <DisclosureContent>
//           <div className='flex flex-col pb-4 text-[13px] text-zinc-300 dark:text-zinc-700'>
//             <p>{subtitle} {emoji}</p>
//             <p className='line-clamp-3'>{description}</p>
//           </div>
//         </DisclosureContent>
//       </Disclosure>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from '../components/ui/disclosure';
import { motion } from 'framer-motion';

interface DisclosureCardProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
  description: string;
  emoji?: string;
}

export function DisclosureCard({ imageUrl, imageAlt = 'Image', title, subtitle, description, emoji }: DisclosureCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const imageVariants = {
    collapsed: { scale: 1, filter: 'blur(0px)' },
    expanded: { scale: 1.1, filter: 'blur(3px)' },
  };

  const contentVariants = {
    collapsed: { opacity: 0, y: 10 },
    expanded: { opacity: 1, y: 0 },
  };

  const transition = {
    type: 'spring',
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  };

  return (
    <div className='relative h-[350px] w-full sm:w-[290px] overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800'>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
        <motion.img
          src={imageUrl}
          alt={imageAlt}
          className='pointer-events-none h-64 w-full select-none object-cover rounded-t-xl'
          animate={isOpen ? 'expanded' : 'collapsed'}
          variants={imageVariants}
          transition={transition}
        />
      </div>
      <Disclosure
        onOpenChange={setIsOpen}
        open={isOpen}
        className='absolute bottom-0 left-0 right-0 rounded-xl bg-zinc-900 px-4 pt-2 dark:bg-zinc-50'
        variants={contentVariants}
        transition={transition}
      >
        <DisclosureTrigger>
          <button
            className='w-full pb-2 text-left text-[14px] font-medium text-white dark:text-zinc-900'
            type='button'
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <div className='flex flex-col pb-4 text-[13px] text-zinc-300 dark:text-zinc-700'>
            <p className='font-semibold'>{subtitle} {emoji}</p>
            <p className='line-clamp-3'>{description}</p>
          </div>
        </DisclosureContent>
      </Disclosure>
    </div>
  );
}
