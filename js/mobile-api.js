// this function get api to data by fetech by loadphone function


const loadPhone = async(searchText, datalimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    displayPhones(data.data, datalimit);
}


//desplay phone website by functin

const displayPhones = (phones, datalimit) => {
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.textContent = '';

    //display first 15 phone
    const showAll = document.getElementById('show-All')
    if(datalimit && phones.length > 15){
        phones = phones.slice(0, 15);
        showAll.classList.remove('d-none');
    }else{
        showAll.classList.add('d-none');
    };

    //when not foun phone show alert sms
    const notFoundAlert = document.getElementById('NotFound-alert')
    if(phones.length === 0){
        notFoundAlert.classList.remove('d-none')
    }else{
        notFoundAlert.classList.add('d-none')
    }

    //query found product data here 
    phones.forEach(phone => {
     const phoneDiv = document.createElement('div');
     phoneDiv.classList.add('col');
     phoneDiv.innerHTML =`
        <div class="card h-100 shadow-lg border-0 position-relative">
        <img src="${phone.image}" class="card-img-top p-4" alt="...">
        <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <span class="badge rounded-pill text-bg-danger position-absolute top-0 end-0">${phone.brand}</span>
        <button class="btn btn-primary" onclick="loadPhoneDetails('${phone.slug}')" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
        </div>
        </div>
     `;
     phoneContainer.appendChild(phoneDiv);
    });

    // stop loading spinner
    togggleLoadSpinner(false);
}

// add to onclick event with show details anchor tag
const loadPhoneDetails = async(id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    displayPhoneDetails(data.data);
}

// display function create 
const displayPhoneDetails = phone => {
    const phoneDetailsTitle = document.getElementById('phoneDetailsModalLabel');
    phoneDetailsTitle.innerText = phone.name;
    const phoneImage = document.getElementById('details-image');
    phoneImage.innerHTML = `
    <img src="${phone.image}"/>
    `;
    const phoneInformation = document.getElementById('phone-informations');
    phoneInformation.innerHTML =`
    <p>Display-size: ${phone.mainFeatures.displaySize}</p>
    <p>Chip-set: ${phone.mainFeatures.chipSet? phone.mainFeatures.chipSet : 'Not found'}</p>
    <p>Storage: ${phone.mainFeatures.storage? phone.mainFeatures.storage : 'Not found'}</p>
    <p>Release-date: ${phone.releaseDate? phone.releaseDate : 'Not found'}</p>
    <p>Sensors: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'No found'}
    `;
}

//added to event handler with search button and get your choise
document.getElementById('search-phone').addEventListener('click', function(){
    processSearch(15);
})

//search input value by enter key press 
document.getElementById('search-field').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        processSearch(15);
    }
});

//create a processing funtcion here 
const processSearch = (datalimit) => {
     // starting loading spinner 
     togggleLoadSpinner(true)
     const searchInputField = document.getElementById('search-field');
     const searchText = searchInputField.value;
     loadPhone(searchText, datalimit);
}

const togggleLoadSpinner = isLoading => {
    const loadingSpinner = document.getElementById('loding-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('d-none');
    }else{
        loadingSpinner.classList.add('d-none');
    }
}


// here add to event handler with show all button
document.getElementById('show-All').addEventListener('click', function(){
    processSearch();
});

// add to event handler with add to card 
document.getElementById('add-To-Card').addEventListener('click', function(){
    window.location.href = 'login.html';
})


// here call load function and upload phone 
loadPhone('iphone');
