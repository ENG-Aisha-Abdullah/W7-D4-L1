import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'


function Home() {
 const [character, setCharacter] = useState([]);
  const [image, setImage] = useState([]);
   const [name, setName] = useState([]);
    const [gender, setGender] = useState([]);
     const [search, setSearch] = useState([]);
let url = "https://6836b805664e72d28e41cf24.mockapi.io/character"
useEffect(() => {
  axios.get(url).then((res) => {
    setCharacter(res.data);
  });
  
}, [url]);

const add = () => {

};

  return (
      
    //  هنا تنعرض الصور اللي اضقتها  

    <div className=" bg-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-5 items-center justify-center">
      {character.map((character) => (
        <div key={character.id} className="flex flex-col bg-white p-4 mb-4 rounded shadow text-center w-[80%] mx-auto">
            <img src={character.image} alt="image" />
              <h2 className="text-lg text-black font-bold">{character.name}</h2>
            <p className="text-black">{character.gender}</p>
          
        </div>
        
      ))}
        </div>



        {/* هنا بوتون الاضافة */}
      

 <div className="bg-white p-4 rounded shadow mb-6 flex flex-col gap-5 w-[80%] mx-auto">
        <input
          type="text"
          placeholder="img url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="p-2 border border-gray-500 rounded w-full"
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-500 rounded w-full"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="p-2 border border-gray-500 rounded w-full"
        >
          <option value="Male">
            Male
            </option>
          <option value="Female">
            Female
            </option>
        </select>
      <div>
            <button 
            className='p-2  rounded w-full bg-amber-300'
            >
                Add New Image..
            </button>
            </div>
      </div>




         </div>
  );

  
}

export default Home