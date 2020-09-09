const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get('/api/design', (req, res) => {
    const design = {
        outline: {
            title: 'my first design',
            author: 'Maxwell Hankner',
            model: 'Air-Force-One',
            overlays: {
                outerOverlay: {
                    layers: [
                        {
                            type: 'color',
                            color: '#999999'
                        },
                        {
                            type: 'graphic',
                            link: 'assets/images/spongebob.png',
                            x: 0,
                            y: 0,
                            scale: 1,
                            rotation: 0
                        }
                    ]
                },
                innerOverlay: {
                    layers: [
    
                    ]
                }
            },
            parts: {
                outerSwoosh: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        },
                        {
                            type: 'overlay',
                            source: 'outerOverlay'
                        }
                    ]
                },
                innerSwoosh: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        }
                    ]
                },
                outerQuarter: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        },
                        {
                            type: 'overlay',
                            source: 'outerOverlay'
                        }
                    ]
                },
                innerQuarter: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        }
                    ]
                },
                outerHeel: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        },
                        {
                            type: 'overlay',
                            source: 'outerOverlay'
                        }
                    ]
                },
                innerHeel: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        }
                    ]
                },
                outerSole: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        },
                        {
                            type: 'overlay',
                            source: 'outerOverlay'
                        }
                    ]
                },
                innerSole: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        }
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
                        },
                        {
                            type: 'overlay',
                            source: 'outerOverlay'
                        }
                    ]
                },
                toeCap: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        },
                        {
                            type: 'overlay',
                            source: 'outerOverlay'
                        }
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
                        },
                        {
                            type: 'overlay',
                            source: 'outerOverlay'
                        }
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
                    ]
                },
                heelWing: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        },
                        {
                            type: 'overlay',
                            source: 'outerOverlay'
                        }
                    ]
                },
                heelTab: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        },
                        {
                            type: 'overlay',
                            source: 'outerOverlay'
                        }
                    ]
                },
                sockLiner: {
                    layers: [
                        {
                            type: 'color',
                            color: '#ffffff'
                        }
                    ]
                }
            },
        },
        config: {
            model: 'assets/models/af1_ao.gltf',
            partsArray: [
                'outerSwoosh',
                'innerSwoosh',
                'outerQuarter',
                'innerQuarter',
                'outerHeel',
                'innerHeel',
                'outerSole',
                'innerSole',
                'sole',
                'toeBox',
                'toeCap',
                'lace',
                'laceCage',
                'laceLock',
                'tongue',
                'heelWing',
                'heelTab',
                'sockLiner',
                'outerOverlay',
                'innerOverlay',
            ],
            overlayParts: {
                outerOverlay: [
                    'outerQuarter',
                    'outerHeel',
                    'outerSwoosh',
                    'outerSole',
                    'toeBox',
                    'toeCap',
                    'laceCage',
                    'heelWing',
                    'heelTab'
                ],
                innerOverlay: [
                    'innerQuarter',
                    'innerHeel',
                    'innerSwoosh',
                    'innerSole',
                    'toeBox',
                    'toeCap',
                    'laceCage',
                    'heelWing',
                    'heelTab'
                ]
            },
            translations: {
                outerOverlay: {
                    outerHeel: {
                        x: -0.15,
                        y: -0.54,
                        scale: 2.28,
                        rotation: 0,
                    },
                    outerQuarter: {
                        x: -1.07,
                        y: -0.96,
                        scale: 3.12,
                        rotation: 0,
                    },
                    outerSwoosh: {
                        x: -0.28,
                        y: -0.45,
                        scale: 2.12,
                        rotation: 0,
                    },
                    outerSole: {
                        x: 0.015,
                        y: -0.03,
                        scale: 0.83,
                        rotation: 0,
                    },
                    toeBox: {
                        x: 0.5,
                        y: -2.1,
                        scale: 2.71,
                        rotation: 1.13,
                    },
                    toeCap: {
                        x: -0.37,
                        y: 0.1,
                        scale: 0.79,
                        rotation: 0,
                    },
                    laceCage: {
                        x: 0.46,
                        y: -1.025,
                        scale: 2.14,
                        rotation: 1.13,
                    },
                    heelWing: {
                        x: 0.305,
                        y: -0.71,
                        scale: 2.86,
                        rotation: 0,
                    },
                    heelTab: {
                        x: -0.1,
                        y: -4.28,
                        scale: 8.93,
                        rotation: 0,
                    },
                },
                innerOverlay: {
                    innerHeel: {
                        x: -1.1,
                        y: -0.52,
                        scale: 2.22,
                        rotation: 0,
                    },
                    innerQuarter: {
                        x: -0.98,
                        y: -0.88,
                        scale: 2.95,
                        rotation: 0,
                    },
                    innerSwoosh: {
                        x: -0.81,
                        y: -0.41,
                        scale: 2.04,
                        rotation: 0,
                    },
                    innerSole: {
                        x: 0.086,
                        y: 0.08,
                        scale: 0.82,
                        rotation: -0.16,
                    },
                    toeBox: {
                        x: -0.46,
                        y: 0.37,
                        scale: 2.46,
                        rotation: -1.2,
                    },
                    toeCap: {
                        x: 0.54,
                        y: 0.135,
                        scale: 0.79,
                        rotation: -0.11,
                    },
                    laceCage: {
                        x: -0.42,
                        y: 0.81,
                        scale: 2.06,
                        rotation: -1.04,
                    },
                    heelWing: {
                        x: -2.17,
                        y: -0.7,
                        scale: 2.82,
                        rotation: 0,
                    },
                    heelTab: {
                        x: -7.9,
                        y: -4.35,
                        scale: 8.9,
                        rotation: 0,
                    },
                },
            },
            divider: 4,
            canvasSize: 1024,
            partsObject: {
                outerSwoosh: {
                    mask: '/assets/images/outerSwooshMask.png',
                    x: 2015 / 4,
                    y: -359 / 4,
                    width: 1500 / 4,
                    height: 1500 / 4,
                },
                innerSwoosh: {
                    mask: '/assets/images/innerSwooshMask.png',
                    x: 138 / 4,
                    y: -384 / 4,
                    width: 1520 / 4,
                    height: 1520 / 4,
                },
                outerQuarter: {
                    mask: '/assets/images/outerQuarterMask.png',
                    x: 2679 / 4,
                    y: -50 / 4,
                    width: 1019 / 4,
                    height: 1019 / 4,
                },
                innerQuarter: {
                    mask: '/assets/images/innerQuarterMask.png',
                    x: -50 / 4,
                    y: -74 / 4,
                    width: 1021 / 4,
                    height: 1021 / 4,
                },
                outerHeel: {
                    mask: '/assets/images/outerHeelMask.png',
                    x: 1803 / 4,
                    y: -272 / 4,
                    width: 1385 / 4,
                    height: 1385 / 4,
                },
                innerHeel: {
                    mask: '/assets/images/innerHeelMask.png',
                    x: 461 / 4,
                    y: -270 / 4,
                    width: 1360 / 4,
                    height: 1360 / 4,
                },
                outerSole: {
                    mask: '/assets/images/outerSoleMask.png',
                    x: -197 / 4,
                    y: 1142 / 4,
                    width: 3760 / 4,
                    height: 3760 / 4,
                },
                innerSole: {
                    mask: '/assets/images/innerSoleMask.png',
                    x: -200 / 4,
                    y: 1486 / 4,
                    width: 3760 / 4,
                    height: 3760 / 4,
                },
                sole: {
                    mask: '/assets/images/soleMask.png',
                    x: -150 / 4,
                    y: -110 / 4,
                    width: 2800 / 4,
                    height: 2800 / 4,
                },
                toeBox: {
                    mask: '/assets/images/toeBoxMask.png',
                    x: 2937 / 4,
                    y: 1891 / 4,
                    width: 1151 / 4,
                    height: 1151 / 4,
                },
                toeCap: {
                    mask: '/assets/images/toeCapMask.png',
                    x: -217 / 4,
                    y: 1831 / 4,
                    width: 3920 / 4,
                    height: 3920 / 4,
                },
                lace: {
                    mask: '/assets/images/laceMask.png',
                    x: 2932 / 4,
                    y: 1025 / 4,
                    width: 1264 / 4,
                    height: 1264 / 4,
                },
                laceCage: {
                    mask: '/assets/images/laceCageMask.png',
                    x: 2821 / 4,
                    y: 950 / 4,
                    width: 1497 / 4,
                    height: 1497 / 4,
                },
                laceLock: {
                    mask: '/assets/images/laceLockMask.png',
                    x: 3355 / 4,
                    y: 1996 / 4,
                    width: 326 / 4,
                    height: 326 / 4,
                },
                tongue: {
                    mask: '/assets/images/tongueMask.png',
                    x: 2840 / 4,
                    y: 721 / 4,
                    width: 1457 / 4,
                    height: 1457 / 4,
                },
                heelWing: {
                    mask: '/assets/images/heelWingMask.png',
                    x: 1281 / 4,
                    y: -235 / 4,
                    width: 1084 / 4,
                    height: 1084 / 4,
                },
                heelTab: {
                    mask: '/assets/images/heelTabMask.png',
                    x: 1642 / 4,
                    y: 495 / 4,
                    width: 344 / 4,
                    height: 344 / 4,
                },
                sockLiner: {
                    mask: '/assets/images/sockLinerMask.png',
                    x: -157 / 4,
                    y: 640 / 4,
                    width: 2660 / 4,
                    height: 2660 / 4,
                },
                outerOverlay: {
                    mask: '/assets/images/outerOverlayMask.png',
                    x: 1790 / 4,
                    y: -550 / 4,
                    width: 1940 / 4,
                    height: 1940 / 4,
                },
                innerOverlay: {
                    mask: '/assets/images/innerOverlayMask.png',
                    x: 1590 / 4,
                    y: -550 / 4,
                    width: 1940 / 4,
                    height: 1940 / 4,
                },
            },
            layerTypes: {
                outerSwoosh: {
                    types: ['Color', 'Graphic'],
                },
                innerSwoosh: {
                    types: ['Color', 'Graphic'],
                },
                outerQuarter: {
                    types: ['Color', 'Graphic'],
                },
                innerQuarter: {
                    types: ['Color', 'Graphic'],
                },
                outerHeel: {
                    types: ['Color', 'Graphic'],
                },
                innerHeel: {
                    types: ['Color', 'Graphic'],
                },
                outerSole: {
                    types: ['Color', 'Graphic'],
                },
                innerSole: {
                    types: ['Color', 'Graphic'],
                },
                sole: {
                    types: ['Color', 'Graphic'],
                },
                toeBox: {
                    types: ['Color', 'Graphic'],
                },
                toeCap: {
                    types: ['Color', 'Graphic'],
                },
                lace: {
                    types: ['Color'],
                },
                laceCage: {
                    types: ['Color', 'Graphic'],
                },
                laceLock: {
                    types: ['Color'],
                },
                tongue: {
                    types: ['Color', 'Graphic', 'Mask'],
                },
                heelWing: {
                    types: ['Color', 'Graphic', 'Mask'],
                },
                heelTab: {
                    types: ['Color', 'Graphic'],
                },
                sockLiner: {
                    types: ['Color', 'Graphic'],
                },
                outerOverlay: {
                    types: ['Color', 'Graphic'],
                },
                innerOverlay: {
                    types: ['Color', 'Graphic'],
                },
            },
            maskTypes: {
                tongue: [
                    ['logo', 'assets/images/tongueLogoMask.png']
                ],
                heelWing: [
                    ['logo', 'assets/images/heelWingLogoMask.png'],
                    ['stitch', 'assets/images/heelWingStitchMask.png'],
                ],
            }
        }
    }
    res.json(design)
})

