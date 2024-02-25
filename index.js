
const team = {
    _players: [],
    _games: [],
    
    
    get players() {
      return this._players;
    },
    
    
    get games() {
      return this._games;
    },
    
    
    addPlayer: function(newFirstName, newLastName, newAge) {
      const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(newPlayer);
    },
    
    
    addGame: function(newOpponent, newTeamPoints, newOpponentPoints) {
      const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(newGame);
    }
  };
  
  
  team._players.push(
    {firstName: 'charite', lastName: 'Ways', age: 54},
    {firstName: 'Tony', lastName: 'Baba', age: 30},
    {firstName: 'Lewis', lastName: 'Milles', age: 25}
  );
  
  team._games.push(
    {opponent: 'Lions', teamPoints: 90, opponentPoints: 88},
    {opponent: 'Bears', teamPoints: 110, opponentPoints: 105},
    {opponent: 'Eagles', teamPoints: 95, opponentPoints: 92}
  );
  
  
  team.addPlayer('Manzi', 'Ray', 76);
  
  
  console.log(team.players);
  
  
  team.addGame('Titans', 100, 98);
  
  
  console.log(team.games);
  