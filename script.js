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

  // ทำให้ปุ่มในข้อความของบอทคลิกได้หลังจาก DOM โหลด
  setTimeout(() => {
    const buttons = chatlog.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        simulateMessage(btn.textContent);
      });
    });
  }, 100);
}

function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("แนะนำตัว")) {
    return `สวัสดีครับ ผมชื่อศักดา เป็นนักพัฒนาเว็บสาย Frontend ที่ชื่นชอบการสร้างเครื่องมือช่วยเหลือผู้คนครับ 👨‍💻<br><br>
    สนใจอยากทราบอะไรเพิ่มเติมเกี่ยวกับผมไหม?<br>
    <button>ประสบการณ์</button>
    <button>ทักษะ</button>
    <button>สถานศึกษา</button>`;
  }

  if (msg.includes("ประสบการณ์")) {
    return "ผมเคยสร้างเว็บทำอาหาร, เว็บช่วยแนะนำสูตร, บอทแชทด้วย HTML/CSS/JS และกำลังเรียนรู้ GitHub กับ AI chatbot ครับ";
  }

  if (msg.includes("ทักษะ")) {
    return "HTML, CSS, JavaScript, GitHub, พื้นฐานการสร้างบอท และเริ่มศึกษา API กับ AI ครับ";
  }

  if (msg.includes("สถานศึกษา")) {
    return "ผมเรียนรู้ด้วยตัวเองจากแหล่งออนไลน์ต่าง ๆ เช่น YouTube, แพลตฟอร์มสอนเขียนโค้ด และกำลังต่อยอดความรู้ผ่านโปรเจกต์จริง";
  }

  if (msg.includes("ชื่อ") || msg.includes("คุณคือใคร")) {
    return "ผมชื่อศักดา เป็นบอทแนะนำตัวที่เขียนขึ้นด้วย HTML, CSS, JavaScript ครับ 😊";
  }

  return "ขอโทษครับ ผมยังไม่เข้าใจคำนี้ ลองถามว่า 'แนะนำตัว' หรือคลิกปุ่มดูได้นะครับ";
}

document.getElementById("introBtn").addEventListener("click", function() {
  const chatlog = document.getElementById("chatlog");
  const botReply = getBotReply("แนะนำตัว");
  chatlog.innerHTML += `<div><strong>คุณ:</strong> แนะนำตัว</div>`;
  chatlog.innerHTML += `<div><strong>บอท:</strong> ${botReply}</div>`;
  chatlog.scrollTop = chatlog.scrollHeight;

  setTimeout(() => {
    const buttons = chatlog.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        simulateMessage(btn.textContent);
      });
    });
  }, 100);
});

function simulateMessage(text) {
  const input = document.getElementById("userInput");
  input.value = text;
  sendMessage();
}
