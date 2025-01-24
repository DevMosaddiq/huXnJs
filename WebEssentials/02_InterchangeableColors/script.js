const body = document.body;
const btn = document.querySelectorAll("i");
const themeToogle = document.querySelector(".theme-toogle");
const darkTheme = document.querySelector(".dark-theme");
const gradientTheme = document.querySelector(".gradient-toogle");

themeToogle.addEventListener("click", (e) => {
  classes = e.target.classList;
  console.log(classes);
  if (classes.contains("dark-theme")) {
    if (classes.contains("gradient")) {
      body.classList.remove("gradient");
      themeToogle.classList.remove("gradient");
      darkTheme.classList.remove("gradient");
      gradientTheme.classList.remove("gradient");
    } else {
      body.classList.toggle("dark");
      themeToogle.classList.toggle("dark");
      darkTheme.classList.toggle("dark");
      gradientTheme.classList.toggle("dark");
    }
  } else if (classes.contains("gradient-theme")) {
    if (classes.contains("dark")) {
      body.classList.remove("dark");
      themeToogle.classList.remove("dark");
      darkTheme.classList.remove("dark");
      gradientTheme.classList.remove("dark");
    } else {
      body.classList.toggle("gradient");
      themeToogle.classList.toggle("gradient");
      darkTheme.classList.toggle("gradient");
      gradientTheme.classList.toggle("gradient");
    }
    // body.classList.toggle("dark");
    // themeToogle.classList.toggle("dark");
    // darkTheme.classList.toggle("dark");
    // gradientTheme.classList.toggle("dark");

    // body.classList.toggle("gradient");
    // themeToogle.classList.toggle("gradient");
    // darkTheme.classList.toggle("gradient");
    // gradientTheme.classList.toggle("gradient");
  }
});
