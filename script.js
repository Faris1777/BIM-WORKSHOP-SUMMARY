document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const body = document.body;

    // Apply staggered fade in animation for cards
    cards.forEach((card, index) => {
        // We delay each slide slightly for a cascading load effect
        card.style.animation = `fadeIn 0.8s ease-out ${0.2 + (index * 0.15)}s both`;

        card.addEventListener('click', (e) => {
            // Ignore click if clicking the close button
            if (e.target.closest('.close-btn')) return;

            // If it's a hub link, let the href navigate without expanding
            if (card.classList.contains('hub-card')) return;

            // If it's already expanded, do nothing
            if (!card.classList.contains('expanded')) {
                // Ensure any other expanded card is closed first
                cards.forEach(c => c.classList.remove('expanded'));
                
                // Expand this card
                card.classList.add('expanded');
                body.classList.add('has-expanded-card');
            }
        });

        // Setup the close button
        const closeBtn = card.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevents the card click listener from firing immediately
                card.classList.remove('expanded');
                body.classList.remove('has-expanded-card');
            });
        }
    });

    // Optional: Pressing Escape closes the expanded card
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && body.classList.contains('has-expanded-card')) {
            cards.forEach(c => c.classList.remove('expanded'));
            body.classList.remove('has-expanded-card');
        }
    });

    // Slider logic specific for Card 1
    const card1Track = document.getElementById('card1-track');
    const card1Dots = document.getElementById('card1-dots');
    
    if (card1Track && card1Dots) {
        const dots = card1Dots.querySelectorAll('.dot');
        
        // Helper to reset back to first slide
        const resetSlider = () => {
            card1Track.style.transform = `translateX(0%)`;
            dots.forEach(d => d.classList.remove('active'));
            if(dots[0]) dots[0].classList.add('active');
        };

        // Navigation clicks
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent clicking dots from accidentally interacting with the card background triggers
                
                const index = parseInt(dot.getAttribute('data-index'), 10);
                
                // Track is 500% wide. Translate by percentages relative to its huge width
                card1Track.style.transform = `translateX(-${index * 20}%)`;
                
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });

        // Ensure slider resets correctly whenever card 1 closes
        const card1Close = cards[0].querySelector('.close-btn');
        if (card1Close) {
            card1Close.addEventListener('click', resetSlider);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') resetSlider();
            
            // Only respond to arrows if this specific card is expanded
            if (cards[0] && cards[0].classList.contains('expanded')) {
                let activeIndex = Array.from(dots).findIndex(d => d.classList.contains('active'));
                if (e.key === 'ArrowRight' && activeIndex < dots.length - 1) {
                    dots[activeIndex + 1].click();
                } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
                    dots[activeIndex - 1].click();
                }
            }
        });
    }

    // Slider logic specific for Card 2
    const card2Track = document.getElementById('card2-track');
    const card2Dots = document.getElementById('card2-dots');
    
    if (card2Track && card2Dots) {
        const dots2 = card2Dots.querySelectorAll('.dot');
        
        const resetSlider2 = () => {
            card2Track.style.transform = `translateX(0%)`;
            dots2.forEach(d => d.classList.remove('active'));
            if(dots2[0]) dots2[0].classList.add('active');
        };

        dots2.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const index = parseInt(dot.getAttribute('data-index'), 10);
                
                // Track explicitly mathematically synced to 100% css width, translating by exactly 1 viewer box (100%)
                card2Track.style.transform = `translateX(-${index * 100}%)`;
                
                dots2.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });

        // Ensure slider resets correctly whenever card 2 closes
        const card2Close = cards[1].querySelector('.close-btn');
        if (card2Close) {
            card2Close.addEventListener('click', resetSlider2);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') resetSlider2();
            
            // Only respond to arrows if this specific card is expanded
            if (cards[1] && cards[1].classList.contains('expanded')) {
                let activeIndex = Array.from(dots2).findIndex(d => d.classList.contains('active'));
                if (e.key === 'ArrowRight' && activeIndex < dots2.length - 1) {
                    dots2[activeIndex + 1].click();
                } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
                    dots2[activeIndex - 1].click();
                }
            }
        });
    }

    // Slider logic specific for Card 3
    const card3Track = document.getElementById('card3-track');
    const card3Dots = document.getElementById('card3-dots');
    
    if (card3Track && card3Dots) {
        const dots3 = card3Dots.querySelectorAll('.dot');
        
        const resetSlider3 = () => {
            card3Track.style.transform = `translateX(0%)`;
            dots3.forEach(d => d.classList.remove('active'));
            if(dots3[0]) dots3[0].classList.add('active');
        };

        dots3.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const index = parseInt(dot.getAttribute('data-index'), 10);
                
                card3Track.style.transform = `translateX(-${index * 100}%)`;
                
                dots3.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });

        const card3Close = cards[2].querySelector('.close-btn');
        if (card3Close) {
            card3Close.addEventListener('click', resetSlider3);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') resetSlider3();
            
            if (cards[2] && cards[2].classList.contains('expanded')) {
                let activeIndex = Array.from(dots3).findIndex(d => d.classList.contains('active'));
                if (e.key === 'ArrowRight' && activeIndex < dots3.length - 1) {
                    dots3[activeIndex + 1].click();
                } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
                    dots3[activeIndex - 1].click();
                }
            }
        });
    }

    // Slider logic specific for Card 4
    const card4Track = document.getElementById('card4-track');
    const card4Dots = document.getElementById('card4-dots');
    
    if (card4Track && card4Dots) {
        const dots4 = card4Dots.querySelectorAll('.dot');
        
        const resetSlider4 = () => {
            card4Track.style.transform = `translateX(0%)`;
            dots4.forEach(d => d.classList.remove('active'));
            if(dots4[0]) dots4[0].classList.add('active');
        };

        dots4.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const index = parseInt(dot.getAttribute('data-index'), 10);
                
                card4Track.style.transform = `translateX(-${index * 100}%)`;
                
                dots4.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });

        const card4Close = cards[3].querySelector('.close-btn');
        if (card4Close) {
            card4Close.addEventListener('click', resetSlider4);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') resetSlider4();
            
            if (cards[3] && cards[3].classList.contains('expanded')) {
                let activeIndex = Array.from(dots4).findIndex(d => d.classList.contains('active'));
                if (e.key === 'ArrowRight' && activeIndex < dots4.length - 1) {
                    dots4[activeIndex + 1].click();
                } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
                    dots4[activeIndex - 1].click();
                }
            }
        });
    }
    // Smooth premium page transitions (Opacity + Blur delay)
    document.querySelectorAll('a.nav-link, a.hub-card, a.menu-point, a.mini-card, a.back-arrow').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = link.getAttribute('href');
            
            if (target && target !== '#') {
                e.preventDefault();
                document.body.classList.remove('page-fade-in');
                document.body.classList.add('page-fade-out');
                
                setTimeout(() => {
                    if (target.includes('javascript:history.back()')) {
                        history.back();
                    } else {
                        window.location.href = target;
                    }
                }, 350); // 350ms delay to feel "premium" instead of instant
            }
        });
    });

    // Progress Tracker Logic
    const updateProgress = () => {
        const total = 21;
        const checkboxes = document.querySelectorAll('.chapter-checkbox');
        const checked = Array.from(checkboxes).filter(cb => cb.classList.contains('checked')).length;
        
        const countEl = document.getElementById('prog-count');
        const barEl = document.getElementById('prog-bar');
        const percentEl = document.getElementById('prog-percent');
        
        if (countEl) countEl.innerText = checked;
        if (barEl) barEl.style.width = `${(checked / total) * 100}%`;
        if (percentEl) percentEl.innerText = `${Math.round((checked / total) * 100)}%`;
    };

    // Chapter Checkbox logic with Local Storage persistence
    document.querySelectorAll('.chapter-checkbox').forEach(checkbox => {
        const chapterId = checkbox.getAttribute('data-chapter');
        const card = checkbox.closest('.mini-card');

        if (!chapterId) return; // safety check

        // Restore state from local storage on load
        if (localStorage.getItem('chapter_' + chapterId) === 'completed') {
            checkbox.classList.add('checked');
            if (card) card.classList.add('completed');
        }

        checkbox.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // prevent the parent link component from triggering navigation
            
            checkbox.classList.toggle('checked');
            
            if (checkbox.classList.contains('checked')) {
                localStorage.setItem('chapter_' + chapterId, 'completed');
                if (card) card.classList.add('completed');
            } else {
                localStorage.removeItem('chapter_' + chapterId);
                if (card) card.classList.remove('completed');
            }
            
            updateProgress(); // Re-calculate progress
        });
    });

    updateProgress(); // Initial load calculation
});


    // ==========================================
    
