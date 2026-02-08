document.addEventListener('DOMContentLoaded', () => {
    // Inicjalizacja ikon
    lucide.createIcons();

    // System przełączania stron (Vanilla SPA)
    function navigateTo(pageId) {
        document.querySelectorAll('.page-section').forEach(el => {
            el.classList.add('hidden');
        });
        const target = document.getElementById(pageId);
        if(target) {
            target.classList.remove('hidden');
            window.scrollTo(0, 0);
            
            // Animacja wejścia
            target.classList.remove('fade-in');
            void target.offsetWidth; // reset
            target.classList.add('fade-in');
        }
        
        // Zamykanie menu na telefonach
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden-mobile');
        }
    }

    // Nasłuchiwacz linków nawigacyjnych
    document.querySelectorAll('[data-route]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.getAttribute('data-route'));
        });
    });

    // Mobilne menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden-mobile');
        });
    }

    // Efekt przy scrollowaniu nawigacji
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (nav) {
            if (window.scrollY > 20) {
                nav.classList.add('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-3');
                nav.classList.remove('bg-transparent', 'py-5');
            } else {
                nav.classList.remove('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-3');
                nav.classList.add('bg-transparent', 'py-5');
            }
        }
    });

    // Skrót do ofert
    const scrollBtn = document.getElementById('scroll-to-offers');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            const oferta = document.getElementById('oferta');
            if(oferta) oferta.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Wysłanie formularza do Discord Webhook
    async function handleFormSubmit(e, formId, statusId) {
        e.preventDefault();
        const form = document.getElementById(formId);
        const statusEl = document.getElementById(statusId);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        const name = form.querySelector('[name="name"]').value;
        const email = form.querySelector('[name="email"]').value;
        const msg = form.querySelector('[name="message"]').value;
        const packageEl = form.querySelector('[name="package"]');
        const pkg = packageEl ? packageEl.value : 'Brak';

        const webhookUrl = "https://discord.com/api/webhooks/1468703353096900618/zuuWCp_PP-2X_UhFAASjPX909cotrYMnb9_WRExqVnflDR-_a5Aol4Z4trMrIiYh2AA0";

        const payload = {
            embeds: [{
                title: "📨 Nowa wiadomość od klienta",
                color: 0x6366f1,
                fields: [
                    { name: "👤 Imię", value: name, inline: true },
                    { name: "📧 Email", value: email, inline: true },
                    { name: "📦 Temat/Pakiet", value: pkg, inline: true },
                    { name: "💬 Wiadomość", value: msg, inline: false }
                ],
                timestamp: new Date().toISOString()
            }]
        };

        const originalBtnHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>';

        try {
            const res = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                statusEl.innerHTML = '<div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center font-medium mt-4 fade-in">Wysłano! Odpiszę najszybciej jak to możliwe.</div>';
                form.reset();
            } else {
                throw new Error();
            }
        } catch (err) {
            statusEl.innerHTML = '<div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-center font-medium mt-4 fade-in">Coś poszło nie tak. Napisz na ksite@proton.me</div>';
        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        lucide.createIcons(); // restore icon in button

        setTimeout(() => {
            statusEl.innerHTML = '';
        }, 5000);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) contactForm.addEventListener('submit', (e) => handleFormSubmit(e, 'contact-form', 'contact-status'));

    const offerForm = document.getElementById('offer-form');
    if (offerForm) offerForm.addEventListener('submit', (e) => handleFormSubmit(e, 'offer-form', 'offer-status'));

    // Dynamiczne dane o pakietach w oknie ofert
    const offersData = {
        'landing': {
            title: 'Prosta Strona (Landing)',
            price: 'ok. 999 PLN',
            timeline: '1-2 tygodnie',
            color: 'from-blue-500/20 to-cyan-500/20',
            icon: 'globe',
            iconColor: 'text-blue-400',
            desc: 'Strona, która ma tylko jeden cel — przekonać odwiedzającego i zebrać kontakt. Robię ją tak, żeby działała od razu bez zbędnego klikania.',
            features: ['Szybka, jedna strona (One-Page)', 'Wygląd idealnie pod Twój biznes', 'Prosty formularz żeby łapać maile', 'Pomoc z domeną', 'Super wygląda na telefonie', 'Zoptymalizowana żeby ładowała się w sekundę']
        },
        'business': {
            title: 'Strona dla Biznesu',
            price: 'ok. 2499 PLN',
            timeline: '3-4 tygodnie',
            color: 'from-violet-500/20 to-purple-500/20',
            icon: 'code-2',
            iconColor: 'text-violet-400',
            desc: 'Solidna wizytówka Twojej firmy. Kilka podstron, a do tego dostajesz panel, w którym sam możesz sobie podmienić tekst albo zdjęcie bez dzwonienia do mnie.',
            features: ['Do 5 zakładek (Start, O nas, Oferta itp.)', 'Wygodny panel do edycji strony', 'Animacje, żeby to jakoś wyglądało', 'Krótki poradnik jak tego używać', 'Podłączone social media i mapka']
        },
        'custom': {
            title: 'Coś Niestandardowego',
            price: 'Dogadamy się',
            timeline: 'Zależy co wymyślisz',
            color: 'from-emerald-500/20 to-teal-500/20',
            icon: 'palette',
            iconColor: 'text-emerald-400',
            desc: 'Masz pomysł, który w ogóle nie pasuje do gotowych ofert? Super. Pogadamy o tym, co siedzi w Twojej głowie i zobaczymy, jak to przenieść na ekran.',
            features: ['Aplikacje w przeglądarce', 'Dziwne i fajne funkcje', 'Jakieś trudne kalkulatory', 'Dedykowane logowanie dla klientów', 'Łączenie z innymi serwisami (API)', 'Wszystko inne, co przyjdzie Ci do głowy']
        }
    };

    document.querySelectorAll('[data-offer]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-offer');
            const data = offersData[id];

            document.getElementById('od-icon-container').className = `inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${data.color} mb-8 border border-white/10 shadow-2xl`;
            document.getElementById('od-icon-container').innerHTML = `<i data-lucide="${data.icon}" class="w-12 h-12 ${data.iconColor}"></i>`;
            
            document.getElementById('od-title').innerText = data.title;
            document.getElementById('od-price').innerText = data.price;
            document.getElementById('od-timeline').innerText = 'Czas realizacji: ' + data.timeline;
            document.getElementById('od-desc').innerText = data.desc;
            document.getElementById('od-form-title').innerText = data.title;
            
            const packageInput = document.getElementById('od-package');
            if (packageInput) packageInput.value = data.title;

            const featuresList = document.getElementById('od-features');
            featuresList.innerHTML = '';
            data.features.forEach(f => {
                featuresList.innerHTML += `<li class="flex items-start gap-3 bg-slate-900/50 p-4 rounded-xl border border-white/5">
                    <i data-lucide="check-circle-2" class="w-5 h-5 text-indigo-400 shrink-0 mt-0.5"></i>
                    <span class="text-slate-300 font-medium leading-relaxed">${f}</span>
                </li>`;
            });

            lucide.createIcons();
            navigateTo('page-offer');
        });
    });
});