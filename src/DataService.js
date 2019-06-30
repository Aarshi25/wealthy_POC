const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyQilLDyj08RkS87'}).base('appRw6d9CQ7D0VlBf');


export class DataService {
    static async getData()  {
        let stockPrice= [];
        await base('Data').select({
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {

            records.forEach(function(record) {
                stockPrice.push(record.get('stockPrice'));
                return stockPrice;
            });

        }, function done(err) {
            if (err) {console.error(err);
            return; }
        });
        return stockPrice;
    };
}

