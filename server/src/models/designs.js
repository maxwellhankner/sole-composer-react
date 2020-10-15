// Describe your mongodb models here

const design = {
	outline: {
		title: 'Design Name',
		author: 'Maxwell Hankner',
		model: 'Air Force One',
		overlays: {
			outerOverlay: {
				layers: [
					{
						type: 'color',
						color: '#999999',
					},
				],
			},
			innerOverlay: {
				layers: [
					{
						type: 'color',
						color: '#cccccc',
					},
				],
			},
		},
		parts: {
			outerSwoosh: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'outerOverlay',
					},
				],
			},
			innerSwoosh: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'innerOverlay',
					},
				],
			},
			outerQuarter: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'outerOverlay',
					},
				],
			},
			innerQuarter: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'innerOverlay',
					},
				],
			},
			outerHeel: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'outerOverlay',
					},
				],
			},
			innerHeel: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'innerOverlay',
					},
				],
			},
			outerSole: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'outerOverlay',
					},
				],
			},
			innerSole: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'innerOverlay',
					},
				],
			},
			sole: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
				],
			},
			toeBox: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'outerOverlay',
					},
					{
						type: 'overlay',
						source: 'innerOverlay',
					},
				],
			},
			toeCap: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'outerOverlay',
					},
					{
						type: 'overlay',
						source: 'innerOverlay',
					},
				],
			},
			lace: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
				],
			},
			laceCage: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'outerOverlay',
					},
					{
						type: 'overlay',
						source: 'innerOverlay',
					},
				],
			},
			laceLock: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
				],
			},
			tongue: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
				],
			},
			heelWing: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'outerOverlay',
					},
					{
						type: 'overlay',
						source: 'innerOverlay',
					},
				],
			},
			heelTab: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
					{
						type: 'overlay',
						source: 'outerOverlay',
					},
					{
						type: 'overlay',
						source: 'innerOverlay',
					},
				],
			},
			sockLiner: {
				layers: [
					{
						type: 'color',
						color: '#ffffff',
					},
				],
			},
		},
	},
	config: {
		model: 'Air Force One',
		source: 'assets/models/af1_ao.gltf',
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
				'heelTab',
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
				'heelTab',
			],
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
				x: 2015,
				y: -359,
				width: 1500,
				height: 1500,
			},
			innerSwoosh: {
				mask: '/assets/images/innerSwooshMask.png',
				x: 138,
				y: -384,
				width: 1520,
				height: 1520,
			},
			outerQuarter: {
				mask: '/assets/images/outerQuarterMask.png',
				x: 2679,
				y: -50,
				width: 1019,
				height: 1019,
			},
			innerQuarter: {
				mask: '/assets/images/innerQuarterMask.png',
				x: -50,
				y: -74,
				width: 1021,
				height: 1021,
			},
			outerHeel: {
				mask: '/assets/images/outerHeelMask.png',
				x: 1803,
				y: -272,
				width: 1385,
				height: 1385,
			},
			innerHeel: {
				mask: '/assets/images/innerHeelMask.png',
				x: 461,
				y: -270,
				width: 1360,
				height: 1360,
			},
			outerSole: {
				mask: '/assets/images/outerSoleMask.png',
				x: -197,
				y: 1142,
				width: 3760,
				height: 3760,
			},
			innerSole: {
				mask: '/assets/images/innerSoleMask.png',
				x: -200,
				y: 1486,
				width: 3760,
				height: 3760,
			},
			sole: {
				mask: '/assets/images/soleMask.png',
				x: -150,
				y: -110,
				width: 2800,
				height: 2800,
			},
			toeBox: {
				mask: '/assets/images/toeBoxMask.png',
				x: 2937,
				y: 1891,
				width: 1151,
				height: 1151,
			},
			toeCap: {
				mask: '/assets/images/toeCapMask.png',
				x: -217,
				y: 1831,
				width: 3920,
				height: 3920,
			},
			lace: {
				mask: '/assets/images/laceMask.png',
				x: 2932,
				y: 1025,
				width: 1264,
				height: 1264,
			},
			laceCage: {
				mask: '/assets/images/laceCageMask.png',
				x: 2821,
				y: 950,
				width: 1497,
				height: 1497,
			},
			laceLock: {
				mask: '/assets/images/laceLockMask.png',
				x: 3355,
				y: 1996,
				width: 326,
				height: 326,
			},
			tongue: {
				mask: '/assets/images/tongueMask.png',
				x: 2840,
				y: 721,
				width: 1457,
				height: 1457,
			},
			heelWing: {
				mask: '/assets/images/heelWingMask.png',
				x: 1281,
				y: -235,
				width: 1084,
				height: 1084,
			},
			heelTab: {
				mask: '/assets/images/heelTabMask.png',
				x: 1642,
				y: 495,
				width: 344,
				height: 344,
			},
			sockLiner: {
				mask: '/assets/images/sockLinerMask.png',
				x: -157,
				y: 640,
				width: 2660,
				height: 2660,
			},
			outerOverlay: {
				mask: '/assets/images/outerOverlayMask.png',
				x: 1790,
				y: -550,
				width: 1940,
				height: 1940,
			},
			innerOverlay: {
				mask: '/assets/images/innerOverlayMask.png',
				x: 1590,
				y: -550,
				width: 1940,
				height: 1940,
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
			tongue: [['logo', 'assets/images/tongueLogoMask.png']],
			heelWing: [
				['logo', 'assets/images/heelWingLogoMask.png'],
				['stitch', 'assets/images/heelWingStitchMask.png'],
			],
		},
	},
};

module.exports = design;
