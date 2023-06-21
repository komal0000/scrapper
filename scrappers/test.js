const cheerio = require("cheerio");
const Scrap = require("../basic/scrap");

class Test extends Scrap {
    URL = "https://gorkhapatraonline.com/";
    name = "gorkhapatra";
    loadData() {
        this.getData()
            .then((html) => {
                const $ = cheerio.load(html);
                const scanners = [1, 2, 3, 4, 5].map(d => `.blog-box-layout${d}`).join(', ');

                const datas = [];

                $(scanners).each((index, box) => {
                    const image = $(box).find('.item-img img')[0].attribs.src;
                    const info = $(box).find('.item-title a')[0];
                    const url = info.attribs.href;
                    const title = info.children[0].data;
                    // const title = info.text();
                    // console.log(title, image);
                    datas.push({
                        title,
                        url,
                        image,
                        topic: "gorkhapatra",
                        category: "news"
                    });
                });

                this.save(datas);
            }).catch((err) => {
                console.log(err);
            });
    }
}

const test = new Test();
test.loadData();
