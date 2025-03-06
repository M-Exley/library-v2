export default function validate(input) {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]+(?: [A-Za-zÀ-ÖØ-öø-ÿ'-]+)+$/;
  const isValid = nameRegex.test(input.value.trim());

  if (!isValid) {
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
    console.log("Validation failed"); // Debugging
  } else {
    input.classList.remove("invalid");
    input.setAttribute("aria-invalid", "false");
    console.log("Validation passed"); // Debugging
  }

  console.log(isValid);
  return isValid; // Return true if valid, false if invalid
}
