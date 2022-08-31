import './App.css';
import {Component} from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '123e',
        },
        {
          name: 'Frank',
          id: '123r',
        },
        {
          name: 'Jacky',
          id: '123t',
        },
        {
          name: 'Andy',
          id: '123y'
        }
      ]
    }
  };

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
              return (
                <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>
              )
            }
          )
        }
      </div>
    );
  }
}

export default App;
