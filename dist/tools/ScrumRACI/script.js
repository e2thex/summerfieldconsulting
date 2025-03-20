// Store the current highlighted section
let currentHighlight = null;

// Function to load and highlight a section
function highlightSection(sectionId) {
    // Remove previous highlight
    if (currentHighlight) {
        currentHighlight.classList.remove('bg-accent-1/10');
    }

    // Find and highlight the new section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('bg-accent-1/10');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        currentHighlight = section;
    }
}

// Initialize the guide content
document.addEventListener('DOMContentLoaded', () => {
    const guideContent = document.getElementById('guide-content');
    
    // Load initial content
    fetch('scrum-guide.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            guideContent.innerHTML = html;
            
            // Add click event listeners to all RACI buttons
            document.querySelectorAll('[data-section]').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Remove all previous highlights
                    document.querySelectorAll('.highlight-section').forEach(el => {
                        el.classList.remove('bg-accent-1/10', 'highlight-section');
                    });
                    
                    // Add highlight to new section
                    const sectionId = e.target.dataset.section;
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.classList.add('bg-accent-1/10', 'highlight-section');
                        section.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center'
                        });
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error loading Scrum Guide:', error);
            guideContent.innerHTML = `
                <div class="text-red-500 p-4 border border-red-200 rounded-lg">
                    <p>Error loading Scrum Guide content. Please try refreshing the page.</p>
                    <p class="text-sm mt-2">Technical details: ${error.message}</p>
                </div>
            `;
        });
}); 