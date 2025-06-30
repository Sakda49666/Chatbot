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

  if (msg.includes("สวัสดี")) return "สวัสดีครับ ยินดีที่ได้รู้จัก! 😊";
  if (msg.includes("ชื่อ") || msg.includes("คุณคือใคร")) {
    return "ผมชื่อศักดา เป็นนักพัฒนาเว็บที่ชอบสร้างเครื่องมือช่วยเหลือผู้คน เช่น แอพทำอาหารและบอทแชทครับ";
  }
  if (msg.includes("ทักษะ") || msg.includes("เก่งอะไร")) {
    return "ผมมีความสามารถด้าน HTML, CSS, JavaScript เริ่มใช้งาน GitHub และสนใจด้าน AI ด้วยครับ";
  }
  if (msg.includes("แนะนำตัว")) {
    return "สวัสดีครับ ผมชื่อศักดา เป็นคนเรียนรู้ไว มีความคิดสร้างสรรค์ และชอบพัฒนาโปรเจกต์ที่มีประโยชน์ เช่น บอทแชทและเว็บช่วยทำอาหารครับ";
  }

  return "ขอโทษครับ ยังไม่เข้าใจคำนี้ ลองถามอย่างอื่นดูได้นะ~";
}
}
