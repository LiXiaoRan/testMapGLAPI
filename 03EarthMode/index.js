/**
 * @file 加载地图,设置旋转和倾斜
 */

let map = new BMapGL.Map("container"); //创建地图实例
let point = new BMapGL.Point(116.28019, 40.049191); //创建点坐标
map.centerAndZoom(point, 5); // 初始化地图，设置中心点坐标和地图级别

map.enableScrollWheelZoom(true);



map.setMapType(BMAP_EARTH_MAP);  // 设置地图类型为地球模式
