function saveData() {
  const userData = {
    name: document.getElementById("name").value,
    status: document.getElementById("status").value,
    contact: document.getElementById("contact").value,
    gmail: document.getElementById("gmail").value,
    address: document.getElementById("address").value,
    skill1: document.getElementById("skill1").value,
    skill2: document.getElementById("skill2").value,
    skill3: document.getElementById("skill3").value,
    skill4: document.getElementById("skill4").value,
    skill5: document.getElementById("skill5").value,
    hobby1: document.getElementById("hobby1").value,
    hobby2: document.getElementById("hobby2").value,
    hobby3: document.getElementById("hobby3").value,
    profile: document.getElementById("profile").value,
    heading: document.getElementById("heading").value,
    company: document.getElementById("company").value,
    startdate: document.getElementById("startdate").value,
    closingdate: document.getElementById("closing-date").value,
    step1: document.getElementById("step1").value,
    step2: document.getElementById("step2").value,
    step3: document.getElementById("step3").value,
    degree1: document.getElementById("degree1").value,
    edustart1: document.getElementById("edu-start-1").value,
    eduend1: document.getElementById("edu-end-1").value,
    college1: document.getElementById("college1").value,
    degree2: document.getElementById("degree2").value,
    edustart2: document.getElementById("edu-start-2").value,
    eduend2: document.getElementById("edu-end-2").value,
    college2: document.getElementById("college2").value,
    language1: document.getElementById("language1").value,
    language2: document.getElementById("language2").value,
    image: document.getElementById("image").files[0]
  };

  if (userData.image) {
    const reader = new FileReader();
    reader.onloadend = function () {
      userData.image = reader.result;
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href = "resume.html";
    };
    reader.readAsDataURL(userData.image);
  } else {
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "resume.html";
  }
}

window.onload = function () {
  // Check if the current page is "resume.html"
  if (window.location.pathname.includes("resume.html")) {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData) {
      const safeSet = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.innerText = value;
      };

      // Show alert only on the "resume.html" page
      alert("Congratulation You have make your CV!"); // This is your alert message

    safeSet("n1", storedData.name);
    safeSet("s1", storedData.status);
    safeSet("cl1", storedData.contact);
    safeSet("cl2", storedData.gmail);
    safeSet("cl3", storedData.address);
    safeSet("sl1", storedData.skill1);
    safeSet("sl2", storedData.skill2);
    safeSet("sl3", storedData.skill3);
    safeSet("sl4", storedData.skill4);
    safeSet("sl5", storedData.skill5);
    safeSet("hl1", storedData.hobby1);
    safeSet("hl2", storedData.hobby2);
    safeSet("hl3", storedData.hobby3);
    safeSet("profile1", storedData.profile);
    safeSet("head1", storedData.heading);
    safeSet("company1", storedData.company);
    safeSet("sd1", storedData.startdate);
    safeSet("cd1", storedData.closingdate);
    safeSet("st1", storedData.step1);
    safeSet("st2", storedData.step2);
    safeSet("st3", storedData.step3);
    safeSet("d1", storedData.degree1);
    safeSet("es1", storedData.edustart1);
    safeSet("ee1", storedData.eduend1);
    safeSet("coll1", storedData.college1);
    safeSet("d2", storedData.degree2);
    safeSet("es2", storedData.edustart2);
    safeSet("ee2", storedData.eduend2);
    safeSet("coll2", storedData.college2);

    const lang1El = document.getElementById("ll1");
    const lang2El = document.getElementById("ll2");
    if (lang1El) lang1El.innerText = storedData.language1 || "Not selected";
    if (lang2El) lang2El.innerText = storedData.language2 || "Not selected";

    if (storedData.image) {
      document.querySelector(".imagebox").style.backgroundImage = `url(${storedData.image})`;
    }
  }
}
};
