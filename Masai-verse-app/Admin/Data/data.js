let container = document.getElementById("card-container");
let url = `http://localhost:8080/users`;

let sort = document.getElementById("sort")
let filter = document.getElementById('filter');
let sortedData = []
sort.addEventListener("click", () => {
    let done_sort = sortedData.sort((a, b) => a.age - b.age)
    displayCard(done_sort)
})

filter.addEventListener("click", () => {
    let filterProfession = sortedData.filter((ele) => {
        if (ele.profession == filter.value || filter.value == "") {
            return true;
        } else {
            return false;
        }
    })
    displayCard(filterProfession)
})

async function fetchData() {
    try {
        let res = await fetch(url);
        let gotData = await res.json();
        sortedData = gotData
        displayCard(gotData)
    } catch (error) {
        console.log(error)
    }
}
fetchData()



function displayCard(data) {
    container.innerHTML = null;
    data.forEach((ele, index) => {
        // let mainDiv=document.createElement("div")
        let card = document.createElement("div");
        let image = document.createElement("img")
        image.setAttribute("src", "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg")
        let name = document.createElement("p")
        let cardDelete = document.createElement("button")
        cardDelete.textContent = "Delete"
        name.textContent = `Name : ${ele.name}`;
        let age = document.createElement("p")
        age.textContent = `Age : ${ele.age}`
        let betch = document.createElement("p")
        betch.textContent = `Batch : ${ele.batch_name}`
        let profession = document.createElement("p")
        profession.textContent = `Profession : ${ele.profession}`
        let position = document.createElement("p")
        position.textContent = `Position : ${ele.place}`
        let edit = document.createElement("button")
        edit.textContent = "Edit";
        edit.style.marginRight = "92px"
        edit.style.marginLeft = ""
        cardDelete.addEventListener("click", async () => {
            try {
                let res = await fetch(`url/${ele.id}`, {
                    method: "DELETE"
                });
                let redData = await res.json();
                console.log(redData)
                displayCard(redData)
            } catch (error) {
                console.log(error)
            }
        })
        card.append(image, name, age, betch, profession, position, edit, cardDelete)
        container.append(card)
    })
}

// displayCard()