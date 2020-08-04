export const partsArray = ['outerSwoosh', 'innerSwoosh', 'outerQuarter', 'innerQuarter', 'outerHeel', 'innerHeel', 'outerSole', 'innerSole', 'sole', 'toeBox', 'toeCap', 'lace', 'laceCage', 'laceLock', 'tongue', 'heelWing', 'heelTab', 'sockLiner', 'outerOverlay', 'innerOverlay']

export const translations = {
    outerOverlay: {
        outerHeel: {
            x: -0.15,
            y: -0.54,
            scale: 2.28,
            rotation: 0
        },
        outerQuarter: {
            x: -1.07,
            y: -0.96,
            scale: 3.12,
            rotation: 0
        },
        outerSwoosh: {
            x: -0.28,
            y: -0.45,
            scale: 2.12,
            rotation: 0
        },
        outerSole: {
            x: 0.015,
            y: -0.03,
            scale: 0.83,
            rotation: 0
        },
        toeBox: {
            x: 0.5,
            y: -2.1,
            scale: 2.71,
            rotation: 1.13
        },
        toeCap: {
            x: -0.37,
            y: 0.1,
            scale: 0.79,
            rotation: 0
        },
        laceCage: {
            x: 0.46,
            y: -1.025,
            scale: 2.14,
            rotation: 1.13
        },
        heelWing: {
            x: 0.305,
            y: -0.71,
            scale: 2.86,
            rotation: 0
        },
        heelTab: {
            x: -0.1,
            y: -4.28,
            scale: 8.93,
            rotation: 0
        }
    },
    innerOverlay: {
        innerHeel: {
            x: -1.1,
            y: -0.52,
            scale: 2.22,
            rotation: 0
        },
        innerQuarter: {
            x: -0.98,
            y: -0.88,
            scale: 2.95,
            rotation: 0
        },
        innerSwoosh: {
            x: -0.81,
            y: -0.41,
            scale: 2.04,
            rotation: 0
        },
        innerSole: {
            x: 0.086,
            y: 0.08,
            scale: 0.82,
            rotation: -.16
        },
        toeBox: {
            x: -0.46,
            y: 0.37,
            scale: 2.46,
            rotation: -1.2
        },
        toeCap: {
            x: 0.54,
            y: 0.135,
            scale: 0.79,
            rotation: -.11
        },
        laceCage: {
            x: -0.42,
            y: 0.81,
            scale: 2.06,
            rotation: -1.04
        },
        heelWing: {
            x: -2.17,
            y: -0.7,
            scale: 2.82,
            rotation: 0
        },
        heelTab: {
            x: -7.9,
            y: -4.35,
            scale: 8.9,
            rotation: 0
        }
    }
}

// export const divider = 1;
// export const canvasSize = 4096;

export const divider = 4;
export const canvasSize = 1024;

