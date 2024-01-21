import { useState , useEffect } from 'react'

import pets from './pets'
const ANIMALS = ['dog','cat','bird','reptile','rabbit']

function SearchParams() {
    const [location , setLocation] = useState('')
    const [animal , setAnimal] = useState('')
    const [breed , setBreed] = useState('')
const [Pets , setPets] = useState('')
    const breeds = [];
    // const location = ''
    console.log(location)
    console.log(animal)
    console.log(breed)

useEffect(() => {
    petsdata()
} , [location , animal])

    async function petsdata(){
        const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
        const data = await response.json();
        setPets(data.Pets)
        // console.log('data' , data)
        console.log(Pets)
    }

  return (
    <div className='search-params'>
        <form>
            <label htmlFor="location">
            <input type="text" id='location' name='location' value={location} 
                placeholder='Location'
                onChange={(e) => setLocation(e.target.value)}
                
                />  
            </label>
          
            <label htmlFor="animal">
             <select name="animal"  id="animal" 
              value={animal}
             onChange={(e) => setAnimal(e.target.value)}
             >
                {
                  ANIMALS.map((item,ind) => (
                 <option value={item} key={ind}>{item}</option>
                  ))  
                }
             </select>
            </label>

            <label htmlFor="breed">
             <select name="breed"  id="breed" 
              value={breed}
             onChange={(e) => setBreed(e.target.value)}
             disabled={breeds.length < 1}
             >
                {
                  breeds.map((item,ind) => (
                 <option value={item} key={ind}>{item}</option>
                  ))  
                }
             </select>
            </label>
            <button>Sumbit</button>
        </form>
{   
Pets.map((item ,index) => { <Pets name = {item.name} animal = {item.animal} breed = {item.breed} location = {item.location} id = {item.id} key = {item.images}/>})
}
        
    </div>
  )
}

export default SearchParams 
