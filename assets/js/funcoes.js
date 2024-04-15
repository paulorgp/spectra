//-------------------------------------------------------------------------------------------------------

function valida_cadastro(){
    
    var razao=$("#razao").val();
    var cnpj=$("#cnpj").val();
    var cpf=$("#cpf").val();
	var pessoa=$("#pessoa").val();
    var idCategoria=$("#idCategoria").val();

if(pessoa=="J"){
   // if(cnpj.trim()==""){   alert("Informe o CNPJ");   return false; }
}
if(pessoa=="F"){	
	//if(cpf.trim()==""){   alert("Informe o CPF");   return false; }
}	
	
    if(razao.trim()==""){   alert("Informe a Razão Social");   return false; }
  
    if(idCategoria.trim()=="0"){ alert("Informe a categoria"); return false; }
    
  var param=$("#param").val();
  var email=$("#email").val();
  var idCadastro=$("#idCadastro").val();
  var responsavel=$("#responsavel").val();
  var telefone=$("#telefone").val();
  var celular=$("#celular").val();
  var endereco=$("#endereco").val();
  var bairro=$("#bairro").val();
  var cidade=$("#cidade").val();
  var estado=$("#estado").val();
  var cep=$("#cep").val();
  var tipo=$("#tipo").val();
  var site=$("#site").val();
  var obs=$("#obs").val();

  
    var urls = "controle/controle-cadastro.php";
    $.ajax({
        type: "POST",
        url: urls,
        data: {param:param, cpf:cpf, cnpj:cnpj, razao:razao, email:email, idCadastro:idCadastro, responsavel:responsavel, pessoa:pessoa, telefone:telefone, celular:celular, endereco:endereco, bairro:bairro, cidade:cidade, estado:estado, cep:cep,
tipo:tipo, facebook:tipo,  site:site, instagram:site,  obs:obs,  idCategoria:idCategoria   },
        cache: false
    }).done(function(data) {
        alert(data);
       // $("#conta_"+idConta).remove();
    });
    
}

function valida_conta(){
    
    var pessoa=$("#pessoa").val();
    var nome=$("#idCadastro").val();
    var valor=$("#valor").val();
    var data=$("#data").val();
	var tipo=$("#tipo").val();
    var idConta=$("#idConta").val();
    var param=$("#param").val();
    var texto=$("#texto").val();
    var idCadastro=$("#idCadastro").val();
  

    if(nome.trim()==""){   alert("Informe o nome");   return false; }
    if(valor.trim()==""){   alert("Informe o valor");   return false; }
    if(data.trim()==""){  alert("Informe a data"); return false; }
  
    	var urls = "controle/controle-conta.php";
    $.ajax({
        type: "POST",
        url: urls,
        data: {param:param, idCadastro:idCadastro, idConta:idConta, pessoa:pessoa, nome:nome, valor:valor, data:data, tipo:tipo, texto:texto  },
        cache: false
    }).done(function(data) {
        alert(data);
       // $("#conta_"+idConta).remove();
    });
  
  
}


function muda_pessoa(valor){
	if(valor=="F"){ $("#cm_J").hide(); $("#cm_F").show();  $("#lb_J").hide(); $("#lb_F").show();}
	if(valor=="J"){ $("#cm_F").hide(); $("#cm_J").show();  $("#lb_F").hide(); $("#lb_J").show(); }
}



function seta_status(valor, id, local) {
    var urlTipo = 'controle/controle_' + local + ".php";
    $.ajax({
        type: "POST",
        url: urlTipo,
        data: { status: valor, id: id, param: 'status' },
        cache: false
    }).done(function(data) {
          
      if(local=="usuario"){
        verificar_ativo(id);
      }
         
    });
}


function excluir_conta(idConta){
	
	var urls = "controle/controle-conta.php";
    $.ajax({
        type: "POST",
        url: urls,
        data: {param:'excluir', idConta:idConta },
        cache: false
    }).done(function(data) {
        //alert(data);
        $("#conta_"+idConta).remove();
    });
} 




function area_conteudo(pag,param,id) {
	
    var urlTipo = pag+'.php';
    $.ajax({
        type: "POST",
        data: {param:param, id:id },
        url: urlTipo,
        cache: false
    }).done(function(data) {
		
       $("#area_conteudo").html(data);
    });
}





//------------------------------------------------------------------------------------------------------

function valida_login(){
    var email=$("#email").val();
    var senha=$("#senha").val();
    if(email==""){  alert("Informe o e-mail"); return false; }
    if(senha==""){  alert("Informe a senha");  return false; }
}

