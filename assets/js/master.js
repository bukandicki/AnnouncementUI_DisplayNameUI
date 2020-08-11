$(document).ready(function(){

	function hi(cartoon_character) {
		if (cartoon_character.name == 'Mickey') { // merubah atribute name menjadi string supaya dapat terbaca true pada saat pemanggilan fungsi
	 		return 'Hey Mickey'
	 	} else {
	 		return 'Hey Mouse'
	 	}
	}
	$("#fixed-soal-no4").html(hi({ name: 'Mickey' }));




	function displayName(fname,lname,resultname){ // membuat parameter supaya dapat di reuse

		if (fname != '' || lname != '') { // kondisi ketika input tidak kosong, maka kode akan menampilkan salam berdasarkan nama yang di input
			$("#"+resultname).removeClass("d-none");
			$("#"+resultname).html("Salam kenal kak <b class='text-primary'>" + fname + " " + lname);
		}else { // kondisi ketika input kosong, maka akan di peringati untuk melengkapi form
			$("#"+resultname).removeClass("d-none");
			$("#"+resultname).html("<b class='text-danger'>Harap lengkapi form nama anda</b>");
		}

	}

	function displayNameWithSwal(fnames,lnames,resultname2,fnamesfield){

		if (fnames != '' || lnames != '') { // kondisi ketika input tidak kosong, maka kode akan menampilkan SweetAlert dan salam berdasarkan nama yang di input
			$("#"+resultname2).removeClass("d-none");
			$("#"+resultname2).html("Salam kenal kak <b class='text-primary'>" + fnames + " " + lnames);

			swal({
			  title: "Salam kenal kak " + fnames + " " + lnames, // pemanggilan nama berdasarkan yang di input
			  text: "Semoga harimu menyenangkan :)",
			  icon: "success",
			  button: "Terimakasih",
			});
		}else { // kondisi ketika input kosong, maka akan di peringati untuk melengkapi form
			swal({
			  title: "Yahh",
			  text: "Saya tidak mengenal anda",
			  icon: "error",
			  button: "Isi dulu nama",
			}).then(function(){ // ketika di tekan tombol "Isi nama dulu" maka akan mengeksekusi kode berikut
				$("#"+fnamesfield).focus(); // autofocus kepada input firstname
				$("#"+resultname2).addClass("d-none"); // lalu menghilangkan nama/salam
			});
		}

	}

	$("#display-name-button").click(function(){
		var firstname = $("#first-name").val();
		var lastname = $("#last-name").val();

		displayName(firstname,lastname,"result-name"); // memanggil fungsi displayName
	});

	$("#last-name").keyup(function(e){
		var firstname = $("#first-name").val();
		var lastname = $("#last-name").val();

		if (e.which == 13) { // membuat kode enter
			displayName(firstname,lastname,"result-name"); // memanggil fungsi displayName
		}
	});

	$("#display-name-button-2").click(function(){
		var firstname = $("#first-name-2").val();
		var lastname = $("#last-name-2").val();

		displayNameWithSwal(firstname,lastname,"result-name","first-name-2"); // memanggil fungsi displayName2
	});

	$("#last-name-2").keyup(function(e){
		var firstname = $("#first-name-2").val();
		var lastname = $("#last-name-2").val();

		if (e.which == 13) { // membuat kode enter
			displayNameWithSwal(firstname,lastname,"result-name","first-name-2"); // memanggil fungsi displayName2
		}
	});

	var formFields = $('.form-group'); // membuat variable dengan isi class .form-group

	formFields.each(function() {
    	var field = $(this); // membuat variable field dengan isi $(this), yang artinya mengacu pada variable fungsi formFields yang isinya .form-group
    	var input = field.find('input'); // membuat variable input yang diisi fungsi find untuk mencari input pada class .form-group
    	var label = field.find('label'); // membuat variable label yang diisi fungsi find untuk mencari label pada class .form-group

    function checkInput() {
		var valueLength = input.val().length; // mengambil panjang value pada variable input

			if (valueLength > 0 ) { // jika panjang variable lebih dari 0 atau yang bisa di bilang.. valuenya tidak kosong, maka akan mengeksekusi kode berikut
				label.addClass('label-small'); // menambahkan class ".label-small"
	    } else {
	      label.removeClass('label-small'); // menghilangkan class ".label-small"
	    }
    }

	    input.on("change", function() { // ketika input mengalami perubahan pada value maka akan memanggil fungsi checkInput()
	      checkInput();
	    });

  });

});
