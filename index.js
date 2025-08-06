function displayValues() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const comment = document.getElementById("comment").value;

  alert(`Name:${name}
    Email:${email}
    Subject:${subject}
    Comment:${comment}
    `);
}

document.getElementById("formbtn").onclick = displayValues;
