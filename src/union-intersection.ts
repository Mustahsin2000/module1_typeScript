type NoobDeveloper = {
    name:string;
}

type JuniorDeveloper = NoobDeveloper & {
    expertise:string;
    experience:number;
}

const newDeveloper:NoobDeveloper | JuniorDeveloper = {
    name:'rafi',
    expertise:'js',
    experience:5,
}

enum Level {
    junior='junior',
    mid='mid',
    senior='senior',
}

type nextlevelDeveloper = JuniorDeveloper & {
    leadershipexpe:number,
    level:Level
}

const developer:nextlevelDeveloper={
    name:'kafi',
    expertise:'ts',
    experience:4,
    leadershipexpe:5,
    level:Level.senior
}