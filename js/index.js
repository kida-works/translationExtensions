window.onload = () => {
  const body = document.querySelector("body");
  window.addEventListener("mouseup", () => {
    const text = window.getSelection().toString();
    // const selection = window.getSelection();
    // const dom = selection.getRangeAt(0).cloneContents();
    // console.log(dom)

    // API通信
    async function postData(text, data = {}) {
      const apiUrl = `https://api-free.deepl.com/v2/translate?auth_key=bf60a7c4-0d0f-1d71-da7a-ffcad5fb8b6c:fx&text=${text}&target_lang=JA`;
      // 既定のオプションには * が付いています
      const response = await fetch(apiUrl, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          Host: "api-free.deepl.com",
          "User-Agent": "YourApp",
          Accept: "*/*",
          "Content-Length": [length],
          "Content-Type": "application/x-www-form-urlencoded",
        },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致させる必要があります
      });
      return response.json(); // JSON のレスポンスをネイティブの JavaScript オブジェクトに解釈
    }

    // document.body.addEventListener("keypress", (event) => {
    //   if (event.shiftKey == true) {
    //     alert("Ctrl+Vが押されました");
    //   }
    // });
    document.body.addEventListener("keydown", (event) => {
      if (event.key == "v" && event.shiftKey == true) {
        console.log("Ctrl+Vが押されました");
      }
    });

    if (text.length > 0 && document.getElementById("id") !== null) {
      // let newDiv = document.createElement("div");
      // newDiv.id = "translationElement";
      // const newContent = document.createTextNode(text);
      // newDiv.appendChild(newContent);
      // let currentDiv = document.getElementById("translationElement");
      // document.body.insertBefore(newDiv, currentDiv);
      console.log(document.getElementById("id") == null);

      // API通信
      // postData(text, { answer: 42 })
      //   .then((data) => {
      //     const textData = data.translations[0].text; // `data.json()` の呼び出しで解釈された JSON データ
      //     let newDiv = document.createElement("div");
      //     newDiv.id = "translationElement";
      //     const newContent = document.createTextNode(textData);
      //     newDiv.appendChild(newContent);
      //     const currentDiv = document.getElementById("translationElement");
      //     document.body.insertBefore(newDiv, currentDiv);

      //   })
      //   .then(() => {
      //     currentDiv = document.getElementById("translationElement");
      //     currentDiv.onclick = () => {
      //       currentDiv.style.display = "none";
      //     };
      //   });
    } else if (text.length > 0 && document.getElementById("id") === null) {
      console.log("test");
    }
  });
};
