//import { useState } from 'react'//
//import reactLogo from './assets/react.svg'//
//import viteLogo from '/vite.svg'//
import { NavLink } from './Componets/NavLink.jsx'
import './App.css'
import Personas from './Componets/Personas.jsx'
import {
    Route,
    Routes,
    Link,
    useParams,
    Outlet,
} from "react-router-dom";


const Home = () => {
  return(
    <Personas/>
  )




}


const SearchPage = ()  =>  {
    const gatos = [
        'micha',
        'misufu',
        'meow'
    ]
    return (
        <div className="lista">
            <h1>Gatos Page</h1>
            <ul>
            {gatos.map(gato => (
                    <li key={gato}><Link to={`/gatos/${gato}`}>{gato}</Link></li>
            ))}
            </ul>
        </div>

        )
}
  const Gatos = () => {
const {name} = useParams()
      return(
          <div>
              <Outlet />
              <h1>Gatos</h1>

            <p>{name}</p>
              <Link to='details'>Ir a los detalles</Link>


          </div>
      )
}

const GatoDetail = () => {
    const {name} = useParams()
    return (
        <div>
        <h1>Gato DEtails{name}</h1>

        </div>


    )

}

const NotFound = () => {
    return(
        <div>
            <h1>Not Found</h1>
        </div>
    )
}


function App() {

  return (
      <div className="App">
          <header>
              <h1>Meow app react </h1>
              <nav>
                  <ul>
                    <button id="dropdownButton" data-dropdown-toggle="dropdown"
                            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700
                            focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            type="button"><NavLink to='/'> Home</NavLink></button>
                    <button><NavLink to='/searchPage'> SearchPage</NavLink></button>
                  </ul>
              </nav>
          </header>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/SearchPage' element={<SearchPage/>}/>
              <Route path='/gatos/:name' element={<Gatos/>}/>
                 <Route path='/gatos/:name/details' element={<GatoDetail/>}>
                   </Route>
              <Route path='*' element={<NotFound/>}/>
          </Routes>

      </div>



  )
}

export default App
