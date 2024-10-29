function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sleep() {
  await timeout(5000);
}

async function main() {
  let count = 0;
  let users = [];
  let onlyExplore = false;
  await fetch(
    "https://api.meeff.com/user/explore/v2/?lat=-3.7895238&lng=-38.5327365",
    {
      method: "GET",
      headers: {
        "x-firebase-appcheck": "YOUR APP CHECK STRING",
        "meeff-access-token": "YOUR MEEFF ACESS TOKEN",
        Connection: "keep-alive",
        Authorization: "Basic YOUR TOKEN",
      },
    }
  ).then(async (res) => {
    if (res.status == 200) {
      count++;
    }
    let json = await res.json();
    users = json.users;
  });
  users.forEach((user) => {
    console.log(user._id);
  });
  if (!onlyExplore) {
    await new Promise(async (resolve) => {
      for (let user of users) {
        console.log(user._id);
        await fetch(
          `https://api.meeff.com/user/undoableAnswer/v5/?userId=${user._id}&isOkay=1`,
          {
            method: "GET",
            headers: {
              "x-firebase-appcheck": "YOUR APP CHECK STRING",
              "meeff-access-token": "YOUR MEEFF ACESS TOKEN",
              Connection: "keep-alive",
              Authorization: "Basic YOUR TOKEN",
            },
          }
        ).then(async (res) => {
          const jsonRes = await res.json();
          console.log(jsonRes);
          if (Object.keys(jsonRes).length > 1) {
            process.exit(0);
          }
        });
      }
      resolve();
    });
  }
  await sleep();
  console.log(count);
  main();
}

main();
