

// import React from 'react';

// const Gallery = () => {
//   return (
//     <section className="gallery" id="gallery">
//       <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Gallery</h2>
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {[     { src: "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/413891981_878487863728385_8778670364012454314_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=C1Tj0UK_JhkQ7kNvgEiFO4f&_nc_ht=scontent.fbho1-2.fna&oh=00_AYAVoE9BDtaKLzDWburhTSPTrAieTGNEnr1Qcdy4x62vsw&oe=66801D86", title: "Campus" },
//          { src: "https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/358457380_784796453097527_961723855018156113_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hAZdfGne2pUQ7kNvgHnV4jb&_nc_ht=scontent.fbho1-1.fna&oh=00_AYBLKAlXZnmEoNMoUa3ddTU-rdwKQhpmCRzBlxbvi2ZFhw&oe=66801D8C", title: "Moral Values" },
//           { src: "https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/355495326_777174190526420_6081781528256518418_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2cM63l3TgKQQ7kNvgETs1Ub&_nc_ht=scontent.fbho1-4.fna&oh=00_AYDKc_Qo7h9Qjg5p6qI0EwEtxXwFok8_kWnSJfdjKt1cKg&oe=668045E2", title: "Sports" },
//           { src: "https://scontent.fbho1-1.fna.fbcdn.net/v/t1.6435-9/117096614_3025665420884591_5446939912434239664_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=AIJdkVZQFmUQ7kNvgFd82Af&_nc_ht=scontent.fbho1-1.fna&oh=00_AYB3MTiH5Ow8mxSdaPxUd_UNBoKP7HIE5zQBlnPzX5GnVg&oe=66A1DDCB", title: "Our Keen Learners" },
//           { src: "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/413932585_878480803729091_3526365065535792953_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9sturzi5ifMQ7kNvgE49Ol4&_nc_ht=scontent.fbho1-2.fna&oh=00_AYBCIIVkjSjOFTHNZ0dpafTjw-8XLHRaWKghUikfGgArSg&oe=66804137", title: "Competitions" },
//           { src: "https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/345603530_772806894372242_3661060626763919312_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QQNZRaDqQ5IQ7kNvgFbt7vK&_nc_ht=scontent.fbho1-1.fna&oh=00_AYClYmwtaEIFo7UX6--joLDu2-Jh5NLLR1EHCM1hUL1BYg&oe=668026A2", title: "Events " },
//           { src: "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/345453416_562053976068286_2046645543222711216_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AlF6ddkbA9cQ7kNvgEgclli&_nc_ht=scontent.fbho1-2.fna&oh=00_AYBHjXHctPEOAiPRDYsOgKsWLmkz70T4ItFmIn2YkeKrrg&oe=66804A54", title: "Bright Talent" },
//           { src: "https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/432627297_923248789252292_4327597992928091800_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Vy0srVsQTHwQ7kNvgG513SW&_nc_ht=scontent.fbho1-1.fna&oh=00_AYBXOa4RFqe4o-BJphH4dBVmDyNdO9WX4sEN_j2VEbhIhw&oe=668030FF", title: "Exhibitions " },
//           { src: "https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/414045571_878475860396252_3986578262855933653_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j6x-1otyOGEQ7kNvgGbj_h0&_nc_ht=scontent.fbho1-1.fna&oh=00_AYCyiJuGFPHOc7mhK2zEbAIlcIFGtkXXiLMD7vH0YLGNNw&oe=66804976", title: "Celebrating the moments" },
//           { src: "https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/413891940_878466890397149_9149827048249554723_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Bx0Zswz1rUYQ7kNvgG0BRJV&_nc_ht=scontent.fbho1-2.fna&oh=00_AYDkaMgIo6i-HWe1Uj3ShjGeOPf93yQPDiNnAmGZk-RMIQ&oe=668033A3", title: "Educational Tours" },
         
     
//         ].map((item, index) => (
//           <div key={index} className="relative w-full h-60 overflow-hidden rounded-lg cursor-pointer group">
//             <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//             <h3 className="absolute inset-0 bg-teal-600 bg-opacity-75 text-white text-center flex items-center justify-center text-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//               {item.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Gallery;



import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Gallery</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { src: "/camous.jpg", title: "Campus" },
          { src: "/kidos.jpg", title: "Moral Values" },
          { src: "/sports.jpg", title: "Sports" },
          { src: "/celebs.jpg", title: "Our Keen Learners" },
          { src: "/yoga.jpg", title: "Competitions" },
          { src: "/grand.jpg", title: "Events" },
          { src: "/ed.jpg", title: "Bright Talent" },
          { src: "/exhibition.jpg", title: "Exhibitions" },
          { src: "/edugrad.jpg", title: "Celebrating the moments" },
          { src: "/edutour.jpg", title: "Educational Tours" },
        ].map((item, index) => (
          <div key={index} className="relative w-full h-60 overflow-hidden rounded-lg cursor-pointer group">
            <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <h3 className="absolute inset-0 bg-teal-600 bg-opacity-75 text-white text-center flex items-center justify-center text-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
