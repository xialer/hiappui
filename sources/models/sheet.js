const spreadsheet_data = {
	"styles": [
		["top","#FFEFEF;#6E6EFF;center;'PT Sans', Tahoma;17px;"],
		["subtop","#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;bold;top;;"],
		["sales","#818181;;center;'PT Sans', Tahoma;15px;;;bold;top;;"],
		["total","#818181;;right;'PT Sans', Tahoma;15px;;;bold;top;;"],
		["count","#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;;top;;"],
		["calc-top","#818181;#EAEAEA;;'PT Sans', Tahoma;15px;;;bold;top;;"],
		["calc-other","#818181;#EAEAEA;;'PT Sans', Tahoma;15px;;;bold;middle;;"],
		["values","#000;#fff;right;'PT Sans', Tahoma;15px;;;;top;;;price"]
	],
	"sizes": [
		[0,1,125],
		[0,3,137],
		[0,4,137],
		[0,5,137]
	],
	"data": [
		[1,1,"数据报表","top"],
		[2,1,"区域","subtop"],
		[2,2,"门店","subtop"],
		[2,3,"品类A","sales"],
		[2,4,"品类B","sales"],
		[2,5,"合计","total"],
		[3,1,"北京","count"],
		[3,2,"旗舰店","count"],
		[3,3,"188400","values"],
		[3,4,"52000","values"],
		[3,5,"=C3+D3","values"],
		[4,1,"北京","count"],
		[4,2,"直营1店","count"],
		[4,3,"192200","values"],
		[4,4,"12000","values"],
		[4,5,"=C4+D4","values"],
		[5,1,"北京","count"],
		[5,2,"直营2店","count"],
		[5,3,"68900","values"],
		[5,4,"8000","values"],
		[5,5,"=C5+D5","values"],
		[6,1,"上海","count"],
		[6,2,"代理店A","count"],
		[6,3,"140000","values"],
		[6,4,"14000","values"],
		[6,5,"=C6+D6","values"],
		[7,1,"上海","count"],
		[7,2,"线下渠道","count"],
		[7,3,"50000","values"],
		[7,4,"4800","values"],
		[7,5,"=C7+D7","values"]
	],
	"spans": [
		[1,1,5,1]
	]
};

export function getSheetData(){
	return spreadsheet_data;
}