

const olderPets = pets.map((pet) => {
    pet.age += 2
    return pet
}).sort().map((pet) => {
    return `${pet.name} is ${pet.age} years old!`
}).forEach((pet) => {
    console.log(pet)
})

