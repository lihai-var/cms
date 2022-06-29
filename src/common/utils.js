// 自定义全局方法封装
const utils = {
  userInfo: {

  },
  test: function () { },
  isBack: false,
  //标准时间格式化
  formatTime: function (date, fmt) {
    var date = new Date(date);
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    var o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        var str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
      }
    }
    return fmt;
  },
}

export default () => {
  if (typeof window.utils == 'undefined') {
    window.utils = utils
  }
}
