import * as widgets from "d3-widgets"
import {range,map} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {add_id_label,add_widget,variables,booleans,choices} from "./utils.js"


const va = add_id_label(variables(parameters));
const bo = add_id_label(booleans(parameters));

const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.size(cfg.widgets.slider_size)
					.girth(cfg.widgets.slider_girth)
					.knob(cfg.widgets.slider_knob)
		);

const toggles = map(bo, 
		v => widgets.toggle()
					.id(v.id)
					.label(v.label)
					.value(v.default)			
		);


add_widget(bo,toggles);
add_widget(va,sliders);

const go = widgets.button().actions(["play","pause"])
const setup = widgets.button().actions(["back"])
const reset = widgets.button().actions(["rewind"])
		
const buttons = [go,setup,reset];


export default (controls,grid)=>{

	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,range(sliders.length)
			.map(x=>(cfg.widgets.slider_anchor.y+cfg.widgets.slider_gap*x)));
	
	const tg_pos=grid.position(cfg.widgets.toggle_anchor.x,cfg.widgets.toggle_anchor.y);	
	
	sliders.forEach((sl,i) => sl.position(sl_pos[i]));
	
	toggles[0].position(tg_pos).labelposition(cfg.widgets.toggle_label_pos)
	
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
	setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y));
	

	controls.selectAll(null).data(sliders).enter().append(widgets.widget);
	controls.selectAll(null).data(toggles).enter().append(widgets.widget);
	controls.selectAll(null).data(buttons).enter().append(widgets.widget);

}

export {sliders,toggles,go,setup,reset,variables,booleans}


