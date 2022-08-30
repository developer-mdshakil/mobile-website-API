// this function get api to data by fetech by loadphone function


const loadPhone = async() => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
}

// here call load function and upload phone 
loadPhone();