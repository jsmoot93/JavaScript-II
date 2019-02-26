// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function captain() {
  console.log(`I am the captain!`);
  const order = "Prepare to get underway!";

  function xo() {
    const xoReply = "I am the XO!"
    console.log(`${xoReply} And I will pass on the order: ${order}`)

    function crew() {
      const crewReply = "We are the Crew!"
      console.log(`${crewReply} And we have received the order: ${order}`)
    }

    crew();
  }

  xo();
}

captain();