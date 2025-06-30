function sendMessage() {
  const input = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");
  const userText = input.value.trim();

  if (userText === "") return;

  const botReply = getBotReply(userText);

  chatlog.innerHTML += `<div><strong>คุณ:</strong> ${userText}</div>`;
  chatlog.innerHTML += `<div><strong>บอท:</strong> ${botReply}</div>`;
  input.value = "";
  chatlog.scrollTop = chatlog.scrollHeight;
}

function getBotReply(message) {
  const msg = message.toLowerCase();
  if (msg.includes("สวัสดี")) return "สวัสดีค่ะ! 😊";
  if (msg.includes("ชื่อ")) return "ฉันชื่อบอทผู้ช่วยของคุณเอง!";
  return "ฉันยังเรียนรู้ไม่หมด แต่พร้อมคุยกับคุณเสมอนะ!";
}
