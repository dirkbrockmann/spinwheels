
import param from "./parameters.js"
import {each,range,map,mean,sumBy} from "lodash-es"
import {rad2deg,deg2rad} from "./utils"
import  {square as sqlat} from "lattices"


const dt = param.dt;
const N = param.N;

var agents = [];
var singularities = [];

function compute_singularities(agents){
	singularities = [];
	agents.forEach(a=>{
		a.sing = 0;
		const nn = a.neighbors;
		const xm = sumBy(nn,x=>Math.cos(x.theta));
		const ym = sumBy(nn,y=>Math.sin(y.theta));
		const sigma = 1.0/(xm**2+ym**2);
		a.sing = sigma > param.pinwheel_threshold && (sumBy(nn,x=>x.sing)==0)  ? 1 : 0
		if(a.sing==1) {singularities.push(a)};
	})
}

const initialize = () => {

	param.timer={}; param.tick=0;

	const s = sqlat(N).boundary("periodic");

	agents = s.nodes;
	agents.forEach(a=>{
		a.theta = Math.random()*2*Math.PI;
		a.domega = 2*Math.random()-1;
	});	
	compute_singularities(agents)
	
};

const go  = () => {
	
	param.tick++;
	
	const sp = param.oscillator_speed.widget.value();
	const domega = param.oscillator_heterogeneity.widget.value();
	const K = param.coupling_strength.widget.value();

	agents.forEach(a=>{
		a.theta += dt*(sp*(1+domega*a.domega)+K*sumBy(a.neighbors,function(x){return Math.sin(x.theta-a.theta)})	)
		a.theta = a.theta % (2*Math.PI)		
	})
	
	compute_singularities(agents)
	
	
}

const update = () => {
	

}

export {agents,singularities,initialize,go,update}
