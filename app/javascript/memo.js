function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    // e・・・イベントオブジェクト / イベント発生時の情報を持ったオブジェクト
    // preventDefaultメソッドで、「投稿ボタンをクリックした」という情報を持った現象を無効化する
    e.preventDefault();
    // id:"form"の要素を、変数formに格納
    const form = document.getElementById("form");
    // 変数formの要素の値を取得し、変数formDataに格納
    const formData = new FormData(form);
    // JavaScriptからサーバーサイドにリクエストを送信するのに必要な
    // XHMLttpRequestオブジェクトを生成
    const XHR = new XMLHttpRequest();
    // openメソッドで、リクエストの内容を指定
    XHR.open("POST", "/posts", true);
    // レスポンスのデータフォーマットをJSONに指定
    XHR.responseType = "json";
    // sendメソッドで、変数formDataの値のリクエストをコントローラーへ送信する
    XHR.send(formData);
  });
};

window.addEventListener('load', post);