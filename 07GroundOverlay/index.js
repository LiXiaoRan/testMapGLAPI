/**
 * @file 加载地图,地面覆盖层
 */

let map = new BMapGL.Map("container"); //创建地图实例
let point = new BMapGL.Point(116.404, 39.915); //创建点坐标
map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

map.enableScrollWheelZoom(true); //开启鼠标滚轮

map.setTilt(60);

let scaleCtrl=new BMapGL.ScaleControl();
map.addControl(scaleCtrl);

// 西南角和东北角
let SW = new BMapGL.Point(116.29579, 39.837146);
let NE = new BMapGL.Point(116.475451, 39.9764);

let groundOverlayOptions = {
    opacity: 0.8,
    displayOnMinLevel: 10,
    displayOnMaxLevel: 14,
}; //地面覆盖层会出现的层级

// 初始化GroundOverlay
let groundOverlay = new BMapGL.GroundOverlay(
    new BMapGL.Bounds(SW, NE),
    groundOverlayOptions
);

// 设置GroundOverlay的图片地址
groundOverlay.setImageURL("../img/black.png");
map.addOverlay(groundOverlay);
