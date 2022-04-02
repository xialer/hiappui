import {JetView} from "webix-jet";

export default class SheetView extends JetView{
	config(){
		const config = {
			type:"space", rows:[{
				view: "pivot",
				structure: {
					rows: ["类别", "款式"],
					columns: ["款式"],
					values: [{ name: "价格", operation: ["avg"] }],
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