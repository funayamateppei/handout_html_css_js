# はじめに

Day02 では JavaScript を使ってじゃんけんゲームを作っていきます。
今日からがプログラミング 👩‍💻

<img src="./readme_images/day2_1.avif" />

## 課題発表

- グループごとに 1 人 3 分程度で発表
  - 発表ごとにチャット欄に 1 人 1 回以上コメントしましょう
  - 褒める！
  - リアクションする
  - 質問する などなど
- 各班 1 人 or2 人が全体で発表してもらいます

## 準備

1. [janken](./janken)フォルダを開く
2. index.html をブラウザに表示する

ジャンケンアプリ画面表示されたら完了 ✅

<img src="./readme_images/day2_2.avif" />

## JavaScript とは

- ブラウザで動作するプログラミング言語 👩‍💻

| HTML                                             | CSS                                          | JavaScript                                 |
| ------------------------------------------------ | -------------------------------------------- | ------------------------------------------ |
| コンテンツの指定、タイトル、文章、画像などの記述 | コンテンツの装飾、色、大きさ、配置などの指定 | ユーザー操作，イベント発生による動きを実現 |

これを使ってジャンケンアプリのボタン操作、勝敗判定、画面更新を行います ✊

### js ファイルを読み込む

1. `script.js`を作成
1. `index.html`で読み込む(body の閉じタグの上)

```html
    <!--省略 -->
      <div class="result">
        <p id="user-hand">あなたの手:</p>
        <p id="enemy-hand">相手の手:</p>
        <p id="outcome">結果:</p>
      </div>
</div>
<script src="script.js"></script> <!--追記 -->
</body>
```

script.js に以下を追記してブラウザで確認しましょう

```js
alert("alertです")
console.log("console.logです")
```

#### alert

ブラウザでアラートが表示できます。

- 現状最初の読み込み時 1 回のみしか表示されないが、リロードするとまた表示できる

<img src="./readme_images/day2_3.avif" />

#### console.log

前回使った検証ツールで、Console タブを選択すると確認できる。ファイル名や何行目の console.log かも確認できる。)

<img src="./readme_images/day2_4.avif" />

開発でよく使います ✅
(このあと出てくる変数の値を確認する、処理が実行されているかを確認するなど)

#### コメントアウト

この alert、console.log は使用しないのでコメントアウトしておきます。

※ 開発途中に一旦処理は消したいけど形跡を残しておきたい時や、処理の説明などをコメントで残しておきたい時に使用します。

- カーソルがある行で以下の操作をする。または選択した複数行をコメントにします(解除も同様)
  - mac だと command + /
  - win だと Ctrl + /

```js
// alert("alertです");
// console.log("console.logです");
```

## jQuery とは

- jQuery とは、JavaScript のライブラリの 1 つで、「簡単に」、「少ないコード量で」書けるように作られたツールです

例えば HTML 上の何かを非表示にしたいとき以下のように短く書けます

```js
// JavaScript
document.getElementById("myElement").style.display = "none"
```

```js
// jQuery
$("#myElement").hide()
```

## jQuery の準備

- jQuery を使えるように URL(`https://code.jquery.com/jquery-3.6.0.min.js`)から読み込みたいので、script タグを使って jQuery を読み込みます(`script.js`の上)

```html
      <div class="result">
        <p id="user-hand">あなたの手:</p>
        <p id="enemy-hand">相手の手:</p>
        <p id="outcome">結果:</p>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> <!--追記 -->
    <script src="script.js"></script>
  </body>
```

HTML を読み込んだ後に jQuery で書いた処理を実行するため以下を追記します。
※以降の処理はこの`{ }`の中に追記していきます！

```js
$(document).ready(function () {
  // この中に処理を書いていく
})
```

これで、script.js ファイルの中で jQuery を使って処理をかけるようになりました ✅

## グーボタンをタップ ✊

これが jQuery を書く上での型です。

```js
$(要素).on("イベント名", function () {
  // 実行する処理
})
```

```
どこを(要素)何をきっかけに(イベント)、{}の中の処理を実行する
```

かを書いていきます

### 要素を id で指定する

- Day01 で`class`を使いました
- class は複数の要素に使うことができます

```html
<div class="div-common"></div>
```

- 今回は`id`を使います
- `id`はクラスと違って一つの要素にしか使うことができません

- HTML のジャンケングーのボタンに id を設定します

```html
<div class="buttons">
  <button class="hand-btn" id="btn-rock">グー</button>
  <!--idを追記 -->
</div>
```

- そして jQuery から id を使ってグーボタンを指定します

