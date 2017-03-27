var resultButton = document.getElementById("result");
var resultTest = 0;

resultButton.onclick = function () {
      if (document.getElementsByName("question1")[0].checked) { resultTest += 20; }
      if (document.getElementsByName("question2")[2].checked) { resultTest += 20; }
      if (document.getElementsByName("question3")[3].checked) { resultTest += 20; }
      if (document.getElementsByName("question4")[1].checked) { resultTest += 10; }
      if (document.getElementsByName("question4")[2].checked) { resultTest += 10; }
      if (document.getElementsByName("question5")[0].checked) { resultTest += 10; }
      if (document.getElementsByName("question5")[1].checked) { resultTest += 10; }
      var messageElem = createMessage(resultTest);
      document.forms[0].appendChild(messageElem);
}

function createMessage(resultTest) {
      var container = document.createElement("div");
      container.innerHTML = "<div class='message'> \
         <h2>Результат теста:</h2> \
         <div class='content'>" + resultTest / 20 + " из 5 баллов \ <br />" + resultTest +
            " % правильных ответов! </div> \
         <input class='ok' type='submit' value='OK'> \
         </div>";
      return container.firstChild;
}




