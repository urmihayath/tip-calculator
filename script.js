let options = [
  {
    id: 1,
    value: 0,
    text: 'Please Choose...',
    class: 'service'
  },
  {
    id: 2,
    value: 20,
    text: 'Very Good - 20%',
    class: 'service'
  },

  {
    id: 3,
    value: 10,
    text: 'Okay - 10%',
    class: 'service'
  },

  {
    id: 4,
    value: 2,
    text: 'Not so much',
    class: 'service'
  }
]

let select = document.querySelector('select')

let items = options.map(option => {
  return `<option value=${option.value} class=${option.class}>${option.text}</option>`
})

let displayItems = items.join()

select.innerHTML = displayItems




let totalBill = document.querySelector('.total-bill')
let totalPerson = document.querySelector('.person')
let serviceValue = document.querySelectorAll('.service')



function isValid(bill, person, service){

  if(bill.value <= 0 ){
    document.querySelector('.bill-empty').classList.add('active')
  } else{
    document.querySelector('.bill-empty').classList.remove('active')
    return bill.value
  }


  if(person.value < 1 ){
    document.querySelector('.person-empty').classList.add('active')
  } else{
    document.querySelector('.person-empty').classList.remove('active')
    return person.value
  }

      if(service.value = 0 ){
        document.querySelector('.service-empty').classList.add('active')
  } else{
        document.querySelector('.service-empty').classList.remove('active')
        return service
      }

}




let btn = document.getElementById('btn')

btn.addEventListener('click', (e)=>{
  serviceValue.forEach(selectService => {
    selectService.addEventListener('change', ()=>{
      let h = selectService.value
    })
  })
  let v = isValid(totalBill, totalPerson, h)
  console.log(totalBill.value)
  console.log(totalPerson.value)

  console.log(h)
  e.preventDefault()
})