document.addEventListener('DOMContentLoaded', () => {
    // Highlight featured section on homepage
    const featured = document.querySelector('.featured');
    if (featured) {
      featured.addEventListener('mouseover', () => {
        featured.style.backgroundColor = '#e8f4ff';
      });
      featured.addEventListener('mouseout', () => {
        featured.style.backgroundColor = '';
      });
    }
  
    // Add confirmation message after submitting a review (user-reviews.html)
    const reviewForm = document.querySelector('form[action*="formspree.io"]');
    if (reviewForm) {
      reviewForm.addEventListener('submit', (e) => {
        alert('Thanks for submitting your review!');
      });
    }
  
    // Toggle display of comparison table (comparison.html)
    const comparisonSection = document.querySelector('.comparison');
    if (comparisonSection) {
      const button = document.createElement('button');
      button.textContent = 'Hide/Show Table';
      button.style.margin = '1rem 0';
      comparisonSection.insertBefore(button, comparisonSection.querySelector('table'));
  
      const table = comparisonSection.querySelector('table');
      button.addEventListener('click', () => {
        if (table.style.display === 'none') {
          table.style.display = 'table';
        } else {
          table.style.display = 'none';
        }
      });
    }
  });
  