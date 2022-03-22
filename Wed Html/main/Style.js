function tuvan(){
	alert("Thông tin đã được gửi đến Studio");
}
// lấy phần Modal	
var modal = document.getElementById('myModal');

// Lấy phần button mở Modal
var btn1 = document.getElementById('myBtn1');
var btn2 = document.getElementById('myBtn2');
var btn3 = document.getElementById('myBtn3');
var btn4 = document.getElementById('myBtn4');
var btn5 = document.getElementById('myBtn5');
var btn6 = document.getElementById('myBtn6');
var btn7 = document.getElementById('myBtn7');

// Lấy phần button đóng Modal
var btn_close = document.getElementsByClassName("close")[0];

// Khi button được click thi mở Modal
btn1.onclick = function() {
		modal.style.display = "block";
	}
btn2.onclick = function() {
		modal.style.display = "block";
	}
btn3.onclick = function() {
		modal.style.display = "block";
	}
btn4.onclick = function() {
		modal.style.display = "block";
	}
btn5.onclick = function() {
		modal.style.display = "block";
	}
btn6.onclick = function() {
		modal.style.display = "block";
	}
btn7.onclick = function() {
		modal.style.display = "block";
	}

// Khi span được click thì đóng Modal
	
btn_close.onclick = function() {
		modal.style.display = "none";
	}

// Khi click ngoài Modal thì đóng Modal
	
window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}