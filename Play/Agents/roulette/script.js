const Agents = document.getElementsByClassName("agent-card");

function lock(evt) {
  evt.currentTarget.classList.toggle("locked");
  const agents = Array.from(Agents);
  agents.forEach((agent) => {
    agent.classList.remove("selected", "not-selected");
  });
}

for (let i = 0; i < Agents.length; i++) {
  const element = Agents.item(i);
  element.addEventListener("click", lock);
}

//roll

function roll() {
  const agents = Array.from(Agents);
  const availableAgents = agents.filter(
    (agent) => !agent.classList.contains("locked")
  );

  agents.forEach((agent) => {
    agent.classList.remove("selected", "not-selected");
  });

  if (availableAgents.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableAgents.length);
    const selectedAgent = availableAgents[randomIndex];
    selectedAgent.classList.add("selected");

    const notSelectedAgents = agents.filter((agent) => agent !== selectedAgent);
    notSelectedAgents.forEach((agent) => {
      agent.classList.add("not-selected");
    });
  }
}

//reset

function reset() {
  const agents = Array.from(Agents);
  agents.forEach((agent) => {
    agent.classList.remove("selected", "not-selected", "locked");
  });
}

//elements

const controllers = document.getElementsByClassName("controllers");
const duelists = document.getElementsByClassName("duelists");
const initiators = document.getElementsByClassName("initiators");
const sentinels = document.getElementsByClassName("sentinels");

//filters

// console.log(controllers);
// console.log(duelists);
// console.log(initiators);
// console.log(sentinels);

//add

function lockElements(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("locked");
  }
}

//remove

function unlockElements(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("locked");
  }
}

// filters

const filterControllers = document
  .getElementsByClassName("lockControllers")
  .item(0);
const filterDuelists = document.getElementsByClassName("lockDuelists").item(0);
const filterInitiators = document
  .getElementsByClassName("lockInitiators")
  .item(0);
const filterSentinels = document
  .getElementsByClassName("lockSentinels")
  .item(0);

//function filter

function filter(elements, filterClass) {
  if (filterClass.classList.contains("inactive")) {
    filterClass.classList.replace("inactive", "active");
    lockElements(elements);
  } else {
    filterClass.classList.replace("active", "inactive");
    unlockElements(elements);
  }
}
