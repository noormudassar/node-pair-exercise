const pwdCommand = require("./pwd");
// pwdCommand();

const lsCommand = require("./ls");
// lsCommand();

const catCommand = require("./cat");
// catCommand();

process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  const commandArray = cmd.split(" ");
  if (cmd === "pwd") {
    pwdCommand();
    // log current dir
  } else if (cmd === "ls") {
    lsCommand();
  } else if (commandArray[0] === "cat") {
    catCommand(commandArray[1]);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

const done = () => {
  
}
