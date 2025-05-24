(function() {
    'use strict';

    const buttonSelector = 'div[role="button"][aria-label="Cancel request"]';
    const scrollableSelector = '.x14nfmen.x1s85apg'; // Adjust if needed

    const scrollable = document.querySelector(scrollableSelector);
    if (!scrollable) {
        console.error('Scrollable area not found. Open "Sent Requests" and try again.');
        return;
    }

    // Function to scroll to the bottom
    function scrollToBottom() {
        scrollable.scrollTop = scrollable.scrollHeight;
    }

    // Function to click all visible buttons
    function clickButtons() {
        const buttons = document.querySelectorAll(buttonSelector);
        if (buttons.length === 0) {
            console.error('No buttons found with selector:', buttonSelector);
            return 0;
        }
        console.log(`Found ${buttons.length} buttons.`);
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.click();
                console.log(`Clicked button ${index + 1} of ${buttons.length}`);
            }, index * 1000); // 1-second delay
        });
        return buttons.length;
    }

    // Scroll and click loop
    function run() {
        scrollToBottom();
        setTimeout(() => {
            const buttonCount = clickButtons();
            if (buttonCount > 0) {
                setTimeout(run, buttonCount * 1000 + 2000); // Wait for clicks + 2s
            } else {
                console.log('Finished or no buttons found.');
            }
        }, 2000); // Wait 2s after scrolling
    }

    console.log('Starting cancellation...');
    run();
})();
