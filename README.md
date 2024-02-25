# My Favorite Sports Team Data

This project uses JavaScript data structures to store and manage information about my favorite sports team.

## Populating Data

1. Declare a `const` variable called `team` and set it to an empty object.
2. Add a `_players` property and a `_games` property to your `team` object and initialize both to empty arrays.
3. Populate the `_players` array with three players, each represented as an object with `firstName`, `lastName`, and `age` properties.
4. Populate the `_games` array with three games, each represented as an object with `opponent`, `teamPoints`, and `opponentPoints` properties.

## Getting Data

5. Create a getter method called `players` to retrieve the `_players` property.
6. Create another getter method called `games` to retrieve the `_games` property.

## Adding Data

7. Add a `.addPlayer()` method to the `team` object to add a new player.
8. Below the `team` object, use the `.addPlayer()` method to add a new player and log the `_players` property to check that the new player was added.
9. Create a method for adding game results called `addGame` that takes three parameters: `newOpponent`, `newTeamPoints`, `newOpponentPoints`.
10. Below our `team` object, use the `.addGame()` method to add a record of a new game and log the `_games` property to check that the new game record was properly added.

