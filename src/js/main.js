
function init() {
  window.onbeforeunload = saveWebchatOpenState;
  $("#webchatBtn")[0].draggable = false;
  $("#webchatSettingBtn")[0].draggable = false;

  webChatInit();
  loadSetting();
  loadWebchatOpenState();
}

function saveWebchatOpenState() {
  new CookieUtil().set(
      "webchatOpened",
      ($("#webchatContainer")[0].hidden === false).toString(),
      365
  );
}

function loadWebchatOpenState() {
  let rememberOpened = new CookieUtil().get("webchatRememberOpened");
  if (rememberOpened === "true" &&
      new CookieUtil().get("webchatOpened") === "true") {
    webchatOpen();
  }
}

function saveSetting() {
  new CookieUtil().set(
      "webchatUserName",
      $("input[name='webchatUserNameTB']").val(),
      365
  );
  new CookieUtil().set(
      "webchatUserColor",
      $("input[name='webchatUserColorCC']").val(),
      365
  );
  new CookieUtil().set(
      "webchatFontSize",
      $("input[name='webchatFontSizeNB']").val(),
      365
  );
  new CookieUtil().set(
      "webchatRememberOpened",
      $("input[name='webchatRememberOpenedCB']").is(":checked"),
      365
  );
}

function loadSetting() {
  let userName = new CookieUtil().get("webchatUserName");
  $("input[name='webchatUserNameTB']").val(
      (userName !== "") ? (userName) : ("ME")
  );

  let userColor = new CookieUtil().get("webchatUserColor");
  $("input[name='webchatUserColorCC']").val(
      (userColor !== "") ? (userColor) : ("#3570A3")
  );

  let fontSize = new CookieUtil().get("webchatFontSize");
  $("input[name='webchatFontSizeNB']").val(
      (fontSize !== "") ? (fontSize) : ("12")
  );

  let rememberOpened = new CookieUtil().get("webchatRememberOpened");
  $("input[name='webchatRememberOpenedCB']")[0].checked =
      rememberOpened === "true";
}

function webchatOpen() {
  $("#webchatContainer")[0].hidden = false;
  $("#webchatBtnContainer")[0].hidden = true;
}

function webchatClose() {
  $("#webchatContainer")[0].hidden = true;
  $("#webchatBtnContainer")[0].hidden = false;
}

function webchatSettingOpen() {
  $("#webchatSettingContainer")[0].hidden = false;
  $("#webchatSettingBtn")[0].onclick = webchatSettingClose;
}

function webchatSettingClose() {
  $("#webchatSettingContainer")[0].hidden = true;
  $("#webchatSettingBtn")[0].onclick = webchatSettingOpen;
}
