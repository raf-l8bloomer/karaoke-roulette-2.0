/*************
 * VARIABLES
 ************/

const promptDiv = document.querySelector(".prompt-div");
const promptEl = document.querySelector(".prompt");
const spinEl = document.querySelector("#spin");
const completeEl = document.querySelector("#complete");
const submitInput = document.querySelector("#newPrompt");
const form = document.querySelector(".new-prompt-form");
const bank = document.querySelector(".bank");
const bankUl = document.querySelector("ul");
const showBank = document.querySelector(".show-bank");

let completedPrompts = [];
let currentPrompt;
let savedBankString;
let newPromptBank = [];

// preloaded prompts
let promptBank = [
  { id: generateRandomId(), theme: "You want a '4 Chair Turn' on The Voice" },
  {
    id: generateRandomId(),
    theme: "You have to poop but there's 12 other people in the next room",
  },
  {
    id: generateRandomId(),
    theme: "You've been chosen as tribute for The Hunger Games",
  },
  { id: generateRandomId(), theme: "Revenge Era" },
  { id: generateRandomId(), theme: "The last cigarette in the box" },
  { id: generateRandomId(), theme: "Stuck in an elevator with your crush" },
  { id: generateRandomId(), theme: "You've just discovered electricity" },
  {
    id: generateRandomId(),
    theme:
      "Finding the perfect meme for the groupchat before someone else replies",
  },
  { id: generateRandomId(), theme: "Voicemail song" },
  { id: generateRandomId(), theme: "Empty parking lot acoustics" },
  {
    id: generateRandomId(),
    theme: "You're looking out the window and it's pouring rain",
  },
  { id: generateRandomId(), theme: "Just sent a risky text" },
  {
    id: generateRandomId(),
    theme: "Heartbreak feels good in a place like this",
  },
  { id: generateRandomId(), theme: "Love at first sight" },
  {
    id: generateRandomId(),
    theme: "We saw you from across the bar and we really like your vibe",
  },
  { id: generateRandomId(), theme: "Where were you on January 6th?" },
  { id: generateRandomId(), theme: "Trina! A One Woman Show, ft. Chicago" },
  { id: generateRandomId(), theme: "The edible is hitting" },
  { id: generateRandomId(), theme: "I work like a dog DAY AND NIGHT" },
  { id: generateRandomId(), theme: "You found the Avatar" },
];

/*************
 * FUNCTIONS
 ************/

function generateRandomId() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
  const randomStr = Math.random().toString(36).substring(2); // Generate random string and remove '0.' prefix

  return timestamp + randomStr; // Concatenate timestamp and random string
}

// sets random currentPrompt from PromptBank
function randomPrompt(arr) {
  let randomPromptIndex = Math.floor(Math.random() * arr.length);
  currentPrompt = arr[randomPromptIndex];
  console.log(currentPrompt);
}

// removes displayed prompt nad nullifies currentPrompt
function clearPrompt() {
  currentPrompt = null;
  promptEl.innerHTML = "";
  promptDiv.style.backgroundColor = "#d9d9d9";
  promptDiv.style.border = "none";
  promptEl.style.color = "#000000";
}

// adds currentPrompt to the HTML
function generatePrompt() {
  promptDiv.style.backgroundColor = "#ffffff";
  promptDiv.style.border = "1px solid #F10ADF";
  promptEl.style.color = "#F10ADF";
  promptEl.innerText = "Spinning...";
  setTimeout(() => {
    if (currentPrompt != null) {
      promptEl.innerText = currentPrompt.theme;
    }
  }, 1000);
}

// finds index of prompt by matching id  to current prompt and removes 1 prompt from the bank
function removePrompt(arr, prompt) {
  const promptIndex = arr.findIndex((row) => row.id === prompt.id);
  arr.splice(promptIndex, 1);
  //save bank to localStorage
  let saveBankString = JSON.stringify(arr);
  localStorage.setItem("bank", saveBankString);
  console.log(saveBankString);
}

function clearBankLI() {
  bankUl.innerHTML = "";
}

// render promptBank to HTML
function renderBank(arr) {
  arr.forEach((row) => {
    createLi(row);
  });
}

