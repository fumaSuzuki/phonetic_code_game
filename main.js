document.getElementById("form").onsubmit = function () {//id名"form"が送信されたら、関数を生成。
    event.preventDefault();//スタートしてもページが遷移しないようにする。

    /* ------------------------------------------ここから問題を生成する処理-------------------------------------------------- */
    let phonetic = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//フォネティックコードの配列を定義。
    let character = document.getElementById("form").moji.value;//id名"form"のnameが"moji"の値を取得し、"character"と名付ける。
    if (character != 0) {//何も入力せず「スタート！」を押すと、0が返される(なぜかは分からない)ので、0以外の時に処理を実行するようにする。39行目で0が返された時の処理を指定。
        let question = new Array(character);//出題内容を保存する配列をcharacterの数だけ入るように定義。"question"と名付ける。
        for (let count = 0; count < character; count = count + 1) {//characterで指定された数だけ以下の処理を繰り返す。
            let randnum = Math.floor(Math.random() * 26);//0以上26未満のランダムの整数を生成し(アルファベットは26文字)、生成された整数を"randnum"と名付ける。
            question[count] = randnum;//生成された整数を、配列questionに格納する。そのとき、配列で順番通り格納されるようにするためにcountを指定する。
            window.alert(phonetic[randnum]);//randnumで生成された0~25のランダムの数字で、配列phoneticの中の要素をランダムに表示する。
        }
        console.log("出題されたフォネティックコードの配列番号は" + question);//出題されたフォネティックコードの配列番号を確認する。

        /* ------------------------------------------ここから入力を受け付ける処理-------------------------------------------------- */
        let answer = new Array(character);//ユーザーの回答を保存する配列をcharacterの数だけ入るように定義。"answer"と名付ける。
        let count = 0;//以下の繰り返し処理の回数を指定する変数を定義。
        while (count < character) {//特に理由はないが、今度はwhile文を使ってcharacterで指定された数だけ以下の処理を繰り返す。
            let nyuryoku = prompt(count + 1 + "文字目のフォネティックコードをカタカナで入力してください。");//X文字目のフォネティックコードを入力させる。
            answer[count] = nyuryoku;//入力された内容を配列answerに格納する。そのとき、配列で順番通り格納されるようにするためにcountを指定する。
            count++;//繰り返し処理の回数を一つ足す。
        }

        /* ------------------------------------------ここから入力を採点する処理-------------------------------------------------- */
        let order = ["アルファ", "ブラヴォー", "チャーリー", "デルタ", "エコー", "フォックストロット", "ゴルフ", "ホテル", "インディア", "ジュリエット", "キロ", "リマ", "マイク",
            "ノヴェンバー", "オスカー", "パパ", "ケベック", "ロメオ", "シエラ", "タンゴ", "ユニフォーム", "ヴィクター", "ウィスキー", "エックスレイ", "ヤンキー", "ズル"]; //正しいフォネティックコードの配列を定義。
        let result = new Array(character);//ユーザーに入力された情報を配列番号に変換して格納するための配列をcharacterの数だけ入るように定義。"result"と名付ける。
        for (let count = 0; count < character; count = count + 1) {//characterで指定された数だけ以下の処理を繰り返す。
            result[count] = order.indexOf(answer[count]);//配列answerのcount番目は、配列orderにおいて何番目にあるのかを検索し、その値をresultのcount番目に格納する。検索にヒットしないと-1を返すようになっている。
        }
        console.log("入力されたフォネティックコードの配列番号は" + result);//入力されたフォネティックコードの配列番号を確認する。
        if (result.toString() == question.toString()) {//配列resultの要素と配列questionの要素が一致していたら以下の処理をする。ただし配列はオブジェクトなのでそのまま比較はできない。toStringメソッドを使って配列の文字列表現を返すことで、比較を可能にしている。
            window.alert("正解です");//「正解です」と表示させる。
        } else {//配列resultの要素と配列questionの要素が一致しない場合は以下の処理をする。
            window.alert("不正解です");//不正解です。
        }

    } else {//ユーザーが何も入力せずスタートを押した場合は以下の処理をする。
        window.alert("任意の文字数を指定してください。");//入力を促す。
    }
}