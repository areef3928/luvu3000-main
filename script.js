// ดักจับเหตุการณ์เมื่อคลิปแรกเล่นจบ
document.getElementById('video1').addEventListener('ended', function() {
    document.getElementById('video1-box').style.display = 'none';
    document.getElementById('video2-box').style.display = 'block';
    document.getElementById('video2').play();
  });
  
  // ฟังก์ชันขยายวิดีโอเมื่อคลิก
  function expandVideo(videoId) {
    const videoElement = document.getElementById(videoId);
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modal-video');
    
    modal.style.display = 'flex'; // แสดง modal
    modalVideo.src = videoElement.src; // ตั้งค่า src ของวิดีโอใน modal
    modalVideo.play();
  }
  
  // ฟังก์ชันปิด modal
  function closeModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modal-video');
    
    modal.style.display = 'none'; // ซ่อน modal
    modalVideo.pause(); // หยุดวิดีโอ
    modalVideo.src = ''; // ล้าง src
  }
  
  // เมื่อคลิปที่ 2 เล่นจบ
  document.getElementById('video2').addEventListener('ended', function() {
    // ซ่อนคลิปที่ 2
    document.getElementById('video2-box').style.display = 'none';
    
    // แสดงข้อความที่ 1
    document.getElementById('message-box').style.display = 'block';
    
    // แสดงข้อความที่ 2 หลังจาก 5 วินาที
    setTimeout(function() {
      document.getElementById('message-box2').style.display = 'block';
    }, 5000); // หน่วงเวลา 5 วินาที (5000 มิลลิวินาที)
  });
  