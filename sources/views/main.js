import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
	config() {


		const sidebar = {
			localId: "menu",
			view: "sidebar", css: "webix_dark", width: 200,
			collapsed: true,
			position: "left",

			borderless: true,
			scroll: false,
			data: [
				{id: "dash", value: "控制台", icon: "mdi mdi-view-dashboard"},
				{id: "data", value: "數據", icon: "mdi mdi-view-dashboard"},
				{id: "charts", value: "数据统计", icon: "mdi mdi-chart-areaspline"},
				{id: "tables", value: "数据管理", icon: "mdi mdi-table"},
				{id: "forms", value: "代码管理", icon: "mdi mdi-format-line-style"},
				{id: "sheet", value: "用户管理", icon: "mdi mdi-table-large"},
				{id: "kanban", value: "协同管理", icon: "mdi mdi-view-column"},
				{id: "pivot", value: "导入导出", icon: "mdi mdi-layers"},
				{id: "files", value: "数据报表", icon: "mdi mdi-folder-star"}
			]
		};

		const toolbar = {
			view: "toolbar",
			padding: 9, height: 58,
			cols: [
				{css: "logo"},
				{view: "icon", icon: "mdi mdi-bell", badge: "5"},
				{view: "icon", icon: "mdi mdi-settings"},
				{
					template: `<image class="mainphoto" src="data/images/morgan_yu.jpg">
					<span class="webix_icon mdi mdi-circle status green"></span>`,
					width: 60, css: "avatar", borderless: true
				}
			]
		};

		return {
			type: "clean", cols: [
				{
					rows: [{
						view: "icon", icon: "mdi mdi-menu",
						height: 58,
					}, sidebar]
				},
				{rows: [toolbar, {$subview: true}]}
			]
		};
	}

	init() {
		this.use(plugins.Menu, "menu");
	}
}