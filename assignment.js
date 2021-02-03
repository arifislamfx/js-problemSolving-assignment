//Feet to Mile convert
function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}
var totalMile = feetToMile(20000);
console.log(totalMile);

//find the tiny friend name
var myFriends = ["kader", "rajon", "shuvo", "kamrul", "arif"];

function tinyFriend(arr) {
  var tiny = arr[0];
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (tiny.length > element.length) {
      tiny = element;
    }
  }
  return tiny;
}

var shortestFriend = tinyFriend(myFriends);
console.log(shortestFriend);
