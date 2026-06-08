import "./style.css";

const projects = [
  {
    title: "Design Patterns Note",
    description: "Design Patterns Examples in Python",
    url: "https://design-pattern.risako.dev/",
    bg: "bg-sky-200",
  },
  {
    title: "AdTech Note",
    description: "Practical AdTech: Engineering Notes with Code and Examples",
    url: "https://adtech.risako.dev/",
    bg: "bg-blue-200",
  },
  {
    title: "Tech Blog",
    description: "More Projects and Tech Notes",
    url: "https://note.com/risakodev",
    bg: "bg-indigo-200",
  },
];

const newTabIcon = `
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
`;

const container = document.getElementById("projects");

projects.forEach((project, index) => {
  const rotateClass = index % 2 === 0 ? "hover:-rotate-6" : "hover:rotate-6";

  const card = document.createElement("div");
  card.className = `relative transition duration-200 ease-in-out delay-75 hover:scale-110 ${rotateClass}`;
  card.innerHTML = `
    <a href="${project.url}" target="_blank" rel="noopener noreferrer">
      <div class="flex absolute top-4 left-4 justify-center items-center w-[40px] h-[40px] bg-white rounded-md opacity-80 z-10">
        ${newTabIcon}
      </div>
      <div class="m-1 rounded-xl border-2 border-black aspect-video ${project.bg} flex flex-col items-center justify-center p-6">
        <span class="font-chewy text-2xl text-center">${project.title}</span>
        <span class="font-fredoka text-sm text-center mt-2 opacity-70">${project.description}</span>
      </div>
    </a>
  `;

  container.appendChild(card);
});
