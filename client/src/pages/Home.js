import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
// import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { QUERY_USERS } from "../utils/queries";
import Friends from "../components/friends-tab";
import { Card, Button } from "antd";

import TicTacToe from "./games/TicTacToe.js";
import Settings from "../components/settings-tab";

const testGamesList = [
  {
    name: "Tic Tac Toe",
    type: "simple",
    count:"2 Player",
    icon: "tictactoe.jpg",
    path: "tictactoe/test1",
  },
  {
    name: "Tic Tac Toe",
    type: "simple",
    count:"2 Player",
    icon: "tictactoe.jpg",
    path: "tictactoe/test1",
  },
];

let profileData = {
  id: 'EG76J42',
  icon: 'JD',
  fullName: 'John Doe',
  userName: 'JonnyManiac',
  online: false,
};

// import { useEffect, useState } from 'react';

const Home = () => {
  const history = useHistory();
  const match = useRouteMatch();
  
  // const [matchups ,setMathupsData]= useState([])
  // const matchupList = data?.matchups || [];

  // useEffect(()=>{
  //   if(!loading){
  //     setMathupsData(data)
  //   }
  // }, [loading])
  

  const fetchActiveGames = async () => {

  }

  const fetchGamesList = async () => {

  }

  const getGameCards = () => {
    const cards = testGamesList.map((game, index) => {
      return (
        <div className="w-screen px-4 mb-5">

          <div className="px-4 pb-4 pt-3  bg-neutral-200 rounded-md flex justify-between" key={index}>
            <div className="grid content-between">
              <div >
                <div className="text-2xl">{game.name}</div>
                <div className="flex">
                <div className=" text-lg font-thin uppercase mr-2">{game.type}</div>
                <div className=" text-lg">{game.count}</div>
                  
                </div>
              </div>
              <div className="flex justify-between w-full ">
                <button className="bg-neutral-800 text-xl text-white px-16 py-2 rounded-sm" onClick={() => history.push(`/games/${game.path}`)}>Play</button>
              </div>
            </div>
            <div>
              <img className="w-32 h-auto" src={`/gameIcons/${game.icon}`} alt={game.name} />

            </div>
          </div>
        </div>

      );
    });

    return <div>{cards}</div>;
  };

  return (
    <div className="h-full w-full flex">

      <Settings data={profileData} />
      <Router>
        <div className="w-screen grid content-start justify-center mt-5">
          <Switch>
            <Route exact path={`${match.path}`}>

              {getGameCards()}
            </Route>
            <Route path={`${match.path}games/tictactoe/:gameId`}>
              <TicTacToe />
            </Route>
          </Switch>
        </div>
      </Router>
      <Friends />
    </div>
  );
};

export default Home;
