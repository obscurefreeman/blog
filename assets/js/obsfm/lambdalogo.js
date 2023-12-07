let colors = [
    "#ffffff",
    "#ececec",
    "#404040",
    "#cfa926",
    "#fccd0c",
    "#1c1c1c",
    "#699EA0"
];

let height = 40;
let width = 20;
let depth = 10;

let duration = 3.0;
let speed = 0.03;
let isSpinning = true;

let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    zoom: 0.2,
    dragRotate: true,
    onDragStart: () => isSpinning = false,
    onDragEnd: () => isSpinning = true
  });

let group = new Zdog.Group({
    addTo: illo
});

let outline_1 = new Zdog.Ellipse({
    addTo: illo,
    diameter: 200,
    rotate:{z:10},
    stroke: 20,
    color: colors[6]
  });

let outline_2 = new Zdog.Ellipse({
    addTo: illo,
    diameter: 250,
    stroke: 5,
    color: colors[0]
  });

// let i = new Zdog.Shape({
//     addTo: group,
//     path: [
//         { y: -height,z:-depth*0.5 },
//         { y:  height,z:depth*0.5 }
//     ],
//     translate: {x:-width*1.75},
//     stroke: 20,
//     color: colors[0]
// });

// let h = new Zdog.Shape({
//     addTo: group,
//     path: [
//         { x: -width, y: -height,z:depth },
//         { x: -width, y: height },
//         { move: { x: width, y: height } },
//         { x: width, y: -height,z:-depth },
//         { x: width, y: height },
//         { move: { x: width, y: 0.0,z:-depth*0.5 } },        
//         { x: width, y: 0.0,z:-depth*0.5 },
//         { x: -width, y: 0.0,z:depth*0.5 }
//     ],
//     closed: false,
//     translate: {x:width},
//     stroke: 20,
//     color: colors[0]
// });

// let i = new Zdog.Shape({
//     addTo: group,
//     path: [
//         { y: -height,z:-depth*0.5 },
//         { y:  height,z:depth*0.5 }
//     ],
//     translate: {x:-width*1.75},
//     stroke: 20,
//     color: colors[0]
// });

// let h = new Zdog.Shape({
//     addTo: group,
//     path: [
//         { x: -width, y: -height,z:depth },
//         { x: -width, y: height },
//         { move: { x: width, y: height } },
//         { x: width, y: -height,z:-depth },
//         { x: width, y: height },
//         { move: { x: width, y: 0.0,z:-depth*0.5 } },        
//         { x: width, y: 0.0,z:-depth*0.5 },
//         { x: -width, y: 0.0,z:depth*0.5 }
//     ],
//     closed: false,
//     translate: {x:width},
//     stroke: 20,
//     color: colors[0]
// });

// let ROOT = new Zdog.Anchor({
//     addTo: illo
// });

// let box1 = new Zdog.Box({
//     addTo: ROOT,
//     width: 100,
//     height: 10,
//     depth: 10,
//     stroke: 20,
//     color: '#FFFFFF',
//     closed: true,
//     leftFace: true,
//     rotate: { x: 0, y: 0, z: 0.9599310885968813 },
//     translate: { x: 5 }
// });

// let box2 = new Zdog.Box({
//     addTo: ROOT,
//     width: 50,
//     height: 10,
//     depth: 10,
//     stroke: 20,
//     color: '#FFFFFF',
//     closed: true,
//     leftFace: true,
//     rotate: { x: 0, y: 3.141592653589793, z: 0.9599310885968813 },
//     origin: { x: 0 },
//     translate: { x: -25, y: 20 }
// });

// let box3 = new Zdog.Box({
//     addTo: ROOT,
//     width: 10,
//     height: 10,
//     depth: 10,
//     stroke: 20,
//     color: '#FFFFFF',
//     closed: true,
//     leftFace: true,
//     rotate: { x: 0, y: 0, z: 0 },
//     translate: { x: -30, y: -40 },
//     origin: { x: 0 }
// });

