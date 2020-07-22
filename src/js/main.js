/**
 * Runs at the document load
 */
function init() {
  window.onbeforeunload = saveWebchatOpenState;
  $("#webchatBtn")[0].draggable = false;
  $("#webchatSettingBtn")[0].draggable = false;

  loadSetting();
  webChatInit(generateStyleDictionary());
  applySetting();
}

/**
 * Opens webchat dialog
 */
function webchatOpen() {
  $("#webchatContainer")[0].hidden = false;
  $("#webchatBtnContainer")[0].hidden = true;
}

/**
 * Closes webchat dialog
 */
function webchatClose() {
  $("#webchatContainer")[0].hidden = true;
  $("#webchatBtnContainer")[0].hidden = false;
}

/**
 * Opens setting's dialog
 */
function webchatSettingOpen() {
  $("#webchatSettingContainer")[0].hidden = false;
  $("#webchatSettingBtn")[0].onclick = webchatSettingClose;
}

/**
 * Closes setting's dialog
 */
function webchatSettingClose() {
  $("#webchatSettingContainer")[0].hidden = true;
  $("#webchatSettingBtn")[0].onclick = webchatSettingOpen;
}
