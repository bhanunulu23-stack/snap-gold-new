// ==========================================
// SNAP GOLD
// ==========================================

const whatsappNumber = "919381443855";


// ==========================================
// JEWELLERY IMAGES
// ==========================================

const images = {

    rings: [
        "https://images.pexels.com/photos/17069421/pexels-photo-17069421.jpeg",
        "https://images.pexels.com/photos/10581426/pexels-photo-10581426.jpeg",
        "https://images.pexels.com/photos/12194374/pexels-photo-12194374.jpeg",
        "https://images.pexels.com/photos/12194375/pexels-photo-12194375.jpeg",
        "https://images.pexels.com/photos/10475793/pexels-photo-10475793.jpeg",
        "https://images.pexels.com/photos/12194376/pexels-photo-12194376.jpeg",
        "https://images.pexels.com/photos/12194372/pexels-photo-12194372.jpeg",
        "https://images.pexels.com/photos/12194373/pexels-photo-12194373.jpeg",
        "https://images.pexels.com/photos/12194371/pexels-photo-12194371.jpeg",
        "https://images.pexels.com/photos/12194370/pexels-photo-12194370.jpeg"
    ],

    earrings: [
        "https://images.pexels.com/photos/12194347/pexels-photo-12194347.jpeg",
        "https://images.pexels.com/photos/12194345/pexels-photo-12194345.jpeg",
        "https://images.pexels.com/photos/10457804/pexels-photo-10457804.jpeg",
        "https://images.pexels.com/photos/11655269/pexels-photo-11655269.jpeg",
        "https://images.pexels.com/photos/3881077/pexels-photo-3881077.jpeg",
        "https://images.pexels.com/photos/29502933/pexels-photo-29502933.jpeg",
        "https://images.pexels.com/photos/29522524/pexels-photo-29522524.jpeg",
        "https://images.pexels.com/photos/38909350/pexels-photo-38909350.jpeg",
        "https://images.pexels.com/photos/10581732/pexels-photo-10581732.jpeg",
        "https://images.pexels.com/photos/5737290/pexels-photo-5737290.jpeg"
    ],

    chains: [
        "https://images.pexels.com/photos/14111392/pexels-photo-14111392.jpeg",
        "https://images.pexels.com/photos/14111394/pexels-photo-14111394.jpeg",
        "https://images.pexels.com/photos/14111396/pexels-photo-14111396.jpeg",
        "https://images.pexels.com/photos/14111400/pexels-photo-14111400.jpeg",
        "https://images.pexels.com/photos/12194263/pexels-photo-12194263.jpeg",
        "https://images.pexels.com/photos/10581731/pexels-photo-10581731.jpeg",
        "https://images.pexels.com/photos/7566940/pexels-photo-7566940.jpeg",
        "https://images.pexels.com/photos/10581732/pexels-photo-10581732.jpeg",
        "https://images.pexels.com/photos/16935588/pexels-photo-16935588.jpeg",
        "https://images.pexels.com/photos/11790226/pexels-photo-11790226.jpeg"
    ],

    bangles: [
        "https://images.pexels.com/photos/12194338/pexels-photo-12194338.jpeg",
        "https://images.pexels.com/photos/12194337/pexels-photo-12194337.jpeg",
        "https://images.pexels.com/photos/12194339/pexels-photo-12194339.jpeg",
        "https://images.pexels.com/photos/12194328/pexels-photo-12194328.jpeg",
        "https://images.pexels.com/photos/12194331/pexels-photo-12194331.jpeg",
        "https://images.pexels.com/photos/12194330/pexels-photo-12194330.jpeg",
        "https://images.pexels.com/photos/12194303/pexels-photo-12194303.jpeg",
        "https://images.pexels.com/photos/12194301/pexels-photo-12194301.jpeg",
        "https://images.pexels.com/photos/10557316/pexels-photo-10557316.jpeg",
        "https://images.pexels.com/photos/4155247/pexels-photo-4155247.jpeg"
    ],

    necklaces: [
        "https://images.pexels.com/photos/11790226/pexels-photo-11790226.jpeg",
        "https://images.pexels.com/photos/16935588/pexels-photo-16935588.jpeg",
        "https://images.pexels.com/photos/7134458/pexels-photo-7134458.jpeg",
        "https://images.pexels.com/photos/7566940/pexels-photo-7566940.jpeg",
        "https://images.pexels.com/photos/12194380/pexels-photo-12194380.jpeg",
        "https://images.pexels.com/photos/12194264/pexels-photo-12194264.jpeg",
        "https://images.pexels.com/photos/12194386/pexels-photo-12194386.jpeg",
        "https://images.pexels.com/photos/4166450/pexels-photo-4166450.jpeg",
        "https://images.pexels.com/photos/15064039/pexels-photo-15064039.jpeg",
        "https://images.pexels.com/photos/34399026/pexels-photo-34399026.jpeg"
    ]

};


