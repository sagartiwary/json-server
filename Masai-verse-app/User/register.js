
let form = document.getElementById("form");
let names = document.getElementById("name");
let age = document.getElementById("age");
let batch = document.getElementById("batch-name");
let profession = document.getElementById("profession")
let url = `http://localhost:8080/users`;
let position = document.getElementById("position")
form.addEventListener("submit", async (e) => {
   e.preventDefault()
    let obj = {
        name: names.value,
        age: age.value,
        batch_name: batch.value,
        profession: profession.value,
        place: place.value
    }
    try {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        let gotData = await res.json();
        alert("successfully registered")
        console.log(gotData)
    } catch (error) {
        console.log(error)
    }

})