import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_MATCHES } from "../../utils/queries";
import GameCard from "../GameCard";
import {ReactComponent as Arrow} from '../arrow.svg'

const userId = "621d90a76742d2938ffd5a00";

const MatchList = () => {
  const { loading, error, data } = useQuery(QUERY_MATCHES);

  if (loading) return <p>Loading</p>;
  if (error) {
    console.log(JSON.stringify(error, null, 2));
    return error;
  }

  const getMatchCards = () => {
    const userMatchData = data.matches.filter((match) => {
      console.log(match);
      return match.players.some((player) => player._id === userId);
    });

    console.log(data.matches);
    return userMatchData.map((match, index) => {
      const opponent =
        match.players[0]._id === userId
          ? match.players[1]?.username
          : match.players[0]?.username;

      return (
        <GameCard
          key={`${index}-matchCard`}
          gameType={match.game.gameType}
          ruleSet={match.game.ruleSet}
          count={0}
          gameId={match.game._id}
          icon={match.game.icon}
          path={`games/${match.game.path}/${match._id}`}
          opponent={opponent}
          type="match"
        />
      );
    });
  };

  return (
    <div>
      <div className="text-2xl px-4 flex justify-start items-center text-neutral-700 bg-gradient-to-t from-neutral-200 to-neutral-100 py-2 font-thin">
        <Arrow className='mr-2 h-4 w-4 mt-1' />
        Your Matches
        </div>
      {getMatchCards()}
    </div>
  );
};

export default MatchList;
