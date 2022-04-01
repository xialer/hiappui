import {JetView} from "webix-jet";

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
							id:"ssheet",
							data:{
								"styles": [
									["top","#FFEFEF;#6E6EFF;center;'PT Sans', Tahoma;17px;"],
									["subtop","#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;bold;;;0-0-0-0,;"],
									["count","#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;;;;0-0-0-0,;"],
									["calc-top","#818181;#EAEAEA;;'PT Sans', Tahoma;15px;;;bold;;;0-0-0-0,;"],
									["calc-other","#818181;#EAEAEA;;'PT Sans', Tahoma;15px;;;bold;;;0-0-0-0,;"]
								],
								"data": [
									[1, 1, "Report 2015", "top"],
									[2, 1, "Countries:", "subtop"],
									[3, 1, "={{value}}", "count"],
									[2, 2, "Expense", "count"],
									[3, 2, "={{expense}}"],
									[2, 3, "Income", "count"],
									[3, 3, "={{income}}"],
									[2, 6, "Total:", "calc-top"],
									[3, 6, "=B3-C3"],
									[2, 7, "Std Deviation:", "calc-top"],
									[3, 7, "=STDEVP(B3:C3)"]
								],
								"spans": [
									[1, 1, 3, 1]
								],
								"sizes":[
									[0, 7, 130],
									[0, 8, 200],
									[0, 5, 20],
									[0, 4, 20]
								]
							}
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
}