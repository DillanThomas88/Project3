const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  friends: [User]
  online: Boolean
  icon: String
  fullName: String
  activeMatches: [Match]
  pastMatches: [Match]
}

type Match {
  game: Game
  status: String
  winner: User
  score: String
  gameBoard: String
  activePlayer: User
  player: [User]
}

type Game {
  _id: ID
  gameType: String
  ruleSet: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  user(username: String!): User
  games(username: String): [Game] 
  game(gameId: ID!): Game
  me: User
  matches(username: String!): [Match]
  match(matchId: ID!): Match
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addFriend(userId: ID!): User
  removeFriend(userId: ID!): User
  updateUsername(userId: ID!, username: String!): User
  updateEmail(userId: ID!, email: String!): User
  updatePassword(userId: ID!, password: String!): User
  updateOnline(userId: ID!, online: Boolean!): User
  updateIcon(userId: ID!, icon: String!): User
  updateActiveMatches(userId: ID!, activeMatches: String!): User
  addGame(gameType: String!, ruleSet: String!): Game
  updateGameType(gameId: ID!, gameType: String!): Game
  updateGameRuleSet(gameId: ID!, ruleSet: String!): Game
  addMatch: Match
  updateMatchGame(matchId: ID!, gameId: ID!): Match
  updateMatchStatus(matchId: ID!, status: String!): Match
  updateMatchWinner(matchId: ID!, winner: String!): Match
  updateMatchScore(matchId: ID!, score: String!): Match
  updateMatchGameBoard(matchId: ID!, gameBoard: String!): Match
  updateMatchActivePlayer(matchId: ID!, username: String!): Match
  addMatchPlayer(matchId: ID!, userId: ID!): Match
  removeMatchPlayer(matchId: ID!, userId: ID!): Match
}
`;

module.exports = typeDefs;
