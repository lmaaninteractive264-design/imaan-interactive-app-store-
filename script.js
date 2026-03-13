// ১. এখানে আপনি আপনার অ্যাপ বা গেমের তথ্য যোগ করবেন
const myData = {
    apps: [
        { name: "Study Helper BD", icon: " https://i.supaimg.com/6de25398-02db-416f-91cf-e7762dd6427e.jpg", link: "https://www.mediafire.com/file/oijfzkmgmu4o8pq/_study_Helper__BD_19569219+(1).apk/file", desc: "Help of bangladeshi student",size:"33.34 MB ",Downloads:"300+" },
        { name:"takabook",icon:"https://i.supaimg.com/2ffb7463-3f5e-4b1f-83aa-1739e11e17ec/c09fea5e-df63-4f54-b514-85cb3c53b6f1.png",link:"https://drive.google.com/file/d/1IZCWWIJV6Srz-IThddCsGXLqnRNV6i4N/view?fbclid=IwdGRjcAQOSiljbGNrBA5KBmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHhJnKaVA_JYZw5pmcE2GbHejoUzDjhsbf61CAUzwHshCg0_KzytUD00a8Xt8_aem_8z1zntrJRuvHkXY-XqOXqg",desc:"write your product and customer Details",size:"31.44 MB",Downloads:"1k+"},
        { name:"Safe Lingo",icon:"https://i.supaimg.com/2ffb7463-3f5e-4b1f-83aa-1739e11e17ec/daa6e9fd-576c-44cd-92e5-5821f228465e.png",link:"https://www.mediafire.com/file/7oqzl7w202llkq4/_safe_lingo_19007599.apk/file",desc:"Learn English, stay Halal",size:"33.44 MB",Downloads:"2k+"},
        { name:"Desi Browser",icon:"https://i.supaimg.com/2ffb7463-3f5e-4b1f-83aa-1739e11e17ec/dee3c548-cba5-40b4-94c1-09329610af1a.png",link:"https://www.mediafire.com/file/26noezwnd7srudn/Desi_Browse_.apk/file",desc:"Fast.Simple.Secure",size:"7.4 MB",Downloads:"100+" }
    ],
    games: [
        { name: "Nirob barir diary", icon: "https://i.supaimg.com/9eeddbc7-303c-471f-9ba2-23c087e638c7.jpg", link: "https://www.mediafire.com/file/edia7kr03jf80ce/_Nirob_barir_diary_19572801.apk/file", desc: "bangladeshi horror game",size:"33.54 MB",Downloads:"500+" }
    ]
};

// ২. অটোমেটিক কার্ড তৈরি করার ফাংশন
function loadStore() {
    const appsContainer = document.getElementById('apps-container');
    const gamesContainer = document.getElementById('games-container');

    // Apps লোড করা
    myData.apps.forEach(item => {
        appsContainer.innerHTML += createCard(item);
    });

    // Games লোড করা
    myData.games.forEach(item => {
        gamesContainer.innerHTML += createCard(item);
    });
}

// কার্ড তৈরি করার ফাংশন (আপডেটেড)
function createCard(item) {
    return `
        <div class="card">
            <img src="${item.icon}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="app-desc">${item.desc}</p>
            
            <div class="app-info">
                <span>📦 ${item.size}</span>
                <span>📥 ${item.Downloads}</span>
            </div>

            <a href="${item.link}" target="_blank" class="btn-download">Download</a>
        </div>
    `;
}
function searchFunction() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        
        if (title.includes(input)) {
            cards[i].style.display = ""; // মিল থাকলে দেখাবে
        } else {
            cards[i].style.display = "none"; // মিল না থাকলে লুকিয়ে ফেলবে
        }
    }
}   

// সাইট ওপেন হলে লোড হবে
loadStore();
