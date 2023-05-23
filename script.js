function dinamico(){
  let texto = document.getElementById('msg')
  let img = document.getElementById('imagem')
  let data = new Date()
  let hora = data.getHours()

  msg.innerHTML = `<h1>Agora são ${hora} horas</h1>`
  
  if(hora >= 0 && hora < 12){
    msg.innerHTML = `<h1>Agora são ${hora} horas. Bom dia!</h1>`
  } else if(hora >= 12 && hora < 18){
    msg.innerHTML = `<h1>Agora são ${hora} horas. Boa tarde!</h1>`
    document.body.style.background = '#DBB775'   
    img.src = 'src/tarde.jpg'
  }else{
    msg.innerHTML = `<h1>Agora são ${hora} horas. Boa noite!</h1>`
    document.body.style.background = '#7B68EE'
    img.src = 'src/noite.jpg'
  }
} 