//------------------------------------------------------------------------------------------------------

function valida_esqueci(){
    var email=$("#email").val();
    if(email==""){  alert("Informe o e-mail"); return false; }
}

//------------------------------------------------------------------------------------------------------

function valida_nova_senha(){
    var senha=$("#senha").val();
    var csenha=$("#csenha").val();

    if(senha==""){  alert("Informe a senha");  return false; }
    if(csenha==""){ alert("Informe a confirmação de senha");  return false; }
    if(senha!=csenha){ alert("Senha diferente da confirmação de senha");   return false; }
}

//------------------------------------------------------------------------------------------------------

function valida_fazer_parte(){
    
    var email=$("#email").val();
  	var nome=$("#nome").val();
    var idRede=$("#idRede").val();
    var senha=$("#senha").val();
    var csenha=$("#csenha").val();
    var captcha=$("#captcha").val();
    var ccaptcha=$("#ccaptcha").val();
    
    if(email==""){  alert("Informe o e-mail"); return false; }
 	if(nome==""){  alert("Informe o nome"); return false; }
    if(idRede==""){  alert("Informe a rede que pertence"); return false; }
    if(senha==""){  alert("Informe a senha");  return false; }
    if(csenha==""){ alert("Informe a confirmação de senha");  return false; }
    if(senha!=csenha){ alert("Senha diferente da confirmação de senha");   return false; }
    if(ccaptcha==""){ alert("Informe o captcha");  return false; }
    if(captcha!=ccaptcha){ alert("Captcha diferente do informado");   return false; }
}

function setOpcaoTexto(select) {
    var opcaoTexto = select.options[select.selectedIndex].text;
    document.getElementById('texto_opcao').value = opcaoTexto;
}


//------------------------------------------------------------------------------------------------------

function excluir_boleto(id){

    var urls = "controle/controle-boleto.php";
    $.ajax({
        type: "POST",
        url: urls,
        data: {param:'excluir', id:id },
        cache: false
    }).done(function(data) {
        //alert(data);
        $("#linha_"+id).remove();
    });

}
//------------------------------------------------------------------------------------------------------

function excluir_cadastro(id){

    var urls = "controle/controle-cadastro.php";
    $.ajax({
        type: "POST",
        url: urls,
        data: {param:'excluir', id:id },
        cache: false
    }).done(function(data) {
        //alert(data);
        $("#linha_"+id).remove();
    });

}

//------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------

function ver_categoria(id,nome){

    var urls = "categorias.php";
    $.ajax({
        type: "POST",
        url: urls,
		data: {id:id, nome:nome },
        cache: false
    }).done(function(data) {
        //alert(data);
        $("#integra_categora").html(data);
		$("#nome").val(nome);
		$("#idc").val(id);
    });

}

function excluir_categoria(id){

    var urls = "categorias.php";
    $.ajax({
        type: "POST",
        url: urls,
		data: {id:id, param: 'excluir' },
        cache: false
    }).done(function(data) {
        //alert(data);
        $("#cat_"+id).remove();
    });

}


function cad_cat(nome,id){
    if(nome!=""){
    var urls = "categorias.php";
    $.ajax({
        type: "POST",
        url: urls,
		data: {id:id, nome:nome, param:'datas' },
        cache: false
    }).done(function(data) {
       // alert(data);
    });
	ver_categoria('','');
	}
}


 function lista_usuarios(){
			var urls = "lista_operadores.php";
			$.ajax({
				type: "POST",
				url: urls,
				cache: false
			}).done(function(data) {
				$("#lista_usuarios").html(data);
               
            });
}	


/*
function muda_status_usuario(idUsuario,valor){
    var urls = "../controle/controle_usuario.php";
    $.ajax({
        type: "POST",
        url: urls,
        data: { idUsuario:idUsuario, status:valor, param:'status' },
        cache: false
    }).done(function(data) {
        //alert(data);
        if(valor=="S"){ $("#u_"+idUsuario).css({color:"#04d904"}); }
        if(valor=="B"){ $("#u_"+idUsuario).css({color:"#f11700"}); }
        if(valor=="N"){ $("#u_"+idUsuario).css({color:"#1b8bf9"}); }
        if(valor=="E"){ $("#u_"+idUsuario).css({color:"#e200f1"}); }
    });

}*/



