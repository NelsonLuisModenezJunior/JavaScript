document
  .getElementById("reading-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const totalPages = document.getElementById("total-pages").value;
    const pagesRead = document.getElementById("pages-read").value;

    if (totalPages > 0 && pagesRead >= 0) {
      const progressPercentage = (pagesRead / totalPages) * 100;
      updateProgressBar(progressPercentage);
    }
  });

function updateProgressBar(percentage) {
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = percentage + "%";
}
