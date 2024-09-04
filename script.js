document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        moreInfo.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        moreInfo.classList.add('hidden');
        moreInfo.style.display = 'none';
        this.textContent = 'Learn More';
    }
});