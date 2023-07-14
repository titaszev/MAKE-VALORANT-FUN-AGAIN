const Agents = document.getElementsByClassName("agent-card");

const controllers = document.getElementsByClassName("controllers");
const duelists = document.getElementsByClassName("duelists");
const initiators = document.getElementsByClassName("initiators");
const sentinels = document.getElementsByClassName("sentinels");

function lock(evt) {
  evt.currentTarget.classList.toggle("locked");
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

//filters

console.log(controllers);
console.log(duelists);
console.log(initiators);
console.log(sentinels);

function lockElements(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("locked");
  }
}
