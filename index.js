const submitData = (name, email) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  };

  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      document.body.innerHTML = object["id"];
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      document.body.innerHTML = error.message;
    });
};

submitData("dude", "dude@gmail.com");