// creates prompt into a list item with a remove button to remove it from the list and the bank
function createLi(prompt) {
  const promptLi = document.createElement("li");
  const remove = document.createElement("button");
  remove.classList.add("removePrompt");
  promptLi.textContent = prompt.theme;
  remove.textContent = "X";
  promptLi.appendChild(remove);
  bankUl.appendChild(promptLi);

  remove.addEventListener("click", () => {
    bankUl.removeChild(promptLi);

    if (savedBankString != null && savedBankString != "") {
      const promptIndex = newPromptBank.findIndex(
        (bankTheme) => bankTheme.id === prompt.id
      );
      newPromptBank.splice(promptIndex, 1);

      //save bank  with removed prompt to localStorage
      savedBankString = JSON.stringify(newPromptBank);
      localStorage.setItem("bank", savedBankString);
      console.log(newPromptBank);
    } else {
      // if user removes prompts from the initial bank BEFORE adding or spinning, this edits the initial bank.
      const promptIndex = promptBank.findIndex(
        (bankTheme) => bankTheme.id === prompt.id
      );
      promptBank.splice(promptIndex, 1);
    }
  });
}

function clearStorage() {
  localStorage.clear();
  clearBankLI();
  newPromptBank = [];
}

/*************
 * EVENT LISTENERS
 ************/

// clears prompt, randomly selects prompt from the bank, and displays it
spinEl.addEventListener("click", () => {
  clearPrompt();
  if (newPromptBank.length == 0 && promptBank.length == 0) {
    promptEl.innerText = "Add new prompts below";

  } else {
    if (savedBankString != null && savedBankString != "") {
      console.log(newPromptBank);
      randomPrompt(newPromptBank);
      console.log(currentPrompt);
      console.log("spun new prompt bank");
    } else {
      newPromptBank.push(...promptBank);
      console.log(newPromptBank);
      randomPrompt(newPromptBank);
      console.log("spun OLD prompt bank");
    }
    generatePrompt();
    savedBankString = JSON.stringify(newPromptBank);
    localStorage.setItem("bank", savedBankString);
  }
});

// pull out the currentPrompt from the promptBank and move it to completed while spinning the wheel for the next prompt
completeEl?.addEventListener("click", () => {
  if (currentPrompt !== null) {
    completedPrompts.push(currentPrompt);
    removePrompt(newPromptBank, currentPrompt);
  }
  savedBankString = JSON.stringify(newPromptBank);
  localStorage.setItem("bank", savedBankString);
  clearPrompt();
  clearBankLI();
  renderBank(newPromptBank);
  randomPrompt(newPromptBank);
  generatePrompt();
});

// takes input value and turns it into a new prompt, adds it to the bank, and displays it in bank
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (submitInput?.value == "" || submitInput?.value == null) return;

  // create a new prompt with submitted string
  const newPrompt = {
    id: generateRandomId(),
    theme: submitInput.value,
  };

  // add the new prompt to the old promptBank
  newPromptBank.push(newPrompt);
  console.log(newPromptBank);
  toggleCompleteBtn();
  // add prompt to the list rendered in prompt bank
  createLi(newPrompt);

  // turn new bank with added input to string
  savedBankString = JSON.stringify(newPromptBank);
  console.log(savedBankString);

  // save new bank
  localStorage.setItem("bank", savedBankString);

  //clear the input
  submitInput.value = "";
});

//toggle Prompt Bank display
showBank.addEventListener("click", () => {
  if (showBank.textContent == "Show Prompt Bank") {
    bank.style.display = "flex";
    showBank.textContent = "Hide Prompt Bank";
    showBank.style.backgroundColor = "#FFFFFF";
    showBank.style.border = "1px solid #1c26f8 ";
  } else if (showBank.textContent == "Hide Prompt Bank") {
    bank.style.display = "none";
    showBank.textContent = "Show Prompt Bank";
    showBank.style.backgroundColor = "#d9d9d9";
    showBank.style.border = "none";
  }
});

const resetBank = document.querySelector(".reset-bank");
resetBank.addEventListener("click", () => {
  clearPrompt();
  clearStorage();
  clearBankLI();
  newPromptBank = [];
  promptBank = [];
  toggleCompleteBtn();
  console.log(newPromptBank);
});

/*************
 * INITAL FUNCTION CALLS
 ************/

// render saved bank upon load

if (savedBankString != null && savedBankString != "") {
  savedBankString = localStorage.getItem("bank");
  newPromptBank = JSON.parse(savedBankString);
  renderBank(newPromptBank);
} else {
  renderBank(promptBank);
}

if (showBank.textContent == "Show Prompt Bank") {
  bank.style.display = "none";
}

function toggleCompleteBtn() {
  if (newPromptBank.length == 0 && promptBank.length == 0) {
    completeEl.disabled = true;
  } else {
    completeEl.disabled = false;
  }
}



chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openSidePanel",
    title: "Open side panel",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openSidePanel") {
    // This will open the panel in all the pages on the current window.
    chrome.sidePanel.open({ windowId: tab.windowId });
  }
});


// Need to style reset button!