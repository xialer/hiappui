import { shuffle } from "models/progressch";

const data = [
	{ value:"前端服务数据", checked:true },
	{ value:"第二批数据导入(已经校对)", checked:0 },
	{ value:"客户端个人中心模块修改", checked:0 },
	{ value:"取消开屏广告", checked:0 },
	{ value:"检查M-1213BUG问题", checked:true },
	{ value:"输出前端时间接口统计报告", checked:true },
	{ value:"数据表'商品'增加一条属性'上架时间'", checked:0 },
	{ value:"修改主页面颜色风格", checked:true },
	{ value:"增加多国语言翻译,新增'日语'", checked:true },
	{ value:"客户端增加滑动滚动", checked:true }
];

export function getProjects(){
	return shuffle(data);
}