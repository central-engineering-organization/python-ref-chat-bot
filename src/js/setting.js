/**
 * Saves whether or not the webchat is currently open
 */
function saveWebchatOpenState() {
  new CookieUtil().set(
      "webchatOpened",
      ($("#webchatContainer")[0].hidden === false).toString(),
      365
  );
}

/**
 * Loads settings in the cookie to the settings form
 */
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
  $("input[name='webchatRememberOpenedCB']")[0].checked = rememberOpened === "true";
  if (rememberOpened === "true" && new CookieUtil().get("webchatOpened") === "true") {
    webchatOpen();
  }
}

/**
 * Generates dictionary of styles for the webchat
 * This is needed when rendering webchat at the startup
 * @return {{}}
 */
function generateStyleDictionary() {
  let styles = {};

  let userName = new CookieUtil().get("webchatUserName");
  if (userName) {
    styles["userAvatarInitials"] = generateUserInitial(userName);
  }

  let userColor = new CookieUtil().get("webchatUserColor");
  if (userColor) {
    styles["bubbleFromUserBackground"] = userColor;
  }

  return styles;
}

/**
 * Applies settings regardless of webchat's API styling
 */
function applySetting() {
  let fontSize = new CookieUtil().get("webchatFontSize");
  if (fontSize) {
    $("#webchat > * ").css("font-size", parseInt(fontSize));
  }
}

/**
 * Generates initials of a user
 * 0 word: return empty string
 * 1 word: 2 letters from the name
 * more word: 2 starting letters from the first and last word of the name
 * @param {string} name
 */
function generateUserInitial(name) {
  let userInitial;
  let userNameSplit = name.split(' ');
  if (userNameSplit.length === 0) {
    userInitial = "";
  } else if (userNameSplit.length === 1) {
    userInitial = userNameSplit[0].substr(0, 2);
  } else {
    let last = userNameSplit.length - 1;
    userInitial = userNameSplit[0][0] + userNameSplit[last][0];
  }
  return userInitial;
}

/**
 * Saves settings from the setting's dialog
 */
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
  applySetting();

  if (confirm("새로고침 하시겠습니까?")) {
    window.location.reload();
  }
}
