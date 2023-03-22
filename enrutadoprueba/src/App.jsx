import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
    Route,
    Routes,
    Link,
    useParams
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
              <h1>Gatos</h1>
            <p>{name}</p>
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
                      <li>
                          <Link to='/SearchPage'> Search Page </Link>
                      </li>
                  <li><Link to='/'> Home </Link></li>
                  </ul>
              </nav>
          </header>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/SearchPage' element={<SearchPage/>}/>
              <Route path='/gatos/:name' element={<Gatos/>}/>
          </Routes>



      </div>


  )
}

export default App
