/**
 * @file 加载地图,设置旋转和倾斜
 */

let map = new BMapGL.Map("container"); //创建地图实例
let point = new BMapGL.Point(116.28019, 40.049191); //创建点坐标
map.centerAndZoom(point, 19); // 初始化地图，设置中心点坐标和地图级别

map.enableScrollWheelZoom(true); //开启鼠标滚轮

map.setTilt(60);

let scaleCtrl = new BMapGL.ScaleControl({offset:new BMapGL.Size(150,25)});  // 添加比例尺控件
map.addControl(scaleCtrl);
let zoomCtrl = new BMapGL.ZoomControl(); // 添加比例尺控件
map.addControl(zoomCtrl);
