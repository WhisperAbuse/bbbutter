// Script for one-time import of images

const fs = require("fs");
const path = require("path");

const INPUT_PATH = "./public/media/input";
const OUTPUT_PATH = "./public/media/output";
const fullInputPath = path.join(__dirname, INPUT_PATH);
const fullOutputPath = path.join(__dirname, OUTPUT_PATH);

const files = fs.readdirSync(fullInputPath);

files.forEach((fileName) => {
  if (fileName.includes("Zone")) {
    return;
  }
  const fileNameModified = fileName
    .split("_")
    .filter((segment) => segment[0].match(/[a-z]/i))
    .join("_");

  fs.copyFileSync(
    path.join(fullInputPath, fileName),
    path.join(fullOutputPath, fileNameModified)
  );
});
