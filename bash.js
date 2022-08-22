//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === "pwd") {
    // log current dir
    console.log(process.cwd());
    process.stdout.write("prompt > ");
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
