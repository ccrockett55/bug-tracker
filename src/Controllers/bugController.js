import bugModel from "../Models/bugModel";

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id: 1011,
        name:"Not showing",
        details:"The name field is not showing",
        steps:"When screen is loaded, the name field doesn't show",
        version:"V2.0",
        assigned:"Li Crockett",
        creator:"Sam Smith",
        priority: 2,
        time:"2:45",        
    }))
    data.push(new bugModel({
        _id: 1012,
        name:"Not working",
        details:"The name field is not showing",
        steps:"When screen is loaded, the name field doesn't show",
        version:"V2.0",
        assigned:"Li Crockett",
        creator:"Sam Smith",
        priority: 1,
        time:"2:45",        
    }))

    let sorted = data.sort((a,b) => {return a.priority - b.priority})
    return sorted;
}