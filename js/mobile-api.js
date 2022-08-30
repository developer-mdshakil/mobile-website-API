// this function get api to data by fetech by loadphone function


const loadPhone = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    displayPhones(data.data);
}


//desplay phone website by functin

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.textContent = '';
    phones = phones.slice(0, 15);
    phones.forEach(phone => {
     const phoneDiv = document.createElement('div');
     phoneDiv.classList.add('col');
     phoneDiv.innerHTML =`
        <div class="card shadow-lg border-0 position-relative">
        <img src="${phone.image}" class="card-img-top p-4" alt="...">
        <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <span class="badge rounded-pill text-bg-danger position-absolute top-0 end-0">${phone.brand}</span>
        </div>
        </div>
     `;
     phoneContainer.appendChild(phoneDiv);
    });
}

//added to event handler with search button and get your choise
document.getElementById('search-phone').addEventListener('click', function(){
    const searchInputField = document.getElementById('search-field');
    const searchText = searchInputField.value;
    loadPhone(searchText)
})
// here call load function and upload phone 
loadPhone();
