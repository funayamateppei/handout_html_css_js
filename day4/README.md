# はじめに

Day04 では OpenAI API を使って外からデータを取得します。

<img src="./readme_images/day4_1.avif" width=50%/>

## 課題発表

- グループごとに 1 人 3 分程度で発表
  - 発表ごとにチャット欄に 1 人 1 回以上コメントしましょう
  - 褒める！
  - リアクションする
  - 質問する などなど
- 各班 1 人 or2 人が全体で発表してもらいます

## 準備

1. Day04 を[こちら](https://drive.google.com/drive/folders/1cX-RS-hNDjrOxEcH3dyIoTByU5p__kTX)からダウンロード
1. VScode で展開
1. `index.html`をブラウザに表示しましょう

<img src="./readme_images/day4_2.avif" width=50%/>

## API

OpenAI を使用します 👇

https://platform.openai.com/docs/overview

今回は、「AI とチャットできる簡単なアプリ」 を作ります。
ユーザーが送ったメッセージに対して、`OpenAI`の API を使って AI が返事をする仕組みを学びましょう。

### API Key

今回 OpenAI の API Key はクレジットカードを必要とするためごってぃ先生が準備してくれました。

無駄撃ちしないでください 🙇‍♂️🙇‍♂️🙇‍♂️

```script.js
const API_KEY = "";
```

### 実装したいこと

1. メッセージを入力して送信ボタンを押す
1. 画面に「あなた」のメッセージが表示される
1. AI が返事をして、画面に表示する
1. スクロールして最新のメッセージが見えるようにする

```script.js
$(document).ready(function () {
  $("#sendButton").on("click", function () {
    const userInput = $("#userInput").val();
    // console.log(userInput);
    $("#chatBox").append("<div><strong>あなた:</strong> " + userInput + "</div>");
    $("#userInput").val(""); // 入力欄をクリア
  });
});
```

#### リクエスト

こちら 👇 を参考に ajax でリクエストの処理を作成します。

https://platform.openai.com/docs/api-reference/chat/create

```script.js
$("#userInput").val(""); // 入力欄クリア

// 以下追記

$.ajax({
  url: "https://api.openai.com/v1/chat/completions",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  data: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "ユーザーの質問に簡潔に答えてください（50文字以内）。"},
        { role: "user", content: userInput }
    ],
    max_tokens: 100,
    temperature: 0.3
  }),
  success: function (response) {
    // 成功時の処理
    console.log(response)
  },
  error: function () {
    // 失敗時の処理
    $("#chatBox").append(
       "<div><strong>AI:</strong> エラーが発生しました。</div>"
    );
  },
});
```

- POST

  - サーバーにデータを送信するために使われます。
    例えば、Web サイトでフォームを送信したり、API にデータを登録したりする際に POST メソッドが使われます。
  - GET との違い
    GET はデータを取得する用。POST は URL にデータを含める GET とは異なり、POST ではデータをリクエストボディに格納します。

  ```js
  // メルカリの検索。URLにデータを含める(クエリパラメータ)。
  https://jp.mercari.com/search?search_condition_id=1cx0zHGsda2lua2kga2lkcw
  ```

- `JSON.stringify`
  JavaScript のオブジェクトを`JSON`文字列に変換するために必要です。※サーバー側で正しく認識してもらうため
  `OpenAI API`では`Content-Type: application/json`を指定するため、データも JSON で送る必要がある。

- JSON とは
  JSON（JavaScript Object Notation） は、データをシンプルなテキスト形式で表現する方法の一つで、プログラム間でデータをやりとりする のによく使われます。
  ⚠️JSON はただの文字列のため、本来は JSON→JS で使える形に変換(パース)する必要はあるが、そこは ajax がうまいことやってくれているのでここでは不要

```js
const jsonText = '{"name": "Yuki", "age": 36}'
console.log(jsonText.name) // ❌ エラー

const user = JSON.parse(jsonText) // JSON をオブジェクトに戻す
console.log(user.name) // ✅ "Yuki"
```

以下のレスポンスも JSON です 👇

#### AI が返事をして、画面に表示する

レスポンスから必要な値を抽出します。

```swift
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "gpt-4o-mini",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "\n\nHello there, how may I assist you today?",
    },
    "logprobs": null,
    "finish_reason": "stop"
  }],
  "service_tier": "default",
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21,
    "completion_tokens_details": {
      "reasoning_tokens": 0,
      "accepted_prediction_tokens": 0,
      "rejected_prediction_tokens": 0
    }
  }
}

```

- response(☝️ の全体)
  - choices(配列。[ ]が目印。)
    - 0 番目(配列の最初の要素を指定。)
      - message
        - content

```js
const apiResponse = response.choices[0].message.content
```

`apiResponse`に入っている AI の返答を`id = "chatBox"`の HTML タグに表示します。

```js

success: function (response) {
    const aiResponse = response.choices[0].message.content;
    $("#chatBox").append(
        "<div><strong>AI:</strong> " + aiResponse + "</div>"
    );
},
```

#### スクロールして最新のメッセージが見えるようにする

https://api.jquery.com/scrollTop/

```js

success: function (response) {
    const aiResponse = response.choices[0].message.content;
    $("#chatBox").append(
        "<div><strong>AI:</strong> " + aiResponse + "</div>"
    );
    $("#chatBox").scrollTop($("#chatBox")[0].scrollHeight); // 追記
},
```

完成 ✅

<img src="./readme_images/day4_3.avif" width=50%/>

## 処理を関数にまとめよう

関数とは 「まとまりのある処理をまとめたもの」 です。

### なぜ関数を使うの？

✅ 何度も同じ処理を書かなくてよくなる
✅ コードがスッキリして読みやすくなる
✅ 変更が簡単になる

例えば今回の処理で、リクエスト成功時・失敗時に何をするかは一行一行読まないとわからない...

```js
success: function (response) {
    const aiResponse = response.choices[0].message.content;
    $("#chatBox").append(
        "<div><strong>AI:</strong> " + aiResponse + "</div>"
    );
    $("#chatBox").scrollTop($("#chatBox")[0].scrollHeight);
},
error: function () {
    $("#chatBox").append(
        "<div><strong>AI:</strong> エラーが発生しました。</div>"
    );
},
```

もし関数を使うと 👇

```js
success: function (response) {
    displayAIMessage(response)
},
error: function () {
    displayErrorMessage()
},
```

- 成功時には`displayAIMessage`で AI のメッセージを表示する
- 失敗時には`displayErrorMessage`でエラーメッセージを表示する

というのが一目でわかるようになる！(関数名は処理を要約した名前にしましょう)

### 関数の作り方

関数を作るには`function`を使います。

```js
function 関数名() {
  // ここにやりたい処理を書く
}
```

- function: 関数を作るためのキーワード
- 関数名: 自分で決められる（例: sayHello, displayAIMessage）
- { }: 関数が実行されたときの処理を書く

処理を実行したいところで呼び出します。(関数定義しただけで満足しがち※体験談)

```js
// 例なので追記不要
$("#sayHello").on("click", function () {
  sayHello()
})
```

### 引数

関数に「データを渡す」こともできます。
このデータを引数といいます。

```js
function sayHello(name) {
  console.log("こんにちは、" + name + "さん！")
}

sayHello("太郎") // こんにちは、太郎さん！
sayHello("花子") // こんにちは、花子さん！
```

- (name) の部分が引数
- 関数を呼び出すときに greet("太郎") のように値を渡す

### 戻り値

関数は 計算した結果を返す こともできます！
これを 「戻り値」 といいます。

```js
function add(a, b) {
  return a + b
}

const result = add(3, 5)
console.log(result) // 8
```

- `return` を使うと、関数の結果を外に出せる
- `const result = add(3, 5);` で結果を変数に保存できる

### チャットアプリの処理を関数にして呼び出す形に変更する

関数を定義する

```js
function displayAIMessage(response) {
  const aiResponse = response.choices[0].message.content
  $("#chatBox").append("<div><strong>AI:</strong> " + aiResponse + "</div>")
  $("#chatBox").scrollTop($("#chatBox")[0].scrollHeight)
}

function displayErrorMessage() {
  $("#chatBox").append("<div><strong>AI:</strong> エラーが発生しました。</div>")
}
```

関数を呼び出す

```js
success: function (response) {
    displayAIMessage(response); // ここ
},
error: function () {
    displayErrorMessage(); // ここ
},
```

### じゃんけんを関数を使って実装しよう

`Janken`フォルダの`index.html`をブラウザに表示しましょう

#### 関数にしたい処理

```js
$("#btn-rock").on("click", function () {
  // ここから
  $("#user-hand").text("あなたの手: グー")
  const randomEnemyHand = Math.floor(Math.random() * 3)
  if (randomEnemyHand === 0) {
    $("#enemy-hand").text("相手の手: グー")
    $("#outcome").text("結果: あいこ")
  } else if (randomEnemyHand === 1) {
    $("#enemy-hand").text("相手の手: チョキ")
    $("#outcome").text("結果: 勝ち")
  } else {
    $("#enemy-hand").text("相手の手: パー")
    $("#outcome").text("結果: 負け")
  }
  // ここまで
})
```

とりあえず関数にする

```js
function playJanken() {
  $("#user-hand").text("あなたの手: グー")
  const randomEnemyHand = Math.floor(Math.random() * 3)
  if (randomEnemyHand === 0) {
    $("#enemy-hand").text("相手の手: グー")
    $("#outcome").text("結果: あいこ")
  } else if (randomEnemyHand === 1) {
    $("#enemy-hand").text("相手の手: チョキ")
    $("#outcome").text("結果: 勝ち")
  } else {
    $("#enemy-hand").text("相手の手: パー")
    $("#outcome").text("結果: 負け")
  }
}
```

呼び出す

```js
// グーをクリックした時の処理
$("#btn-rock").on("click", function () {
  playJanken()
})
```

グーだけであればこれで終わり！でもチョキもパーでも同じ関数を使えると

- 関数の再利用ができる
- 処理の修正が一箇所だけですむ！(手ごとに処理を書くと 3 箇所修正が必要)

### 引数を使う

チョキとパーでも`playJanken`を使うには ① と ② を適宜変更する必要がある

```js
function playJanken() {
  $("#user-hand").text("あなたの手: グー") // ①
  const randomEnemyHand = Math.floor(Math.random() * 3)
  if (randomEnemyHand === 0) {
    $("#enemy-hand").text("相手の手: グー")
    $("#outcome").text("結果: あいこ") // ②
  } else if (randomEnemyHand === 1) {
    $("#enemy-hand").text("相手の手: チョキ")
    $("#outcome").text("結果: 勝ち") // ②
  } else {
    $("#enemy-hand").text("相手の手: パー")
    $("#outcome").text("結果: 負け") // ②
  }
}
```

①`あなたの手`を`引数`として外から渡せるようにする: `userHand`

```js
function playJanken(userHand) {
  $("#user-hand").text(`あなたの手: ${userHand}`)
  const randomEnemyHand = Math.floor(Math.random() * 3)
  if (randomEnemyHand === 0) {
    $("#enemy-hand").text("相手の手: グー")
    $("#outcome").text("結果: あいこ") // ②
  } else if (randomEnemyHand === 1) {
    $("#enemy-hand").text("相手の手: チョキ")
    $("#outcome").text("結果: 勝ち") // ②
  } else {
    $("#enemy-hand").text("相手の手: パー")
    $("#outcome").text("結果: 負け") // ②
  }
}
```

呼び出す

```js
// グーをクリックした時の処理
$("#btn-rock").on("click", function () {
  playJanken("グー")
})
```

②`userHand`に応じて勝敗を決める

- 一旦`randomEnemyHand`はそのまま使えそう
- randomEnemyHand vs userHand

```js
function playJanken(userHand) {
  $("#user-hand").text(`あなたの手: ${userHand}`)
  const randomEnemyHand = Math.floor(Math.random() * 3)

  if (randomEnemyHand === 0) {
    $("#enemy-hand").text("相手の手: グー")
    if (userHand === "グー") {
      $("#outcome").text("結果: あいこ") // ②
    } else if (userHand === "チョキ") {
      $("#outcome").text("結果: 負け") // ②
    } else {
      $("#outcome").text("結果: 勝ち") // ②
    }
  } else if (randomEnemyHand === 1) {
    $("#enemy-hand").text("相手の手: チョキ")
    if (userHand === "グー") {
      $("#outcome").text("結果: 勝ち") // ②
    } else if (userHand === "チョキ") {
      $("#outcome").text("結果: あいこ") // ②
    } else {
      $("#outcome").text("結果: 負け") // ②
    }
  } else {
    $("#enemy-hand").text("相手の手: パー")
    if (userHand === "グー") {
      $("#outcome").text("結果: 負け") // ②
    } else if (userHand === "チョキ") {
      $("#outcome").text("結果: 勝ち") // ②
    } else {
      $("#outcome").text("結果: あいこ") // ②
    }
  }
}
```

📝 一旦グー・チョキ・パーそれぞれで呼び出して、関数にする前と同じようにじゃんけんできるか確認しましょう

⚠️ これで一旦は動きますが色々と問題はある

- playJanken に`グー`の代わりに`グー`**以外**を渡すと壊れる
- if がネストしている

### playJanken に`グー`の代わりに`グー`以外を渡すと壊れる

**問題**
`userHand`が"ぐー"だったら ①、②、③ のうちどれが実行されると思いますか??

```js
$("#btn-rock").on("click", function () {
    playJanken("ぐー") // "グー"ではなく"ぐー"と書いてしまった😭
}
```

```js
// userHandが"ぐー"で渡されてくる
if (userHand === "グー") {
  $("#outcome").text("結果: あいこ") // ①
} else if (userHand === "チョキ") {
  $("#outcome").text("結果: 負け") // ②
} else {
  $("#outcome").text("結果: 勝ち") // ③
}
```

<details>
  <summary>答え</summary>
  
```js
// userHandが"ぐー"で渡されてくる
if (userHand === "グー") {
    $("#outcome").text("結果: あいこ");
} else if (userHand === "チョキ") {
    $("#outcome").text("結果: 負け");
} else {
    $("#outcome").text("結果: 勝ち"); // "ぐー"は"グー"でも"チョキ"でもないのでここ🚨
}
```
</details>

`オブジェクト`で手を定義しましょう ✏️

```js
const hands = {
  rock: "グー",
  scissors: "チョキ",
  paper: "パー",
}
```

今まで`グー`・`チョキ`・`パー`と書いていた箇所をオブジェクトで呼び出す形に書き換えます ✏️

```js
// グーをクリックした時の処理
$("#btn-rock").on("click", function () {
  playJanken(hands.rock) // ここ
})

// チョキをクリックした時の処理
$("#btn-scissors").on("click", function () {
  playJanken(hands.scissors) // ここ
})

// パーをクリックした時の処理
$("#btn-paper").on("click", function () {
  playJanken(hands.paper) // ここ
})
```

```js
function playJanken(userHand) {
  $("#user-hand").text(`あなたの手: ${userHand}`)
  const randomEnemyHand = Math.floor(Math.random() * 3)
  if (randomEnemyHand === 0) {
    $("#enemy-hand").text("相手の手: グー")
    if (userHand === hands.rock) {
      // ここ
      $("#outcome").text("結果: あいこ")
    } else if (userHand === hands.scissors) {
      // ここ
      $("#outcome").text("結果: 負け")
    } else {
      $("#outcome").text("結果: 勝ち")
    }
  } else if (randomEnemyHand === 1) {
    $("#enemy-hand").text("相手の手: チョキ")
    if (userHand === hands.rock) {
      // ここ
      $("#outcome").text("結果: 勝ち")
    } else if (userHand === hands.scissors) {
      // ここ
      $("#outcome").text("結果: あいこ")
    } else {
      $("#outcome").text("結果: 負け")
    }
  } else {
    $("#enemy-hand").text("相手の手: パー")
    if (userHand === hands.rock) {
      // ここ
      $("#outcome").text("結果: 負け")
    } else if (userHand === hands.scissors) {
      // ここ
      $("#outcome").text("結果: 勝ち")
    } else {
      $("#outcome").text("結果: あいこ")
    }
  }
}
```

### if のネスト

if の中にさらに if が来ること。読みづらい。

中の if をさらに別の関数にしてみましょう 👇

```js
function judge(userHand, enemyHand) {
  if (userHand === enemyHand) {
    return "あいこ"
  } else if (
    (userHand === hands.rock && enemyHand === hands.scissors) ||
    (userHand === hands.scissors && enemyHand === hands.paper) ||
    (userHand === hands.paper && enemyHand === hands.rock)
  ) {
    return "勝ち"
  } else {
    return "負け"
  }
}
```

呼び出す

```js
// グーをクリックした時の処理
$("#btn-rock").on("click", function () {
  playJanken(hands.rock)
})
```

チョキとパーも同じように関数を使って呼び出してみましょう 📝

<details>
  <summary>全体</summary>

```js
$(document).ready(function () {
  const hands = {
    rock: "グー",
    scissors: "チョキ",
    paper: "パー",
  }

  // グーをクリックした時の処理
  $("#btn-rock").on("click", function () {
    playJanken(hands.rock)
  })

  // チョキをクリックした時の処理
  $("#btn-scissors").on("click", function () {
    playJanken(hands.scissors)
  })

  // パーをクリックした時の処理
  $("#btn-paper").on("click", function () {
    playJanken(hands.paper)
  })

  function judge(userHand, enemyHand) {
    if (userHand === enemyHand) {
      return "あいこ"
    } else if (
      (userHand === hands.rock && enemyHand === hands.scissors) ||
      (userHand === hands.scissors && enemyHand === hands.paper) ||
      (userHand === hands.paper && enemyHand === hands.rock)
    ) {
      return "勝ち"
    } else {
      return "負け"
    }
  }

  function playJanken(userHand) {
    $("#user-hand").text(`あなたの手: ${userHand}`)
    const enemyHandValue = Math.floor(Math.random() * 3)
    if (enemyHandValue === 0) {
      const enemyHand = hands.rock
      $("#enemy-hand").text(`相手の手: ${enemyHand}`)
      const outcome = judge(userHand, enemyHand)
      $("#outcome").text(`結果: ${outcome}`)
    } else if (enemyHandValue === 1) {
      const enemyHand = hands.scissors
      $("#enemy-hand").text(`相手の手: ${enemyHand}`)
      const outcome = judge(userHand, enemyHand)
      $("#outcome").text(`結果: ${outcome}`)
    } else {
      const enemyHand = hands.paper
      $("#enemy-hand").text(`相手の手: ${enemyHand}`)
      const outcome = judge(userHand, enemyHand)
      $("#outcome").text(`結果: ${outcome}`)
    }
  }
})
```

</details>

**練習**

以下の部分を関数にして呼び出してみよう 📝

```js
const enemyHand = hands.rock // hands.scissors, hands.paper
$("#enemy-hand").text(`相手の手: ${enemyHand}`)
```

以上！！！！！