// ==========================================
// SETTINGS
// ==========================================

let currentCategory = "rings";
let visibleCount = 10;


// ==========================================
// CATEGORY NAMES
// ==========================================

const categoryNames = {
    rings: "Rings",
    earrings: "Earrings",
    chains: "Chains",
    bangles: "Bangles",
    necklaces: "Necklaces"
};


// ==========================================
// SHOW CATEGORY
// ==========================================

function showCategory(category) {

    currentCategory = category;

    visibleCount = 10;

    document
        .querySelectorAll(".category")
        .forEach(button => {

            button.classList.remove("active");

        });

    const activeButton =
        document.querySelector(
            `.category[data-category="${category}"]`
        );

    if (activeButton) {
        activeButton.classList.add("active");
    }

    renderProducts();

}


// ==========================================
// RENDER PRODUCTS
// ==========================================

function renderProducts() {

    const container =
        document.getElementById("products");

    container.innerHTML = "";

    const categoryImages =
        images[currentCategory] || [];

    const visibleImages =
        categoryImages.slice(
            0,
            visibleCount
        );


    visibleImages.forEach(
        (imageUrl, index) => {

            const card =
                document.createElement("div");

            card.className =
                "product-card";


            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${imageUrl}?auto=compress&cs=tinysrgb&w=900"
                        alt="${categoryNames[currentCategory]}"
                        loading="lazy"
                    >

                </div>


                <div class="product-info">

                    <h3>
                        ${categoryNames[currentCategory]}
                    </h3>

                    <button class="info-btn">
                        GET MORE INFO
                    </button>

                </div>
            `;


            const image =
                card.querySelector("img");


            const button =
                card.querySelector(".info-btn");


            image.addEventListener(
                "click",
                function () {

                    openImage(this.src);

                }
            );


            button.addEventListener(
                "click",
                function () {

                    getMoreInfo(
                        currentCategory,
                        index + 1
                    );

                }
            );


            image.addEventListener(
                "error",
                function () {

                    this.parentElement.innerHTML = `
                        <div style="
                            height:100%;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            color:#999;
                            font-size:12px;">
                            Image unavailable
                        </div>
                    `;

                }
            );


            container.appendChild(card);

        }
    );


    updateLoadMore();

}


// ==========================================
// LOAD MORE
// ==========================================

function loadMore() {

    visibleCount += 10;

    renderProducts();

}


// ==========================================
// LOAD MORE BUTTON
// ==========================================

function updateLoadMore() {

    const button =
        document.getElementById("loadMore");

    const total =
        images[currentCategory].length;

    if (visibleCount >= total) {

        button.style.display = "none";

    } else {

        button.style.display = "block";

    }

}


// ==========================================
// WHATSAPP
// ==========================================

function getMoreInfo(
    category,
    number
) {

    const categoryName =
        categoryNames[category];

    const message =
`Hello SNAP GOLD,

I am interested in your ${categoryName} collection.

Design: ${number}

Please share more details.`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${
            encodeURIComponent(message)
        }`;

    window.open(
        whatsappURL,
        "_blank"
    );

}


// ==========================================
// IMAGE MODAL
// ==========================================

function openImage(src) {

    const modal =
        document.getElementById("imageModal");

    const image =
        document.getElementById("modalImage");

    image.src = src;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";

}


// ==========================================
// CLOSE IMAGE
// ==========================================

function closeImage() {

    const modal =
        document.getElementById("imageModal");

    modal.style.display = "none";

    document.body.style.overflow = "auto";

}


// ==========================================
// OUTSIDE CLICK
// ==========================================

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById("imageModal");

        if (event.target === modal) {

            closeImage();

        }

    }
);


// ==========================================
// ESC KEY
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeImage();

        }

    }
);


// ==========================================
// HERO SCROLL
// ==========================================

function goToCollection() {

    document
        .getElementById("collection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// START
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderProducts();

    }
);