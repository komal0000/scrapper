const files = [
    'gorkhapatra'
];

let iterations = 0;
let index = 0;
const max = files.length;

function doFetch() {
    console.log(`iterations ${iterations++}`);
    file = files[index];
    try {
        const data = require('./scrappers/' + file)
        const inst = new data();
        inst.loadData();
    } catch (error) {
        console.log(error);
    }
    index += 1;

    if (index >= max) {
        index = 0;
    }

    setTimeout(() => { doFetch() }, 20000);
}


doFetch();