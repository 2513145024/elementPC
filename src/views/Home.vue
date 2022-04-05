<template>
	<div class="home">
		<el-row :gutter="20">
			<el-col :span="8">
				<el-card>
					<div class="FlexBox">
						<el-avatar :size="150" :src="circleUrl"></el-avatar>
						<div class="FlexBox-A">
							<h2>Admin</h2>
							<hr>
							<p>超级管理员</p>
						</div>
					</div>
					<el-divider></el-divider>
					<div class="text">
						<p>上次登录时间：2022-04-05 17:38:28</p>
						<p>上次登录地点：湖北武汉</p>
					</div>
				</el-card>
				<el-card style="margin-top: 30px;min-height: 460px">
					<el-table
						:data="tableData"
						style="width: 100%">
						<el-table-column
							v-for="(val, key) in tablable"
							:key="key"
							:prop="key"
							:label="val"
						>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
			<el-col :span="16">
				<div class="countData">
					<el-card
						v-for="item in countData"
						:key="item.name"
						:body-style="{padding:'0px',display:'flex'}">
						<i :class="'el-icon-'+item.icon" :style="{background:item.color}"></i>
						<div class="text" style="padding: 20px">
							<h3>￥{{ item.value }}</h3>
							<p>{{ item.name }}</p>
						</div>
					</el-card>
				</div>
				<div class="cardBox">
					<el-card>
						<div ref="myPie" style="width: 100%;height: 240px"></div>
					</el-card>
					<el-card>
						<div ref="myBar" style="width: 100%;height: 240px"></div>
					</el-card>
				</div>
				<el-card class="longCard">
					<div ref="myLine" style="width: 100%;height: 295px"></div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>


export default {
	name: 'Home',
	data() {
		return {
			circleUrl: require('../assets/1.jpg'),
			tableData: [
				{
					name: 'oppo',
					todayBuy: 100,
					monthBuy: 300,
					totalBuy: 800
				},
				{
					name: 'vivo',
					todayBuy: 100,
					monthBuy: 300,
					totalBuy: 800
				},
				{
					name: '苹果',
					todayBuy: 100,
					monthBuy: 300,
					totalBuy: 800
				},
				{
					name: '小米',
					todayBuy: 100,
					monthBuy: 300,
					totalBuy: 800
				},
				{
					name: '三星',
					todayBuy: 100,
					monthBuy: 300,
					totalBuy: 800
				},
				{
					name: '魅族',
					todayBuy: 100,
					monthBuy: 300,
					totalBuy: 800
				}
			],
			tablable: {
				name: '品牌',
				todayBuy: '今日价格',
				monthBuy: '本月价格',
				totalBuy: '总价格'
			},
			countData: [
				{
					name: "今日支付订单",
					value: 1234,
					icon: "success",
					color: "#2ec7c9",
				},
				{
					name: "今日收藏订单",
					value: 210,
					icon: "star-on",
					color: "#ffb980",
				},
				{
					name: "今日未支付订单",
					value: 1234,
					icon: "s-goods",
					color: "#5ab1ef",
				},
				{
					name: "本月支付订单",
					value: 1234,
					icon: "success",
					color: "#2ec7c9",
				},
				{
					name: "本月收藏订单",
					value: 210,
					icon: "star-on",
					color: "#ffb980",
				},
				{
					name: "本月未支付订单",
					value: 1234,
					icon: "s-goods",
					color: "#5ab1ef",
				},
			],
		}
	},
	created() {
	},
	mounted() {
		this.GetPie()
		this.getBar()
		this.getLine()
	},
	methods: {
		GetPie() {
			var chartDom = this.$refs.myPie
			var myChart = this.$echart.init(chartDom);
			const dataAll = [
				[
					[10.0, 8.04],
					[8.0, 6.95],
					[13.0, 7.58],
					[9.0, 8.81],
					[11.0, 8.33],
					[14.0, 9.96],
					[6.0, 7.24],
					[4.0, 4.26],
					[12.0, 10.84],
					[7.0, 4.82],
					[5.0, 5.68]
				]
			];
			const markLineOpt = {
				animation: false,
				label: {
					formatter: 'y = 0.5 * x + 3',
					align: 'right'
				},
				lineStyle: {
					type: 'solid'
				},
				tooltip: {
					formatter: 'y = 0.5 * x + 3'
				},
				data: [
					[
						{
							coord: [0, 3],
							symbol: 'none'
						},
						{
							coord: [20, 13],
							symbol: 'none'
						}
					]
				]
			};
			var option = {
				title: {
					text: "散点图",
					left: 'center',
					top: 0
				},
				tooltip: {
					formatter: 'Group {a}: ({c})'
				},
				xAxis: [{gridIndex: 0, min: 0, max: 20}],
				yAxis: [{gridIndex: 0, min: 0, max: 15}],
				series: [
					{
						name: 'I',
						type: 'scatter',
						xAxisIndex: 0,
						yAxisIndex: 0,
						data: dataAll[0],
						markLine: markLineOpt
					}
				]
			};
			myChart.setOption(option);
		},
		getBar() {
			var chartDom = this.$refs.myBar
			var myChart = this.$echart.init(chartDom);
			var option = {
				tooltip: {
					trigger: 'item'
				},
				legend: {
					top: '5%',
					left: 'center'
				},
				series: [
					{
						name: '手机销售情况',
						type: 'pie',
						radius: ['40%', '70%'],
						avoidLabelOverlap: false,
						itemStyle: {
							borderRadius: 10,
							borderColor: '#fff',
							borderWidth: 2
						},
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '14',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [
							{value: 1048, name: 'oppo'},
							{value: 735, name: 'vivo'},
							{value: 580, name: '苹果'},
							{value: 484, name: '小米'},
							{value: 300, name: '三星'},
							{value: 300, name: '魅族'},
						
						]
					}
				]
			};
			myChart.setOption(option);
		},
		getLine() {
			var chartDom = this.$refs.myLine
			var myChart = this.$echart.init(chartDom);
			var option = {
				title: {
					text: '手机销售量'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['oppo', 'vivo', '苹果', '小米', '三星', '魅族']
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						name: 'oppo',
						type: 'line',
						stack: 'Total',
						data: [120, 132, 101, 134, 90, 230, 210]
					},
					{
						name: 'vivo',
						type: 'line',
						stack: 'Total',
						data: [220, 182, 191, 234, 290, 330, 310]
					},
					{
						name: '苹果',
						type: 'line',
						stack: 'Total',
						data: [150, 232, 201, 154, 190, 330, 410]
					},
					{
						name: '小米',
						type: 'line',
						stack: 'Total',
						data: [320, 332, 301, 334, 390, 330, 320]
					},
					{
						name: '三星',
						type: 'line',
						stack: 'Total',
						data: [820, 932, 901, 934, 1290, 1330, 1320]
					},
					{
						name: '魅族',
						type: 'line',
						stack: 'Total',
						data: [520, 722, 801, 820, 590, 830, 920]
					}
				]
			};
			myChart.setOption(option);
			
		}
	}
	
}
</script>

<style scoped>
.cardBox {
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
}

.cardBox > div {
	width: 49%;
	height: 240px;
}

.longCard {
	height: 295px;
}

.countData {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
}

.countData > div {
	width: 32%;
	margin-bottom: 20px;
}

.countData i {
	width: 86px;
	font-size: 60px;
	color: #fff;
	line-height: 86px;
}

.text {
	text-align: left;
}

.FlexBox {
	display: flex;
	justify-content: space-around;
}

.FlexBox-A {
	display: flex;
	flex-direction: column;
	margin-top: 50px;
}
</style>
