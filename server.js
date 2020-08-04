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
                    // {
                    //     type: 'graphic',
                    //     link: 'assets/images/rainbow.png',
                    //     x: -640,
                    //     y: 400,
                    //     scale: 440,
                    //     rotation: -15
                    // }
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
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'graphic',
                    //     link: 'assets/images/checker.png',
                    //     x: 0,
                    //     y: 0,
                    //     scale: 500,
                    //     rotation: 0
                    // },
                    // {
                    //     type: 'graphic',
                    //     // link: 'https://solecomposertesting.s3.us-east-2.amazonaws.com/spongebob.png',
                    //     link: 'assets/images/spongebob.png',
                    //     x: 0,
                    //     y: 0,
                    //     scale: 500,
                    //     rotation: 0
                    // }
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
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'innerOverlay'
                    // }
                ]
            },
            outerQuarter: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
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
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'innerOverlay'
                    // }
                ]
            },
            outerHeel: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
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
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'innerOverlay'
                    // }
                ]
            },
            outerSole: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
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
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'innerOverlay'
                    // }
                ]
            },
            sole: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            toeBox: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'graphic',
                    //     link: 'assets/images/abucamo.jpg',
                    //     x: 0,
                    //     y: 0,
                    //     scale: 4000,
                    //     rotation: 0
                    // }
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // },
                    // {
                    //     type: 'overlay',
                    //     source: 'innerOverlay'
                    // }
                ]
            },
            toeCap: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // },
                    // {
                    //     type: 'overlay',
                    //     source: 'innerOverlay'
                    // }
                ]
            },
            lace: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            laceCage: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // },
                    // {
                    //     type: 'overlay',
                    //     source: 'innerOverlay'
                    // }
                ]
            },
            laceLock: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            tongue: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'mask',
                    //     link: 'assets/images/tongueLogoMask.png',
                    //     color: '#ffaa99'
                    // }
                ]
            },
            heelWing: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // },
                    // {
                    //     type: 'overlay',
                    //     source: 'innerOverlay'
                    // },
                    // {
                    //     type: 'mask',
                    //     link: 'assets/images/heelWingLogoMask.png',
                    //     color: '#ffaa99'
                    // }
                ]
            },
            heelTab: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                    // {
                    //     type: 'overlay',
                    //     source: 'outerOverlay'
                    // },
                    // {
                    //     type: 'overlay',
                    //     source: 'innerOverlay'
                    // }
                ]
            },
            sockLiner: {
                layers: [
                    // {
                    //     type: 'graphic',
                    //     link: 'assets/images/static.jpg',
                    //     x: 0,
                    //     y: 0,
                    //     scale: 500,
                    //     rotation: 0
                    // },
                    {
                        type: 'color',
                        color: '#ffffff'
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