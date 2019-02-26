const stuff = ['pen', 'notes', 'string', 'mint'];

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb('true');
    } else {
      return cb('false');
    }
  }
}
contains('pen', stuff, function(find) {
  console.log(find)
});