const people = ['yoshi','ram','siri','alexa'];
const ages = [20 , 24, 56, 89];
console.log(people);

//module.exports = 'hello';
//we exporting people file to module file,means access is given

module.exports ={
    people,ages
}