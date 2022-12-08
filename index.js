function waves() {
  let container = document.getElementById("wave-container");
  let waveLength = 10;

  let divPrefix = `<div class="waveSeg">0`;

  let divEnd = `</div>`;
  for (let i = 0; i < waveLength; i++) {
    divPrefix += `<div class="waveSeg">${i + 1}`;
    divEnd += `</div>`;
  }

  let htmlString = divPrefix + divEnd;
  container.innerHTML += htmlString;
}

var i = 0;

function myLoop() {
  setTimeout(function () {
    // console.log(

    // );
    document.querySelectorAll(`.waveSeg`)[i].classList.add("animateWave");
    i++;
    if (i < 10) {
      myLoop();
    }
  }, 100);
}

myLoop();

waves();
