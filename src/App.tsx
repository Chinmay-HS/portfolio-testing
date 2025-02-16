// import './App.css';
// import { TextEffect } from './components/ui/text-effect';
// import { DisclosureCard } from './main-components/DisclosureCard';
// import { InViewImagesGrid } from './main-components/InViewImagesGrid';
// import { TextLoopCustomVariantsTransition } from './main-components/TestLoopCustomVariantsTransition';
// import { Github, Instagram, Youtube, ChevronDown, LinkedinIcon } from 'lucide-react';
// import { TextScramble1 } from './main-components/TextScramble1';

// function App() {
//   return (
//     <div className="min-h-screen relative">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center min-h-[87vh] px-4 space-y-8">
//         <TextEffect 
//           className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-Mofugu text-center" 
//           per='char' 
//           preset='fade'
//         >
//           Chinmay H. Sawant
//         </TextEffect>
        
//         <div>
//           <TextLoopCustomVariantsTransition />
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex space-x-6 mt-4">
//           <a 
//             href="https://github.com/Chinmay-HS" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-gray-700 hover:text-gray-900 transition-colors"
//           >
//             <Github size={24} />
//           </a>
//           <a 
//             href="https://www.youtube.com/@ChinmayHS" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-gray-700 hover:text-gray-900 transition-colors"
//           >
//             <Youtube size={24} />
//           </a>
//           <a 
//             href="https://www.instagram.com/chinmayhs_/" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-gray-700 hover:text-gray-900 transition-colors"
//           >
//             <Instagram size={24} />
//           </a>
//           <a 
//             href="https://letterboxd.com/Chinmay_HS/" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-gray-700 hover:text-gray-900 transition-colors"
//           >
//             <svg 
//               viewBox="0 0 24 24" 
//               width="24" 
//               height="24" 
//               fill="currentColor" 
//               className="text-gray-700 hover:text-gray-900"
//             >
//               <path d="M8.29 16.752V7.2H6.546V4.8h6.328v2.4h-1.746v9.552h3.192v-2.4h2.4v4.8h-10.83v-2.4h2.4zM0 12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0 0 5.372 0 12z"/>
//             </svg>
//           </a>
//           <a 
//             href="https://www.linkedin.com/in/chinmay-sawant-8b3282266/" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-gray-700 hover:text-gray-900 transition-colors"
//           >
//             <LinkedinIcon size={24} />
//           </a>
//         </div>

//         <TextScramble1 />
//         {/* Horizontal Disclosure Cards */}
//         <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl px-4">
//           <DisclosureCard 
//             imageUrl="https://your-image-url-1.jpg"
//             imageAlt="Project 1"
//             title="Game Development"
//             subtitle="Unity & Unreal Engine"
//             emoji="🎮"
//             description="Passionate about creating immersive gaming experiences. Specializing in Unity and Unreal Engine development with a focus on gameplay mechanics and user experience."
//           />
//           <DisclosureCard 
//             imageUrl="https://your-image-url-2.jpg"
//             imageAlt="Project 2"
//             title="Aerospace Projects"
//             subtitle="Space & Aviation"
//             emoji="🚀"
//             description="Working on cutting-edge aerospace projects, from drone development to space simulation software. Combining engineering principles with modern technology."
//           />
//           <DisclosureCard 
//             imageUrl="https://your-image-url-3.jpg"
//             imageAlt="Project 3"
//             title="Design Portfolio"
//             subtitle="UI/UX & Graphics"
//             emoji="🎨"
//             description="Creating beautiful and functional designs across various mediums. Expertise in UI/UX design, graphic design, and motion graphics using industry-standard tools."
//           />
//         </div>

//       </section>

//       {/* Image Grid Section */}
//       <section className="w-full -mt-20">
//         <InViewImagesGrid />
//       </section>
//     </div>
//   );
// }

// export default App;


import theBear from '././../public/disclosure/theBear.png';
import img2 from '././../public/disclosure/img2.png';
import img3 from '././../public/disclosure/img3.jpg';

import "./App.css";
import { TextEffect } from "./components/ui/text-effect";
import { DisclosureCard } from "./main-components/DisclosureCard";
import { InViewImagesGrid } from "./main-components/InViewImagesGrid";
import { TextLoopCustomVariantsTransition } from "./main-components/TestLoopCustomVariantsTransition";
import { Github, Instagram, Youtube, LinkedinIcon } from "lucide-react";
import { TextScramble1 } from "./main-components/TextScramble1";
import { motion } from "framer-motion";


function App() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[87vh] px-4 space-y-8">
        {/* TextEffect loads first */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <TextEffect
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-Mofugu text-center"
            per="char"
            preset="fade"
          >
            Chinmay H. Sawant
          </TextEffect>
        </motion.div>

        {/* Other animations appear after TextEffect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <TextLoopCustomVariantsTransition />
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex space-x-6 mt-4"
        >
          <a
            href="https://github.com/Chinmay-HS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.youtube.com/@ChinmayHS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://www.instagram.com/chinmayhs_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/chinmay-sawant-8b3282266/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <LinkedinIcon size={24} />
          </a>
          <a 
            href="https://letterboxd.com/Chinmay_HS/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              fill="currentColor" 
              className="text-gray-700 hover:text-gray-900"
            >
              <path d="M8.29 16.752V7.2H6.546V4.8h6.328v2.4h-1.746v9.552h3.192v-2.4h2.4v4.8h-10.83v-2.4h2.4zM0 12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0 0 5.372 0 12z"/>
            </svg>
          </a>
          
        </motion.div>

        {/* Scrambled Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <TextScramble1 />
        </motion.div>

        {/* Disclosure Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl px-4"
        >
          <DisclosureCard
            imageUrl={theBear}
            imageAlt="The Bear"
            title="The Bear Part: 2"
            subtitle="Our mother of victory, pray for us."
            description="Passionate about creating immersive gaming experiences. Specializing in Unity and Unreal Engine development with a focus on gameplay mechanics and user experience."
          />
          <DisclosureCard
            imageUrl={img2}
            imageAlt="img2"
            title="Spatial Projects"
            subtitle="The crew at warpower."
            description="Working on cutting-edge aerospace projects, from drone development to space simulation software. Combining engineering principles with modern technology."
          />
          <DisclosureCard
            imageUrl={img3}
            imageAlt="img3"
            title="Lingonberry"
            subtitle="Carbon, Boron, Nanotubes & Space."
            description="This one is a secret for now. Soon to be revealed."
          />
        </motion.div>
      </section>

      {/* Image Grid Section */}
      <section className="w-full -mt-20">
        <InViewImagesGrid />
      </section>
    </div>
  );
}

export default App;
