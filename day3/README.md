# はじめに

Day03 では Web API を使って外からデータを取得します。

<img src="./readme_images/day3_1.avif" />

## 課題発表

- グループごとに 1 人 3 分程度で発表
  - 発表ごとにチャット欄に 1 人 1 回以上コメントしましょう
  - 褒める！
  - リアクションする
  - 質問する などなど
- 各班 1 人 or2 人が全体で発表してもらいます

## 準備

1. [weather](./weather) フォルダの中の index.html をブラウザに表示しましょう

<img src="./readme_images/day3_2.avif" />

## Web API とは

- Web API は、「アプリやウェブサイト同士が情報をやり取りするための仕組み」
- API は「Application Programming Interface（アプリケーションをつなげる仕組み）」の略

### 例

- 天気予報アプリ: Web API を使って天気データをインターネットから取得
- 地図アプリ: Web API を使って場所の情報やルート案内を取得

### 使い方

以下の手順で使います。

1.`リクエスト`（お願いする）

- 例: 「今日の天気を教えてください」と API にお願いする

  2.`レスポンス`（答えをもらう）

- 例: API が「今日の天気は晴れです」と答える

<img src="./readme_images/day3_3.avif" width=50% />

リクエストとレスポンスそれぞれで実装する必要があります。

### API Key

リクエストするには`API Key`を必要とする場合が多いです。

- API を無断で利用されないように、ある一定の条件をクリアした(クレカ登録したり、利用規則に同意したり)上として発行されるパスワードみたいなもの
- **絶対に他人に教えない！！！！！！！**
  - 不正利用されて多額の請求が来たりするかも

### 今回使う API

https://www.weatherapi.com/

### API Key の取得

1.まずは`Sign Up`から会員登録

<img src="./readme_images/day3_4.avif" width=25% />

2.Email とパスワード、必要事項をチェックして`Sign up`ボタンをクリック

<img src="./readme_images/day3_5.avif" width=25% />

3.入力した Email アドレスに確認用リンクが飛んできているからそこをクリック

<img src="./readme_images/day3_6.avif" />

4.`API Key`をコピーする

<img src="./readme_images/day3_7.avif" width=50% />

5.貼る

使いやすいように変数にしておく

```js
const API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxx" // 自分のAPI Key
```

## リクエストを実行する

今回は「天気を取得」ボタンをクリックしたタイミングでリクエストを実行します。

<img src="./readme_images/day3_8.avif" />

```js
// idがget-weatherのボタンをクリック
$("#get-weather").on("click", function () {
  // 処理を追加していく
})
```

### 入力欄の値を取得する

jQuery の`.val()`を使用すると入力欄の値を取得できる

https://api.jquery.com/val/

```js
$("#get-weather").on("click", function () {
  const city = $("#city-input").val()
  console.log(city) // 入力欄の値が取得できている
})
```

入力欄に何か入力 →Console で入力した値が表示されていれば ok✅

### リクエストの実装

ajax を使用します。 (axios でも可)

https://api.jquery.com/jQuery.ajax/

jQuery の AJAX (Asynchronous JavaScript and XML) は、ページをリロードせずにデータを取得・送信するための機能です。

#### ajax の型

基本形はこんな感じで使います 👇

```js
$.ajax({
  url: "リクエスト先のURL",
  type: "GET", // 他にもPOST, PUT, DELETEとかあるけど取得するだけならGET,
  data: {
    // パラメータ
  },
  success: function (response) {
    console.log("成功:", response)
  },
  error: function (xhr, status, error) {
    console.error("エラー:", status, error)
  },
})
```

**ポイント**

- type: HTTP メソッド (GET, POST, PUT, DELETE)
- data: リクエスト時に一緒に送る値(パラメータ)を書く
- success: リクエスト成功時に実行する処理を書く
- error: リクエスト失敗時に実行する処理を書く

#### リクエストに必要な情報を確認する

どの API でもリクエスト時にどんなデータを一緒に送るか`パラメータ`を見ながら確認しましょう。

https://www.weatherapi.com/my/

<img src="./readme_images/day3_9.avif" width=50% />

https://www.weatherapi.com/docs/

URL はここ

<img src="./readme_images/day3_10.avif" width=50% />

パラメータはここ

どうやら`key`と`q`は`required`なので必ずパラメータで渡す必要がありそう

<img src="./readme_images/day3_11.avif" width=50% />

追加で言語も変更できそう(Optional: 任意なので必須ではない)

<img src="./readme_images/day3_12.avif" width=50% />
<img src="./readme_images/day3_13.avif" width=50% />

これを踏まえて ajax✏️

