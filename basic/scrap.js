const { default: axios } = require("axios");
const { public_path } = require("../helper");
const fs = require('fs');

class Scrap {
    URL = "";
    name = "";
    async getData() {

        const res = await axios.get(this.URL);
        return res.data;
    }

    loadData() {

    }

    save(data) {

        const path = public_path + "/json";
        fs.mkdirSync(path, { recursive: true });
        const jsonData = JSON.stringify(data, null, 4);
        const filePath = path + "/" + this.name + ".json";
        fs.writeFileSync(filePath, jsonData);

    }
}

module.exports = Scrap;