function contas(data_i,data_f,palavra,tipo,idCategoria){
    var urls = "contas.php";
    $.ajax({
        type: "POST",
        url: urls,
		data: {data_i:data_i, data_f:data_f, palavra:palavra, tipo:tipo, idCategoria:idCategoria, param:'buscar' },
        cache: false
    }).done(function(data) {
         $("#area_conteudo").html(data);
    });


}




function cadastro_usuario(param, id) {
  
    var nome=$("#nome").val();
    var email=$("#email").val();
    var idRede=$("#idRede").val();
    var status=$("#status").val();
    var senha=$("#senha").val();
  	var csenha=$("#csenha").val();
  

    if (nome == "") { alert("informe o nome"); return false; }
    if (email == "") { alert("informe o email"); return false; }
    if (idRede == "") { alert("informe a rede"); return false; }

    if (param == "atualizar") {
        if (senha != csenha) { alert("senha diferente da confirmação da senha"); return false; }
    } else {
        if (senha == "") { alert("informe a senha"); return false; }
        if (csenha == "") { alert("informe a confirmação da senha"); return false; }
        if (senha != csenha) { alert("senha diferente da confirmação da senha"); return false; }
    }

    var urlTipo = 'controle/controle_usuario.php';
    $.ajax({
        type: "POST",
        url: urlTipo,
        data: { param: param, id: id, nome: nome, status: status, email: email, senha: senha, idRede:idRede },
        cache: false
    }).done(function(data) {
        $("#nome").val('');
        $("#email").val('');
        $("#status").val('');
        $("#senha").val('');
        $("#csenha").val('');
        $("#idRede").val('');
		
       // alert(data);
		area_conteudo('usuarios','listar','');
    });
}


//-------------------------------------------------------------------------------------------------------------------------


function chama_cotacao(id){
  var urlTipo = "atualiza-cotacao.php";
    $.ajax({
        type: "POST",
        url: urlTipo,
		 data: { id:id },
        cache: false
    }).done(function(data) {
           var channel = 'receiveMoedas';
			   socketCambio.emit('syncCotacao', channel, data); 
   });
}	


//-------------------------------------------------------------------------------------------------------------------------

function compartilhar_arquivo(){
  
  var arquivo=$("#arquivo").val();
  var descricao=$("#descricao").val();
  var ids=$("#ids").val();
  
  if(arquivo==""){ alert("Informe o arquivo"); return false; }
  if(ids==""){ alert("Informe ao menos 1 usuário"); return false; }
  
  var urlTipo = "comp_arquivos.php";
    $.ajax({
        type: "POST",
        url: urlTipo,
		 data: { param:'enviar', arquivo:arquivo, descricao:descricao,  ids:ids },
        cache: false
    }).done(function(data) {
          //area_conteudo('comp_arquivos','','');
        var channel = 'sendCompArquivos';
		    socketCambio.emit('syncAcesso', channel, data); 
   });
}	


function compartilhar_arquivo_mobile(){
  
  var arquivo=$("#arquivo").val();
  var descricao=$("#descricao").val();
  var ids=$("#ids").val();
  
  if(arquivo==""){ alert("Informe o arquivo"); return false; }
  if(ids==""){ alert("Informe ao menos 1 usuário"); return false; }
  
  var urlTipo = "comp_arquivos.mobile.php";
    $.ajax({
        type: "POST",
        url: urlTipo,
		 data: { param:'enviar', arquivo:arquivo, descricao:descricao,  ids:ids },
        cache: false
    }).done(function(data) {
          //area_conteudo('comp_arquivos','','');
        var channel = 'sendCompArquivos';
		    socketCambio.emit('syncAcesso', channel, data); 
   });
}	

//------------------------------------------------------------------------------------------------------------------------

function excluir_arquivo_comp(tipo,idArquivo,idUsuario,nome){

var urlTipo = "comp_arquivos.php";
    $.ajax({
        type: "POST",
        url: urlTipo,
		 data: { param:'excluir', idArquivo:idArquivo, idUsuario:idUsuario, tipo:tipo, nome:nome },
        cache: false
    }).done(function(data) {
      
         if(tipo=="E"){
            $('#enviado_'+idArquivo).remove();
         }
     
         var channel = 'receiveCompArquivos';
		     socketCambio.emit('syncAcesso', channel, data); 
   });


}


//-------------------------------------------------------------------------------------------------------------------------

