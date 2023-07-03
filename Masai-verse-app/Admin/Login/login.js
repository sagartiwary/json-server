let form = document.getElementById("form-login");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let obj = {
        email: email.value,
        password: password.value,

    }
    try {
        let res = await fetch(`https://reqres.in/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        if (res.ok) {
            window.location("data.html");
        } else {
            console.log("Login failed. Please try again.");
        }
        let gotData = await res.json();
        console.log(gotData)
    } catch (error) {
        console.log(error)
    }

})