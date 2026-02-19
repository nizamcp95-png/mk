/* ========== SAMPLE DATASET - 20+ KAVIDHAI ==========
 * Edit poems below. Each item: id, title, category, text, year(optional)
 * Categories: அன்பு, தமிழ், சமூகநீதி, உழைப்பு, மனிதநேயம், அரசியல்
 */
const KAVIDHAI_DATA = [
    {
        id: 1,
        title: "அன்னையின் அன்பு",
        category: "அன்பு",
        text: "அன்னையின் கண்களில்\nஅன்பு தெரியும்\nஅவள் கையில்\nவாழ்வு தெரியும்\n\nஎனக்காக அழுதவள்\nஎனக்காக அழுதாள்\nஅன்னையின் அன்பு\nஎன்றும் மறக்க முடியாது",
        year: 1965
    },
    {
        id: 2,
        title: "தமிழ் மொழி",
        category: "தமிழ்",
        text: "தமிழ் மொழி பழமையானது\nதமிழ் மொழி இனிமையானது\nதமிழ் மொழி எங்கள் மொழி\nதமிழ் மொழி வாழ்க\n\nதெருக்களில் தமிழ் பேசுவோம்\nவீடுகளில் தமிழ் பேசுவோம்\nதமிழ் எங்கள் உயிர்\nதமிழ் எங்கள் மொழி",
        year: 1970
    },
    {
        id: 3,
        title: "சமூக நீதி",
        category: "சமூகநீதி",
        text: "சமூக நீதி வேண்டும்\nசமத்துவம் வேண்டும்\nஎல்லாரும் சமமாக\nவாழ வேண்டும்\n\nஉயர்ந்தவர் தாழ்ந்தவர்\nஇல்லை வேண்டும்\nசமூக நீதி\nவர வேண்டும்",
        year: 1990
    },
    {
        id: 4,
        title: "உழைப்பின் மகிமை",
        category: "உழைப்பு",
        text: "உழைப்பு தான் வாழ்வு\nஉழைப்பு தான் செல்வம்\nஉழைப்பு இல்லையேல்\nவாழ்வு இல்லை\n\nகைத்தொழில் உழைப்பு\nவயல் உழைப்பு\nஎல்லா உழைப்பும்\nமதிக்கப்பட வேண்டும்",
        year: 1985
    },
    {
        id: 5,
        title: "மனிதநேயம்",
        category: "மனிதநேயம்",
        text: "மனிதனுக்கு மனிதன்\nநேயம் வேண்டும்\nஎல்லாரும் சகோதரர்கள்\nஇந்த உலகில்\n\nமனிதநேயம் இல்லையேல்\nவாழ்வு இல்லை\nஅன்பு அருள் இல்லையேல்\nவாழ்வு வெறும்",
        year: 2000
    },
    {
        id: 6,
        title: "அரசியல் நோக்கம்",
        category: "அரசியல்",
        text: "அரசியல் என்பது\nமக்களுக்காக\nஅரசியல் என்பது\nசமூக மாற்றத்திற்காக\n\nசுயநலம் அல்ல\nசமூக நலம்\nஇதுவே அரசியலின்\nஉண்மையான நோக்கம்",
        year: 1995
    },
    {
        id: 7,
        title: "நண்பனுக்கு",
        category: "அன்பு",
        text: "நண்பா நீ இருந்தால்\nவாழ்வு இனிமையாகும்\nநண்பா நீ இருந்தால்\nபயணம் சுலபமாகும்\n\nநண்பர்கள் இல்லையேல்\nவாழ்வு வெறுமையாகும்\nநண்பனே நீ\nஎன் வாழ்வின் ஒளி",
        year: 1975
    },
    {
        id: 8,
        title: "தமிழ் இலக்கியம்",
        category: "தமிழ்",
        text: "சங்க இலக்கியம்\nசிறந்த இலக்கியம்\nதமிழ் இலக்கியம்\nஉலகிற்கு சொந்தம்\n\nசிலப்பதிகாரம்\nமணிமேகலை\nஇவை எங்கள்\nபாரம்பரியம்",
        year: 1980
    },
    {
        id: 9,
        title: "ஏழை எளியவர்",
        category: "சமூகநீதி",
        text: "ஏழை எளியவர்\nவாழ வேண்டும்\nஅவர்கள் குரல்\nகேட்க வேண்டும்\n\nசமூக நீதி\nஅவர்களுக்கு வர\nநாம் அனைவரும்\nஉதவ வேண்டும்",
        year: 2005
    },
    {
        id: 10,
        title: "வேலை செய்வோம்",
        category: "உழைப்பு",
        text: "வேலை செய்வோம்\nவாழ்வு பெறுவோம்\nஉழைப்பு தான்\nஉண்மையான செல்வம்\n\nசோம்பல் விடுவோம்\nஉழைப்பில் ஈடுபடுவோம்\nவாழ்வு வெற்றி\nநமக்கு கிடைக்கும்",
        year: 1992
    },
    {
        id: 11,
        title: "அன்பு பரவட்டும்",
        category: "மனிதநேயம்",
        text: "அன்பு பரவட்டும்\nஉலகம் முழுவதும்\nமனிதநேயம்\nவளரட்டும்\n\nபகைமை இல்லை\nவிரோதம் இல்லை\nஅன்பு மட்டும்\nஎங்கும் நிறைய",
        year: 2010
    },
    {
        id: 12,
        title: "மக்கள் அரசு",
        category: "அரசியல்",
        text: "மக்களுக்காக\nமக்களால்\nமக்கள் அரசு\nஇது நம் கொள்கை\n\nஜனநாயகம்\nஎங்கள் முறை\nமக்கள் சொல்\nஎங்கள் சொல்",
        year: 1988
    },
    {
        id: 13,
        title: "காதல்",
        category: "அன்பு",
        text: "காதல் என்பது\nஇருதயத்தின் பேச்சு\nகாதல் என்பது\nஉயிரின் ஒளி\n\nகாதலித்து வாழ்வோம்\nகாதலித்து பகிர்வோம்\nகாதல் இல்லையேல்\nவாழ்வு வெறும்",
        year: 1968
    },
    {
        id: 14,
        title: "தமிழ் வாழ்க",
        category: "தமிழ்",
        text: "தமிழ் வாழ்க\nதமிழ் வளர்க\nதமிழ் மொழி\nஎன்றும் வாழ்க\n\nதமிழ் பேசுவோம்\nதமிழ் படிப்போம்\nதமிழ் எங்கள்\nஉயிர் மொழி",
        year: 1972
    },
    {
        id: 15,
        title: "சமத்துவம்",
        category: "சமூகநீதி",
        text: "சமத்துவம் வேண்டும்\nசமூகத்தில்\nஎல்லாரும் சமமாக\nவாழ வேண்டும்\n\nசாதி இல்லை\nமதம் இல்லை\nமனிதன் மட்டும்\nஎல்லாரும் சமம்",
        year: 1998
    },
    {
        id: 16,
        title: "கைத்தொழில்",
        category: "உழைப்பு",
        text: "கைத்தொழில் செய்வோம்\nகைத்தொழில் வளர்ப்போம்\nஉழைப்பு தான்\nஎங்கள் செல்வம்\n\nகைத்தொழிலாளர்\nமதிக்கப்பட வேண்டும்\nஅவர்கள் உழைப்பு\nவாழ்த்தப்பட வேண்டும்",
        year: 1982
    },
    {
        id: 17,
        title: "உலக சகோதரத்துவம்",
        category: "மனிதநேயம்",
        text: "உலகம் ஒன்று\nமனிதர்கள் அனைவரும்\nசகோதரர்கள்\nஇந்த பூமியில்\n\nஎல்லைகள் இல்லை\nபிரிவுகள் இல்லை\nமனிதநேயம்\nஎங்கும் நிறைய",
        year: 2008
    },
    {
        id: 18,
        title: "ஜனநாயகம்",
        category: "அரசியல்",
        text: "ஜனநாயகம்\nமக்களின் அரசு\nஜனநாயகம்\nமக்களின் அதிகாரம்\n\nவாக்களிப்போம்\nஎங்கள் குரல்\nஜனநாயகம்\nவாழ்க",
        year: 1990
    },
    {
        id: 19,
        title: "குடும்ப அன்பு",
        category: "அன்பு",
        text: "குடும்பம் என்பது\nஅன்பின் கூடு\nகுடும்பம் என்பது\nவாழ்வின் அடிப்படை\n\nகுடும்பத்தில் அன்பு\nகுடும்பத்தில் அமைதி\nஇதுவே\nவாழ்வின் அழகு",
        year: 1978
    },
    {
        id: 20,
        title: "தமிழ் மரபு",
        category: "தமிழ்",
        text: "தமிழ் மரபு\nபழமையானது\nதமிழ் மரபு\nபெருமையானது\n\nசங்க காலம்\nஇலக்கிய காலம்\nதமிழ் எங்கள்\nபாரம்பரியம்",
        year: 1985
    },
    {
        id: 21,
        title: "விடுதலை",
        category: "அரசியல்",
        text: "விடுதலை வேண்டும்\nமக்களுக்கு\nவிடுதலை வேண்டும்\nசமூகத்திற்கு\n\nஅடிமைத்தனம்\nவிடுவோம்\nவிடுதலை\nபெறுவோம்",
        year: 1965
    },
    {
        id: 22,
        title: "அருள்",
        category: "மனிதநேயம்",
        text: "அருள் செய்வோம்\nஅன்பு காட்டுவோம்\nமனிதனுக்கு\nமனிதன் உதவுவோம்\n\nஅருள் இல்லையேல்\nவாழ்வு வெறும்\nஅருள் இருந்தால்\nவாழ்வு இனிமை",
        year: 2002
    }
];

