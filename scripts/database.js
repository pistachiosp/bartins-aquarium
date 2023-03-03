const database = {
// fish is an object array
    fish: [  
        {
        //key:value  both are properties
            name: "Bart",
            food: "crustaceans",
            size: 3
        }
    ]
}



export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}