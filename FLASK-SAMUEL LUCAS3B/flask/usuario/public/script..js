document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value
  };

  try {
    const res = await fetch("/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    alert(JSON.stringify(json));
  } catch (err) {
    console.error("Erro:", err);
    alert("Erro ao enviar dados");
  }
});