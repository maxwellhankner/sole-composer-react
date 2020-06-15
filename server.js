const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
// const path = require('path');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('build'));
// }

app.get('/api/design', (req, res) => {
    const design = {
        model: 'air force 1',
        parts: {
            outerSwoosh: {
                color: '#3399bb'
            },
            innerSwoosh: {
                color: '#bb2299'
            },
            outerQuarter: {
                color: '#ee44aa'
            },
            innerQuarter: {
                color: '#1155ff'
            },
            outerHeel: {
                color: '#bb2299'
            },
            innerHeel: {
                color: '#ee44aa'
            },
            toeBox: {
                color: '#1155ff'
            },
            toeCap: {
                color: '#3399bb'
            },
            heelWing: {
                color: '#1155ff'
            },
            heelTab: {
                color: '#3399bb'
            }
        }
    }
    res.json(design)
})

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

app.listen(port, () => {
    console.log('App is listening on port:', port);
})