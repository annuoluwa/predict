window.onload = function() {
const now = new Date(); // this gets the current date.
const hour = now.getHours(); // this gets the current time.
//console.log('hour is now', now.getHours())

let greeting;
if (hour >= 0 && hour < 12){
    greeting = 'Good morning Beloved!'
} else if(hour >= 12 && hour < 18){
    greeting = 'Good afternoon Beloved!';
} else {
    greeting = 'Good evening Beloved!';
}
document.getElementById('holla').textContent = greeting.toUpperCase();

};


const messages = ["Rejoice, for today is handcrafted by the Lord Himself. Expect joy, peace, and divine surprises!", 
    "God's mercy is brand new this morning. Walk boldly—nothing from yesterday can stop today’s blessings.",
    "As you acknowledge God today, He will make your path straight. Watch as confusion melts into divine direction.",
    "Rise and shine! The glory of the Lord is upon you. Doors will open and your presence will radiate favor.",
    "Today, God will speak to your heart with love. Trust Him fully—He’s guiding you with tender care.",
    "You are covered. Today, the Lord will smile on you, guard you, and fill your moments with peace.",
    "He heard you this morning. Now, expect answers. Walk through your day with confidence—He’s working.",
    "As you keep God first today, everything else will find you. Blessings will chase you down!",
    "Today is filled with hope. God’s plan is unfolding—expect progress, peace, and purpose to meet you."


]

function dayChecker(num){
    
    if (num >= 1 && num <=9){
        const randomNum = Math.floor(Math.random()*9)+1;
        document.getElementById('saveMessage').textContent = messages[num - 1];
    } else {
        document.getElementById('saveMessage').textContent = "Please enter a valid number between 1 and 9"
    }
}

let justLearnt = document.getElementById('press') // event target

function reveal(){ //event handler
    
    const userInput = document.getElementById('enter').value; // get the user input
    const num = parseInt(userInput, 10) // convert to integer
      dayChecker(num); // call function using num as arguement.

};

justLearnt.addEventListener('click', reveal)