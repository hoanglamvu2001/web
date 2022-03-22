function btSigin(){
	//click vào đăng nhập sẽ ẩn div.home và hiện div.main
	document.getElementById("cover").style.display = 'none';
	document.getElementById("sigin").style.display = 'block';
}
function bt_SiginIndex(){
	var user = document.getElementById('floatingEmail').value;
	var pass = document.getElementById('floatingPassword').value;
//	alert(user);
	if(user==0&&pass==0){
		alert("Vui lòng nhập đầy đủ")
	}else{
		window.location.href="main/Main.html";
	}
}