/* ========== STATE ========== */
let favorites = JSON.parse(localStorage.getItem('kalaignar_favorites') || '[]');
let currentCategory = 'all';
let searchQuery = '';

/* ========== DOM ELEMENTS ========== */
const searchInput = document.getElementById('searchInput');
const categoryChips = document.getElementById('categoryChips');
const kavidhaiList = document.getElementById('kavidhaiList');
const emptyState = document.getElementById('emptyState');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalClose = document.getElementById('modalClose');
const copyBtn = document.getElementById('copyBtn');
const shareBtn = document.getElementById('shareBtn');
const toast = document.getElementById('toast');

/* ========== HELPERS ========== */
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function isTamilMatch(text, query) {
    if (!query.trim()) return true;
    return text.includes(query.trim());
}

function getPreview(text, lines = 2) {
    const linesArr = text.split('\n').filter(l => l.trim());
    return linesArr.slice(0, lines).join('\n') || text.slice(0, 80);
}

/* ========== RENDER CARDS ========== */
function renderKavidhai() {
    const filtered = KAVIDHAI_DATA.filter(k => {
        const catMatch = currentCategory === 'all' || k.category === currentCategory;
        const searchMatch = isTamilMatch(k.title + ' ' + k.text, searchQuery);
        return catMatch && searchMatch;
    });

    kavidhaiList.innerHTML = '';
    emptyState.style.display = filtered.length ? 'none' : 'block';

    filtered.forEach(k => {
        const card = document.createElement('div');
        card.className = 'kavidhai-card';
        card.innerHTML = `
            <div class="card-header">
                <span class="card-title">${k.title}</span>
                <button class="favorite-btn ${favorites.includes(k.id) ? 'favorited' : ''}" 
                        data-id="${k.id}" aria-label="பிடித்தவை">❤</button>
            </div>
            <p class="card-preview">${getPreview(k.text)}</p>
            <span class="card-category">${k.category}</span>
        `;

        card.addEventListener('click', (e) => {
            if (!e.target.closest('.favorite-btn')) openModal(k);
        });

        const favBtn = card.querySelector('.favorite-btn');
        favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(k.id);
        });

        kavidhaiList.appendChild(card);
    });
}

