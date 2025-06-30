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

  if (msg.includes("สวัสดี")) {
    return "สวัสดีครับ ยินดีที่ได้รู้จัก! 😊";
  }
  if (msg.includes("ชื่อ") || msg.includes("คุณคือใคร")) {
    return "ผมชื่อศักดา เป็นนักพัฒนาเว็บสาย Frontend ที่ชื่นชอบการสร้างเครื่องมือที่ช่วยเหลือผู้คนครับ";
  }
  if (msg.includes("ทักษะ") || msg.includes("เก่งอะไร")) {
    return "ผมมีความสามารถด้าน HTML, CSS, JavaScript และกำลังเรียนรู้ GitHub รวมถึงสนใจเทคโนโลยี AI อย่างมากครับ";
  }
  if (msg.includes("แนะนำตัว")) {
    return "สวัสดีครับ ผมชื่อศักดา เป็นคนเรียนรู้ไว กระตือรือร้น และรักการสร้างเว็บแอปที่มีประโยชน์ เช่น บอทแชท เว็บไซต์ทำอาหาร และฟีเจอร์ AI ครับ\nดูผลงานเพิ่มเติมได้ที่: https://github.com/sakda49666";
  }

  return "ขอโทษครับ ผมยังไม่เข้าใจคำนี้ ลองพิมพ์ว่า 'แนะนำตัว', 'ชื่อ', หรือ 'ทักษะ' ได้เลยครับ!";
}
