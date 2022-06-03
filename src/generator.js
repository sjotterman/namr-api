const prefixes = [
  "beach",
  "book",
  "cash",
  "chef",
  "cod",
  "concert",
  "cook",
  "crunch",
  "desk",
  "dog",
  "food",
  "lesson",
  "max",
  "music",
  "nam",
  "pet",
  "programm",
  "runn",
  "shop",
  "startup",
  "swip",
  "trip",
  "typ",
  "verb"
];
const suffixes = ["ify", "ly", "r"];
function randomPrefix() {
  const randomIndex = Math.floor(Math.random() * prefixes.length);
  return prefixes[randomIndex];
}

function randomSuffix() {
  const randomIndex = Math.floor(Math.random() * suffixes.length);
  return suffixes[randomIndex];
}

function randomName() {
  return `${randomPrefix()}${randomSuffix()}`;
}

exports.randomName = randomName;
