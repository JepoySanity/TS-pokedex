import React from 'react';
import pokemons from './pokemon.json';
import './App.css';

interface PokemonBase {
  name: string,
  hp: number,
  atk: number,
  def: number,
  sAtk: number,
  sDef: number,
  spd: number
}

function App() {
  const [search, setSearch] = React.useState<string>("")
  const [selected, setSelected] = React.useState<PokemonBase>()
  
  // const selectPokemon = (pokemon: PokemonBase) => {
  //   setSelected(pokemon)
  // }

  return (
    <div className='App'>
      <h1 className='title'>Pokedex</h1>
      <input 
        type="text" 
        className="search_box" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      { selected && (
      <div style={{lineHeight:'5px'}}>
        <h3>{selected.name}'s Stats:</h3>
        {/* <p><b>HP: </b>{selected.hp}</p>
        <p><b>ATK: </b>{selected.atk}</p>
        <p><b>DEF: </b>{selected.def}</p>
        <p><b>S.ATK: </b>{selected.sAtk}</p>
        <p><b>S.DEF: </b>{selected.sDef}</p>
        <p><b>Speed: </b>{selected.spd}</p> */}
        <table>
          <tbody style={{lineHeight: '1.5'}}>
          <tr>
            <td><b>HP:</b></td>
            <td>{selected.hp}</td>
          </tr>
          <tr>
            <td><b>ATK:</b></td>
            <td>{selected.atk}</td>
          </tr>
          <tr>
            <td><b>DEF:</b></td>
            <td>{selected.def}</td>
          </tr>
          <tr>
            <td><b>S.ATK:</b></td>
            <td>{selected.sAtk}</td>
          </tr>
          <tr>
            <td><b>S.Def:</b></td>
            <td>{selected.sDef}</td>
          </tr>
          <tr>
            <td><b>SPD:</b></td>
            <td>{selected.spd}</td>
          </tr>
          </tbody>
        </table>
        <hr />
      </div> 
      )
      }
      <table className='pokemon_table'>
        <thead>
          <tr>
            <td><b>Pokemon</b></td>
            <td><b>Type</b></td>
            <td style={{textAlign:"right"}}></td>
          </tr>
        </thead>
        <tbody>
          {
            pokemons.filter((pokemon)=>pokemon.name.english.toLowerCase().includes(search.toLowerCase())).slice(0,20).map((pokemon) => (
              <tr key={pokemon.id}>
                <td>{pokemon.name.english}</td>
                <td>{pokemon.type.join(", ")}</td>
                <td style={{textAlign:"right"}}>
                  <button 
                    onClick={()=>setSelected(
                      { 
                        name: pokemon.name.english,
                        hp: pokemon.base.HP, 
                        atk: pokemon.base.Attack, 
                        def: pokemon.base.Defense,
                        sAtk: pokemon.base['Sp. Attack'],
                        sDef: pokemon.base['Sp. Defense'],
                        spd: pokemon.base.Speed,
                      }
                    )}
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
