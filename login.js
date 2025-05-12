   alert("USER IS THE BEST TESTER IN THE WORLD!");
const users = [
      { email: "hammad", password: "pass123" },
      { email: "zunaira", password: "pass123" }
    ];

    function login() {
      const gmail = document.getElementById("gmail").value;
      const password = document.getElementById("password").value;

      const match = users.find(user => user.email === gmail && user.password === password);

      if (match) {
        window.location.href = "job.html";
      } else {
        alert("Invalid credentials. Try again.");
      }
    }
