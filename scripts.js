// --- Work Experience ---
const experienceContent = {
  persado: {
    title: `Software Engineer Intern @ <a href="https://www.linkedin.com/company/persado/posts/?feedView=all" target="_blank" rel="noopener noreferrer" class="text-teal underline">Persado</a>`,
    bullets: [
      "Implemented Kubernetes in EKS (Amazon Elastic Kubernetes Service) and AKS (Azure Kubernetes Service) to manage the scaling, deployment, and maintenance of applications.",
      "Developed cloud-native Java microservices within an Agile team, following Git-based workflows and code reviews.",
      "Accelerated development cycles by streamlining CI/CD workflows, reducing build and deployment times by ~30%, and enabling the team to release updates more efficiently within Agile sprints",
      "Designed interactive wireframes in Figma to bridge engineering solutions with evolving product requirements.", 
      "Contributed to Agile sprint planning and Git-based code reviews to ensure smooth backend integration across teams"
    ]
  },
  codepath: {
    title: `Tech Fellow @ <a href="https://www.linkedin.com/school/codepath-org/" target="_blank" rel="noopener noreferrer" class="text-teal underline">CodePath</a>`,
    bullets: [
      "Helped lead interactive sessions focused on Python programming language, adapting teaching methodologies to cater to diverse learning styles.",
      "Facilitated dynamic breakout sessions for collaborative programming assignments in data structures and algorithms, enhancing teamwork and increasing student engagement by 25% through peer-driven learning.",
      "Delivered personalized coaching by simulating programming interviews, equipping students with real-world problem-solving skills through targeted questioning techniques."
    ]
  }
};

let currentExperienceKey = null;

function showExperience(key) {
  const box = document.getElementById('experience-details');

  if (currentExperienceKey === key) {
    box.classList.add('hidden');
    currentExperienceKey = null;
    return;
  }

  const data = experienceContent[key];
  if (!data) return;

  document.getElementById('exp-title').innerHTML = data.title;

  const list = document.getElementById('exp-list');
  list.innerHTML = "";
  data.bullets.forEach(bullet => {
    const li = document.createElement('li');
    li.textContent = bullet;
    list.appendChild(li);
  });

  box.classList.remove('hidden');
  currentExperienceKey = key;
}

let currentSkillsKey = null;

function toggleInfo(id) {
  const el = document.getElementById(id);

  if (currentSkillsKey === id) {
    el.classList.add('hidden');
    currentSkillsKey = null;
  } else {
    document.querySelectorAll('.info-box').forEach(box => box.classList.add('hidden'));
    el.classList.remove('hidden');
    currentSkillsKey = id;
  }
}
