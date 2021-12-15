module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index.html');
    });
    app.get('/hi', (req, res) => {
        res.render('hi.html');
    });

    app.post('/hello', (req, res) => {
        var data;
        req.on('data', (input) => {
            //JSON data
            data = JSON.parse(input);
        });

        req.on('end', () => {
            cosole.log('END DATA');
            console.log('data : ' + data.str);
        });

        res.write('hello success');
        res.end();
    });
};