```js
// ⚠️ `#`を忘れない！
$("#btn-rock").on("イベント名", function () {
  // 実行する処理
})
```

今の所

```
idがbtn-rockの部分(グーボタン)をクリックをきっかけに`{}`の中の処理を実行する
```

という状態です

### イベント

jQuery にはイベントというものが存在します。
ユーザーがウェブページ上で行った操作（クリック、キー入力、スクロールなど）に反応して実行されるアクションのことを指します。

| イベント名 | 説明                                             |
| ---------- | ------------------------------------------------ |
| click      | ユーザーが要素をクリックしたとき。               |
| dblclick   | ユーザーが要素をダブルクリックしたとき。         |
| mouseenter | マウスが要素に乗ったとき。                       |
| mouseleave | マウスが要素から離れたとき。                     |
| mouseover  | マウスが要素に乗ったとき（子要素も含む）。       |
| mouseout   | マウスが要素から離れたとき（子要素も含む）。     |
| mousemove  | マウスが動いたとき。                             |
| hover      | マウスが乗ったときと離れたときの両方に反応する。 |

今回は click を使いましょう！

```js
$("#btn-rock").on("click", function () {
  // ⚠️ `#`を忘れない！
  // 実行する処理
})
```

動作確認で console.log を実行する処理のところに記載します！

```js
$("#btn-rock").on("click", function () {
  console.log("Gu is tapped!")
})
```

1. 保存してブラウザのグーボタンをクリック
1. 検証ツールの Console タブを確認

⚠️ console.log を使ってこのクリックイベントが動いているかどうかを確認するのが大事!!
この後自分で処理を書いていく上で、うまく動かないよというときに問題がどこにあるのかを知る手掛かりになる

<img src="./readme_images/day2_6.avif" />

今の所

```
idがbtn-rockの部分(グーボタン)をクリックをきっかけにconsole.logを実行する
```

という状態です。

## 画面の表示を書き換える

Q: どうやって jQuery を使って html 上で文字を書き換えるんだろう 🤔
A: ググる！ or ChatGPT にきく 👩‍💻

### ぐぐる時のキーワードの例

```
jquery html 文字 変更
```

いくつか記事が出てくると思うのでその中から良さそうなものをピックアップ。(見比べて一番使われていそうなやつを選ぶと大体 ok)

### ChatGPT に聞く時の例

```
jQueryを使って、ボタンをクリックしたときにidがuser-handの要素の文字を変えたいです。
どのようなコードを書けばよいですか？
```

結果こんな感じになりました 👇

```js
$("#btn-rock").on("click", function () {
  // console.log("Gu is tapped!");
  $("#user-hand").text(`あなたの手: グー`)
})
```

グーボタンを押して`あなたの手: グー`と表示されたら完了！

<img src="./readme_images/day2_6.avif" />

これで

```
idがbtn-rockの部分(グーボタン)をクリックをきっかけにidがuser-handの部分(あなたの手:)を`あなたの手: グー`に書き換える
```

という処理になりました。

できた人はチョキも同様にアップデートしていきましょう！(早く終わった人はパーも)

## じゃんけんの処理を追加する

以下の処理が必要となります

- じゃんけんの手のボタンを押す(完了 ✅)
- 相手の手が決まる
- 自分の手と相手の手を比べて勝敗が決まる

### 相手の手が決まる

やり方は色々ありますが、今回は`乱数`を使います

これが乱数です。`Math.random()`

とりあえず動かしてみよう 📝

```script.js
// 0から1の間でランダムな値（乱数）を表示
const randomNumber1 = Math.random();
alert(randomNumber1);

// 0から4までのどれかが表示される
const randomNumber2 = Math.floor(Math.random() * 5);
alert(randomNumber2);
```

結果

<img src="./readme_images/day2_7.avif" />

- `Math.random()`は 0 から 1 の間でランダムな値（乱数）を作る

<img src="./readme_images/day2_8.avif" />

- `Math.floor`はカッコの中に与えられた数値の小数点以下を切り捨てて整数部分のみを返す

### 変数

値を一時的に保管しておく箱のこと 📦
プログラミングは変数に値を一時保存しながら色々な処理を書いていきます。

```js
// 0から1の間でランダムな値（乱数）を表示
const randomNumber1 = Math.random() // randomNumber1という名前の箱にMath.random()の結果を一時保存している
console.log(randomNumber1) // 一時保存されている値をalertで表示
console.log(Math.random()) // ❌これでも動くけどあとで追加まわしができない

