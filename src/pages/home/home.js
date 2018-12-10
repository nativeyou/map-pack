import './home.scss'
// ------ 业务逻辑
// ------
// 热更新设置
if(module.hot){
    require('./home.html')
    module.hot.accept();
    module.hot.decline('./home.html')
}