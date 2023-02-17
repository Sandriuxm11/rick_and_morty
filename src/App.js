import './App.css'
import Card from "./components/Card/Card.jsx"
import Cards from "./components/Cards/Cards.jsx"
import SearchBar from "./components/SearchBar/SearchBar.jsx"
import characters, { Rick } from './data.js'
import styled from 'styled-components'

const Aplicacion = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    justify-content: center;
    align-content: center;  
`

const Trescartas = styled.div`
    display: flex;
    flex-direction: row;
    
`


function App () {
  return (
    <Aplicacion >
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <br />
      <hr />
      <Trescartas>
          <Cards
            characters={characters}
          />
      </Trescartas>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </Aplicacion>
  )
}

export default App;