app.listen(port, () => {
    console.log('App is listening on port:', port);
})

// ---------------------------------------

// outline: {
//     title: 'my first design',
//     author: 'Maxwell Hankner',
//     model: 'Air-Force-One',
//     overlays: {
//         outerOverlay: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#999999'
//                 },
//                 {
//                     type: 'graphic',
//                     link: 'assets/images/spongebob.png',
//                     x: 0,
//                     y: 0,
//                     scale: 1,
//                     rotation: 0
//                 }
//             ]
//         },
//         innerOverlay: {
//             layers: [

//             ]
//         }
//     },
//     parts: {
//         outerSwoosh: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         innerSwoosh: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         outerQuarter: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         innerQuarter: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         outerHeel: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         innerHeel: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         outerSole: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         innerSole: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         sole: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         toeBox: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         toeCap: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         lace: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         laceCage: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         laceLock: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         tongue: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         heelWing: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         heelTab: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         sockLiner: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         }
//     },
// },
// config: {
//     model: 'assets/models/af1_ao.gltf',
//     partsArray: [
//         'outerSwoosh',
//         'innerSwoosh',
//         'outerQuarter',
//         'innerQuarter',
//         'outerHeel',
//         'innerHeel',
//         'outerSole',
//         'innerSole',
//         'sole',
//         'toeBox',
//         'toeCap',
//         'lace',
//         'laceCage',
//         'laceLock',
//         'tongue',
//         'heelWing',
//         'heelTab',
//         'sockLiner',
//         'outerOverlay',
//         'innerOverlay',
//     ],
//     overlayParts: {
//         outerOverlay: [
//             'outerQuarter',
//             'outerHeel',
//             'outerSwoosh',
//             'outerSole',
//             'toeBox',
//             'toeCap',
//             'laceCage',
//             'heelWing',
//             'heelTab'
//         ],
//         innerOverlay: [
//             'innerQuarter',
//             'innerHeel',
//             'innerSwoosh',
//             'innerSole',
//             'toeBox',
//             'toeCap',
//             'laceCage',
//             'heelWing',
//             'heelTab'
//         ]
//     },
//     translations: {
//         outerOverlay: {
//             outerHeel: {
//                 x: -0.15,
//                 y: -0.54,
//                 scale: 2.28,
//                 rotation: 0,
//             },
//             outerQuarter: {
//                 x: -1.07,
//                 y: -0.96,
//                 scale: 3.12,
//                 rotation: 0,
//             },
//             outerSwoosh: {
//                 x: -0.28,
//                 y: -0.45,
//                 scale: 2.12,
//                 rotation: 0,
//             },
//             outerSole: {
//                 x: 0.015,
//                 y: -0.03,
//                 scale: 0.83,
//                 rotation: 0,
//             },
//             toeBox: {
//                 x: 0.5,
//                 y: -2.1,
//                 scale: 2.71,
//                 rotation: 1.13,
//             },
//             toeCap: {
//                 x: -0.37,
//                 y: 0.1,
//                 scale: 0.79,
//                 rotation: 0,
//             },
//             laceCage: {
//                 x: 0.46,
//                 y: -1.025,
//                 scale: 2.14,
//                 rotation: 1.13,
//             },
//             heelWing: {
//                 x: 0.305,
//                 y: -0.71,
//                 scale: 2.86,
//                 rotation: 0,
//             },
//             heelTab: {
//                 x: -0.1,
//                 y: -4.28,
//                 scale: 8.93,
//                 rotation: 0,
//             },
//         },
//         innerOverlay: {
//             innerHeel: {
//                 x: -1.1,
//                 y: -0.52,
//                 scale: 2.22,
//                 rotation: 0,
//             },
//             innerQuarter: {
//                 x: -0.98,
//                 y: -0.88,
//                 scale: 2.95,
//                 rotation: 0,
//             },
//             innerSwoosh: {
//                 x: -0.81,
//                 y: -0.41,
//                 scale: 2.04,
//                 rotation: 0,
//             },
//             innerSole: {
//                 x: 0.086,
//                 y: 0.08,
//                 scale: 0.82,
//                 rotation: -0.16,
//             },
//             toeBox: {
//                 x: -0.46,
//                 y: 0.37,
//                 scale: 2.46,
//                 rotation: -1.2,
//             },
//             toeCap: {
//                 x: 0.54,
//                 y: 0.135,
//                 scale: 0.79,
//                 rotation: -0.11,
//             },
//             laceCage: {
//                 x: -0.42,
//                 y: 0.81,
//                 scale: 2.06,
//                 rotation: -1.04,
//             },
//             heelWing: {
//                 x: -2.17,
//                 y: -0.7,
//                 scale: 2.82,
//                 rotation: 0,
//             },
//             heelTab: {
//                 x: -7.9,
//                 y: -4.35,
//                 scale: 8.9,
//                 rotation: 0,
//             },
//         },
//     },
//     divider: 4,
//     canvasSize: 1024,
//     partsObject: {
//         outerSwoosh: {
//             mask: '/assets/images/outerSwooshMask.png',
//             x: 2015 / 4,
//             y: -359 / 4,
//             width: 1500 / 4,
//             height: 1500 / 4,
//         },
//         innerSwoosh: {
//             mask: '/assets/images/innerSwooshMask.png',
//             x: 138 / 4,
//             y: -384 / 4,
//             width: 1520 / 4,
//             height: 1520 / 4,
//         },
//         outerQuarter: {
//             mask: '/assets/images/outerQuarterMask.png',
//             x: 2679 / 4,
//             y: -50 / 4,
//             width: 1019 / 4,
//             height: 1019 / 4,
//         },
//         innerQuarter: {
//             mask: '/assets/images/innerQuarterMask.png',
//             x: -50 / 4,
//             y: -74 / 4,
//             width: 1021 / 4,
//             height: 1021 / 4,
//         },
//         outerHeel: {
//             mask: '/assets/images/outerHeelMask.png',
//             x: 1803 / 4,
//             y: -272 / 4,
//             width: 1385 / 4,
//             height: 1385 / 4,
//         },
//         innerHeel: {
//             mask: '/assets/images/innerHeelMask.png',
//             x: 461 / 4,
//             y: -270 / 4,
//             width: 1360 / 4,
//             height: 1360 / 4,
//         },
//         outerSole: {
//             mask: '/assets/images/outerSoleMask.png',
//             x: -197 / 4,
//             y: 1142 / 4,
//             width: 3760 / 4,
//             height: 3760 / 4,
//         },
//         innerSole: {
//             mask: '/assets/images/innerSoleMask.png',
//             x: -200 / 4,
//             y: 1486 / 4,
//             width: 3760 / 4,
//             height: 3760 / 4,
//         },
//         sole: {
//             mask: '/assets/images/soleMask.png',
//             x: -150 / 4,
//             y: -110 / 4,
//             width: 2800 / 4,
//             height: 2800 / 4,
//         },
//         toeBox: {
//             mask: '/assets/images/toeBoxMask.png',
//             x: 2937 / 4,
//             y: 1891 / 4,
//             width: 1151 / 4,
//             height: 1151 / 4,
//         },
//         toeCap: {
//             mask: '/assets/images/toeCapMask.png',
//             x: -217 / 4,
//             y: 1831 / 4,
//             width: 3920 / 4,
//             height: 3920 / 4,
//         },
//         lace: {
//             mask: '/assets/images/laceMask.png',
//             x: 2932 / 4,
//             y: 1025 / 4,
//             width: 1264 / 4,
//             height: 1264 / 4,
//         },
//         laceCage: {
//             mask: '/assets/images/laceCageMask.png',
//             x: 2821 / 4,
//             y: 950 / 4,
//             width: 1497 / 4,
//             height: 1497 / 4,
//         },
//         laceLock: {
//             mask: '/assets/images/laceLockMask.png',
//             x: 3355 / 4,
//             y: 1996 / 4,
//             width: 326 / 4,
//             height: 326 / 4,
//         },
//         tongue: {
//             mask: '/assets/images/tongueMask.png',
//             x: 2840 / 4,
//             y: 721 / 4,
//             width: 1457 / 4,
//             height: 1457 / 4,
//         },
//         heelWing: {
//             mask: '/assets/images/heelWingMask.png',
//             x: 1281 / 4,
//             y: -235 / 4,
//             width: 1084 / 4,
//             height: 1084 / 4,
//         },
//         heelTab: {
//             mask: '/assets/images/heelTabMask.png',
//             x: 1642 / 4,
//             y: 495 / 4,
//             width: 344 / 4,
//             height: 344 / 4,
//         },
//         sockLiner: {
//             mask: '/assets/images/sockLinerMask.png',
//             x: -157 / 4,
//             y: 640 / 4,
//             width: 2660 / 4,
//             height: 2660 / 4,
//         },
//         outerOverlay: {
//             mask: '/assets/images/outerOverlayMask.png',
//             x: 1790 / 4,
//             y: -550 / 4,
//             width: 1940 / 4,
//             height: 1940 / 4,
//         },
//         innerOverlay: {
//             mask: '/assets/images/innerOverlayMask.png',
//             x: 1590 / 4,
//             y: -550 / 4,
//             width: 1940 / 4,
//             height: 1940 / 4,
//         },
//     },
//     layerTypes: {
//         outerSwoosh: {
//             types: ['Color', 'Graphic'],
//         },
//         innerSwoosh: {
//             types: ['Color', 'Graphic'],
//         },
//         outerQuarter: {
//             types: ['Color', 'Graphic'],
//         },
//         innerQuarter: {
//             types: ['Color', 'Graphic'],
//         },
//         outerHeel: {
//             types: ['Color', 'Graphic'],
//         },
//         innerHeel: {
//             types: ['Color', 'Graphic'],
//         },
//         outerSole: {
//             types: ['Color', 'Graphic'],
//         },
//         innerSole: {
//             types: ['Color', 'Graphic'],
//         },
//         sole: {
//             types: ['Color', 'Graphic'],
//         },
//         toeBox: {
//             types: ['Color', 'Graphic'],
//         },
//         toeCap: {
//             types: ['Color', 'Graphic'],
//         },
//         lace: {
//             types: ['Color'],
//         },
//         laceCage: {
//             types: ['Color', 'Graphic'],
//         },
//         laceLock: {
//             types: ['Color'],
//         },
//         tongue: {
//             types: ['Color', 'Graphic', 'Mask'],
//         },
//         heelWing: {
//             types: ['Color', 'Graphic', 'Mask'],
//         },
//         heelTab: {
//             types: ['Color', 'Graphic'],
//         },
//         sockLiner: {
//             types: ['Color', 'Graphic'],
//         },
//         outerOverlay: {
//             types: ['Color', 'Graphic'],
//         },
//         innerOverlay: {
//             types: ['Color', 'Graphic'],
//         },
//     },
//     maskTypes: {
//         tongue: [
//             ['logo', 'assets/images/tongueLogoMask.png']
//         ],
//         heelWing: [
//             ['logo', 'assets/images/heelWingLogoMask.png'],
//             ['stitch', 'assets/images/heelWingStitchMask.png'],
//         ],
//     }
// }