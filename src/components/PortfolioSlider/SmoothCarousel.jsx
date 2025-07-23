import React, { useState, useEffect } from 'react';
import './SmoothCarousel.css'; // استيراد ملف CSS الخاص بالرسوم المتحركة

// Inline SVG for ChevronLeft (mimicking Lucide icon)
const ChevronLeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

// Inline SVG for ChevronRight (mimicking Lucide icon)
const ChevronRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const SmoothCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    // Prevent multiple animations from running simultaneously
    if (isAnimating) return;
    setIsAnimating(true); // Start animation
    setPreviousIndex(currentIndex); // Store current index as previous
    // Calculate next index, looping back to the start if at the end
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    // Prevent multiple animations from running simultaneously
    if (isAnimating) return;
    setIsAnimating(true); // Start animation
    setPreviousIndex(currentIndex); // Store current index as previous
    // Calculate previous index, looping to the end if at the start
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Effect to reset animation state after a delay (matching animation duration)
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false); // End animation after 1 second
      }, 1000); // Matches the animation duration (1s)

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [isAnimating, currentIndex]); // Rerun when animation state or current index changes

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      // Only auto-play if no animation is currently running
      if (!isAnimating) {
        nextSlide();
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [isAnimating, images.length]); // Rerun when animation state or image count changes

  // Helper to get the index of the next image for the preview card
  const getNextIndex = () => (currentIndex + 1) % images.length;

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[500px] !bg-gradient-to-br from-blue-50/5 to-blue-100/10 rounded-2xl overflow-hidden shadow-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 !bg-gradient-to-br from-blue-50/5 via-transparent to-purple-50/5"></div>
      </div>
      
      {/* Main Carousel Container */}
      <div className="relative h-full flex items-center justify-center p-8">
        
        {/* Shrinking Card - The one going to left */}
        {isAnimating && (
          <div className="absolute left-0 lg:w-[30%] h-full card-shrink-animation z-10 md:w-[100%]"> {/* تم تغيير animate-card-shrink */}
            <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="relative h-full overflow-hidden">
                <img 
                  src={images[previousIndex].image} 
                  alt={`Previous image ${previousIndex + 1}`}
                  className="w-full min-h-full object-cover "
                  // Fallback for broken images
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Error'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        )}

        {/* Active Card (70% width) - Coming from right */}
        <div className={`absolute lg:w-[69%] h-full z-30 left-0 transition-all duration-1000 ease-out md:w-[100%] ${
          isAnimating ? 'card-expand-animation' : '' // تم تغيير animate-card-expand
        }`}>
          <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-2xl group">
            {/* Card Shadow and Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image Only */}
            <div className="relative h-full overflow-hidden">
              <img 
                src={images[currentIndex].image} 
                alt={`Carousel image ${currentIndex + 1}`}
                className="w-full min-h-full object-cover transition-transform duration-700 group-hover:scale-105"
                // Fallback for broken images
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Error'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Preview Card (30% width) - Will slide from right */}
        <div className={`absolute right-1 lg:w-[30%] h-[100%] transition-all duration-1000 ease-out md:w-[100%] ${
          isAnimating ? 'card-slide-in-animation' : '' // تم تغيير animate-card-slide-in
        }`}>
          <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg opacity-60 hover:opacity-80 transition-opacity duration-300">
            {/* Preview Image */}
            <div className="relative h-full overflow-hidden">
              <img 
                src={images[getNextIndex()].image} 
                alt={`Preview image ${getNextIndex() + 1}`}
                className="w-full min-h-full object-cover"
                // Fallback for broken images
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Error'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 z-50 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-800 hover:bg-green-800 hover:text-white transition-all duration-300 z-20 flex items-center justify-center shadow-md"
          onClick={prevSlide}
          disabled={isAnimating}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          className="absolute right-4 top-1/2 z-50 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-800 hover:bg-green-800 hover:text-white transition-all duration-300 z-20 flex items-center justify-center shadow-md"
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-40 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-green-500 scale-125 shadow-lg' 
                : 'bg-gray-400/30 hover:bg-gray-400/50'
            }`}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setIsAnimating(true);
                setPreviousIndex(currentIndex);
                setCurrentIndex(index);
              }
            }}
          />
        ))}
      </div>

      {/* Card count indicator */}
      {/* <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800 shadow-sm">
        {currentIndex + 1} / {images.length}
      </div> */}
    </div>
  );
};

export default SmoothCarousel;

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////







////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';

// // Inline SVG for ChevronLeft
// const ChevronLeftIcon = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     {...props}
//   >
//     <path d="m15 18-6-6 6-6" />
//   </svg>
// );

// // Inline SVG for ChevronRight
// const ChevronRightIcon = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     {...props}
//   >
//     <path d="m9 18 6-6-6-6" />
//   </svg>
// );

// const SimpleCarousel = ({images}) => {


//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Get next and previous indices
//   const getNextIndex = () => (currentIndex + 1) % images.length;
//   const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;

//   // Function to move to the next slide
//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex(getNextIndex());
//       setIsAnimating(false);
//     }, 800);
//   };

//   // Function to move to the previous slide
//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex(getPrevIndex());
//       setIsAnimating(false);
//     }, 800);
//   };

//   // Auto-play functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isAnimating) {
//         nextSlide();
//       }
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isAnimating, currentIndex]);

//   return (
//     <div className="relative w-full max-w-6xl mx-auto h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-xl p-8">
      
//       {/* Cards Container */}
//       <div className="relative h-full flex items-center justify-center overflow-hidden">
        
//         {/* Small Card Container (30%) */}
//         <div className="relative w-[30%] h-full mr-2">
//           {/* Current Small Card */}
//           <div className={`absolute inset-0 transition-all duration-800 ease-out ${
//             isAnimating ? 'transform -translate-x-full opacity-0' : 'transform translate-x-0 opacity-70'
//           }`}>
//             <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:opacity-90 transition-opacity duration-300 group">
//               <div className="relative h-full overflow-hidden">
//                 <img 
//                   src={images[currentIndex].image}
//                   alt={`Small Card Current`}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x500/CCCCCC/000000?text=Image+Error'; }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               </div>
//             </div>
//           </div>

//           {/* Next Small Card (sliding from right) */}
//           <div className={`absolute inset-0 transition-all duration-800 ease-out ${
//             isAnimating ? 'transform translate-x-0 opacity-70' : 'transform translate-x-full opacity-0'
//           }`}>
//             <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:opacity-90 transition-opacity duration-300 group">
//               <div className="relative h-full overflow-hidden">
//                 <img 
//                   src={images[getNextIndex()].image}
//                   alt={`Small Card Next`}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x500/CCCCCC/000000?text=Image+Error'; }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Large Card Container (70%) */}
//         <div className="relative w-[70%] h-full">
//           {/* Current Large Card */}
//           <div className={`absolute inset-0 transition-all duration-800 ease-out ${
//             isAnimating ? 'transform -translate-x-full opacity-0' : 'transform translate-x-0 opacity-100'
//           }`}>
//             <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-2xl group">
//               <div className="relative h-full overflow-hidden">
//                 <img 
//                   src={images[getNextIndex()].image}
//                   alt={`Large Card Current`}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x500/CCCCCC/000000?text=Image+Error'; }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
//               </div>
//             </div>
//           </div>

//           {/* Next Large Card (sliding from right) */}
//           <div className={`absolute inset-0 transition-all duration-800 ease-out ${
//             isAnimating ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'
//           }`}>
//             <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-2xl group">
//               <div className="relative h-full overflow-hidden">
//                 <img 
//                   src={images[(currentIndex + 2) % images.length].image}
//                   alt={`Large Card Next`}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x500/CCCCCC/000000?text=Image+Error'; }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 z-20 flex items-center justify-center shadow-lg"
//           onClick={prevSlide}
//           disabled={isAnimating}
//         >
//           <ChevronLeftIcon className="h-6 w-6" />
//         </button>

//         <button
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 z-20 flex items-center justify-center shadow-lg"
//           onClick={nextSlide}
//           disabled={isAnimating}
//         >
//           <ChevronRightIcon className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentIndex 
//                 ? 'bg-blue-500 scale-125 shadow-lg' 
//                 : 'bg-gray-400/50 hover:bg-gray-400/70'
//             }`}
//             onClick={() => {
//               if (!isAnimating && index !== currentIndex) {
//                 setIsAnimating(true);
//                 setTimeout(() => {
//                   setCurrentIndex(index);
//                   setIsAnimating(false);
//                 }, 800);
//               }
//             }}
//           />
//         ))}
//       </div>

//       {/* Counter */}
//       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-800 shadow-sm border border-gray-200">
//         {currentIndex + 1} / {images.length}
//       </div>
//     </div>
//   );
// };

// export default SimpleCarousel;