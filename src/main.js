import "./style.css";

const projects = [
  {
    name: "tickedo",
    description: "Ticketing practice game built with Flask",
    url: "https://tickedo.net",
    language: "Python",
    languageColor: "#3572A5",
  },
  {
    name: "design-patterns-note",
    description: "Design Patterns Examples in Python",
    url: "https://design-pattern.risako.dev/",
    language: "Python",
    languageColor: "#3572A5",
  },
  {
    name: "adtech-note",
    description: "Practical AdTech: Engineering Notes with Code and Examples",
    url: "https://adtech.risako.dev/",
    language: "JavaScript",
    languageColor: "#f1e05a",
  },
  {
    name: "tech-blog",
    description: "More Projects and Tech Notes",
    url: "https://note.com/risakodev",
    language: "Markdown",
    languageColor: "#083fa1",
  },
];

const repoIcon = `
  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" class="text-[#656d76] shrink-0">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/>
  </svg>
`;

const container = document.getElementById("projects");

projects.forEach((project) => {
  const card = document.createElement("a");
  card.href = project.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.className =
    "block m-1 rounded-lg border border-[#d0d7de] bg-white hover:bg-[#f6f8fa] transition-colors duration-200 min-h-[160px] flex flex-col p-5 pt-5 text-left shadow-sm";
  card.innerHTML = `
      <div class="flex flex-col flex-1">
        <div class="flex items-center gap-2 flex-wrap pr-8">
          ${repoIcon}
          <span class="text-[#0969da] font-semibold text-base hover:underline truncate">${project.name}</span>
          <span class="text-xs leading-none border border-[#d0d7de] rounded-full px-2 py-1 text-[#656d76] bg-[#f6f8fa] font-medium">Public</span>
        </div>

        <p class="text-sm text-[#656d76] mt-3 line-clamp-2 leading-relaxed flex-1">
          ${project.description}
        </p>

        <div class="flex items-center gap-3 mt-3 text-sm text-[#656d76]">
          <span class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${project.languageColor}"></span>
            ${project.language}
          </span>
        </div>
      </div>
  `;

  container.appendChild(card);
});
