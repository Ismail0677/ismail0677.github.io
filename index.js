
document.getElementById("formInscription").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));
  
  const response = await fetch("https://docs.google.com/spreadsheets/d/1qSQy7A3pgcL8JNF3bMfDEV3Upw7zGNJP_ukg6cNzkAU/edit?gid=0#gid=0",{
    method: "POST",
    body: JSON.stringify(data)
  });

  if (response.ok) {
    document.getElementById("msg").style.display = "block";
    e.target.reset();
  } else {
    alert("Erreur lors de l'inscription !");
  }
});
