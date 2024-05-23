function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function hehe(i) {
  sleep(2000);
  fetch("https://app.monprotocol.ai/api/trpc/quests.setQuestCompletion", {
    method: "POST",
    headers: {
      'Cookie': '',
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      json: i
    })
  });
}

function runTasks(startIndex) {
  for (let i = startIndex; i < 230; i++) {
    hehe(i);
    console.log(i);
  }
}

function startLoop() {
  let index = localStorage.getItem('currentIndex');
  if (index === null) {
    index = 0;
  } else {
    index = parseInt(index, 10);
  }

  runTasks(index);

  localStorage.setItem('currentIndex', 0);
  console.log('Completed one full loop, refreshing the page...');
  window.location.reload();
}

startLoop();
