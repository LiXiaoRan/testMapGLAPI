/**
 * @file 加载地图,地图事件绑定
 */

let map = new BMapGL.Map("container"); //创建地图实例
let point = new BMapGL.Point(116.404, 39.915); //创建点坐标
map.centerAndZoom(point, 10); // 初始化地图，设置中心点坐标和地图级别

map.enableScrollWheelZoom(true); //开启鼠标滚轮

// map.setTilt(60);

let scaleCtrl = new BMapGL.ScaleControl();
map.addControl(scaleCtrl);

map.addEventListener("click", function (e) {
    alert("点击的经纬度：" + e.latlng.lng + " , " + e.latlng.lat);
    var mercator = map.lnglatToMercator(e.latlng.lng, e.latlng.lat);
    alert("点的墨卡托坐标：" + mercator[0] + ", " + mercator[1]);
});

let navi3dctrl = new BMapGL.NavigationControl3D(); //2D和3D切换控件
map.addControl(navi3dctrl);
