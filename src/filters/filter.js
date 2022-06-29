import Vue from 'vue'
/**
   * 取小数位的精度   页面用法：{{'13232.1' | doubleNum}} 返回值：13232.10
   * @param {Object} value     //需要匹配小数位的原始值
   * @param {Object} d         //小数位的位数（可不传，不传默认保留两位小数）  
   */
Vue.filter("doubleNum", function (value, d) {
  if (value == '--') {
    return value;
  }
  d = d ? d : '2';
  if (value) {
    return parseFloat(value).toFixed(d);
  } else {
    // return '--'
    return (0).toFixed(d);
  }
});

/**
   * 千分位符   页面用法：{{'13232.1' | thousand}}  返回值：13,232.1
   * @param {Object} value     //需要匹配的原始值
   * @param {Object} d         //需要保留的小数位的位数（可不传，不传保留原始小数位）  
   */
Vue.filter("thousand", function (value, d) {
  if (value) {
    if (d) value = parseFloat(value).toFixed(d);
    value = value.toString();
    var re = /\d{1,3}(?=(\d{3})+$)/g;
    var n1 = value.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) { return s1.replace(re, "$&,") + s2; });
    return n1;
  }
});

/**
   * 日期格式重置   页面用法：{{'2017-08-22 18:30:26','yyyy-mm-dd hhmm' | formatDate}}  返回值：'2017-08-22 18:30'
   * @param {Object} value     //需要匹配的原始值
   * @param {Object} value2    //需要得到的日期格式（页面不区分大小写,可不传,不传默认返回年月日） 
   */
Vue.filter("formatDate", function (value, value2) {
  if (value) {
    if (value2) {
      if (value2.toLowerCase() == 'yyyy-mm-dd hhmm') {
        let str = value.slice(11, 19);
        if (str == '23:59:59') {
          return value.slice(0, 10) + ' 24:00';
        } else {
          return value.slice(0, 16);
        }
      } else if (value2.toLowerCase() == 'yyyy-mm-dd hh') {
        return value.slice(0, 13);
      } else if (value2.toLowerCase() == 'hhmm') {
        if (value.slice(11, 19) == '23:59:59') {
          return '24:00';
        }
        return value.slice(11, 16);
      } else {
        return value.slice(0, 10);
      }
    } else {
      return value.slice(0, 10);
    }
  }
});

/**
   * 时间格式重置   页面用法：{{'18:30:26' | formatTime}}  返回值：'18:30'
   * @param {Object} value     //需要匹配的原始值
   */
Vue.filter("formatTime", function (value) {
  if (value) {
    if (value == '23:59:59') {
      return "24:00";
    } else {
      return value.slice(0, 5);
    }
  }
});

/**
   * 格式重置   返回百分比
   * @param {Object} value     //需要匹配的原始值
   */
Vue.filter("percent", function (value) {
  if (value) {
    return parseFloat(value).toFixed(2) + '%';
  } else {
    return (0).toFixed(2) + '%';
  }
});

/**
 * 限制字符串长度
 * value:字符串对象
 * lmit:展示的长度
 */
Vue.filter("ellipsis", function (value, lmit) {
  if (!value) return ''
  if (value.length > lmit) {
    return value.slice(0, lmit) + '...'
  }
  return value
})



