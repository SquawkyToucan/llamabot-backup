const fs = require('fs');

function ds(fileName) {
    this.fileName = fileName;
}

ds.prototype.getData = function getData() {
    if (fs.existsSync(this.fileName)) {
        return JSON.parse(fs.readFileSync(this.fileName, "utf8"));
    } else {
        return {}
    }
}

ds.prototype.writeData = function writeData(memory) {
    return fs.writeFile(this.fileName, JSON.stringify(memory), "utf8", null);
}

module.exports = ds;