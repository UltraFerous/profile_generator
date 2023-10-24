const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userData = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  userData.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    userData.activity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      userData.listen = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        userData.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          userData.mealThing = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            userData.sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              userData.superpower = answer;
              rl.close();
              console.log(`${userData.name} loves listening to ${userData.listen} while ${userData.activity}, devouring ${userData.mealThing} for ${userData.meal}, prefers ${userData.sport} over any other sport, and is amazing at ${userData.superpower}`);
            });
          });
        });
      });
    });
  });
});


