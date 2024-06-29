// LINEにメッセージを送信する関数
function sendMessage(replyToken, messageText, endSession) {
  var postData = {
    replyToken: replyToken,
    messages: [{
      type: 'text',
      text: messageText
    }]
  };
  if (endSession) {
    postData.messages[0].quickReply = {
      items: [{
        type: 'action',
        action: {
          type: 'location',
          label: '位置情報を送る'
        }
      }]
    };
  }
  var options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'Authorization': 'Bearer ' + LINE_TOKEN
    },
    payload: JSON.stringify(postData)
  };
  UrlFetchApp.fetch(LINE_ENDPOINT, options);
}