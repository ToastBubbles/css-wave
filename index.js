function waves() {
  let container = document.getElementById("wave-container");
  let waveLength = 10;
  //let htmlString = `<div class="waveSeg"></div>`;

  //   let child = container;
  //   child.innerHTML += htmlString;

  let divPrefix = `<div class="waveSeg">0`;
  //   let htmlString;
  let divEnd = `</div>`;
  for (let i = 0; i < waveLength; i++) {
    divPrefix += `<div class="waveSeg">${i + 1}`;
    divEnd += `</div>`;
    //container.innerHTML += htmlString;

    // child = document.querySelector(`.${child.className} :nth-child(${i})`);
    // child.innerHTML += htmlString;
    // console.log(
    //   document.querySelector(`.${container.className} :nth-child(${1})`)
    // );
  }
  let htmlString = divPrefix + divEnd;
  container.innerHTML += htmlString;
}

waves();
