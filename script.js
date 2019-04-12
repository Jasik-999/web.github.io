function mes(){
	var form = document.getElementsByClassName('mesToMe');
	count = 0;

	for (i=0; i<form.length; i++){
		if (form[i].value == "" || form[i].value == " "){
			count++;
		} else count--;
		if (count < 0) count = 0;
	}

	if (count >= 1) {alert("Чтобы отправить сообщение, заполните все поля");}
	else alert("Сообщение отправлено")
}

