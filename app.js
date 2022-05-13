const form = document.querySelector(".form")
const inputs = form.elements
const contactArea = document.querySelector(".contacts")
const addContact = document.querySelector(".add-contact")
const formContact = document.querySelector(".form-contact")
const globalError = document.querySelector(".error-msg")
const errors = document.querySelectorAll(".error")
let valid = true //tous les champs sont valides

//validation des différents inputs

//validation des noms
const validateNames = function(input){
  input.addEventListener("change", function(e){
    let value = input.value
    if(!(value.indexOf(" ") < 0 && value.length > 1)){
      input.nextElementSibling.classList.add("visible")
      input.classList.add("invalid")
      valid = false
    }else{
      input.nextElementSibling.classList.remove("visible")
      input.classList.remove("invalid")
      valid = true
    }
  })
}

validateNames(inputs.prenom)
validateNames(inputs.nom)

//validation de la description

//validation de l'image
const validateImg = function(file){
  return file['type'].split("/")[0] == 'image'
}

//générer un contact
const generateContact = function(arr){
  // identifiant du contact
  let idContact = Math.random()
  let idSection = document.createElement("span")
  idSection.classList.add("hidden", "contact-id")
  idSection.textContent = idContact

  // section du contact
  let contact = document.createElement("div")
  contact.classList.add("contact")

  // création de l'image
  let img = document.createElement("img")
  img.classList.add("contact-img", "prev")
  img.src = URL.createObjectURL(arr[0])

  // création des informations sur le contact
  let contactInfo = document.createElement("div")
  contactInfo.classList.add("contact-info")

  let names = document.createElement("p")
  names.classList.add("contact-name")
  names.textContent = arr[1] + " " + arr[2]

  let group = document.createElement("p")
  group.classList.add("contact-group")
  group.textContent = arr[3]

  let description = document.createElement("p")
  description.classList.add("contact-group")
  description.textContent = arr[4]

  contactInfo.append(names, group, description)

  // création de l'icone de suppression
  let closeIcon = document.createElement("i")
  closeIcon.classList.add("fa-solid", "fa-xmark", "cross")

  //tout ajouter à la div contact
  contact.append(img, contactInfo, closeIcon, idSection)

  return contact
}

//afficher l'image au changement de l'input file
let imgPreview = document.querySelector(".img-preview")
const inputFile = inputs.img
inputFile.addEventListener("change", function(e){
  let errorMessage = document.querySelector(".error-file")
  let filename = inputFile.files[0]
  if(!validateImg(filename)){
    errorMessage.classList.add("visible")
    e.preventDefault()
  }else{
    errorMessage.classList.remove("visible")
  }
  imgPreview.src = URL.createObjectURL(filename)
})

//remplir le formulaire avec les informations du contac
const getContactInfo = function(arr){

  imgPreview.src = arr[0].src

  inputs.prenom.value = arr[1].textContent.split(" ")[0]
  inputs.nom.value = arr[1].textContent.split(" ")[1]

  inputs.group.value = arr[2].textContent.toLowerCase()
  inputs.description.value = arr[3].textContent
  inputs.id.value = arr[4].textContent

  inputs.submit.textContent = "Mod."
  inputs.reset.textContent = "Annuler"
}

//ajout d'un contact et modification d'un contact
form.addEventListener("submit", function(e){
  let imgUrl = inputs.img.files[0]
  let firstName = inputs.prenom.value
  let name = inputs.nom.value
  let group = inputs.group.value
  let description = inputs.description.value

  if(firstName && name && group && description && valid){
  
    const valuesArray = [imgUrl, firstName, name, group, description]

    let created = false
  
    if(inputs.submit.textContent == "Créer"){
      if(imgUrl){
        let contact = generateContact(valuesArray)
        contactArea.appendChild(contact)
        
        created = true
        formContact.classList.remove("show")
        globalError.classList.remove("visible")
      }else{
        globalError.classList.add("visible")
      }
    }else if(inputs.submit.textContent == "Mod."){
      let contacts = contactArea.children
      for(let i = 0; i < contacts.length; i++){
        let contact = contacts[i]
        let contactId = contact.children[3].textContent
        if(contactId == inputs.id.value){
          contact.children[1].children[0].textContent = firstName + " " + name
          contact.children[1].children[1].textContent = group
          contact.children[1].children[2].textContent = description
          if(inputs.img.files[0]){
            contact.children[0].src = URL.createObjectURL(inputs.img.files[0])
          }
        }
      }
      created = true
      formContact.classList.remove("show")
      globalError.classList.remove("visible")
    }

    if(created){
      // reset le formulaire
      inputs.submit.textContent = "Créer"
      inputs.reset.click()
      imgPreview.src = ""
      e.preventDefault()
    }

  }else{
    globalError.classList.add("visible")
  }
})

//suppressio d'un contact
form.addEventListener("submit", function(e){
  let contacts = contactArea.children

  for(let contact of contacts){
    let closeIcon = contact.children[2]
    closeIcon.addEventListener("click", function(e){
      contactArea.removeChild(closeIcon.parentNode)
      e.stopPropagation()
    })
  }

  e.preventDefault()
})

//modification d'un élément
form.addEventListener("submit", function(e){
  let contacts = contactArea.children

  for(let i = 0; i < contacts.length; i++){
    contacts[i].addEventListener("click", function(e){
      let img = contacts[i].children[0]
      let contactId = contacts[i].children[3]
      let contactName = contacts[i].children[1].children[0]
      let contactGroup = contacts[i].children[1].children[1]
      let contactDescription = contacts[i].children[1].children[2]

      let contactArray = [img, contactName, contactGroup, contactDescription, contactId]

      formContact.classList.add("show")

      getContactInfo(contactArray)
    })
  }

  e.preventDefault()
})

// vider le formulaire
let inpuReset = inputs.reset
inpuReset.addEventListener("click", function(e){
  inputs.submit.textContent = "Créer"
  for(let error of errors){
    error.classList.remove("visible")
  }
  for(let input of inputs){
    input.classList.remove("invalid")
  }
  if(this.textContent == "Annuler"){
    this.textContent = "Réinit."
    formContact.classList.remove("show")
  }
  imgPreview.src = ""
})