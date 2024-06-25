/*SLIDE*/
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const slideScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = document.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX;
            let newThumbPosition = thumbPosition + deltaX;
            newThumbPosition = Math.max(0, Math.min(newThumbPosition, slideScrollbar.clientWidth - scrollbarThumb.offsetWidth));
            scrollbarThumb.style.left = `${newThumbPosition}px`;
            const scrollFraction = newThumbPosition / (slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
            imageList.scrollLeft = scrollFraction * maxScrollLeft;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons(); 
        updateScrollThumbPosition();
    });

 
    handleSlideButtons();
    updateScrollThumbPosition();
}

window.addEventListener("load", initSlider);
