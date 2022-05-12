// const form = document.querySelector(".form")
// const contactArea = document.querySelector(".contacts")
// const resetBtn = document.querySelector(".reset")

// const imgPreview = document.querySelector(".img-preview")
// form.elements.img.addEventListener("change", function(e){
//   imgPreview.src = URL.createObjectURL(form.elements.img.files[0])
// })

// form.addEventListener("submit", function(e){
//   const inputs = this.elements
//   if(inputs.submit.textContent == "Créer"){
//     const contactImg = document.createElement("img")
//     contactImg.classList.add("contact-img")
//     contactImg.src = URL.createObjectURL(inputs.img.files[0])
  
//     //créer la section nom
//     const names = document.createElement("p")
//     names.textContent = inputs["prenom"].value + " " + inputs["nom"].value
//     names.classList.add("contact-name")
    
//     //la section group
//     const group = document.createElement("p")
//     group.textContent = inputs["group"].value
//     group.classList.add("contact-group")
    
//     //la section description
//     const description = document.createElement("p")
//     description.textContent = inputs["description"].value
//     description.classList.add("contact-description")
  
//     const contact = document.createElement("div")
//     contact.classList.add("contact")
  
//     const contactInfo = document.createElement("div")
//     contactInfo.classList.add("contact-info")
  
//     const closeIcon = document.createElement("i")
//     closeIcon.classList.add("fa-solid")
//     closeIcon.classList.add("fa-xmark")
//     closeIcon.classList.add("cross")

//     //générer un id unique pour chaque contact
//     const id = Math.random()
//     const idSection = document.createElement("span")
//     idSection.textContent = id
//     idSection.style.display = "none"
    
//     contact.appendChild(contactImg)
//     contact.appendChild(contactInfo)
//     contact.appendChild(closeIcon)
//     contact.appendChild(idSection) //identifiant unique pour chaque contact
  
//     contactInfo.appendChild(names)
//     contactInfo.appendChild(group)
//     contactInfo.appendChild(description)
  
//     // for(child of childreen){
//     //   contact.appendChild(child)
//     // }
  
//     contactArea.appendChild(contact)
  
//     e.preventDefault()
  
//     //reset the form
//     resetBtn.click()
//     imgPreview.src = ""
  
//     //deleting contacts
//     const crosses = document.querySelectorAll(".cross")
//     if(crosses){
//       for(cross of crosses){
//         cross.addEventListener("click", function(e){
//           this.parentNode.parentNode.removeChild(this.parentNode)
//         })
//       }
//     }
//   }
//   let contacts = document.querySelectorAll(".contact")
//   for(let i = 0; i < contacts.length; i++){
//     contacts[i].addEventListener("click", function(e){
//       let img = contacts[i].children[0].src
//           names = contacts[i].children[1].children[0].textContent
//           group = contacts[i].children[1].children[1].textContent
//           description = contacts[i].children[1].children[2].textContent
    
//       // console.log(inputs.img.value)
//       // inputs.img.file[0] = img
//       inputs.prenom.value = names.split(" ")[0]
//       inputs.nom.value = names.split(" ")[1]
//       inputs.group.value = group.toLowerCase()
//       inputs.description.value = description
//       inputs.id.value = contacts[i].children[3].textContent
//       inputs.submit.textContent = "Mod."
    
//       form.addEventListener("submit", function(e){
//         if(inputs.id == contacts[i].children[3].textContent){
//           contacts[i].children[1].children[0].textContent = inputs.prenom.value + " " + inputs.nom.value
          
//           contacts[i].children[1].children[1].textContent = inputs.group.value
  
//           contacts[i].children[1].children[2].textContent = inputs.description.value
  
  
//           inputs.submit.textContent = "Créer"
//           resetBtn.click()
//           e.preventDefault()
//         }
//       })
//     })
//   }
// })

// //modification des informations
// // let oneContact = document.querySelector(".contact")

// // oneContact.addEventListener("click", function(e){

// // })