// INTERACTIVE CIRCLE SYSTEM (WORKSPACE) & LOCAL STORAGE REFACTOR

// STEP 1: VERIFY JAVASCRIPT IS RUNNING
console.log("JS LOADED");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM LOADED - EXECUTING WORKSPACE LOGIC");
    
    // Build unique identifier so each chapter acts independently
    const pathSplit = window.location.pathname.split('/');
    let chapterId = pathSplit[pathSplit.length - 1].replace('.html', '');
    if (!chapterId || chapterId === '') chapterId = 'home_target';

    const triggerSaveGlow = (el) => {
        const og = el.style.boxShadow;
        el.style.boxShadow = '0 0 20px rgba(204, 255, 0, 0.4)';
        setTimeout(() => el.style.boxShadow = og, 600);
    };

    // ==========================================
    // STEP 5: FIX LOCAL STORAGE (OBJECTIVES)
    // ==========================================
    const objectives = document.querySelectorAll(".editable-objectives [contenteditable]");
    console.log("Found objectives:", objectives.length);

    objectives.forEach((el, index) => {
        const key = "objective_" + index + "_" + chapterId; // preserving chapter independence
        
        const saved = localStorage.getItem(key);
        if (saved) el.innerHTML = saved;

        el.addEventListener("input", () => {
            localStorage.setItem(key, el.innerHTML);
            triggerSaveGlow(el);
            console.log("Saved objective:", key);
        });
    });

    // ==========================================
    // STEP 2: VERIFY MAIN CIRCLE DETECTION
    // ==========================================
    const container = document.querySelector(".circle-system-container");
    const mainCircle = document.querySelector(".main-circle");
    console.log("Main Circle found:", mainCircle);

    if (container && mainCircle) {
        
        // CIRCLES STORAGE:
        let circles = JSON.parse(localStorage.getItem(`circles_${chapterId}`)) || ["Req 1", "Req 2", "Req 3"];
        let orbitNodes = [];
        const radius = 220;

        const mainEdit = mainCircle.querySelector('.edit-text');
        if (mainEdit) {
            const savedCenter = localStorage.getItem(`main_circle_${chapterId}`);
            if (savedCenter) mainEdit.innerHTML = savedCenter;
            
            mainEdit.addEventListener("input", () => {
                localStorage.setItem(`main_circle_${chapterId}`, mainEdit.innerHTML);
                triggerSaveGlow(mainEdit);
            });
        }

        const updatePositions = () => {
            const total = orbitNodes.length;
            orbitNodes.forEach((node, i) => {
                const angle = (i * (Math.PI * 2)) / total - (Math.PI / 2);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                node.style.transform = `translate(${x}px, ${y}px)`;
            });
        };

        const saveCirclesArray = () => {
            circles = orbitNodes.map(node => {
                const editNode = node.querySelector('.edit-text');
                return editNode ? editNode.innerHTML : '';
            });
            localStorage.setItem(`circles_${chapterId}`, JSON.stringify(circles));
            console.log("Saved circles array. Total:", circles.length);
        };

        const createCircleNode = (textContent, animateScale = false) => {
            const newCircle = document.createElement("div");
            newCircle.classList.add("sys-circle", "orbit-circle");
            
            if (animateScale) {
                newCircle.style.transform = `translate(0px, 0px) scale(0)`;
                setTimeout(() => {
                    newCircle.style.transition = 'border-color 0.4s, box-shadow 0.4s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                }, 50);
            }

            newCircle.innerHTML = `<div class="edit-text" contenteditable="true">${textContent}</div>`;
            container.appendChild(newCircle);
            orbitNodes.push(newCircle);
            
            const editField = newCircle.querySelector('.edit-text');
            if (editField) {
                editField.addEventListener("input", () => {
                    saveCirclesArray();
                    triggerSaveGlow(editField);
                });
            }
            return newCircle;
        };

        // On page load recreate visually
        circles.forEach(txt => createCircleNode(txt, false));
        updatePositions();

        // STEP 4: FORCE SIMPLE CIRCLE ADD 
        function addCircle() {
            const newText = `Req ${orbitNodes.length + 1}`;
            createCircleNode(newText, true); 
            saveCirclesArray();
            updatePositions();
            console.log("Circle added successfully!");
        }

        // STEP 3: FORCE CLICK TEST
        mainCircle.addEventListener("click", function (e) {
            console.log("CLICK WORKS");
            if (e.target.hasAttribute("contenteditable")) return;
            addCircle();
        });
    }

    // ==========================================
    // SIDEBAR & VIEW SWITCHING LOGIC
    // ==========================================
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const viewSections = document.querySelectorAll('.view-section');

    const toggleSidebar = () => {
        if(sidebar) sidebar.classList.toggle('open');
        if(sidebarOverlay) sidebarOverlay.classList.toggle('show');
    };

    if (hamburgerMenu) hamburgerMenu.addEventListener('click', toggleSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state on links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Hide all views
            viewSections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('active-view');
            });

            // Show target view
            const targetId = link.getAttribute('data-target');
            const targetView = document.getElementById(targetId);
            if (targetView) {
                // Use a default flex display, index.css and classes handle internal layouts
                targetView.style.display = 'flex';
                // For test view, we keep its specific inline alignment rules (or we can let css handle it)
                targetView.classList.add('active-view');
            }

            // Update header title to match clicked link
            const headerTitle = document.querySelector('.header-title');
            if (headerTitle) {
                headerTitle.textContent = link.textContent.trim();
            }

            // Close sidebar on mobile/desktop after clicking naturally
            toggleSidebar();
        });
    });

    // Slider logic specific for Test View (BIM WORKSHOP)
    const testTrack = document.getElementById('test-track');
    const testDotsContainer = document.getElementById('test-dots');
    
    if (testTrack && testDotsContainer) {
        const testDots = testDotsContainer.querySelectorAll('.dot');
        
        testDots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const index = parseInt(dot.getAttribute('data-index'), 10);
                
                testTrack.style.transform = `translateX(-${index * 100}%)`;
                
                testDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });

        document.addEventListener('keydown', (e) => {
            const testView = document.getElementById('test-view');
            if (testView && testView.style.display !== 'none') {
                let activeIndex = Array.from(testDots).findIndex(d => d.classList.contains('active'));
                if (e.key === 'ArrowRight' && activeIndex < testDots.length - 1) {
                    testDots[activeIndex + 1].click();
                } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
                    testDots[activeIndex - 1].click();
                }
            }
        });
    }

});
