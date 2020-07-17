
function init() {
  $("#webchatBtn")[0].draggable = false;

  webChatInit();
}

function webchatOpen() {
  $("#webchatContainer")[0].hidden = false;
  $("#webchatBtnContainer")[0].hidden = true;
}

function webchatClose() {
  $("#webchatContainer")[0].hidden = true;
  $("#webchatBtnContainer")[0].hidden = false;
}
