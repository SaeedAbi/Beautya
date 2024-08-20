const modal=document.querySelector('.sidebar-filter')
const product=document.querySelector('.product-box')
const btnCloseModal=document.querySelector('.close-modal')
const btnOpenModal=document.querySelector('.filter-text')

function openModal(){
    console.log('hi')
    modal.classList.remove('remove-me-mobile')
    product.classList.add('remove-me-mobile')
}
function closeModal(){
    modal.classList.add('remove-me-mobile')
    product.classList.remove('remove-me-mobile')
}

btnOpenModal.addEventListener('click',openModal)
btnCloseModal.addEventListener('click',closeModal)
