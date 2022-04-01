import {JetView} from "webix-jet";

export default class SheetView extends JetView{
	config(){
		const config = {
			type:"space", rows:[{
				view: "pivot",
				structure: {
					rows: ["体制", "国家"],
					columns: ["年度"],
					values: [{ name: "产油量", operation: ["min"] }],
				},
				url: "data/pivot.json",
			}]
		};

		return webix.require({
			"https://cdn.webix.com/pro/edge/pivot/pivot.js"	:true,
			"https://cdn.webix.com/pro/edge/pivot/pivot.css":true
		}).then(() => config);
	}

}