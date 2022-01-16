import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import React, {useEffect, useState} from "react";
import Content from "./components/Content/Content";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MyTeam from "./components/MyTeam/MyTeam";

function App() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [myTeam, setMyTeam] = useState([]);
    const [players, setPlayers] = useState([]);

    const x_rapidapi_host = "api-football-v1.p.rapidapi.com";
    const x_rapidapi_key = "24ef27f2b9msh1b6bcf01dfa7732p1c6ca1jsnfdf40d57abad";


    const updatePlayer = (player) => {
        player.myPlayer = true;
        setPlayers((players) => [...players]);
        setMyTeam([...myTeam, player]);
        console.log(myTeam);
    }

    const removePlayer = (player) => {
        player.myPlayer = null;
        setPlayers((players) => [...players]);
        const index = myTeam.indexOf(player);
        if (index > -1) {
            myTeam.splice(index, 1);
        }
        console.log(myTeam);
    }



    useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true)
          try {
              const res = await fetch("https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=94", {
                  "method": "GET",
                  "headers": {
                      "x-rapidapi-host": x_rapidapi_host,
                      "x-rapidapi-key": x_rapidapi_key
                  }
              });
              const json = await res.json()
              const teams = json.response[0].league.standings[0];
              setData(teams)
              setIsLoading(false);
          }
              catch(error) {
                  console.log("Error")
              }
              setIsLoading(false);
      }
   fetchData()}, [])



    return (
        isLoading ? (<p>Loading ...</p>)
            :
            (
        <div className="App">
            <Router>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Content teams = {data} updatePlayer={updatePlayer}
                     removePlayer={removePlayer} myteam={myTeam} setPlayers={setPlayers} players={players}
                    />}></Route>
                    <Route path="/MyTeam" element={<MyTeam myTeam={myTeam} />}></Route>
                </Routes>
            </Router>
        </div>)
    );

}

export default App;
