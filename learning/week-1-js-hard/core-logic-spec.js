const MIN_MENTOR_LEVEL = 300;
const BASE_SESSION_FEE = 500;
const COMMUNITY_DISCOUNT = 0.15;
const EXAM_SEASON_SURCHARGE = 100;

// --- SECTION 2: MOCK USER DATA (INPUT LAYER) ---

let userName = "Ibrahim Danjuma"; // The student name
let academicLevel = 300;           // Your current level at FUT Minna
let isVerifiedLeader = true;       // Based on your MLSA/GDGoC status
let accountBalance = 6000;         // Current credits in the UFID wallet
let isExamSeason = false;          // Toggle this to test surcharges

let isEligibleForMentorship = (academicLevel >= MIN_MENTOR_LEVEL) && isVerifiedLeader || (academicLevel >= MIN_MENTOR_LEVEL + 100);

let finalFee = BASE_SESSION_FEE;

if (isEligibleForMentorship) {
    const discount = finalFee * COMMUNITY_DISCOUNT;
    finalFee -= discount;
}

if (isExamSeason) {
    finalFee += EXAM_SEASON_SURCHARGE;

}

let canAffordSession; // Placeholder for affordability logic
 if (accountBalance >= finalFee) {
    let canAffordSession = true;
} else {
    let canAffordSession = false;
}

console.log ("--- SYSTEM AUDIT: [userName: " + userName + ", academicLevel: " + academicLevel + ", isVerifiedLeader: " + isVerifiedLeader + ", accountBalance: " + accountBalance + ", isExamSeason: " + isExamSeason + "] ---");
console.log("Is eligible for mentorship: " + isEligibleForMentorship);
console.log("Final session fee after adjustments: " + finalFee);
console.log("Can afford session: " + canAffordSession);

if (canAffordSession) {
    console.log("Congratulations " + userName + "! You can book a mentorship session.");
} else {
    console.log("Sorry " + userName + ", you need more credits to book a mentorship session.");
}