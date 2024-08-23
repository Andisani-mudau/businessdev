document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once loaded if you don't want to re-trigger
                //observer.unobserve(entry.target);
            }else{
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.7 // Load when 10% of the section is visible
    });

    function observeSections() {
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Initial observation
    observeSections();

    // Use MutationObserver to detect when new sections are added
    const mutationObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.tagName === 'SECTION') {
                    observer.observe(node);
                }
            });
        });
    });

    // Start observing the document body for added nodes
    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
});

const logo = document.querySelector('.logo');
const form = document.querySelector('form');
const socials = document.querySelector('.socials');
const navlist = document.querySelector('.nav-list');
document.getElementById("menu-circle").addEventListener("click", function() {
    var menu = document.getElementById("dropdown");
    menu.classList.add("open");
    logo.classList.add("moved");
    form.classList.add("show");
    socials.classList.add("show");
    navlist.classList.add("show");
});

document.getElementById("close-button").addEventListener("click", function() {
    var menu = document.getElementById("dropdown");
    menu.classList.remove("open");
    logo.classList.remove("moved");
    form.classList.remove("show");
    socials.classList.remove("show");
    navlist.classList.remove("show");
});
