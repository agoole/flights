var normalizedPath = require("path").join(__dirname, "flights");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  require("./" + file);
});