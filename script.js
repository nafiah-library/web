// Page switching
const pages = document.querySelectorAll('.page');
function showPage(pageId){
    pages.forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

// Full Book Data 2026
const booksData = {
    "আকীদাহ ও মানহাজ": [
        {title:"কালিমাতুত তাওহীদ ‘লা ইলাহা ইল্লাল্লাহ’ — শর্ত ও তা ভঙ্গকারী বিষয়সমূহ", author:"শাইখ মুহাম্মাদ ইবন আব্দুল ওয়াহাব আল ওয়াসাবী", publisher:"মাকতাবাতুস সুন্নাহ (মাদরাসা মার্কেট)", pages:16, img:"https://i.ibb.co/5hZxNr1D/IMG20250908115025.jpg"},
        {title:"আদ দুরুসুল মুহিম্মাহ লি আম্মাতিল উম্মাহ", author:"শাইখ আব্দুল আযীয বিন আব্দুল্লাহ বিন বায", publisher:"ওয়াহীদিয়া ইসলামিয়া লাইব্রেরী", pages:40, img:"https://i.ibb.co/4gRWF8q9/IMG-20260210-154637.jpg"},
        {title:"‘আল ওয়ালা’ ওয়াল ‘বারা’ — বন্ধুত্ব ও শত্রুতা", author:"শাইখ ড. সালিহ আল ফাওযান", publisher:"মাকতাবাতুস সুন্নাহ (মাদরাসা মার্কেট)", pages:32, img:"https://i.ibb.co/FbyY7xGY/image.png"},
        {title:"আকীদার চারটি মৌলিক পরিভাষা", author:"শাইখ ড. আবু বকর মুহাম্মাদ যাকারিয়া", publisher:"ওয়াহীদিয়া ইসলামিয়া লাইব্রেরী", pages:176, img:"https://i.ibb.co/qM1cyfNm/IMG-20260210-160441.jpg"},
        {title:"শিশু-কিশোরদের উপযোগী সালফে-সালিহীনদের আকীদা", author:"শাইখ খালিদ উসমান", publisher:"দারুল কারার পাবলিকেশন্স", pages:96, img:"https://i.ibb.co/Zp8h7zPs/6e4cf7fa-7da2-4a31-a052-2d6e30e69d27.webp"},
        {title:"আকিদা লামিয়্যা ও তার ব্যাখ্যা", author:"শাইখ আল্লামা আহমাদ বিন ইয়াহইয়া আন-নাজিম", publisher:"ওয়াহীদিয়া ইসলামিয়া লাইব্রেরী", pages:64, img:"https://i.ibb.co/h1mxLCcc/Akida-and-lamia-front-scaled.jpg"},
        {title:"প্রশ্ন উত্তরে আক্কীদাহ ও মানহাজ", author:"শাইখ আব্দুল আযীয বিন মুহাম্মাদ আশ-শা’আলান", publisher:"ওয়াহীদিয়া ইসলামিয়া লাইব্রেরী", pages:48, img:"https://i.ibb.co/nNSK4srz/Prosnottoray-Akydah-Manhaz-1-Final-250x387.jpg"},
        {title:"আকীদা বিষয়ক একশ হাদীস", author:"শাইখ সালেহ ইবন আবদুল্লাহ আল-আসসাফ", publisher:"আলোকিত প্রকাশনী", pages:80, img:"https://i.ibb.co/6RQf7D0X/akida-bishoyok-100-hadith-1.jpg"},
        {title:"ঈমান বিষয়ক ১০০ প্রশ্নোত্তর", author:"জাকারিয়া শাহীন", publisher:"আলোকিত প্রকাশনী", pages:72, img:"https://i.ibb.co/4ZFkCHVK/IMG-20260210-161210.jpg"},
        {title:"ভূল সংশোধনে নববী পদ্ধতি", author:"শাইখ মুহাম্মাদ সালেহ আল মুনাজ্জিদ", publisher:"আত-তাওহীদ প্রকাশনী", pages:144, img:"https://i.ibb.co/XrWQk8Y3/IMG-20260210-161405.jpg"}
    ],
    "ফিকহ": [
        {title:"সলাত পরিত্যাগকারীর বিধান", author:"শাইখ মুহাম্মাদ ইবনু সালিহ আল-উসাইমিন", publisher:"ইহইয়া-উস সুন্নাহ ফাউন্ডেশন", pages:48, img:"https://i.ibb.co/Q3Hzz1B9/Salat-Porityagkarir-Bidhan-Shaykh-Muhammad-Bin-Salih-Al-Uthaymeen-R-c3a9c-234525.jpg"},
        {title:"উসূল ও ফিকহের মূলনীতিসমূহ", author:"ড. সা’দ ইবন নাসির ইবন আব্দুল আযীয আশ-শাসরি", publisher:"বিলিভার্স ভিশন", pages:88, img:"https://i.ibb.co/39PNT0XL/Front-Usul-O-Fiqher-Mulniti-250x389.png"},
        {title:"আমরা হাদীছ মানতে বাধ্য", author:"আব্দুল্লাহ বিন আব্দুর রাযযাক", publisher:"তুবা পাবলিকেশন", pages:136, img:"https://i.ibb.co/KjNx8LLQ/IMG-20260210-164711.jpg"}
    ],
    "ইবাদত ও আমল": [
        {title:"এক নজরে সালাত", author:"শাইখ যুবায়ের আলী যাই", publisher:"আর তাক্কওয়া মসজিদ এন্ড ইসলামিক সেন্টার", pages:48, img:"https://i.ibb.co/84zjJgZw/IMG-20260210-165345.jpg"},
        {title:"১০০ সুসাব্যস্ত সুন্নাত", author:"আয-যুলফি দা‘ওয়াহ সেন্টার", publisher:"আলোকিত প্রকাশনী", pages:62, img:"https://i.ibb.co/whj6wkNf/IMG-20260210-165155.jpg"}
    ],
    "আত্মশুদ্ধি ও অনুপ্রেরণা": [
        {title:"ফিতনার এই যুগের বাঁচার উপায়", author:"শাইখ সালেহ আল-উসয়মী , শাইখ সালেহ আল-ফাওযান , শাইখ আব্দুস সালাম আশ-শুয়াই’ইর", publisher:"আলোকিত প্রকাশনী", pages:119, img:"https://i.ibb.co/8h3jHQv/IMG-20260210-165529.jpg"},
        {title:"আমি তো নামাজ পড়তে চাই কিন্তু...", author:"শাইখ আব্দুর রাকীব বুখারী মাদানী", publisher:"আলোকিত প্রকাশনী", pages:96, img:"https://i.ibb.co/gZgqyrxp/IMG-20260210-165715.jpg"},
        {title:"অন্তরের রোগ ও আমল সিরিজ, ১-৮", author:"শাইখ মুহাম্মাদ সালেহ আল মুনাজ্জিদ", publisher:"কাশফুল প্রকাশনী", pages:552, img:"https://i.ibb.co/673vMdzh/IMG-20260210-165923.jpg"},
        {title:"আবার এসেছি ফিরে", author:"বারাআ আশ-শামী", publisher:"দারুল কারার পাবলিকেশন্স", pages:112, img:"https://i.ibb.co/wrrxMTBw/IMG-20260210-170157.jpg"},
        {title:"ভালোবাসা (যিনা) কারে কয়", author:"জাকারিয়া মাসুদ", publisher:"সন্দীপন", pages:32, img:"https://i.ibb.co/ns5XySgv/IMG-20260210-170333.jpg"}
    ],
    "সিরাহ": [
        {title:"মহানবি (ﷺ) এর জীবনচরিত", author:"ইমাম নাওয়াওয়ি", publisher:"বিলিভার্স ভিশন", pages:116, img:"https://i.ibb.co/fzDS3sKv/IMG-20260210-170622.jpg"}
    ],
    "ইসলামী সাহিত্য ও উপন্যাস": [
        {title:"বিষে ভরা ফুল", author:"শাইখ আব্দুল হামীদ আল-ফাইযী আল-মাদানী", publisher:"ওয়াহীদিয়া ইসলামিয়া লাইব্রেরী", pages:96, img:"https://i.ibb.co/nNQTB4Xg/Whats-App-Image-2024-05-14-at-12-30-21-e3a3c1a6.jpg"}
    ],
    "হজ্জ ও উমরাহ": [
        {title:"হজ্জ্বের আধ্যাত্মিক শিক্ষা", author:"শাইখ ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর", publisher:"আস-সুন্নাহ পাবলিকেশন্স", pages:48, img:"https://i.ibb.co/CL000jx/hojjer-adhyatik-shikkha.png"}
    ],
    "দোয়া ও যিকির": [
        {title:"হিসনুল মুসলিম", author:"শাইখ মুহাম্মদ বিন সাইদ কাহতানি (রহ:)", publisher:"সবুজপত্র পাবলিকেশন্স", pages:256, img:"https://i.ibb.co/ymxJ8Nd9/IMG-20260210-171117.jpg"}
    ]
};

// Render Categories
const categoriesContainer = document.getElementById('categoriesContainer');
Object.keys(booksData).forEach(cat=>{
    let div = document.createElement('div');
    div.className = 'category-box';
    div.innerText = cat;
    div.onclick = ()=>showBooks(cat);
    categoriesContainer.appendChild(div);
});

// Show Books in Category
function showBooks(category){
    const container = document.getElementById('booksContainer');
    const detail = document.getElementById('bookDetail');
    container.innerHTML = '';
    detail.classList.add('hidden');
    booksData[category].forEach(book=>{
        let card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `<img src="${book.img}" alt="${book.title}"><strong>${book.title}</strong><br>${book.author}`;
        card.onclick = ()=>showBookDetail(book);
        container.appendChild(card);
    });
}

// Show single book detail
function showBookDetail(book){
    const detail = document.getElementById('bookDetail');
    detail.classList.remove('hidden');
    detail.innerHTML = `
        <img src="${book.img}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Publisher:</strong> ${book.publisher}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <button class="btn" onclick="detail.classList.add('hidden')">Close</button>
    `;
}

// Search system
function searchBooks(){
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.book-card');
    cards.forEach(c=>{
        if(c.innerText.toLowerCase().includes(input)) c.style.display = '';
        else c.style.display = 'none';
    });
}