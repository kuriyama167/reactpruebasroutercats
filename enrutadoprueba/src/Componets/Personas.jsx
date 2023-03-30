import {useQuery} from 'react-query'
import {getPersonas} from '../Api/PersonasAPI.js'
import { NavLink } from './NavLink.jsx'


function Personas(){

  const {isLoading, data: personas, isError, error } = useQuery({
    queryKey : ['personas'],
    queryFn: getPersonas
  })
if (isLoading) return <div>...Loading..</div>
  else if (isError) return <div> Error: { error.message } </div>
  return personas.map(persona => (
    <div key={persona.id} className = "w-md p-7 shadow-md lg:max-w-4xl  m-4 rounded-2xl cursor-pointer" >
      <div className = "space-y-2" >
        <h3 className = "text-2xl font-semibold" >
          {persona.FirstName} </h3>
        <h3 className = "text-2xl font-semibold" >
          {persona.SecondName} </h3>
        <p className = "text-gray-600" >
        react with tailwind css simple card It is a long established fact that a reader will be distracted.
        </p>
      </div >
      <button id="dropdownButton" data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700
                            focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"><NavLink to='/searchPage'> SearchPage</NavLink></button>
    </div>



  ))

}

export default Personas