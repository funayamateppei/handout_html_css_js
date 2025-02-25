$(document).ready(function () {
  // グーをクリックした時の処理
  $("#btn-rock").on("click", function () {
    $("#user-hand").text(`あなたの手: グー`);
    const randomEnemyHand = Math.floor(Math.random() * 3);
    if (randomEnemyHand === 0) {
      $("#enemy-hand").text("相手の手: グー");
      $("#outcome").text("結果: あいこ");
    } else if (randomEnemyHand === 1) {
      $("#enemy-hand").text("相手の手: チョキ");
      $("#outcome").text("結果: 勝ち");
    } else {
      $("#enemy-hand").text("相手の手: パー");
      $("#outcome").text("結果: 負け");
    }
  });

  // チョキをクリックした時の処理
  $("#btn-scissors").on("click", function () {
    $("#user-hand").text(`あなたの手: チョキ`);
    const randomEnemyHand = Math.floor(Math.random() * 3);
    if (randomEnemyHand === 0) {
      $("#enemy-hand").text("相手の手: グー");
      $("#outcome").text("結果: 負け");
    } else if (randomEnemyHand === 1) {
      $("#enemy-hand").text("相手の手: チョキ");
      $("#outcome").text("結果: あいこ");
    } else {
      $("#enemy-hand").text("相手の手: パー");
      $("#outcome").text("結果: 勝ち");
    }
  });

  // パーをクリックした時の処理
  $("#btn-paper").on("click", function () {
    $("#user-hand").text(`あなたの手: パー`);
    const randomEnemyHand = Math.floor(Math.random() * 3);
    if (randomEnemyHand === 0) {
      $("#enemy-hand").text("相手の手: グー");
      $("#outcome").text("結果: 勝ち");
    } else if (randomEnemyHand === 1) {
      $("#enemy-hand").text("相手の手: チョキ");
      $("#outcome").text("結果: 負け");
    } else {
      $("#enemy-hand").text("相手の手: パー");
      $("#outcome").text("結果: あいこ");
    }
  });
});
