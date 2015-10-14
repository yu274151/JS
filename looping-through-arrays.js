var pets = ['cat', 'dog', 'rat'];

pets.forEach(function(pet, index, pets){
	pets[index] =  pet + "s";
	});

console.log(pets);
