/**
 * @file 加载地图,设置旋转和倾斜
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

// let point = new BMapGL.Point(116.28019, 40.049191);
let marker = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915)); // 创建点
let polyline = new BMapGL.Polyline(
    [
        new BMapGL.Point(116.399, 39.91),
        new BMapGL.Point(116.405, 39.92),
        new BMapGL.Point(116.425, 39.9),
    ],
    { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
); //创建折线

let circle = new BMapGL.Circle(point, 500, {
    strokeColor: "red",
    strokeWeight: 2,
    strokeOpacity: 0.5,
}); //创建圆形

let polygon = new BMapGL.Polygon(
    [
        new BMapGL.Point(116.34, 39.92),
        new BMapGL.Point(116.406, 39.93),
        new BMapGL.Point(116.425, 39.91),
    ],
    { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
); //多边形

let pStart = new BMapGL.Point(116.392214, 39.918985); //矩形左上角
let pEnd = new BMapGL.Point(116.41478, 39.911901); // 矩形右下角
let rectangle = new BMapGL.Polygon(
    [
        new BMapGL.Point(pStart.lng, pStart.lat),
        new BMapGL.Point(pStart.lng, pEnd.lat),
        new BMapGL.Point(pEnd.lng, pEnd.lat),
        new BMapGL.Point(pEnd.lng, pStart.lat),
    ],
    { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
);

function add_overlay() {
    map.addOverlay(marker); //增加点
    map.addOverlay(polyline); //增加折线
    map.addOverlay(circle); //增加圆
    map.addOverlay(polygon); // 多边形
    map.addOverlay(rectangle); //矩形 矩形其实就是特殊多边形
}

function remove_overlay() {
    map.clearOverlays();
}

add_overlay();
