


// Check if the scrollable container has children (images) to scroll through
const imageContainer = document.querySelector('.image-container.scrollable');
if (imageContainer && imageContainer.children.length > 0) {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', function() {
        // Scroll to the previous image
        imageContainer.scrollLeft -= imageContainer.children[0].clientWidth;
    });

    rightArrow.addEventListener('click', function() {
        // Scroll to the next image
        imageContainer.scrollLeft += imageContainer.children[0].clientWidth;
    });
}