function noticia_rss(param,paginacao,fonte,editoria,estado,datai,dataf,periodo,palavra,chave,idioma,continente,pais,midia,gm){
        //$(".str_busca_resultado").hide();
      //  $("#carregando_noticias").html('Buscando '+palavra+chave+"...");
       // $("#carregando_noticias").show();
      	
		var urlTipo = 'noticias.php';
			$.ajax({
				type: "POST",
				url: urlTipo,
				data: {param: param, paginacao:paginacao, fonte:fonte, editoria:editoria, idioma:idioma, estado:estado, datai:datai, chave:chave, dataf:dataf, periodo:periodo, palavra:palavra, continente:continente, pais:pais, midia:midia, gm:gm },
				cache: false
			}).done(function(data) {
              //  $("#carregando_noticias").html('');
               // $("#carregando_noticias").hide();
               // $(".str_busca_resultado").show();
				$("#area_conteudo").html(data);
			});
	}


//--------------------------------------------------------------------------------------------------------------------------

function publico_novo_generate(texto,sistema){

    if(texto==""){ alert("Informe o texto da mensagem."); return false;}
    
    var urlTipo = "chat_publico_novo_generate.php";
      $.ajax({
          type: "POST",
          url: urlTipo,
           data: { texto:texto,  sistema:sistema},
          cache: false
      }).done(function(data) {
        //console.log(data)
         $('#msgpp_n').val('');
        
         var dados=data;
         document.getElementById("msgpp_n").focus();
        
         var channel = 'receiveChatPublicoNovo';
			 socketCambio.emit('syncPublico', channel,dados);
     });
     
}



function arquivo_publico(arquivo,sistema){
    var urlTipo = "chat_publico_novo_generate.php";
      $.ajax({
          type: "POST",
          url: urlTipo,
           data: { arquivo:arquivo,  sistema:sistema, param:'arquivo'},
          cache: false
      }).done(function(data) {
        //console.log(data)        
         var dados=data;
         document.getElementById("msgpp_n").focus();
        
         var channel = 'receiveChatPublicoNovo';
			 socketCambio.emit('syncPublico', channel,dados);
     });
     
}



//------------------------------------------------------------------------------------------------------------------------


function alterar_senha(id){
    
    var nome=$("#nome").val();
    var senha=$("#senha").val();
    var csenha=$("#csenha").val();
    var captcha=$("#captcha").val();
    var ccaptcha=$("#ccaptcha").val();

    if(nome.trim()==""){   alert("Informe o nome");   return false; }
    if(senha.trim()==""){  alert("Informe a senha");  return false; }
    if(csenha.trim()==""){ alert("Informe a confirmação de senha");  return false; }
   
    if(senha!=csenha){ alert("Senha diferente da confirmação de senha");   return false; }

    if((captcha=="")||(ccaptcha=="")){ alert("Informe os caracteres ao lado");   return false;}
    if(captcha!=ccaptcha){ alert("Caracteres informados diferentes do solicitado");   return false; }

    var urls = "alterar_senha.php";
    $.ajax({
        type: "POST",
        url: urls,
        data: {param:'atualizar', nome:nome, senha:senha, id:id},
        cache: false
    }).done(function(data) {
            alert('Alterado com sucesso');
    });

}


function alterar_senha_mobile(id){
    
    var nome=$("#nome").val();
    var senha=$("#senha").val();
    var csenha=$("#csenha").val();
    var captcha=$("#captcha").val();
    var ccaptcha=$("#ccaptcha").val();

    if(nome.trim()==""){   alert("Informe o nome");   return false; }
    if(senha.trim()==""){  alert("Informe a senha");  return false; }
    if(csenha.trim()==""){ alert("Informe a confirmação de senha");  return false; }
   
    if(senha!=csenha){ alert("Senha diferente da confirmação de senha");   return false; }

    if((captcha=="")||(ccaptcha=="")){ alert("Informe os caracteres ao lado");   return false;}
    if(captcha!=ccaptcha){ alert("Caracteres informados diferentes do solicitado");   return false; }

    var urls = "alterar_senha.mobile.php";
    $.ajax({
        type: "POST",
        url: urls,
        data: {param:'atualizar', nome:nome, senha:senha, id:id},
        cache: false
    }).done(function(data) {
            alert('Alterado com sucesso');
    });

}


//-------------------------------------------------------------------------------------------------------------------------

