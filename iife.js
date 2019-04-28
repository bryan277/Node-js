var lastname = 'Nalgene';

(function (lastname) {
   var firstname = 'John';
   console.log(firstname);
   console.log(lastname);
}('Nalgenes'));

var firstname = 'Jane';
console.log(firstname);
console.log(lastname);
// John
// Nalgenes
// Jane
// Nalgene
