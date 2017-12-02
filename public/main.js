document.addEventListener('DOMContentLoaded', () => {
  const cancelBtn = document.getElementById('cancelBtn');
  const uploadBtn = document.getElementById('uploadBtn');
  const form = document.getElementsByTagName('form')[0];
  const uploadIcon = uploadBtn.getElementsByTagName('i')[0];

  // Upon form submission, update UI
  form.addEventListener('submit', () => {
    // Disable upload button and change icon
    uploadBtn.disabled = true;
    uploadIcon.classList.remove('fa-upload');
    uploadIcon.classList.add('fa-refresh', 'fa-spin');
    // After brief delay, show cancel button and hide input field
    setTimeout(() => {
      cancelBtn.classList.remove('hidden');
      document.getElementsByTagName('input')[0].classList.add('hidden');
    }, 300);
  });

  // Cancel button click handler
  cancelBtn.addEventListener('click', (e) => {
    // Prevent form resubmission
    e.preventDefault();
    // Refresh the page
    window.location.reload();
  });
});
