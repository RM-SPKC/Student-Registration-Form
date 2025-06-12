

function validate()
  {
  const name = document.getElementById('t').value.trim();
  const email = document.querySelector('input[name="e"]').value.trim();
  const gender = document.querySelector('input[name="g"]:checked');
  const course = document.getElementById('ct').value;
  const comment = document.querySelector('textarea[name="cm"]').value.trim();

  
  if (name.length < 3) 
  {
    alert("Please enter a valid name with at least 3 characters.");
    return false;
  }

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email))
  {
    alert("Please enter a valid email address.");
    return false;
  }
    
  if (!gender) 
  {
    alert("Please select your gender.");
    return false;
  }

  if (!course)
  {
    alert("Please select a course.");
    return false;
  }

  if (comment.length < 10)
  {
    alert("Please enter a comment of at least 10 characters.");
    return false;
  }
    
  return true;
}