```js
// APIリクエスト
$.ajax({
  url: "https://api.weatherapi.com/v1/current.json",
  method: "GET",
  data: {
    key: API_KEY,
    q: city,
    lang: "ja",
  },
  success: function (response) {
    // 成功時の処理
    console.log(response)
  },
  error: function () {
    // エラー時の処理
    alert("天気情報を取得できませんでした。都市名を確認してください。")
  },
})
```

**ポイント**

- url: Base URL + Current weather の API method
- :new: data: パラメータを`オブジェクト`の形で渡します

### オブジェクト

「いくつかのデータをまとめたもの」のこと！
例えば、人の情報をまとめたノートのようなものを想像してみてください。

```
名前: 榎しげはる
年齢: 秘密
好きな色: 緑
```

このような情報を JavaScript では`オブジェクト`という形で表現できます。

```js
const person = {
  name: "榎しげはる",
  age: "秘密",
  favoriteColor: "緑",
}
```

コロンの左側が`キー`・右側を`値`と呼びます。

このオブジェクトの形で ajax のパラメータとしています。

```js
$.ajax({
  url: `https://api.weatherapi.com/v1/current.json`,
  method: "GET",
  data: {
    // ここから
    key: API_KEY,
    q: city,
    lang: "ja",
  }, // ここまで
  success: function (response) {
    console.log(response)
  },
  error: function () {
    alert("天気情報を取得できませんでした。都市名を確認してください。")
  },
})
```

リクエストはここまで ✅

### レスポンスを確認しよう

好きな都市名を入力して「天気予報を取得」をクリック！
Console を確認してみましょう。

<img src="./readme_images/day3_14.avif" width=50% />

オブジェクトでレスポンスが取得できています。

左端の三角ボタンをクリックして展開して中身をみてみましょう 👁️

<img src="./readme_images/day3_15.avif" />

`current`キーと`location`キーにそれぞれたくさん値が紐づいています

### オブジェクトの中の値を取得する

このままだとオブジェクトの中のどのデータを使うのかがわかりません。

```js
const person = {
  name: "榎しげはる",
  age: "秘密",
  favoriteColor: "緑",
}
```

オブジェクトの値を使いたいときは、ドット（.） を使います。

```js
console.log(person.name) // "榎しげはる"
console.log(person.age) // "秘密"
console.log(person.favoriteColor) // "緑"
```

これでも ok(参考)

```js
console.log(person["name"]) // "榎しげはる"
console.log(person["age"]) // "秘密"
console.log(person["favoriteColor"]) // "緑"
```

今回は気温の情報を取得してみましょう

- current > temp_c

<img src="./readme_images/day3_16.avif" />

どのキーがどんな値なのかはドキュメントを確認しよう！

https://www.weatherapi.com/docs/

```js
success: function (response) {
    // 成功時の処理
    console.log(response);
    console.log(response.current.temp_c); // 追加
},
```

次に天気の情報を取得してみましょう

- current オブジェクト > condition オブジェクト > text にありそう

<img src="./readme_images/day3_17.avif" />

```js
success: function (response) {
    // 成功時の処理
    console.log(response);
    console.log(response.current.temp_c);
    console.log(response.current.condition.text); // 追加
},
```

ちゃんと取得できてる(検証 →Console で確認)👇

<img src="./readme_images/day3_18.avif" />

💡 必ず取得したい値が正しく取得できているか`console.log`を使って確認しましょう！

### 取得した値を画面に表示しよう

```js
success: function (response) {
    // 成功時の処理
    // console.log(response);
    // console.log(response.current.temp_c);
    // console.log(response.current.condition.text);
    const temperature = response.current.temp_c;
    const weatherCondition = response.current.condition.text;
    // $("#temperature").text("気温:" + temperature + "°C"); これでもok
    $("#temperature").text(`気温: ${temperature}°C`);
    $("#description").text(`天気: ${weatherCondition}`);
},
```

普通の文字と変数の中身を一緒に画面表示するには[テンプレートリテラル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals)を使用します

1. `${ }`の括弧の間に変数を書く
1. バッククォート`` ` ``で ☝️ を挟む: Shift ＋@
1. 一緒に表示したい文字列を`${ }`の前後に表示する

```js
console.log(`気温: ${temperature}°C`) // 気温: 1.3°C
```

完成 ✅

<img src="./readme_images/day3_19.avif" width=30% />

#### 練習 ✏️

表示できたら、もう一つ好きな値を取得して、それを画面に表示してみよう ✅

## 本の情報を取得しよう

Google Books API を使用します。

https://developers.google.com/books/docs/v1/reference

⚠️ [books](./books) フォルダの`index.html`をブラウザに表示してしましょう

<img src="./readme_images/day3_20.avif" width=20% />

