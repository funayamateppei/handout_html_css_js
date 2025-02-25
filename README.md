# はじめに
Day01ではHTML/CSSを使って画面を作っていきます。

![Screenshot 2024-11-24 at 7.26.50.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/e42de203-ce86-f71f-5c04-b4bed81f54ee.png)

## 目次
1. 検証ツールを使ってみよう
1. HTMLとは
1. CSSとは
1. 自己紹介サイトを作成しよう

### 検証ツールを使ってみよう

- Google Chromeを立ち上げる
- 好きなホームページを1つ検索して開く
- 右クリック(Control + クリックでもok。↓これが表示されます)
<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/1dc8df84-27f1-6daf-2afc-df6e1bc25ea9.png" width = 33%/>

- メニューから検証を選択とこれが表示されます

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/f6f8b826-4876-e47a-4ca2-f71d2b7b2811.png" width = 100%/>

- 三角をクリックすると一つ深い部分が見えます


<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/64f56ae7-b49d-67db-1943-003492718acb.png" width = 100%/>

👀 `<div>***</div>`や`<a>***</a>`や`<h1>***</h1>`、その中には`class`や`id`や`style`など、他にもいろんな英単語が表示されていますね。

✅ この<>で表示されている部分がWebページの骨組みで**HTML**と言います(ちなみにstyleの部分はこのあとでてくる**CSS**を設定している箇所です)

**Day01で作るもの**

![スクリーンショット 2025-01-07 7.19.56.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/015a9404-e0d2-ddc2-7b7e-b5ea69e7b48a.png)


