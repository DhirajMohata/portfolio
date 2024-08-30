const emailButtons = document.querySelectorAll(".copy-email-button"),
  shareButtons = document.querySelectorAll(".copy-website-button");

emailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tempTextarea = document.createElement("textarea");
    const emailAddress = "dhirajmohata86@gmail.com";
    tempTextarea.value = emailAddress;
    tempTextarea.style.position = "absolute";
    tempTextarea.style.left = "-9999px";
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
    } finally {
      document.body.removeChild(tempTextarea);
    }
  });
});

shareButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tempTextarea = document.createElement("textarea");
    const emailAddress = "https://dhirajmohata.vercel.app";
    tempTextarea.value = emailAddress;
    tempTextarea.style.position = "absolute";
    tempTextarea.style.left = "-9999px";
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
    } finally {
      document.body.removeChild(tempTextarea);
    }
  });
});
