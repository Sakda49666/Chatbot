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

  if (msg.includes("แนะนำตัว")) {
    return `สวัสดีครับ ผมชื่อศักดา เป็นนักพัฒนาเว็บสาย Frontend ที่หลงให้งานสร้างเว็บแอปและเครื่องมือที่ช่วยเหลือผู้คนครับ 👨‍💻<br><br>
    คุณสนใจอยากทราบอะไรเกี่ยวกับผมเพิ่มเติมบ้าง?<br>
    <button onclick="simulateMessage('ประสบการณ์')">ประสบการณ์</button>
    <button onclick="simulateMessage('ทักษะ')">ทักษะ</button>
    <button onclick="simulateMessage('สถานศึกษา')">สถานศึกษา</button>`;
  }

  if (msg.includes("ประสบการณ์")) {
    return "ผมเคยทำโปรเจกต์ส่วนตัว เช่น เว็บทำอาหาร, เว็บแนะนำสูตร, บอทแชทด้วย HTML/CSS/JS และกำลังศึกษาการใช้ GitHub กับ AI chatbot อยู่ครับ";
  }

  if (msg.includes("ทักษะ")) {
    return "HTML, CSS, JavaScript, GitHub, การสร้าง chatbot เบื้องต้น รวมถึงเริ่มเรียนรู้เรื่องการเชื่อม API และฝัง AI";
  }

  if (msg.includes("สถานศึกษา")) {
    return "ผมเรียนรู้ด้วยตัวเองจากแหล่งออนไลน์ต่าง ๆ และมีความตั้งใจจะพัฒนาตัวเองอย่างต่อเนื่อง เพื่อก้าวเข้าสู่งานด้านเทคโนโลยีครับ";
  }

  return "ขออภัยครับ ยังไม่เข้าใจคำนี้ ลองถามว่า 'แนะนำตัว' หรือเลือกหัวข้อจากปุ่มได้เลยครับ 😊";
}
// ทำให้ปุ่มแนะนำตัวทำงาน
document.getElementById("introBtn").addEventListener("click", function() {
  const chatlog = document.getElementById("chatlog");
  const botReply = getBotReply("แนะนำตัว");
  chatlog.innerHTML += `<div><strong>คุณ:</strong> แนะนำตัว</div>`;
  chatlog.innerHTML += `<div><strong>บอท:</strong> ${botReply}</div>`;
  chatlog.scrollTop = chatlog.scrollHeight;
});
}

