/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
// ],
// mode: 'jit',
//   theme: {
//     fontFamily: {
//       sans: [
//         "Inter var, sans-serif",
//         {
//           fontFeatureSettings: '"cv11", "ss01"',
//           fontVariationSettings: '"opsz" 32'
//         },
//       ],
//     },
//     extend: {
//       colors: {

//       },
//     boxShadow: {

//     },  
//   backgroundImage: {
//     "hero-bg": "url('/src/assets/hero2.png')",
//   }  
//     },
//   },
  
//   plugins: [],
// }


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.8)",
          "200": "rgba(255, 255, 255, 0.6)",
        },
      },
      fontFamily: {
        "heading-h1": "Inter",
        "sf-pro": "'SF Pro'",
        "sf-pro-text": "'SF Pro Text'",
      },
      
      backgroundImage: {
        "hero-bg": "url('/src/assets/hero2.png')",
      }  
    },
   
  },
  plugins: [],
};