// 0から4までのどれかが表示される
const randomNumber2 = Math.floor(Math.random() * 5) // randomNumber2という名前の箱にMath.floor(Math.random() * 5)の結果を一時保存している
console.log(randomNumber2) // 一時保存されている値をalertで表示
```

#### メリット

- 同じデータを何度も使える
- わかりやすい名前をつけることでコードが読みやすくなる など

##### 注意点

JavaScript の変数には大きく分けて 2 種類あります

- `const`は上書き不可
- `let`は上書き可
  できるだけ上書き不可の`const`を使いましょう！`let`だと知らぬ間に値が書き変わってバグ(プログラムの不具合)の原因になる 🐛
- `var`は昔の書き方なので使ってはダメ！`const`と`let`が誕生する前にあった書き方です

```js
$("#btn-rock").on("click", function () {
  $("#user-hand").text(`あなたの手: グー`)
  const enemyHand = Math.floor(Math.random() * 3)
  console.log(enemyHand)
})
```

グーをタップすると 0, 1, 2 が表示されていれば ✅

### 乱数で相手の手を決めよう

以上を踏まえて相手の手を決めます。

- 0~2 の乱数を生成
  - 0:👊, 1:✌️, 2:✋ とする(後回し)
- 変数に保存する
- 相手の手(HTML)を更新する

```js
$("#btn-rock").on("click", function () {
  $("#user-hand").text(`あなたの手: グー`)
  const enemyHand = Math.floor(Math.random() * 3)
  console.log(enemyHand)
  $("#enemy-hand").text(`相手の手: ???`) // 🤔
})
```

Q: enemyHand を使ってどう相手の手を書き換えようか 🤔

### 条件分岐

A: こんなときには if と else を使った条件分岐を使います。

```js
if (条件) {
  // 条件に当てはまればここに書かれた処理を実行
} else {
  // 条件に当てはまらなければここに書かれた処理を実行
}
```

条件は複数設定することもできます。

```js
if (条件1) {
  // 条件1に当てはまればここに書かれた処理を実行
} else if (条件2) {
  // 条件2に当てはまればここに書かれた処理を実行
} else {
  // 条件1と2に当てはまらなければここに書かれた処理を実行
}
```

- 乱数に応じて相手の手を決める

  - 0:👊, 1:✌️, 2:✋ とする

- 乱数`enemyHand`の数字に応じて`相手の手: ???`(id が enemy-hand の箇所)の???を出し分けたい

```js
$("#btn-rock").on("click", function () {
  $("#user-hand").text(`あなたの手: グー`)
  const enemyHand = Math.floor(Math.random() * 3)
  // console.log(enemyHand);
  if (enemyHand === 0) {
    // もし乱数enemyHandの値が0なら
    $("#enemy-hand").text("相手の手: グー") // idがenemy-handの箇所を"相手の手: グー"に書き換える
  } else if (enemyHand === 1) {
    // もし乱数enemyHandの値が1なら
    $("#enemy-hand").text("相手の手: チョキ") // idがenemy-handの箇所を"相手の手: チョキ"に書き換える
  } else {
    // もし乱数enemyHandの値が0でも1でもないなら
    $("#enemy-hand").text("相手の手: パー") // idがenemy-handの箇所を"相手の手: パー"に書き換える
  }
})
```

ついでに結果も出しましょう！

```js
$("#btn-rock").on("click", function () {
  $("#user-hand").text(`あなたの手: グー`)
  const enemyHand = Math.floor(Math.random() * 3)
  // console.log(enemyHand);
  if (enemyHand === 0) {
    $("#enemy-hand").text("相手の手: グー")
    $("#outcome").text("結果: あいこ") // 自分がグーで相手もグーだからidがoutcomeの箇所を"結果: あいこ"に書き換える
  } else if (enemyHand === 1) {
    $("#enemy-hand").text("相手の手: チョキ")
    $("#outcome").text("結果: 勝ち") // 自分がグーで相手はチョキだからidがoutcomeの箇所を"結果: 勝ち"に書き換える
  } else {
    $("#enemy-hand").text("相手の手: パー")
    $("#outcome").text("結果: 負け") // 自分がグーで相手もパーだからidがoutcomeの箇所を"結果: 負け"に書き換える
  }
})
```

グーは完成 😇

グーが動いた人は、チョキ/パーボタンも動作するようにコードを更新してみよう ✅

### 課題

条件分岐を使って何か作ろう！！！

提出方法と発表手順は今回と同じです。

## 来週の準備

使用できる Email アドレスをご用意ください 📩

- Web API を使用する際に API Key が必要となります
- これを取得するのに会員登録が必要なためです
