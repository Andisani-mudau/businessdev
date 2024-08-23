import Home from "./views/Home.js";
import Coming from "./views/Coming.js";


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};
const router = async () => {
    const routes = [
        { path: "/", view: Home},
        { path: "/coming", view: Coming}
    ];
    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));
    
    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
            
            
        }
    });
    router();
});


// script.js
 /* document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('section');

    // Intersection Observer to handle fade-in/fade-out effects
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
                                
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Trigger fade-in for the first sect
    
    sections[0].classList.add('visible');
});         

 */

/* document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once loaded
                //observer.unobserve(entry.target);
            }
            else{
                entry.target.classList.remove('visible');
                // Optional: Stop observing once loaded
                //observer.observe(entry.target);
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

    // If new sections are added dynamically, observe them as well
    document.addEventListener('DOMNodeInserted', function(event) {
        if (event.target.tagName === 'SECTION') {
            observer.observe(event.target);
        }
    });
}); */

/*
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
*/
