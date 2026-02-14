const poems = {
  hogar: {
    title: "Donde empieza el hogar",
    img: "fotos/Donde empieza un hogar.jpeg",
    text: `No fue un lugar,
fue tu cabeza en mi hombro
enseñándome que el descanso tiene nombre.

El mundo cambia de escenario,
pero nosotros repetimos el mismo gesto:
abrazarnos como si fuera la primera vez.

Porque el hogar
no se construye con paredes,
sino con brazos que siempre regresan.`
  },

  crecer: {
    title: "Crecer juntos",
    img: "fotos/Crecer juntos.jpeg",
    text: `No somos solo fotos bonitas
ni luces de fondo.

Somos disciplina,
manos que se sostienen
cuando la vida pesa.

Crecer juntos
es elegirnos cada día,
incluso bajo la lluvia.`
  },

  miles: {
    title: "Entre miles, tú",
    img: "fotos/entre miles, tu.jpeg",
    text: `Había luces,
música,
gente alrededor.

Pero cuando tu mejilla tocó la mía
todo quedó en silencio.

Entre miles,
mi mirada siempre sabrá
dónde descansar`
  },

  luz: {
    title: "Luz que no se apaga",
    img: "fotos/Luz que no se apaga.jpeg",
    text: `El cielo ardía en dorado
antes de rendirse a la noche.

Hay amores así:
aunque el sol se esconda,
dejan luz
que no se apaga.`
  },

  magia: {
    title: "Magia en medio del mundo",
    img: "fotos/magia en medio del mundo.jpeg",
    text: `Entre luces y lluvia
te encontré.

Tu mano en la mía,
un beso,
y el mundo quedó en pausa.

Si me preguntan qué es la magia,
diré nosotros.`
  }
};

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".flower").forEach(flower => {
  flower.addEventListener("click", () => {
    const key = flower.dataset.poem;
    const poem = poems[key];

    modalImg.src = poem.img;
    modalTitle.textContent = poem.title;
    modalText.textContent = poem.text;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
