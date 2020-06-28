/**
 * @file 加载地图,infowindow
 */

let map = new BMapGL.Map("container"); //创建地图实例
let point = new BMapGL.Point(116.404, 39.915); //创建点坐标
map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

map.enableScrollWheelZoom(true); //开启鼠标滚轮

// map.setTilt(60);

let scaleCtrl = new BMapGL.ScaleControl();
map.addControl(scaleCtrl);

let marker = new BMapGL.Marker(point);
map.addOverlay(marker);

let opts = {
    width: 200, // 信息窗口宽度
    height: 100, // 信息窗口高度
    title: "故宫博物院", // 信息窗口标题
};
let infoWindow = new BMapGL.InfoWindow(
    "地址：北京市东城区王府井大街88号乐天银泰百货八层",
    opts
); // 创建信息窗口对象
marker.addEventListener("click", function () {
    map.openInfoWindow(infoWindow, point); //开启信息窗口
});
