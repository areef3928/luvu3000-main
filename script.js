// ดักจับเหตุการณ์เมื่อคลิปแรกเล่นจบ
document.getElementById('video1').addEventListener('ended', function () {
  document.getElementById('video1-box').style.display = 'none';
  document.getElementById('video2-box').style.display = 'block';
  
  // เล่นวิดีโอที่ 2 และเข้าสู่โหมดเต็มจอ
  const video2 = document.getElementById('video2');
  video2.play();
  if (video2.requestFullscreen) {
      video2.requestFullscreen(); // ทำให้เล่นเต็มจอ
  } else if (video2.webkitRequestFullscreen) {
      video2.webkitRequestFullscreen(); // สำหรับ Safari
  } else if (video2.msRequestFullscreen) {
      video2.msRequestFullscreen(); // สำหรับ IE/Edge
  }
});

// เมื่อคลิปที่สองเล่นจบ
document.getElementById('video2').addEventListener('ended', function () {
  document.getElementById('video2-box').style.display = 'none';

  // ออกจากโหมดเต็มจอหลังจากเล่นจบ
  if (document.fullscreenElement) {
      document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen(); // Safari
  } else if (document.msFullscreenElement) {
      document.msExitFullscreen(); // IE/Edge
  }

  // แสดงข้อความแรกทันที
  document.getElementById('message-box').style.display = 'block';

  // แสดงข้อความที่สองหลังจาก 5 วินาที
  setTimeout(function () {
      document.getElementById('message-box2').style.display = 'block';
  }, 5000);
});

// ฟังก์ชันขยายวิดีโอแบบเต็มจอเมื่อคลิก
function expandVideo(videoId) {
  const videoElement = document.getElementById(videoId);
  videoElement.play();

  if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
  } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
  } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
  }
}

// ฟังก์ชันปิด Modal
function closeModal() {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modal-video');
  modal.style.display = 'none';
  modalVideo.pause();
  modalVideo.src = '';
}
