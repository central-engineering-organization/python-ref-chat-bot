class CookieUtil {
  static instance = null;

  /**
   * Singleton design pattern applied
   * @return {null|CookieUtil}
   */
  constructor() {
    if (CookieUtil.instance !== null) {
      return CookieUtil.instance;
    } else {
      CookieUtil.instance = this;
      return this;
    }
  }

  /**
   * Deletes given key
   * @param {string} key
   */
  delete(key) {
    this.set(key, "", 0);
  }

  /**
   * Sets new key/value or modifies old key/value
   * @param {string} key
   * @param {string} value
   * @param {number} expireDays
   */
  set(key, value, expireDays= 1) {
    let date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    document.cookie = `${key}=${value};expires=${date.toUTCString()};path=/`;
  }

  /**
   * Gets the value of the given key
   * @param {string} key
   * @return {string}
   */
  get(key) {
    const keyString = `${key}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieList = decodedCookie.split(';');
    for (let i = 0; i < cookieList.length; ++i) {
      let cookie = cookieList[i];
      while (cookie[0] === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(keyString) === 0) {
        return cookie.substring(keyString.length, cookie.length);
      }
    }
    return "";
  }
}
