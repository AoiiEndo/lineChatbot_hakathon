// カルーセルメッセージを送信する関数
function sendCarouselMessage(replyToken, apiResponse) {
  var carouselItems = [];
  var columns = [];
  var shops = apiResponse;
  shops.forEach(function(shop) {
    var column = {
      "thumbnailImageUrl": shop.thumb,
      "imageBackgroundColor": "#FFFFFF",
      "title": shop.name,
      "text": "詳しくは下記をチェック!",
      "actions": [
        {
          "type": "uri",
          "label": "詳しくはコチラ!!",
          "uri": shop.urls
        },
        {
          "type": "message",
          "label": "住所",
          "text": shop.address
        },
      ]
    };
    columns.push(column);
  });
  var carouselItems = {
    "type": "template",
    "altText": "付近のお店情報です。",
    "template": {
      "type": "carousel",
      "columns": columns,
    }
  };
  var postData = {
    "replyToken": replyToken,
    "messages": [carouselItems]
  };
  var options = {
    method: 'post',
    headers: {
      "Content-Type": "application/json; chrset=UTF-8",
      'Authorization': 'Bearer ' + LINE_TOKEN
    },
    payload: JSON.stringify(postData),
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(LINE_ENDPOINT, options);

  // レスポンスコードの確認
  var responseCode = response.getResponseCode();
  if (responseCode !== 200) {
    var responseBody = response.getContentText();
    console.log("HTTPリクエストエラー: " + responseCode + ", レスポンスボディ: " + responseBody);
    throw new Error("HTTPリクエストエラー: " + responseCode);
  }
}