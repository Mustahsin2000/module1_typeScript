"use strict";
const newDeveloper = {
    name: 'rafi',
    expertise: 'js',
    experience: 5,
};
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
const developer = {
    name: 'kafi',
    expertise: 'ts',
    experience: 4,
    leadershipexpe: 5,
    level: Level.senior
};
