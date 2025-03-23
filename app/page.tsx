// app/page.tsx
"use client";
import Gate from "./arg-home/gate";  // 引入 gate.tsx

export default function HomePage() {
  return <Gate />;  // 在首頁顯示 gate.tsx 的內容
}
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// export default function HomePage() {
//   const news = [
//     { title: "潮間黨總統上任", image: "/news1.jpg" },
//     { title: "潮間大遊行", image: "/news2.jpg" },
//     { title: "山姆大叔需要你", image: "/news3.jpg" },
//   ];

//   const policies = [
//     { title: "教育體制革命", image: "/policy1.jpg" },
//     { title: "強化生化研發預算", image: "/policy2.jpg" },
//     { title: "全民長壽健康計劃", image: "/policy3.jpg" },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative w-full h-72">
//         <Image
//           src="/banner.jpg"
//           layout="fill"
//           objectFit="cover"
//           alt="潮汐革命 共創未來"
//         />
//         <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
//           <h1 className="text-white text-4xl font-bold">潮汐革命 共創未來</h1>
//         </div>
//       </div>

//       {/* 最新消息 */}
//       <Section title="最新消息" data={news} />

//       {/* 政策宣傳 */}
//       <Section title="政策宣傳" data={policies} />
//     </div>
//   );
// }

// function Section({ title, data }: { title: string; data: { title: string; image: string }[] }) {
//   return (
//     <div className="container mx-auto py-10">
//       <h2 className="text-2xl font-bold text-purple-600 flex items-center mb-4">
//         <span className="mr-2">{title === "最新消息" ? "📰" : "📢"}</span> {title}
//       </h2>
//       <Swiper spaceBetween={20} slidesPerView={3} className="relative">
//         {data.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-white rounded-lg shadow-md p-4">
//               <Image
//                 src={item.image}
//                 width={300}
//                 height={200}
//                 className="rounded-md"
//                 alt={item.title}
//               />
//               <h3 className="text-md font-semibold text-center mt-2">{item.title}</h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }