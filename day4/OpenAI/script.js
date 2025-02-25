const API_KEY = "";

$(document).ready(function () {
  $("#sendButton").click(function () {
    const userInput = $("#userInput").val();

    if (userInput === "") {
      alert("メッセージを入力してください");
      return;
    }

    // ユーザーのメッセージを表示
    $("#chatBox").append(
      "<div><strong>あなた:</strong> " + userInput + "</div>"
    );
    $("#userInput").val(""); // 入力欄をクリア

    //　OpenAI API にリクエストを送る
  });
});