参照: [福岡市ホームページ](https://www.city.fukuoka.lg.jp/keizai/r-support/charm/2024_11_25.html)


- この部分☝️をHTMLとCSSを使って作っていきましょう

### フォルダの作成

VSCodeから作成するやり方を紹介します。

1. ここをクリック
![スクリーンショット 2025-02-02 7.32.38.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/a027345c-8892-94d7-6e8c-36594c927d71.png)
2. 新規フォルダを選択
![スクリーンショット 2025-02-02 7.33.48.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/8b6a27dd-3151-abd4-17ee-99e113e14cfa.png)
3. フォルダに名前をつける→フォルダ完成 :checkered_flag: 
![スクリーンショット 2025-02-02 7.34.19.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/b6eaf7d6-b776-f172-fbe5-e53402a2f640.png)
4. それを開く
![スクリーンショット 2025-02-02 7.34.31.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/15994d8c-c1bc-85fc-2b52-f938b180238a.png)


### HTMLとは

- タイトル，文章，画像を画面に表示するための骨組み

#### HTML の準備

ファイルを作成しましょう。

1. このアイコンをクリック
![スクリーンショット 2025-02-02 7.35.13.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/42ae9b63-cead-6601-474b-e01580056232.png)
2. `index.html`という名前にする
![スクリーンショット 2025-02-02 7.35.42.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/f8213897-49d5-95bc-b7e6-ebfc66a5239f.png)


- webページのフォーマットを入力します

1. index.html を開く
1. 「!」を入力（必ず半角） → 「tab」を押すと構造ができる↓

```index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- 文書自体の情報（文書名・読み込むファイルなど） -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <!-- 実際の文章の内容（文章や画像など）．ここにコンテンツを記述する． -->
  </body>
</html>
```

#### HTML の動作確認

- <body> タグ内にh1を書いて動作を確認しましょう

```index.html
<!DOCTYPE html>
<!-- 🔽 en → jaに変更する -->
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>YOUTH STARTUP CLUB FUKUOKA Day01</title>
  </head>
  <body>
    <!-- 🔽 下記 1 行を追加 🔽 -->
    <h1>Hello World!</h1>
  </body>
</html>
```


##### ブラウザにindex.htmlを表示する

1. VSCodeのindex.htmlを右クリックしてCopy Pathを選択
![スクリーンショット 2025-02-02 7.37.07.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/f9feab76-70a3-2f43-225e-cd4fb9fe8cef.png)

1. Chromeのここに貼り付け
![スクリーンショット 2025-02-02 7.39.23.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/f596a730-2942-c4a4-7b54-b7c8c0158b58.png)


1. 画面に「Hello World!」(h1に入力した文字)が表示されればok✅

![スクリーンショット 2024-11-29 16.24.13.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/13cb7d2d-bbfd-b76b-cf0f-d9e0f6c8323a.png)

#### 💡 開発の流れ

1. エディタでコードを書く
1. 保存する（command + s, ctrl + s）
1. ブラウザにて意図した動きや見た目になっているかどうかを確認する
1. コードを編集して保存すると自動的にブラウザ画面にも反映される


##### タグ
- HTML は「タグ」で構成される。タグを書くことでブラウザに対して「どのように表示するか」を指示する

```index.html
<!-- htmlは「タグ」で挟む！ <br>は改行するためのタグです。-->
<h1>中高生向け起業家育成プログラム<br />「YOUTH STARTUP CLUB FUKUOKA」を開催します</h1>

```

- プログラムがコンテンツの構造を理解できる
- HTML を読むのは「ブラウザ（≒ コンピュータ）
- 定められた形式で記述しないと，正しく表示されない


##### 今回出てくるタグ

- 下記の他にもたくさんのタグがある。全部覚えるのは不可能だが，よく使うものは書いているうちに勝手に覚える。よく使わないものは都度調べればok

```html
<!-- 「タグ」で挟む！ -->
<div>この中に文章や画像を入れる「箱」のようなもの</div>

<h1>見出し1（タイトル，文書中に1つしか存在してはならない）</h1>

<p>段落（通常の文章はこれ）</p>

<h2>見出し2</h2>

<!-- 挟まないものもある（単一のタグで成立） -->
<img src="image-name.png" />

<!-- ulの中にliを書いてリスト表示 -->
<ul>
  <li>1つ目<li/>
  <li>2つ目<li/>
<ul/>
```

#### 💡 構造をつくるコツ

- 全体をブロック（div 要素）ごとに分ける
- 入れ子構造（ツリー構造）を意識！

```
body
├── div
│   ├── h1
│   └── p
│   └── p
│   └── p
├── /div
├── div
│   ├── h2
│   ├── p
│   └── p
├── /div
```

- 構造を意識してトップ画面を作成しよう
    - `<div></div>`の中に一つのまとまりを作る
    - 画像は[こちら](https://drive.google.com/drive/folders/1N5l8xAJjrLvgVbX_pT6l23L_Fuwmm8cY)

```index.html
<div>
  <h1>
    中高生向け起業家育成プログラム<br />「YOUTH STARTUP CLUB FUKUOKA」を開催します
  </h1>
  <img src="youth-top.png"/>
  <p>福岡市内の中高生を対象に、学校・学年の垣根を超えて起業とプログラミングを学ぶプログラム<br>「YOUTH　STARTUP　CLUB　FUKUOKA」を開催します。<br>新しいことにチャレンジしたいみなさんのご応募をお待ちしております！</p>
</div>
```

✅ こんな感じになっていれば OK

![スクリーンショット 2024-12-15 7.23.03.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/3360af77-677f-2ca2-bcbe-51102f4d4974.png)


#### 練習 ✍️

この部分を作ってみよう(HTMLのみ)

![スクリーンショット 2025-01-07 7.20.56.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/7ac28022-6275-e9b8-daac-925feadbc2c4.png)



✅ もちろん背景色とかはまだつけず、こんな感じになっていればOK

![スクリーンショット 2025-01-07 7.22.54.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/6fa3b6b7-b36d-18dc-80c5-265d2ef7d8c1.png)


- まとまりを意識しましょう(構造をつくるコツ参照！)
- タイトルは`h2`タグで(`<h1>`がページで一つ)

### CSSとは

- HTMLで作った骨組みに背景，文字の大きさ，色を付け足します

#### CSSファイルの準備

- index.htmlと同じやり方で`main.css`ファイルを作成

#### CSS を HTML に適用する

- CSSは「CSS ファイル」に記述してきます
- HTML ファイルから CSS ファイルを読み込む必要があります

1. index.html を開く
1. titleタグの 1 行下で「link」を入力して tab キー
1. タグができるので，「href=」の後を「main.css」に変更する


```index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- 🔽 下記 1 行を追加 🔽 -->
    <link rel="stylesheet" href="main.css" />
  </head>

  <body></body>
</html>
```

#### CSS の基本的な記述方法

- CSSの命令の適用箇所は HTML 要素（タグやクラス名）を指定します。HTML 要素にクラス名をつけることで，細かく適用箇所を制御することができます
- 場所を指定する方法は下記以外にも多くあるが，当面は「タグに対する指定」「クラスに対する指定」を押されれば問題ありません

##### classの付け方

- 始まりタグの中に `class="class-name"`
  - `"class-name"`はわかりやすい名前にしましょう

```index.html
<div class="div-common">
    <h1>
        中高生向け起業家育成プログラム<br />「YOUTH STARTUP CLUB
        FUKUOKA」を開催します
    </h1>
```

- CSSファイルには以下のようにHTMLタグやクラスごとに指定をしていきます
  - クラス名を指定するときはドットを忘れない！

```example.css
body {
  /* タグに対して指定 */
  /* ここに文字の色やサイズなどを指定する命令を書く */
}

.div-common {
  /* `.` でクラス名で指定 */
}

.one-class,
.another-class {
  /* 複数のクラスに適用 */
}
```

#### ページのサイズ指定

- サイズは幅と高さを指定します

- 今回は`<body>`タグに対して指定し，ページ全体の幅を 960px に設定します

```main.css
body {
  /* body の幅を 960 px に設定する */
  width: 960px;
}
```

#### 背景の色，写真の設定

- 最初のセクションに色や画像を設定しましょう

```css
/* 背景を茶色、文字の色を白にする */
h1 {
  background: brown;
  color: white;
}
```

- 完璧に同じ色にしたいときは検証ツールで色を確認できる

![スクリーンショット 2024-12-18 8.33.30.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/9c6b5768-e484-20ab-7423-dd54c7d8bcc5.png)

```css
h1 {
  background: #a26b01;
  color: white;
  text-align: center; /* テキストを中央揃えにする */
}
```

#### 画像幅を調整する

- クラスを指定します

```index.html
<img class="top-image" src="youth-top.png" alt="" />
```

```css
.top-image {
  width: 70%; /* 親要素の幅に合わせる 960pxに対して70%という意味 */
}
```

#### タイトルの周りにスペースをつける

- 窮屈な見栄えなのでpaddingを使ってタイトル周りにスペースを入れます

- `padding: 20px`: 四方に20pxスペースを入れる
- `padding: 20px 0px`: 縦に20pxスペースを入れ、横には0pxつまりスペースを入れない
- `padding: 20px 10px 5px 3px`: 上から時計回りにスペースを指定できる
- `padding-top: 1px`のように単体でスペースをつけることもできる(そのほかは`padding-right`, `padding-bottom`, `padding-left`で指定できる)

```main.css
h1 {
  background: #a26b01;
  color: white;
  text-align: center; 
  padding: 20px 0px; /* 追記 */
}
```

#### 練習 ✍️

2つ目のセクションタイトルに背景色・paddingをつけてみよう！

- ⚠️ h2のタイトルは左寄せで！

![スクリーンショット 2025-01-07 7.26.18.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/bdecf11d-3af8-95bb-1577-8b2d11e93f48.png)



### レイアウト

- 最後にレイアウトを整えていきましょう
  - `Flexbox`を使って横並び・間隔などを調整できます

- `index.html`divタグに`div-common`クラスを追記しましょう(3箇所)

```index.html
<div class="div-common">
```

- 2つのセクションにcssで`diplay: flex`を適用します

```main.css
.div-common {
  display: flex; /* これ */
}
```

💡 `display: flex;`に関連する CSS は「レイアウトを制御したい要素の外側の要素(親要素)」に記述するのがポイント

この時点でブラウザの表示を確認すると・・・

![スクリーンショット 2025-01-07 7.27.34.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/7ba24a1c-8b9d-c79c-902d-cc682aa5a5bf.png)


- `Flexbox`は子要素(↔︎親要素)を横並びにするのがデフォルトなので縦に並べるようにCSSに`flex-direction`を追記します
- 要素を中央揃えにするため`align-items`を追記します

```main.css
.div-common {
  display: flex;
  flex-direction: column; /* 縦方向に配置 */
  align-items: center; /* 子要素を水平中央揃え */
}
```

![スクリーンショット 2025-01-07 7.28.25.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/13d140bf-4c89-b681-8231-af5cd9af9551.png)


- 細かいところを修正していきます
  - h2のタイトルもh1と同じ幅・左寄せにする
  - 説明部分(pタグ)を左寄せにする

####  h1, h2の幅をbodyいっぱいに広げる

```main.css
h1 {
  background: #a26b01;
  color: white;
  text-align: center;
  padding: 20px 0px;
  width: 100%; /* 追加 */
}

h2 {
  background-color: #dfcba6;
  text-align: left;
  padding: 20px 0px;
  width: 100%; /* 追加 */
}
```

#### 説明欄を左寄せにする

- descriptionクラスを作って左にスペースを空けつつ、左寄せにしましょう
- また、リストの項目間にスペースを空けます

```main.css
.description {
  align-self: flex-start; /* リストのみ左寄せ */
  padding-left: 20px; /* リストアイテムの左余白 */
}
```

- このdescriptionクラスをpタグにも追加しましょう

```index.html

<p class="description"> <!-- クラス追加 -->
    福岡市内の中高生を対象に、学校・学年の垣根を超えて起業とプログラミングを学ぶプログラム<br />「YOUTH STARTUP CLUB FUKUOKA」を開催します。<br />新しいことにチャレンジしたいみなさんのご応募をお待ちしております！
</p>

<!-- 省略 -->

<p class="description"> <!-- クラス追加 -->
    8週間集中で、プログラミングと起業家精神育成ワークショップの2つの思考を同時に学びます。自分のアイデアをウェブアプリケーションという形にする体験を通じて、未来の起業家の卵を育成する講座です。
</p>

```


#### 全体を中央に寄せる

```main.css
html {
  display: flex; /* フレックスボックスを使用 */
  flex-direction: column; /* 縦方向に配置 */
  align-items: center; /* 垂直方向の中央揃え */
}
```

#### 微調整

- 背景色を追記しましょう

```main.css
html {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  background-color: #f0f0ee; /* 追加 */
}

.div-common {
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
  background-color: white; /* 追加 */
}
```

- 余分なスペースを削除

```main.css
body {
  width: 960px;
  margin: 0; /* body自体の余白を削除 */
  padding: 0; /* bodyのパディングを削除 */
}

h1 {
  background: #a26b01;
  color: white;
  text-align: center;
  padding: 20px 0px;
  width: 100%;
  margin-top: 0; /* 上のデフォルトマージンをリセット */
}
```

👑 完成 👑

![スクリーンショット 2025-01-07 7.30.19.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/e73413bf-694e-5c7d-de46-b8e5c6d0e344.png)


### 課題 ✏️

- 紹介ページを作成しよう
  - 学校・部活・趣味なんでもok
- この講義でやってないこともどんどんチャレンジ！
  - ほかのページに遷移させる
  - 動画を流すなど

#### ✅ これだけは入れよう

- 名前のセクション
- 趣味のセクション
- 画像

あとはなんでも追加してok👍


#### わからないとき

- 「タグ名 やりたいこと」でググろう！
- 「css やりたいこと」でググろう！
- ChatGPTに聞いてみよう！


#### クラスメート・チューターの皆さんに聞いてみよう🧑‍🏫

- それでもわからない・・・というときはチューターの皆さんに聞いてみよう

💡 質問する時は以下のことを整理した上で聞くとチューターさんも答えやすいです(整理している間に自己解決することも・・・!)
  - 何をやりたいのか
  - 何がうまくいっていないのか
  - どんなふうに調べてみたかググったのか
  - (どんなエラーが出ているか)

### 質問のコツ

- 詰まったらSlackで質問しよう！
- なんとなく質問しても回答しづらいので、以下を意識すると良いです

##### 1. 問題の背景を簡潔に説明する

- 何をしたいのか、どんな状況で問題が発生したのかを明確にしましょう
- 例:
良い例: 「動画を画面に表示したいのですが、特定の条件でエラーが出ています。」
悪い例: 「エラーが出ました。助けてください。」

##### 2. エラーメッセージや具体的な状況を記載する

- 発生したエラーメッセージを全文コピーして記載します
  - 検証ツールのConsoleタブに表示されています
- スクリーンショットよりもテキスト形式で共有した方が便利です

##### 3. 該当するコードを共有する

- 必要最低限のコードを記載します（関係ない部分は省略）
- フォーマットが崩れないように、コードブロック（````）を使用してください


##### 4. 自分で試したことや調査内容を共有する

- 試した方法や参考にした資料、なぜうまくいかなかったかを簡単に説明します
- 例:
「このサイトのこのやり方を確認しましたが、期待通りに動きませんでした。」(URLもテンプルする)
「Stack Overflowのこの回答を試しましたが、別のエラーが出ました。」(エラー文と一緒に)

##### 5. 聞きたい内容を明確にする

- 「これについてアドバイスが欲しいです」「どこを修正すべきか教えてください」など、相手に求めていることを明確にします


#### 提出手順

1. [Google Drive](https://drive.google.com/drive/folders/1SH3PwHmRGOtSF5RUNNAKEYmb1x0BJ4BT)の自分の名前のフォルダにアップロード
1. URLをSlackで共有

##### Google Driveにアップロード

- 自分の名前のフォルダをダブルクリックすると課題フォルダ一覧が表示される

![スクリーンショット 2025-01-24 7.13.09.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/0066486c-735e-2b64-84b7-eaa149cca23c.png)

- 今回はDay01課題フォルダにアップロードします
 
![スクリーンショット 2025-01-24 7.15.10.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/1d6de67f-06b3-8d00-4674-edc588f83117.png)

- 新規ボタン


![スクリーンショット 2025-01-24 7.18.01.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/82ccd406-870e-8523-8b46-3c8b24271980.png)


- フォルダをアップロードを選択する
 
- ![スクリーンショット 2025-01-24 7.16.55.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/67453965-70c3-5c4b-83a9-30bc62d31e58.png)

##### URLをSlackで共有

1.　アップロードしたいフォルダの右端のアイコンをクリック

![スクリーンショット 2025-01-18 11.02.23.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/29deaaf3-26c8-da52-fe9a-e599ff62f80b.png)

2.　他の人がフォルダにアクセスできるか確認

![スクリーンショット 2025-01-18 11.03.02.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/f9f820f6-568c-9553-56e7-e343030c6f21.png)

- リンクを知っている全員になっていればok
- リンクをコピーをクリック。URLがコピーされているのでそれをSlackの[チャンネル名]に貼る
![スクリーンショット 2025-01-18 11.03.45.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/586072/518c91e9-3387-1247-84b4-43747aeded44.png)

### 課題発表

- グループごとに1人3分程度で発表
  - 画面共有して成果物を見せる
  - よくできた・工夫したところ
  - 苦戦した・できなかったところ

- 発表ごとにチャット欄に1人1回以上コメントしましょう
    - 褒める！
    - リアクションする
    - 質問する などなど
- 各班1人or2人が全体で発表してもらいます
