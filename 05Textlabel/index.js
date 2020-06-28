/**
 * @file 加载地图,文本标签
 */

let map = new BMapGL.Map("container"); //创建地图实例
let point = new BMapGL.Point(116.404, 39.915); //创建点坐标
map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

map.enableScrollWheelZoom(true); //开启鼠标滚轮

map.setTilt(60);

let scaleCtrl = new BMapGL.ScaleControl({ offset: new BMapGL.Size(150, 25) }); // 添加比例尺控件
map.addControl(scaleCtrl);
let zoomCtrl = new BMapGL.ZoomControl(); // 添加比例尺控件
map.addControl(zoomCtrl);

let content = "欢迎使用百度地图GL";
let opts = {
    position: point, // 指定文本标注所在的地理位置
    offset: new BMapGL.Size(30, -30), //设置文本偏移量
};

let label = new BMapGL.Label(content, opts); // 创建文本标注对象
label.setStyle({
    color: "red",
    fontSize: "12px",
    height: "20px",
    lineHeight: "20px",
    fontFamily: "微软雅黑",
});
map.addOverlay(label);
