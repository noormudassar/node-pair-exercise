module.exports = function (file) {
  const fs = require("fs");
  // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
  fs.readFile(`${file}`, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write("prompt > ");
  });
};
