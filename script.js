// FAQ Toggle Functionality
const faqData = [
    {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price."
    },
    {
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
        question: "How do I cancel?",
        answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime."
    },
    {
        question: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }
];

document.querySelectorAll('.faqbox').forEach((box, index) => {
    const icon = box.querySelector('i');
    let isOpen = false;
    
    box.addEventListener('click', () => {
        if (!isOpen) {
            const answer = document.createElement('div');
            answer.className = 'faq-answer';
            answer.textContent = faqData[index].answer;
            box.appendChild(answer);
            icon.classList.replace('fa-plus', 'fa-times');
            box.style.backgroundColor = '#414141';
            isOpen = true;
        } else {
            box.removeChild(box.querySelector('.faq-answer'));
            icon.classList.replace('fa-times', 'fa-plus');
            box.style.backgroundColor = '#2d2d2d';
            isOpen = false;
        }
    });
});

// Email Validation
document.querySelectorAll('.btn-red').forEach(button => {
    button.addEventListener('click', (e) => {
        const emailInput = e.target.closest('.hero-buttons').querySelector('input[type="email"]');
        const email = emailInput.value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            emailInput.style.borderColor = '#ff0000';
        } else {
            emailInput.style.borderColor = 'rgba(246, 238, 238, 0.5)';
            alert('Thank you for signing up! Redirecting...');
            emailInput.value = '';
        }
    });
});

// Language Selector
document.getElementById('lang').addEventListener('change', function() {
    console.log('Language changed to:', this.value);
    // Add actual language change logic here
});

// Sign In Button
document.querySelector('.btn-red-sm').addEventListener('click', () => {
    // Add actual sign in logic here
    alert('Redirecting to sign in page...');
});

// Video Hover Effects
document.querySelectorAll('.secImg').forEach(container => {
    const video = container.querySelector('video');
    
    if (video) {
        container.addEventListener('mouseenter', () => {
            video.play();
        });
        
        container.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});