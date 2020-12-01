'use strict'

var gProjs;
const KEY = 'projects';





var gProjs = [{
        id: 'chess-game',
        name: 'Chess Game',
        title: 'This is the Chess Board Game',
        desc: 'A chess board game',
        url: 'https://nadavmozes.github.io/chessgame/',
        imgUrl: 'chess.png',
        publishedAt: 1448693940551,
        labels: ['JS', 'HTML', 'CSS'],
    },
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'This is the Minesweeper Game',
        desc: 'A minesweeper game',
        url: 'https://nadavmozes.github.io/minesweeper/',
        imgUrl: 'minesweeper.png',
        publishedAt: 1448693940551,
        labels: ['JS', 'HTML', 'CSS']
    },
    {
        id: 'guess-who',
        name: 'Guess Who',
        title: 'This is the Guess Who Game',
        desc: 'A Guess Who game',
        url: 'https://nadavmozes.github.io/guesswho/',
        imgUrl: 'guesswho.png',
        publishedAt: 1448693940551,
        labels: ['JS', 'HTML', 'CSS']
    },
    {
        id: 'book-store',
        name: 'Book Store',
        title: 'This is A Book Store Website',
        desc: 'A Book Store Website',
        url: 'https://nadavmozes.github.io/bookstore/',
        imgUrl: 'bookstore.png',
        publishedAt: 1448693940551,
        labels: ['JS', 'HTML', 'CSS']
    },
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'This is A Pacman Game',
        desc: 'A Pacman Game',
        url: 'https://nadavmozes.github.io/pacman/',
        imgUrl: 'pacman.png',
        publishedAt: 1448693940551,
        labels: ['JS', 'HTML', 'CSS']
    },
    {
        id: 'todo',
        name: 'Todo App',
        title: 'This is A Todo APP',
        desc: 'A Todo APP web',
        url: 'https://nadavmozes.github.io/to-do/',
        imgUrl: 'todo.png',
        publishedAt: 1448693940551,
        labels: ['JS', 'HTML', 'CSS']
    },

]

function _createProjects() {

}

function getProjectsForDisplay() {
    return gProjs;
}


function _saveProjectsToStorage() {
    saveToStorage(KEY, gProjects)
}
// CREATE
// READ 
function getProjectById(projId) {
    var proj = gProjs.find(function(proj) {
        return projId === proj.id
    })
    return proj
}
// UPDATE
//DELETE

// function addProject(name,title,desc,url){

// }