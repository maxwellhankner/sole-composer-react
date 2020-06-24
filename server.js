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
        // model: 'https://solecomposertesting.s3.us-east-2.amazonaws.com/af1_ao.gltf',
        model: 'assets/models/af1_ao.gltf',
        overlays: {
            outerOverlay: {
                parts: ['outerQuarter', 'outerHeel'],
                layers: [
                    {
                        type: 'color',
                        color: '#99d561'
                    },
                    {
                        type: 'graphic',
                        link: 'assets/images/japanese.png',
                        x: 0,
                        y: 0,
                        scale: 500,
                        rotation: 0
                    }
                ]
            }
        },
        parts: {
            outerSwoosh: {
                layers: [
                    {
                        type: 'color',
                        color: '#f1515a'
                    },
                    {
                        type: 'graphic',
                        // link: 'https://solecomposertesting.s3.us-east-2.amazonaws.com/spongebob.png',
                        link: 'assets/images/spongebob.png',
                        x: 0,
                        y: 0,
                        scale: 500,
                        rotation: 0
                    }
                ]
            },
            innerSwoosh: {
                layers: [
                    {
                        type: 'color',
                        color: '#fb68f5'
                    }
                ]
            },
            outerQuarter: {
                layers: [
                    {
                        type: 'color',
                        color: '#57d59c'
                    }
                ]
            },
            innerQuarter: {
                layers: [
                    {
                        type: 'color',
                        color: '#ee44aa'
                    }
                ]
            },
            outerHeel: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    }
                ]
            },
            innerHeel: {
                layers: [
                    {
                        type: 'color',
                        color: '#3f9bb7'
                    },
                    {
                        type: 'graphic',
                        link: 'assets/images/japanese.png',
                        x: 0,
                        y: 0,
                        scale: 500,
                        rotation: 0
                    }
                ]
            },
            outerSole: {
                layers: [
                    {
                        type: 'color',
                        color: '#cc9560'
                    }
                ]
            },
            innerSole: {
                layers: [
                    {
                        type: 'color',
                        color: '#cc9560'
                    }
                ]
            },
            sole: {
                layers: [
                    {
                        type: 'color',
                        color: '#cc9560'
                    }
                ]
            },
            toeBox: {
                layers: [
                    {
                        type: 'color',
                        color: '#b4488b'
                    },
                    {
                        type: 'graphic',
                        link: 'assets/images/abucamo.jpg',
                        x: 0,
                        y: 0,
                        scale: 4000,
                        rotation: 0
                    }
                ]
            },
            toeCap: {
                layers: [
                    {
                        type: 'color',
                        color: '#d3d8bc'
                    }
                ]
            },
            lace: {
                layers: [
                    {
                        type: 'color',
                        color: '#70b9c9'
                    }
                ]
            },
            laceCage: {
                layers: [
                    {
                        type: 'color',
                        color: '#dd2c75'
                    }
                ]
            },
            laceLock: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    }
                ]
            },
            tongue: {
                layers: [
                    {
                        type: 'color',
                        color: '#f1c0c9'
                    }
                ]
            },
            heelWing: {
                layers: [
                    {
                        type: 'color',
                        color: '#217a99'
                    }
                ]
            },
            heelTab: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    }
                ]
            },
            sockLiner: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    },
                    {
                        type: 'graphic',
                        link: 'assets/images/static.jpg',
                        x: 0,
                        y: 0,
                        scale: 500,
                        rotation: 0
                    }
                ]
            },
            outerOverlay: {
                parts: ['outerQuarter', 'outerHeel'],
                layers: [
                    {
                        type: 'color',
                        color: '#99d561'
                    },
                    {
                        type: 'graphic',
                        link: 'assets/images/japanese.png',
                        x: 0,
                        y: 0,
                        scale: 500,
                        rotation: 0
                    }
                ]
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