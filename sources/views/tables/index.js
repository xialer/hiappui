import {JetView} from "webix-jet";

export default class TablesView extends JetView {
	config() {
		return {
			"cols": [{
				"width": 259, "rows": [{"options": "demo->623cb9c1cf56fb0012c67169", "view": "select", "height": 38}, {
					"css": "webix_light",
					"view": "toolbar",
					"height": 44,
					"cols": [{"view": "label", "label": "应用数据表", "height": 0}]
				}, {"url": "demo->623cb9c1cf56fb0012c67163", "view": "sidebar", "width": 0}, {
					"css": "webix_light",
					"view": "toolbar",
					"height": 44,
					"cols": [{"view": "label", "label": "应用数据视图"}, {
						"view": "button",
						"label": "Click me",
						"autowidth": true
					}]
				}, {"url": "demo->623cb9c1cf56fb0012c67163", "view": "sidebar", "width": 258}, {
					"css": "webix_light",
					"view": "toolbar",
					"height": 44,
					"cols": [{"view": "label", "label": "系统数据表"}, {
						"view": "button",
						"label": "Click me",
						"autowidth": true
					}]
				}, {"url": "demo->623cb9c1cf56fb0012c67163", "view": "sidebar", "width": 258}]
			}, {
				"rows": [
					{"view": "label", "label": "My App", "height": 38},

					{
						"options": ["数据浏览器", "数据设计器", {id: 1, value: "Tab1", close: true},
							{id: 1, value: "Tab2"}
						], "view": "tabbar", "height": 38
					},
					{
						view:"toolbar",
						id:"myToolbar",
						cols:[
							{ view:"button", id:"LoadBut", value:"Load", width:100, align:"left" },
							{ view:"button", value:"Save", width:100, align:"center" },
							{ view:"button", value:"Info", width:100, align:"right" }]

					},
					{"view": "template", "template": "You can place any widget here..", "role": "placeholder"}],
				"width": 0
			}]
		};
	}
}