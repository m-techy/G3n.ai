import React from 'react'
import omerpfp from'../assets/omer.jpg';
import charanpfp from '../assets/Picsart_24-05-23_17-37-38-134~2.jpg';

const dev1 = {
    name: "Charan",
    image: charanpfp,
    linkedin: "https://www.linkedin.com/in/sri-charan-j/",
    github: "https://github.com/m-techy",
}

const dev2 = {
    name: "Rakesh Rohan",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFOWtDAsrZ9-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702353504502?e=1732752000&v=beta&t=S_f8Ncol5WxU3MFOaFnX4KSzrM5Q6NUJ_QZ441EXwvc",
    linkedin: "https://www.linkedin.com/in/rakesh-rohan/",
    github: "https://github.com/rakeshrohan-123",
}

const dev3 = {
    name: "Omer Farooq",
    image: omerpfp,
    linkedin: "https://www.linkedin.com/in/omerfarooq26/",
    github: "https://github.com/omer2626/",
}

const dev4 = {
    name: "Sai Ram",
    image: "https://media.licdn.com/dms/image/v2/D5635AQFmLf1hdBopLA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1710139614679?e=1727852400&v=beta&t=h6UFuZVysY9ONaoRcvRkILCYybriEr3ablrCnwthFfU",
    linkedin: "https://www.linkedin.com/in/sairam-ramavath/",
    github: "https://github.com/Sairam-04",
}

const developers = [dev1, dev2, dev3, dev4];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

const Team = () => {
    // Shuffle developers array before rendering
    const shuffledDevelopers = shuffleArray([...developers]);

    return (
      <div className='flex flex-col items-center justify-start pt-8 gap-8 text-white w-full h-[100vh] pt-[6%] sm:pt-[10vh] md:pt-[8%]'>
          <div className='rounded-[30px] border-solid border-2 border-white text-[26px] font-medium w-fit px-[25px] py-[4px] from-blue-500 to-sky-200 bg-gradient-to-r bg-clip-text text-transparent'>Meet our team</div>
          <div className='flex flex-wrap justify-center gap-12 mt-8'>
              {shuffledDevelopers.map((dev, index) => (
                  <div key={index} className='flex flex-col items-center'>
                      {/* Apply scale and transition utilities to this div */}
                      <div className="w-48 h-48 rounded-full overflow-hidden p-1 bg-gradient-to-r from-blue-500 via-sky-200 to-purple-500 transition-transform duration-500 hover:scale-[108%]">
                          <div className="w-full h-full rounded-full overflow-hidden bg-white">
                              <img src={dev.image} alt={dev.name} className='w-full h-full rounded-full object-cover' />
                          </div>
                      </div>
                      <div className='mt-2 text-[18px] font-normal'>{dev.name}</div>
                      <div className='flex gap-2 mt-1'>
                          <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className='transition-transform duration-500 hover:scale-[120%]'>
                              <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className='w-6 h-6' />
                          </a>
                          <a href={dev.github} target="_blank" rel="noopener noreferrer" className='transition-transform duration-500 hover:scale-[120%]'>
                              <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" className='w-6 h-6' />
                          </a>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    )
}


export default Team;