<img src="./readme_images/day3_21.avif" width=50% />

### 本を検索

1. 好きなキーワードを入力
1. 検索ボタンをクリック
1. 検証ツールで Console を確認

<img src="./readme_images/day3_22.avif" width=50% />

items というキーで`Array`が取得できています。

items だけに console を絞ります。

```js
success: function (response) {
    // console.log(response); // コメントアウト
    console.log(response.items); // 追記
},
```

<img src="./readme_images/day3_23.avif" width=50% />

展開すると

<img src="./readme_images/day3_24.avif" width=50% />

### 配列

- 複数のデータを一つの変数にまとめて管理するためのデータ構造です
- 配列を使うと、関連するデータを一つのグループとして扱うことができます

```js
const fruits = ["りんご", "バナナ", "オレンジ"]
```

#### インデックス

- 配列の各要素には、0 から始まる番号（インデックス）が付いています

```js
const fruits = [
  "りんご", // 0番目
  "バナナ", // 1番目
  "オレンジ", // 2番目
]
```

- インデックスを使って要素を抜き出すことができます

```js
// インデックスの例
const fruits = ["りんご", "バナナ", "オレンジ"]

console.log(fruits[0]) // "りんご"
console.log(fruits[1]) // "バナナ"
console.log(fruits[2]) // "オレンジ"
```

### 配列の操作

ふ〜んくらいで ok

- 要素の追加
  push(): 配列の末尾に要素を追加します。

```js
let fruits = ["りんご", "バナナ"]
fruits.push("オレンジ")
console.log(fruits) // ["りんご", "バナナ", "オレンジ"]
```

- 要素の削除
  pop(): 配列の末尾の要素を削除します。

```js
let fruits = ["りんご", "バナナ", "オレンジ"]
fruits.pop()
console.log(fruits) // ["りんご", "バナナ"]
```

- 要素の変更
  インデックスを使って特定の要素を変更できます。

```js
let fruits = ["りんご", "バナナ", "オレンジ"]
fruits[1] = "ぶどう"
console.log(fruits) // ["りんご", "ぶどう", "オレンジ"]
```

### 配列のループ

- 配列の全ての要素を処理するには、for ループや forEach メソッドを使います

```js
// forループの例
const fruits = ["りんご", "バナナ", "オレンジ"]
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]) // fruits[0], fruits[1]...
}
```

- let i = 0
  - 最初は 0 からスタート
- i < fruits.length
  - `fruits.length`は fruits 配列の要素の数: 3
  - 0 < 3
    - 0, 1, 2 と処理が続きます
- i++
  - 処理が 1 回終わるたびに`i`に対して+1 していきます

結果的に以下の処理が実行されているのと同じ状態です。

```js
console.log(fruits[0]) // "りんご"
console.log(fruits[1]) // "バナナ"
console.log(fruits[2]) // "オレンジ"
```

今回はこっちを使います。

```js
// forEachメソッドの例
const fruits = ["りんご", "バナナ", "オレンジ"]
fruits.forEach(function (fruit) {
  console.log(fruit)
})
```

- 要素を一つずつ`{}`に渡している
- fruit という変数に入っているのでそれを log に出力している

結果的に以下の処理が実行されているのと同じ状態です。

```js
console.log("りんご") // "りんご"
console.log("バナナ") // "バナナ"
console.log("オレンジ") // "オレンジ"
```

forEach を使って本ごとにログを出力します。

```js
success: function (response) {
    // console.log(response);
    // console.log(response.items);
    const books = response.items
    books.forEach((book) => {
        console.log(book)
    });
},
```

本ごとに出力した様子はこちら

<img src="./readme_images/day3_25.avif" width=50% />

```js
books.forEach((book) => {
  // console.log(book);
  const title = book.volumeInfo.title // 本のタイトル
  const li = $("<li>").html(title) // HTMLタグを作成
  $("#booksList").append(li) // ulタグの中に入れ込む
})
```

解説 ☝️

1. 本のタイトルを変数`title`に格納
1. title を`liタグ`に入れ込む
   1. `<li>呪術廻戦1</li>`こんな感じ
1. それを`index.html`の ul タグ(id が booksList)に入れ込む

```html
<ul id="booksList">
  <!-- ここに追加(append)されていく。※index.html修正不要 -->
</ul>
```

完成 ✅

<img src="./readme_images/day3_26.avif" width=50% />

- 検証ツールから見るとちゃんと`<li>呪術廻戦1</li>`が生成されている

<img src="./readme_images/day3_27.avif" width=30% />

## 課題

- Web API を探して何か作ってみよう
- 複数組み合わせるのがポイントです 👏
- 色々無料 API が載っているサイト
  - https://www.freepublicapis.com/