// let box4 = new Zdog.Box({
//     addTo: ROOT,
//     width: 5,
//     height: 10,
//     depth: 10,
//     stroke: 20,
//     color: '#FFFFFF',
//     closed: true,
//     leftFace: true,
//     rotate: { x: 0, y: 0, z: -0.8726646259971648 },
//     translate: { x: 40, y: 30, z: 0 },
//     origin: { x: 0 }
// });

let box1 = new Zdog.Box({
    addTo: group,
    width: 100,
    height: 10,
    depth: 2,
    stroke: 20,
    color: colors[0],
    closed: true,
    leftFace: true,
    rotate: { x: 0, y: 0, z: 0.9599310885968813 },
    translate: { x: 5 }
});

let box2 = new Zdog.Box({
    addTo: group,
    width: 50,
    height: 10,
    depth: 2,
    stroke: 20,
    color: colors[0],
    closed: true,
    leftFace: true,
    rotate: { x: 0, y: 3.141592653589793, z: 0.9599310885968813 },
    origin: { x: 0 },
    translate: { x: -25, y: 20 }
});

let box3 = new Zdog.Box({
    addTo: group,
    width: 10,
    height: 10,
    depth: 2,
    stroke: 20,
    color: colors[0],
    closed: true,
    leftFace: true,
    rotate: { x: 0, y: 0, z: 0 },
    translate: { x: -25, y: -39 },
    origin: { x: 0 }
});

let box4 = new Zdog.Box({
    addTo: group,
    width: 5,
    height: 10,
    depth: 2,
    stroke: 20,
    color: colors[0],
    closed: true,
    leftFace: true,
    rotate: { x: 0, y: 0, z: -0.6108652381980153 },
    translate: { x: 40, y: 31, z: 0 },
    origin: { x: 0 }
});

illo.updateRenderGraph();

let elapsedSeconds = () => performance.now()/1000;
let fract = (x) => x - Math.floor(x);
let easeInOutQuad = (t) =>  t<.5 ? 2*t*t : -1+(4-2*t)*t ;

let animate = () =>
{
    let time = fract(elapsedSeconds()/duration);
    let interval = Math.floor(time*2.0);
    //Zdog.TAU
    let target = Math.PI*easeInOutQuad(fract(time*2.0)) + Math.PI*interval;

    // console.log(interval);
    if(isSpinning)
    {
        outline_1.rotate.y = target;
        outline_2.rotate.y = target*2.0;
        group.rotate.y = target;
        // i.rotate.y = target*2.0;
        // h.rotate.y = target*2.0;
    }
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
};
animate();

// [{"id":"ROOT","label":"Root","type":"Anchor","props":{},"children":[{"id":"040850ed-9df2-48aa-a5d5-c614bd5b6d20","label":"Box","type":"Box","props":{"width":100,"height":10,"color":"#FFFFFF","closed":true,"depth":10,"leftFace":true,"stroke":20,"rotate":{"x":0,"y":0,"z":0.9599310885968813},"translate":{"x":5}},"children":[]},{"id":"dbb68ecc-71bb-4c58-9ebf-5cf0b3d8af1c","label":"Box","type":"Box","props":{"width":50,"height":10,"color":"#FFFFFF","closed":true,"depth":10,"leftFace":true,"stroke":20,"rotate":{"x":0,"y":3.141592653589793,"z":0.9599310885968813},"origin":{"x":0},"translate":{"x":-25,"y":20}},"children":[]},{"id":"927a356c-b272-42e0-8aba-27cd85ac8b1d","label":"Box","type":"Box","props":{"width":10,"height":10,"color":"#FFFFFF","closed":true,"depth":10,"leftFace":true,"stroke":20,"rotate":{"x":0,"y":0,"z":0},"translate":{"x":-30,"y":-40},"origin":{"x":0}},"children":[]},{"id":"c948bd61-0bd9-43da-ac75-10ecb2beff74","label":"Box","type":"Box","props":{"width":5,"height":10,"color":"#FFFFFF","closed":true,"depth":10,"leftFace":true,"stroke":20,"rotate":{"x":0,"y":0,"z":-0.8726646259971648},"translate":{"x":40,"y":30,"z":0},"origin":{"x":0}},"children":[]}]}]