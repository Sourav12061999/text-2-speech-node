const gTTS = require("gtts");
const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) return;
  let gtts = new gTTS(data, "en");
  gtts.save("hello.mp3", (err, result) => {
    if (err) {
      console.log("Some Error Occoured");
      return;
    }
    console.log("Success! Converted Text To Speech");
  });
});
