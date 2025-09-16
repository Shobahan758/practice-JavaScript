const mobileModel = {
 brand: 'samsung',
 model: 's36 Ultra',
 prossor: 'Gen 3',
 camera: ['200mp', '12mp','12mp'],  //use of array in object
 color: 'red',
}

console.log(mobileModel);

console.log(mobileModel.model);

console.log(mobileModel.camera);

mobileModel.camera.push('18mp'); //use array push in object

