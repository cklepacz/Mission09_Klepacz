import React from 'react';
import './App.css';
import teams from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const bballTeams = teams.teams;

class Team extends React.Component<TeamProps> {
  render() {
    const singleTeam = this.props;
    return (
      <div className="box">
        <h1>{singleTeam.school}</h1>
        <h2>AKA the {singleTeam.name}</h2>
        <h3>
          Located in {singleTeam.city}, {singleTeam.state}
        </h3>
      </div>
    );
  }
}

function Title() {
  return (
    <div>
      <h1>March Madness Do be Wildin'</h1>
      <h3>
        Want information of the college teams part of the NCAA? Look no further!
      </h3>
      <h2>Check out all the teams participating this year:</h2>
    </div>
  );
}

function TeamList() {
  return (
    <div>
      {bballTeams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Title />
      <TeamList />
    </div>
  );
}

export default App;