export const partsObject = {
    outerSwoosh: {
        mask: '/assets/images/outerSwooshMask.png',
        x: 2015 / divider,
        y: -359 / divider,
        width: 1500 / divider,
        height: 1500 / divider
    },
    innerSwoosh: {
        mask: '/assets/images/innerSwooshMask.png',
        x: 138 / divider,
        y: -384 / divider,
        width: 1520 / divider,
        height: 1520 / divider
    },
    outerQuarter: {
        mask: '/assets/images/outerQuarterMask.png',
        x: 2679 / divider,
        y: -50 / divider,
        width: 1019 / divider,
        height: 1019 / divider
    },
    innerQuarter: {
        mask: '/assets/images/innerQuarterMask.png',
        x: -50 / divider,
        y: -74 / divider,
        width: 1021 / divider,
        height: 1021 / divider
    },
    outerHeel: {
        mask: '/assets/images/outerHeelMask.png',
        x: 1803 / divider,
        y: -272 / divider,
        width: 1385 / divider,
        height: 1385 / divider
    },
    innerHeel: {
        mask: '/assets/images/innerHeelMask.png',
        x: 461 / divider,
        y: -270 / divider,
        width: 1360 / divider,
        height: 1360 / divider
    },
    outerSole: {
        mask: '/assets/images/outerSoleMask.png',
        x: -197 / divider,
        y: 1142 / divider,
        width: 3760 / divider,
        height: 3760 / divider
    },
    innerSole: {
        mask: '/assets/images/innerSoleMask.png',
        x: -200 / divider,
        y: 1486 / divider,
        width: 3760 / divider,
        height: 3760 / divider
    },
    sole: {
        mask: '/assets/images/soleMask.png',
        x: -150 / divider,
        y: -110 / divider,
        width: 2800 / divider,
        height: 2800 / divider
    },
    toeBox: {
        mask: '/assets/images/toeBoxMask.png',
        x: 2937 / divider,
        y: 1891 / divider,
        width: 1151 / divider,
        height: 1151 / divider
    },
    toeCap: {
        mask: '/assets/images/toeCapMask.png',
        x: -217 / divider,
        y: 1831 / divider,
        width: 3920 / divider,
        height: 3920 / divider
    },
    lace: {
        mask: '/assets/images/laceMask.png',
        x: 2932 / divider,
        y: 1025 / divider,
        width: 1264 / divider,
        height: 1264 / divider
    },
    laceCage: {
        mask: '/assets/images/laceCageMask.png',
        x: 2821 / divider,
        y: 950 / divider,
        width: 1497 / divider,
        height: 1497 / divider
    },
    laceLock: {
        mask: '/assets/images/laceLockMask.png',
        x: 3355 / divider,
        y: 1996 / divider,
        width: 326 / divider,
        height: 326 / divider
    },
    tongue: {
        mask: '/assets/images/tongueMask.png',
        x: 2840 / divider,
        y: 721 / divider,
        width: 1457 / divider,
        height: 1457 / divider
    },
    heelWing: {
        mask: '/assets/images/heelWingMask.png',
        x: 1281 / divider,
        y: -235 / divider,
        width: 1084 / divider,
        height: 1084 / divider
    },
    heelTab: {
        mask: '/assets/images/heelTabMask.png',
        x: 1642 / divider,
        y: 495 / divider,
        width: 344 / divider,
        height: 344 / divider
    },
    sockLiner: {
        mask: '/assets/images/sockLinerMask.png',
        x: -157 / divider,
        y: 640 / divider,
        width: 2660 / divider,
        height: 2660 / divider
    },
    outerOverlay: {
        mask: '/assets/images/outerOverlayMask.png',
        x: 1790 / divider,
        y: -550 / divider,
        width: 1940 / divider,
        height: 1940 / divider
    },
    innerOverlay: {
        mask: '/assets/images/innerOverlayMask.png',
        x: 1590 / divider,
        y: -550 / divider,
        width: 1940 / divider,
        height: 1940 / divider
    }
}

export const layerTypes = {
    outerSwoosh: {
        types: ['Color', 'Graphic']
    },
    innerSwoosh: {
        types: ['Color', 'Graphic']
    },
    outerQuarter: {
        types: ['Color', 'Graphic']
    },
    innerQuarter: {
        types: ['Color', 'Graphic']
    },
    outerHeel: {
        types: ['Color', 'Graphic']
    },
    innerHeel: {
        types: ['Color', 'Graphic']
    },
    outerSole: {
        types: ['Color', 'Graphic']
    },
    innerSole: {
        types: ['Color', 'Graphic']
    },
    sole: {
        types: ['Color', 'Graphic']
    },
    toeBox: {
        types: ['Color', 'Graphic']
    },
    toeCap: {
        types: ['Color', 'Graphic']
    },
    lace: {
        types: ['Color']
    },
    laceCage: {
        types: ['Color', 'Graphic']
    },
    laceLock: {
        types: ['Color']
    },
    tongue: {
        types: ['Color', 'Graphic', 'Mask']
    },
    heelWing: {
        types: ['Color', 'Graphic', 'Mask']
    },
    heelTab: {
        types: ['Color', 'Graphic']
    },
    sockLiner: {
        types: ['Color', 'Graphic']
    },
    outerOverlay: {
        types: ['Color', 'Graphic']
    },
    innerOverlay: {
        types: ['Color', 'Graphic']
    }
}

export const maskTypes = {
    tongue: [
        ['logo', 'assets/images/tongueLogoMask.png']
    ],
    heelWing: [
        ['logo', 'assets/images/heelWingLogoMask.png'],
        ['stitch', 'assets/images/heelWingStitchMask.png']
    ]
}
