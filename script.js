var wheel = document.getElementById("wheel");
var prize = document.getElementById("prize");
var result = document.getElementById("result");
var spinning = false;
var spinCount = 0;
var animationTimeout;

function spinWheel() {
    if (!spinning && !result.innerHTML) {
    spinning = true;
    spinCount++;
    prize.innerHTML = "Spinning...";
    result.innerHTML = "";
    wheel.style.pointerEvents = "none"; // Disable click events during spinning
    wheel.style.animationPlayState = "running";
    animationTimeout = setTimeout(function () {
      stopWheel();
      if (spinCount === 1) {
        prize.innerHTML = "Try again";
      } else if (spinCount === 2) {
        var couponPrize = generateCouponPrize();
        prize.innerHTML = "Gift Card: " + couponPrize;
        result.innerHTML = "Congratulations! 🎉 You won! 🎉";
      }
    }, 4000); // Wait for 4 seconds before showing the result
  }
}

function stopWheel() {
  spinning = false;
  wheel.style.pointerEvents = "auto"; // Enable click events after spinning stops
  wheel.style.animationPlayState = "paused";
  clearTimeout(animationTimeout);
}

function generateCouponPrize() {
  var couponPrizes = ["Rs.100", "Rs.20", "Rs.50", "Rs.1000"];
  var randomIndex = Math.floor(Math.random() * couponPrizes.length);
  return couponPrizes[randomIndex];
}
