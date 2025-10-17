const subjects = document.querySelectorAll('.subject');
const iframeContainer = document.querySelector('.iframe-container');
const iframe = document.getElementById('subjectFrame');
const backBtn = document.getElementById('backBtn');

// Open iframe when a subject is clicked
subjects.forEach(subject => {
  subject.addEventListener('click', () => {
    const url = subject.dataset.url;
    iframeContainer.classList.add('active');
    iframe.classList.remove('loaded');
    iframe.src = url;
    backBtn.style.display = 'block';
    iframe.onload = () => iframe.classList.add('loaded');
  });
});

// Back button
backBtn.addEventListener('click', () => {
  iframeContainer.classList.remove('active');
  iframe.src = '';
  iframe.classList.remove('loaded');
  backBtn.style.display = 'none';
});
