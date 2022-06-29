// created by zach He on 2019-04-29
// 企业概况
import url from './urls'

export default class Home {
  /**
   * @描述  1.1	获取用户信息
   */
  static getToken (parms) {
    return $http.post(url.getToken, parms);
  }


}