/* ========== FAVORITES ========== */
function toggleFavorite(id) {
    const idx = favorites.indexOf(id);
    if (idx >= 0) {
        favorites.splice(idx, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('kalaignar_favorites', JSON.stringify(favorites));
    renderKavidhai();
}

/* ========== MODAL ========== */
function openModal(k) {
    modalTitle.textContent = k.title;
    modalText.textContent = k.text;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    copyBtn.onclick = () => {
        navigator.clipboard.writeText(k.text).then(() => {
            showToast('நகலெடுக்கப்பட்டது!');
        }).catch(() => showToast('நகலெடுக்க முடியவில்லை'));
    };

    shareBtn.onclick = () => {
        if (navigator.share) {
            navigator.share({
                title: k.title,
                text: k.text
            }).then(() => showToast('பகிரப்பட்டது!')).catch(() => copyAndNotify(k));
        } else {
            copyAndNotify(k);
        }
    };

    function copyAndNotify(k) {
        navigator.clipboard.writeText(k.title + '\n\n' + k.text).then(() => {
            showToast('நகலெடுக்கப்பட்டது - பகிர பயன்படுத்துங்கள்');
        });
    }
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

/* ========== EVENT LISTENERS ========== */
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderKavidhai();
});

categoryChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    categoryChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentCategory = chip.dataset.category;
    renderKavidhai();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

/* ========== INIT ========== */
renderKavidhai();
