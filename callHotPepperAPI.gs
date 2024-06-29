// ホットペッパーAPIを呼び出してデータを取得する関数
function callHotPepperAPI(latitude, longitude) {
  var url = Hotpepper_URL;
  var params = {
    key: Hotpepper_API,
    lat: latitude,
    lng: longitude,
    range: 3, // 検索範囲（例：半径1km）
    count: 10,
    format: "json"
  };

  urls = url + "?" + Object.keys(params).map(key => key + "=" + params[key]).join("&");
  var response = UrlFetchApp.fetch(urls);
  return parseJSON(response);
}