function enviar_timeline(){
  var arquivo=$("#arquivo").val();
  var texto=$("#texto").val();
  
  if((texto=="")&&(arquivo=="")){
     alert("Informe um arquivo ou um texto");
     return false;
  }
  
  var urls = "timeline.php";
    $.ajax({
        type: "POST",
        url: urls,
        data: {param:'enviar', arquivo:arquivo, texto:texto},
        cache: false
    }).done(function(data) {
       $("#arquivo").val('');
       $("#texto").val('');
        var channel = 'receiveTimeline';
			socketCambio.emit('syncAcesso', channel,data);
    });
  
}

function enviar_timeline_mobile(){
  
  var arquivo=$("#arquivo").val();
  var texto=$("#texto").val();
  
  if((texto=="")&&(arquivo=="")){
     alert("Informe um arquivo ou um texto");
     return false;
  }
  
  var urls = "timeline.mobile.php";
    $.ajax({
        type: "POST",
        url: urls,
        data: {param:'enviar', arquivo:arquivo, texto:texto},
        cache: false
    }).done(function(data) {
       $("#arquivo").val('');
       $("#texto").val('');
        var channel = 'receiveTimeline';
			socketCambio.emit('syncAcesso', channel,data); 
    });
}

function excluir_timeline(idTime,idUsuario){
  var urls = "timeline.php";
      $.ajax({
          type: "POST",
          url: urls,
          data: {param:'excluir', idTime:idTime, idUsuario:idUsuario},
          cache: false
      }).done(function(data) {
		var channel = 'receiveTimelineEX';
			socketCambio.emit('syncAcesso', channel,data);
      });
}

function excluir_timeline_mobile(idTime,idUsuario){
  var urls = "timeline.mobile.php";
      $.ajax({
          type: "POST",
          url: urls,
          data: {param:'excluir', idTime:idTime, idUsuario:idUsuario},
          cache: false
      }).done(function(data) {
		var channel = 'receiveTimelineEX';
			socketCambio.emit('syncAcesso', channel,data);
      });  

}

//------------------------------------------------------------------------------------------------------------------------


function curtir_timeline(idTime,idUsuario,quem_curtiu,local){
  
   	    var str = quem_curtiu;
        if(str.match(idUsuario)){
          //alert('string encontrada');
          quem_curtiu=quem_curtiu.replace(idUsuario+',','');
          var cor="#9f9f9f";
        }else{
          quem_curtiu=quem_curtiu+idUsuario+",";
          var cor="#ff0202";
        }
        var curtidas=quem_curtiu.split(',');

        var total_curtidas=(curtidas.length)-1;
            
	var urlTipo = local+'.php';
    $.ajax({
        type: "POST",
        url: urlTipo,
        data: { idTime:idTime, idUsuario:idUsuario, quem_curtiu:quem_curtiu, param:'curtir' },
        cache: false
    }).done(function(data) {
        if(quem_curtiu=="1"){ quem_curtiu=""; }
        
        var dados="{'total':'"+total_curtidas+"','quem_curtiu':'"+quem_curtiu+"','idTime':'"+idTime+"'}";
      
        $('#contador_curtir_'+idTime).html(total_curtidas);
        $('#curtiu_'+idTime).val(quem_curtiu);
        $('#coracao_'+idTime).css("color", cor);
      
        var channel = 'receiveCurtiu';
			socketCambio.emit('syncAcesso', channel,dados);
    });
	
}

//-------------------------------------------------------------------------------------------------------------------

function caixa_comentario(id,local){
	
	var urlTipo = local+'.php';
    $.ajax({
        type: "POST",
        url: urlTipo,
        data: { id:id },
        cache: false
    }).done(function(data) {
        $("#caixa_comentario").html(data);
    });
	
}


function comentar(idUsuario,idTime,texto,quem_comentou,local){
  
        quem_comentou=quem_comentou+idUsuario+",";
   
        var comentarios=quem_comentou.split(',');

        var total_comentarios=(comentarios.length)-1;
            
	
	if(texto==''){ alert('Informe o texto'); return false;}
	
	var urlTipo = local+'.php';
    $.ajax({
        type: "POST",
        url: urlTipo,
        data: { idTime:idTime, texto:texto, param:'enviar', idUsuario:idUsuario, quem_comentou:quem_comentou },
        cache: false
    }).done(function(data) {
      
       var dados="{'idTime':'"+idTime+"','total_comentarios':'"+total_comentarios+"','local':'"+local+"'}";
      
       var channel = 'receiveTimelineComentario';
		   socketCambio.emit('syncAcesso', channel,dados);
 
    });
	
}

//---------------------------------------------------------------------------------------------------------------------




