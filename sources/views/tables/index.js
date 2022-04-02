import {JetView} from "webix-jet";
import {getSheetData} from "models/sheet";

export default class TablesView extends JetView {
	config() {
		const config = {
			"cols": [
				{
					"width": 300, "rows": [
						{
							"view": "select",
							"height": 38,
							"options": [
								{"id": 1, "value": "云数据库"},
								{"id": 2, "value": "本地数据库"}
							]
						},
						{
							"view": "toolbar",
							"height": 30,
							"cols": [
								{
									"view": "label",
									"label": "应用数据表"
								}
							]
						},
						{
							view: "list",
							template: "#type#",
							select: true,
							id: "list1",
							data: [
								{id: 1, type: "表1", amount: 3},
								{id: 2, type: "表2", amount: 2},
								{id: 3, type: "数据表", amount: 5},
							]
						},
						{
							view: "resizer", id: "resizer"
						},
						{

							"view": "toolbar",
							"height": 44,
							"cols": [
								{
									"view": "label", "label": "应用数据视图"
								},
							]
						},
						{
							view: "list",
							template: "#type#",
							select: true,
							id: "list1",
							data: [
								{id: 1, type: "视图1", amount: 3},
								{id: 2, type: "数据视图", amount: 2}
							]
						},

						{
							view: "template",
						}]
				},
				{
					"rows": [
						{
							"options": [
								{id: 1, value: "表1", close: true},
								{id: 1, value: "数据视图", close: true}
							], "view": "tabbar"
						},

						{
							view:"spreadsheet",
							id:"ssheet"
						}

					],
					"width": 0
				}]
		};

		return webix.require({
			"https://cdn.webix.com/pro/edge/spreadsheet/spreadsheet.js":	true,
			"https://cdn.webix.com/pro/edge/spreadsheet/spreadsheet.css":	true
		}).then(() => config);
	}
	init() {
		//this.$$("ssheet").parse(getSheetData(),"json");
	}
}