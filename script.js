/* =====================================================
   ANR SOURCEX
   PRODUCT POPUP
===================================================== */


/* =====================================================
   GET ELEMENTS
===================================================== */

const productCards =
    document.querySelectorAll(
        ".clickable-product"
    );


const productModal =
    document.getElementById(
        "productModal"
    );


const modalOverlay =
    document.getElementById(
        "modalOverlay"
    );


const closeModalButton =
    document.getElementById(
        "closeModal"
    );


const modalProductImage =
    document.getElementById(
        "modalProductImage"
    );


const modalProductTitle =
    document.getElementById(
        "modalProductTitle"
    );


const modalProductCategory =
    document.getElementById(
        "modalProductCategory"
    );


const modalProductDescription =
    document.getElementById(
        "modalProductDescription"
    );


const modalWhatsapp =
    document.getElementById(
        "modalWhatsapp"
    );



/* =====================================================
   OPEN PRODUCT POPUP
===================================================== */

function openProduct(card) {

    const title =
        card.dataset.title;


    const category =
        card.dataset.category;


    const image =
        card.dataset.image;


    const description =
        card.dataset.description;


    /* PRODUCT TITLE */

    modalProductTitle.textContent =
        title;


    /* CATEGORY */

    modalProductCategory.textContent =
        category;


    /* IMAGE */

    modalProductImage.src =
        image;

    modalProductImage.alt =
        title;


    /* DESCRIPTION */

    modalProductDescription.textContent =
        description;


    /* =================================================
       WHATSAPP MESSAGE
    ================================================= */

    const whatsappMessage =
        encodeURIComponent(

            `Hello ANR SOURCEX,

I am interested in ${title}.

Please share the following details:

• Product quality
• Price
• Available quantity
• Minimum order quantity
• Availability
• Delivery details

Thank you.`
        );


    modalWhatsapp.href =
        `https://wa.me/918825453262?text=${whatsappMessage}`;


    /* =================================================
       SHOW MODAL
    ================================================= */

    productModal.classList.add(
        "show"
    );


    productModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}



/* =====================================================
   CLOSE PRODUCT POPUP
===================================================== */

function closeProduct() {

    productModal.classList.remove(
        "show"
    );


    productModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}



/* =====================================================
   PRODUCT CLICK
===================================================== */

productCards.forEach(
    function(card) {

        card.addEventListener(
            "click",
            function() {

                openProduct(this);

            }
        );

    }
);



/* =====================================================
   CLOSE BUTTON
===================================================== */

closeModalButton.addEventListener(
    "click",
    function() {

        closeProduct();

    }
);



/* =====================================================
   CLICK OUTSIDE POPUP
===================================================== */

modalOverlay.addEventListener(
    "click",
    function() {

        closeProduct();

    }
);



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeProduct();

        }

    }
);



/* =====================================================
   NAVIGATION ACTIVE
===================================================== */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function() {

                navLinks.forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );

            }
        );

    }
);



/* =====================================================
   SCROLL NAVIGATION
===================================================== */

const pageSections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    function() {

        let currentSection =
            "home";


        pageSections.forEach(
            function(section) {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function(link) {

                link.classList.remove(
                    "active"
                );


                const linkTarget =
                    link.getAttribute(
                        "href"
                    );


                if (
                    linkTarget ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =====================================================
   THEME BUTTON
===================================================== */

const themeButton =
    document.getElementById(
        "themeButton"
    );


themeButton.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "gold-mode"
        );


        if (
            document.body.classList.contains(
                "gold-mode"
            )
        ) {

            themeButton.textContent = "☾";

        } else {

            themeButton.textContent = "◐";

        }

    }
);



/* =====================================================
   IMAGE ERROR CHECK
===================================================== */

document.querySelectorAll(
    "img"
).forEach(
    function(image) {

        image.addEventListener(
            "error",
            function() {

                console.log(
                    "Image not found:",
                    image.src
                );

            }
        );

    }
);