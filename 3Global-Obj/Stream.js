// Streams
// Essentially, Streams are a method of data transfer than can be described as a continulous flow, instead of a full download
// an easy way to look at this is to think about youtube videos! when you choose to watch a youtube video, once clicked, you don't have to download the whole youtube video to watch, instead the video is transfered piece by piece, in a term called chunks, so that you can watch part of the video while the rest arrives!

// Import the fs package(File System)
const fs = require("fs");

// Here I use fs.createReadStream to read ./Piano-Man.txt which contains the lyrics to Piano Man by Billy Joel. then I use highWaterMark to limit the chunk size to 50 bytes
const readable = fs.createReadStream("./Piano-Man.txt", { highWaterMark: 50 });

//This listens for an event named data and Converts it to a string for every chunk recieved and console logs it
readable.on("data", (chunk) => {
  console.log("NewChunk:", chunk.toString());
});
