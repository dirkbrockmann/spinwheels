import * as d3 from "d3"
import colors from "./colormaps.js"
import param from "./parameters.js"
import {agents,singularities} from "./model.js"
import cfg from "./config.js"

const paint = colors[cfg.simulation.colormap];
const N = param.N;
const ds = 1.0/(2*N+1);

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);
var ctx,dL,W,H;

function draw_singularities(){
	var knut = param.show_pinwheels.widget.value() ? cfg.simulation.pinwheel_opacity : 0;
	ctx.fillStyle= "rgba(255, 255, 255,"+knut+")";
	ctx.strokeStyle = "rgba(0, 0, 0,"+knut+")";;

	singularities.forEach(d=>{
		
		ctx.beginPath();
		ctx.arc(X(d.x), Y(d.y), 20, 0, 2 * Math.PI);
		ctx.fill()
		ctx.stroke();
	})
}


const initialize = (display,config) => {
	
	W = config.display_size.width;
	H = config.display_size.height;
	
	dL = ds*W;
		
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');
	
	ctx.clearRect(0, 0, W, H);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, config.display_size.width, config.display_size.height);		

	agents.forEach(d=>{
		const c = d.cell();
		ctx.fillStyle=paint(d.theta/2/Math.PI);
		ctx.fillRect(X(c[2].x), Y(c[2].y), (X(c[0].x)-X(c[2].x)), (Y(c[0].y)-Y(c[2].y)));
	})
	
	//ctx.strokeStyle = "black";
	//ctx.strokeRect(0, 0, config.display_size.width, config.display_size.height);		
};


const go = (display,config) => {
	
	
	ctx.clearRect(0, 0, W, H);
//	ctx.strokeStyle = "black";
//	ctx.strokeRect(0, 0, config.display_size.width, config.display_size.height);		

	agents.forEach(d=>{
		const c = d.cell();
		ctx.fillStyle=paint(d.theta/2/Math.PI);
		ctx.fillRect(X(c[2].x), Y(c[2].y), (X(c[0].x)-X(c[2].x)), (Y(c[0].y)-Y(c[2].y)));
	})
	
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, config.display_size.width, config.display_size.height);
	
	draw_singularities()		
}


export {initialize,go,go as update}
