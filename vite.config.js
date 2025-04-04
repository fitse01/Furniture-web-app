import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// import { featureData } from "@/constants";
// import FeatureCard from "./featureCard";
// const Features = () => {
//   return (
//     <div className="flex justify-center gap-6 bg-gray-100 p-10">
//       {featureData.map((feature, index) => (
//         <FeatureCard
//           key={index}
//           icon={<span className="text-2xl">{feature.icon}</span>}
//           title={feature.title}
//           description={feature.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default Features;

// import React from "react";

// const FeatureCard = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 text-center">
//       <div className="bg-blue-100 p-3 rounded-full inline-block">{icon}</div>
//       <h3 className="text-lg font-semibold mt-4">{title}</h3>
//       <p className="text-gray-600 mt-2">{description}</p>
//     </div>
//   );
// };
// export default FeatureCard;

// export const featureData = [
//   {
//     icon: "🛋️", // You can replace this with an actual icon component
//     title: "Comfortable Sofas",
//     description: "Relax in style with our luxurious and ergonomic sofas.",
//   },
//   {
//     icon: "🛏️",
//     title: "Comfortable Sofas",
//     description: "Relax in style with our luxurious and ergonomic sofas.",
//   },
//   {
//     icon: "🍽️",
//     title: "Dining Sets",
//     description: "Perfect dining sets for everyday meals or special occasions.",
//   },
//   {
//     icon: "🪑",
//     title: "Outdoor Furniture",
//     description:
//       "Durable and stylish furniture to elevate your outdoor spaces.",
//   },
// ];
