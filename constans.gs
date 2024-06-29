// LINE Messaging APIのイベント処理
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  if (data.events && data.events.length > 0) {
    var event = data.events[0];
    var messageType = event.message.type;
    var latitude = null;
    var longitude = null;

    if (messageType != 'location') {
      // テキストメッセージが送信された場合
      var replyToken = event.replyToken;
      var userId = event.source.userId;
      saveDataToSheet(userId);
      sendMessage(replyToken, "位置情報を入力すると付近のお店を教えるよ!", true);
    } else if (messageType === 'location') {
      var location = event.message;
      latitude = location.latitude;
      longitude = location.longitude;
      var replyToken = event.replyToken;
      var apiResponse = callHotPepperAPI(latitude, longitude);
      sendCarouselMessage(replyToken, apiResponse);
    }
  }
}