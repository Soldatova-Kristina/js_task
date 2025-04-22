// Задание 1
// const numbers = [1, 2, 3, 4, 5];
// const newNum = numbers.map(i => i **2);
// console.log(newNum);
// Задание 2
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = numbers.filter(i => i % 2 === 0);
// console.log(newNum);
// Задание 3
// const numbers = [1, 2, 3, 4, 5];
// const newNum = numbers.reduce((acc, number) => acc + number, 0);
// console.log(newNum);
// Задание 4
// let users = [
//     {
//         name: "Anna",
//         age: 25
//     },
//     {
//         name: "Boris",
//         age: 30
//     },
//     {
//         name: "Cathy",
//         age: 22
//     },
// ];
// users.sort((a, b ) => a.age - b.age);
// console.log(users);
// Задание 5
// const fruits = ['apple','banana','orange','apple','grape','banana']
// const newArr = fruits.filter((item, index, arr) => {
//     return arr.indexOf(item) === index;
// });
// console.log(newArr);
// Задание 6
const players = [
    { id: 1, name: "Лионель Месси", teamId: 1, countryId: 1, goals: 30 },
    { id: 2, name: "Криштиану Роналду", teamId: 2, countryId: 2, goals: 25 },
    { id: 3, name: "Неймар", teamId: 3, countryId: 3, goals: 20 },
    { id: 4, name: "Килиан Мбаппе", teamId: 3, countryId: 4, goals: 22 },
    { id: 5, name: "Златан Ибрагимович", teamId: 4, countryId: 5, goals: 15 }
];
const teams = [
    { id: 1, name: "ПСЖ", countryId: 3 },
    { id: 2, name: "Манчестер Юнайтед", countryId: 2 },
    { id: 3, name: "Барселона", countryId: 1 },
    { id: 4, name: "Милан", countryId: 5 }
];
const countries = [
    { id: 1, name: "Аргентина" },
    { id: 2, name: "Португалия" },
    { id: 3, name: "Франция" },
    { id: 4, name: "Бразилия" },
    { id: 5, name: "Швеция" }
];
const newPlayer = {
    id: 2,
    name: "Имя Фамилия ",
    teamId: 2,
    countryId: 2,
    goals: 20

}
players.push(newPlayer)
// Задание 6.1
const getNames = players.map(player => player.name);
console.log(getNames);
// // Задание 7
const findTeam = teams.find(team => team.name === "ПСЖ").id;
const getPlayers = players.filter(player => player.teamId === findTeam );
console.log(getPlayers);
// // Задание 8
const find = countries.find(country => country.name === "Аргентина" ).id;
console.log(find);
const findPlayersFromCountry = players.some(player => player.countryId === find);
console.log(findPlayersFromCountry);
// Задание 9
// const getGoals = players.reduce((total, player) => total + player.goals, 0);
// console.log(getGoals);
// Задание 10
const formattedString = players.map(player => {
    const findTeam =
    teams.find(team => team.id === player.teamId).name;
    return `${player.name}: ${findTeam}`;
    })
    .join(', ');
console.log(formattedString);
// Задание 11
// const getGoals = players
//     .slice()
//     .sort((a, b) => b.goals - a.goals)
//     .map(player => `${player.name}: ${player.goals}`)
//     .join('\n')
// console.log(getGoals);
// Задание 12
// const result = countries.reduce((acc, country) => {
//     const getKey = players
//         .filter(player => player.countryId === country.id)
//         .map(player => player.name)
//         acc[country.name] = getKey;
//         return acc;
// }, {})
// console.log(result);
// Задание 13
// const getTeamsGoals = teams.map(team => {
// const getGoal = players
//     .filter(player => player.teamId === team.id)
//     .reduce((sum, player) =>
//         sum + player.goals, 0)
//     console.log(getGoal)
//     return {
//         name: team.name,
//         goals: getGoal
// };
// });
// const getTopTeam = getTeamsGoals
//     .reduce((max, team) => team.goals > max.goals? team : max)
// console.log(`У команды "${getTopTeam.name}" больше всего голов - ${getTopTeam.goals}`);
// Задание 14
// function groupPlayersByTeamInCountry(countryId) {
//     const country = countries.find(c => c.id === countryId);
//     const playersFromCountry = players.filter(p => p.countryId === countryId);
//     const grouped = {};
//     playersFromCountry.forEach(player => {
//         if (!grouped[player.teamId]) {
//             grouped[player.teamId] = [];
//         }
//         grouped[player.teamId].push(player.name);
//     });
//     const result = Object.entries(grouped).map(([teamId, playerNames]) => {
//         const team = teams.find(t => t.id === Number(teamId));
//         return `Игроки: ${playerNames.join(", ")} из команды ${team?.name} играют за ${country?.name}`;
//     });
//
//     return result.join("\n");
// }
// console.log(groupPlayersByTeamInCountry(2));
// Задание 15

// Задание 16

// Задание 17

// Задание 18

// Задание 19

// Задание 20





