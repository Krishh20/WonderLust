(() => {
    'use strict';

    console.log('Validation script loaded');

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    console.log('Forms found:', forms);

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        console.log('Form submit event');

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          console.log('Form is invalid');
        }

        form.classList.add('was-validated');
      }, false);
    });
  })();

