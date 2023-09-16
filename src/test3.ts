function darkMode(value: Boolean) {
  switch (value) {
    case true:
      console.log("🌑");
      break;
    case false:
      console.log("☀️");
      break;
    default:
      console.log("nothing to see here");
  }
}

interface APIRES {
    mode: boolean
}

const response = await fetch("/data-that-tells-u-if-darkmode")
const result: APIRES = await response.json

"OFF" false
