document.addEventListener('DOMContentLoaded', function() {
    const flipCoinButton = document.getElementById('flipCoinButton');
    const resetButton = document.getElementById('resetButton');
    const coinResult = document.getElementById('coinResult');
    const headsCountElement = document.getElementById('headsCount');
    const tailsCountElement = document.getElementById('tailsCount');

    let headsCount = 2;
    let tailsCount = 0;

    function flipCoin() {

        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';


        coinResult.textContent = result;


        if (result === 'Heads') {
            headsCount++;
        } else {
            tailsCount++;
        }
        headsCountElement.textContent = headsCount;
        tailsCountElement.textContent = tailsCount;
    }

    function resetCounts() {
        headsCount = 0;
        tailsCount = 0;
        headsCountElement.textContent = headsCount;
        tailsCountElement.textContent = tailsCount;
        coinResult.textContent = 'Press "Flip Coin" to start';
    }


    flipCoinButton.addEventListener('click', flipCoin);
    resetButton.addEventListener('click', resetCounts);
});
