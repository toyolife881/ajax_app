const buildHTML = (XHR) => {
  // レスポンスの中から、投稿されたメモの情報(post)を抽出し、変数itemに格納
  const item = XHR.response.post;
  const html = `
   <div class="post">
    <div class="post-date">
    投稿日時:${item.created_at}
    </div>
    <div class="post-content">
     ${item.content}
    </div>
   </div>`;
  //  関数buildHTMLの返り値に変数htmlを指定
   return html;
};





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
    // XHR.open("POST", "/post", true);
    // レスポンスのデータフォーマットをJSONに指定
    XHR.responseType = "json";
    // sendメソッドで、変数formDataの値のリクエストをコントローラーへ送信する
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        // 以降の処理を行わないようにするため、return null;によってJavaScriptの処理から抜け出す
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      // レスポンスの中から、投稿されたメモの情報(post)を抽出し、変数itemに格納
      // const item = XHR.response.post;
      // const html = `
      //  <div class="post">
      //   <div class="post-date">
      //   投稿日時:${item.created_at}
      //   </div>
      //   <div class="post-content">
      //    ${item.content}
      //   </div>
      //  </div>`;
      // 変数listに格納された要素の直後に、生成したHTMLを挿入
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      // formTextのvalue属性に空の文字列を指定し、フォームの中身をリセットする
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);