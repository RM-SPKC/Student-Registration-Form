// script.js

function validate() {
  // Get form elements
  const name = document.getElementById('t').value.trim();
  const email = document.querySelector('input[name="e"]').value.trim();
  const gender = document.querySelector('input[name="g"]:checked');
  const course = document.getElementById('ct').value;
  const comment = document.querySelector('textarea[name="cm"]').value.trim();

  // Name validation: not empty and at least 3 chars
  if (name.length < 3) {
    alert("Please enter a valid name with at least 3 characters.");
    return false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Gender validation: must be selected
  if (!gender) {
    alert("Please select your gender.");
    return false;
  }

  // Course validation: ensure something is selected (your select always has a value, so this is optional)
  if (!course) {
    alert("Please select a course.");
    return false;
  }

  // Comment validation: at least 10 characters
  if (comment.length < 10) {
    alert("Please enter a comment of at least 10 characters.");
    return false;
  }

  // If all validations pass
  return true;
}
