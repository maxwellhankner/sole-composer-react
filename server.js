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
                parts: ['outerQuarter', 'outerHeel', 'outerSwoosh', 'outerSole', 'toeBox', 'toeCap', 'laceCage', 'heelWing', 'heelTab'],
                layers: [
                    // {
                    //     type: 'graphic',
                    //     link: 'assets/images/jordan.png',
                    //     x: 40,
                    //     y: 120,
                    //     scale: -160,
                    //     rotation: 0
                    // }
                    // {
                    //     type: 'color',
                    //     color: '#9955dd'
                    // }
                ]
            },
            innerOverlay: {
                parts: ['innerQuarter', 'innerHeel', 'innerSwoosh', 'innerSole', 'toeBox', 'toeCap', 'laceCage', 'heelWing', 'heelTab'],
                layers: [
                    // {
                    //     type: 'graphic',
                    //     link: 'assets/images/innerOverlayHelper.png',
                    //     x: 0,
                    //     y: 0,
                    //     scale: 860,
                    //     rotation: 0
                    // }
                    {
                        type: 'graphic',
                        link: 'assets/images/rainbow.png',
                        x: 0,
                        y: 0,
                        scale: 680,
                        rotation: 0
                    }
                    // {
                    //     type: 'color',
                    //     color: '#ff99aa'
                    // }
                ]
            }
        },
        parts: {
            outerSwoosh: {
                layers: [
                    {
                        type: 'color',
                        color: '#9955dd'
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
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // }
                ]
            },
            innerSwoosh: {
                layers: [
                    {
                        type: 'color',
                        color: '#fb68f5'
                    },
                    {
                        type: 'overlay',
                        source: 'innerOverlay'
                    }
                ]
            },
            outerQuarter: {
                layers: [
                    {
                        type: 'color',
                        color: '#57d59c'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // }
                ]
            },
            innerQuarter: {
                layers: [
                    {
                        type: 'color',
                        color: '#ee44aa'
                    },
                    {
                        type: 'overlay',
                        source: 'innerOverlay'
                    }
                ]
            },
            outerHeel: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // }
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
                        link: 'assets/images/checker.jpg',
                        x: 0,
                        y: 0,
                        scale: 500,
                        rotation: 0
                    },
                    {
                        type: 'overlay',
                        source: 'innerOverlay'
                    }
                ]
            },
            outerSole: {
                layers: [
                    {
                        type: 'color',
                        color: '#cc9560'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // }
                ]
            },
            innerSole: {
                layers: [
                    {
                        type: 'color',
                        color: '#cc9560'
                    },
                    {
                        type: 'overlay',
                        source: 'innerOverlay'
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
                    },
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // },
                    {
                        type: 'overlay',
                        source: 'innerOverlay'
                    }
                ]
            },
            toeCap: {
                layers: [
                    {
                        type: 'color',
                        color: '#d3d8bc'
                    },
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // },
                    {
                        type: 'overlay',
                        source: 'innerOverlay'
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
                    },
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // },
                    {
                        type: 'overlay',
                        source: 'innerOverlay'
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
                    },
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // },
                    {
                        type: 'overlay',
                        source: 'innerOverlay'
                    }
                ]
            },
            heelTab: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    },
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // },
                    {
                        type: 'overlay',
                        source: 'innerOverlay'
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