  'use strict';
$(function() {
    
    /*date*/
    $(".date").inputmask({ mask: "99/99/9999"});
    $(".date2").inputmask({ mask: "99-99-9999"});
    /*time*/
    $(".hour").inputmask({ mask: "99:99:99"});
    $(".dateHour").inputmask({ mask: "99/99/9999 99:99:99"});

    /*phone no*/
    $(".mob_no").inputmask({ mask: "9999-999-999"});
    $(".phone").inputmask({ mask: "9999-9999"});
    $(".telphone_with_code").inputmask({ mask: "(99) 9999-9999"});
    $(".cel_with_code").inputmask({ mask: "(99) 9-9999-9999"});
    $(".us_telephone").inputmask({ mask: "(999) 999-9999"});
    $(".ip").inputmask({ mask: "999.999.999.999"});
    $(".isbn1").inputmask({ mask: "999-99-999-9999-9"});
    $(".isbn2").inputmask({ mask: "999 99 999 9999 9"});
    $(".isbn3").inputmask({ mask: "999/99/999/9999/9"});
    $(".ipv4").inputmask({ mask: "999.999.999.9999"});
    $(".ipv6").inputmask({ mask: "9999:9999:9999:9:999:9999:9999:9999"});
    $(".precos").inputmask({ mask: "9.999.999,99"});
    $(".cepcode").inputmask({ mask: "99999-999"});
    $(".cpfcode").inputmask({ mask: "999.999.999-99"});
	$(".cnpjcode").inputmask({ mask: "99.999.999/9999-99"});
    /*numbers*/
    $('.autonumber').autoNumeric('init');
  });