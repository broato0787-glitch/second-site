document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    const AUTH_USERS_KEY = 'swesco_auth_users';
    const LOGGED_IN_USER_KEY = 'swesco_logged_in_user';

    const getAuthUsers = () => {
        const raw = localStorage.getItem(AUTH_USERS_KEY);
        return raw ? JSON.parse(raw) : {};
    };

    const saveAuthUsers = (users) => {
        localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
    };

    const setLoggedInUser = (email) => {
        localStorage.setItem(LOGGED_IN_USER_KEY, email);
    };

    const getLoggedInUser = () => {
        return localStorage.getItem(LOGGED_IN_USER_KEY);
    };

    const getOrCreateSocialUser = (provider) => {
        const email = `${provider.toLowerCase()}@social.swesco.local`;
        const users = getAuthUsers();
        if (!users[email]) {
            users[email] = {
                name: `${provider} User`,
                email,
                password: '',
                provider
            };
            saveAuthUsers(users);
        }
        return { email, user: users[email] };
    };

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim()) {
                alert(`Thanks for subscribing, ${emailInput.value.trim()}!`);
                newsletterForm.reset();
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = loginForm.querySelector('input[name="email"]').value.trim().toLowerCase();
            const password = loginForm.querySelector('input[name="password"]').value.trim();

            if (!email || !password) {
                alert('Please enter both email and password.');
                return;
            }

            const users = getAuthUsers();
            const user = users[email];

            if (!user || user.password !== password) {
                alert('Invalid email or password.');
                return;
            }

            setLoggedInUser(email);
            window.location.href = 'home.html';
        });
    }

    const socialButtons = document.querySelectorAll('.social-button');
    const socialAuthPanel = document.getElementById('socialAuthPanel');
    const socialAuthForm = document.getElementById('socialAuthForm');
    const socialAuthTitle = document.getElementById('socialAuthTitle');
    const socialAuthDescription = document.getElementById('socialAuthDescription');
    const socialAuthEmail = document.getElementById('socialEmail');
    const socialAuthProvider = document.getElementById('socialAuthProvider');
    const socialClose = document.querySelector('.social-close');

    const openSocialForm = (provider) => {
        if (!socialAuthPanel || !socialAuthTitle || !socialAuthDescription || !socialAuthEmail || !socialAuthProvider) {
            return;
        }

        socialAuthTitle.textContent = `Sign in with ${provider}`;
        socialAuthDescription.textContent = `Use your ${provider} credentials to continue to SWESCO MACHINE BOYS.`;
        socialAuthEmail.value = `${provider.toLowerCase()}@social.swesco.local`;
        socialAuthProvider.value = provider;
        socialAuthPanel.classList.remove('hidden');
        socialAuthPanel.setAttribute('aria-hidden', 'false');
    };

    const closeSocialForm = () => {
        if (!socialAuthPanel) return;
        socialAuthPanel.classList.add('hidden');
        socialAuthPanel.setAttribute('aria-hidden', 'true');
    };

    if (socialButtons.length) {
        socialButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const provider = button.classList.contains('google') ? 'Google' :
                    button.classList.contains('facebook') ? 'Facebook' : 'Twitter';
                openSocialForm(provider);
            });
        });
    }

    if (socialClose) {
        socialClose.addEventListener('click', closeSocialForm);
    }

    if (socialAuthForm) {
        socialAuthForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const provider = socialAuthProvider.value;
            const email = socialAuthEmail.value.trim().toLowerCase();
            const password = socialAuthForm.querySelector('input[name="socialPassword"]').value.trim();

            if (!provider || !email || !password) {
                alert('Please complete the social login form.');
                return;
            }

            const users = getAuthUsers();
            if (!users[email]) {
                users[email] = {
                    name: `${provider} User`,
                    email,
                    password,
                    provider
                };
                saveAuthUsers(users);
            }

            setLoggedInUser(email);
            window.location.href = 'home.html';
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = signupForm.querySelector('input[name="name"]').value.trim();
            const email = signupForm.querySelector('input[name="email"]').value.trim().toLowerCase();
            const password = signupForm.querySelector('input[name="password"]').value.trim();
            const confirmPassword = signupForm.querySelector('input[name="confirmPassword"]').value.trim();

            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all sign-up fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            const users = getAuthUsers();
            if (users[email]) {
                alert('An account already exists with this email.');
                return;
            }

            users[email] = {
                name,
                email,
                password
            };
            saveAuthUsers(users);

            alert('Account created successfully. Please login.');
            window.location.href = 'login.html';
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = contactForm.querySelector('input[name="name"]').value.trim();
            const email = contactForm.querySelector('input[name="email"]').value.trim();
            const message = contactForm.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Please fill in all fields before sending.');
                return;
            }

            alert('Thank you, ' + name + '! Your message is being sent.');
        });
    }
});
