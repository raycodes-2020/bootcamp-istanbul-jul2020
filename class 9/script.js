

function makeMadLib() {
  const story = document.getElementById("story");
  let person = document.getElementById("person").value;
  let adjective = document.getElementById("adjective").value;
  let noun = document.getElementById("noun").value;
  story.innerHTML = person + " really likes " + adjective + " " + noun ;
}

let libButton = document.getElementById('lib-button');
libButton.addEventListener('click', makeMadLib);

