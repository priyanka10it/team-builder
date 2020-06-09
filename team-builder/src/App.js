import React, { useState } from 'react';
import TeamCard from './components/TeamCard';
import Form from './components/Form';

function App() {

    //Initial value
    const [teamMembers, setTeamMembers] = useState([{
        id: 1,
        name: 'Priyanka Sarkar',
        email: 'priyanka10.it@gmail.com',
        role: 'FullStack Developer'
    }]);

    //Format for applying card to new member
    const addMember = data => {
        const newCard = {
            id: Date.now(),
            name: data.name,
            email: data.email,
            role: data.role
        };
        setTeamMembers([...teamMembers, newCard]);
    }

    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           </a>*/}
          <Form addMember={addMember} />
              <TeamCard teamMembers={teamMembers} />
        </header>
      </div>
    );
}

export default App;