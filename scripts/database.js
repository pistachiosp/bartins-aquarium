const database = {
// fish is an object array
    fish: [  
        {
        //key:value  both are properties
            
            name: "Bart",
            species: "clown",
            food: "crustaceans",
            location: "Australia",
            length: 3,
            image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2F4UdEs7tTKwLJbxZPUYR3hF-1200-80.jpg&imgrefurl=https%3A%2F%2Fwww.livescience.com%2F55399-clownfish.html&tbnid=SoxjMBJ5bRxX2M&vet=12ahUKEwim-saN7cf9AhX8bDABHYjUAdgQMygFegUIARCuAg..i&docid=Ct1AETz0xnKxSM&w=1000&h=667&q=clownfish&ved=2ahUKEwim-saN7cf9AhX8bDABHYjUAdgQMygFegUIARCuAg"
        },
        {
            name: "Erroll",
            species: "angel fish",
            food: "devil fish",
            location: "Australia",
            size: 6,
            image: "http://cdn.shopify.com/s/files/1/0311/3149/articles/care-guide-for-freshwater-angelfish-the-feisty-angel-of-the-aquarium-770309.jpg?v=1659758851"            
        }
    ]
}



export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
    //
}