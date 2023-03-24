import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
    Route,
    Routes,
    Link,
    useParams,
    Outlet, NavLink as NavLinkReactRouter,
} from "react-router-dom";
const Home = () => Element = <h1>Home</h1>


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

const NavLink = ({to, children, ...props}) => {
  return(
    <NavLinkReactRouter
      {...props}
      className={({ isActive }) =>{
      return isActive ? 'is-active' : undefined
      }}
      to={to}
    > {children}
    </NavLinkReactRouter>
  )
}

function App() {

  return (
      <div className="App">
          <header>
              <h1>Meow app react </h1>
              <nav>
                  <ul>
                    <li><NavLink to='/'> Home</NavLink></li>
                    <li><NavLink to='/searchPage'> SearchPage</NavLink></li>
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
