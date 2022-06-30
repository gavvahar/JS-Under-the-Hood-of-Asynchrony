function doWork() {
  return new Promise((resolve) => {
    const myWorker = new Worker("worker.js");
    myWorker.postMessage("doWork");
    myWorker.onmessage = function () {
      console.log("in here");
      resolve();
    };
  });
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

let exampleButton = [
  document.querySelector("#example-1"),
  document.querySelector("#example-2"),
  document.querySelector("#example-3"),
];

exampleButton[0].addEventListener("click", function () {
  exampleOne();
  exampleButton[0].textContent = "Done!";
});

exampleButton[1].addEventListener("click", function () {
  exampleTwo().then(function () {
    exampleButton[1].textContent = "Done!";
  });
});

exampleButton[2].addEventListener("click", function () {
  Promise.all(exampleThree()).then(function () {
    exampleButton[2].textContent = "Done!";
  });
});
