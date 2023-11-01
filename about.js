// JavaScript for the About Us page
// Add any custom JavaScript here as needed

// Team members' content
const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      imgSrc: "john-doe.jpg",
    },
    {
      name: "Jane Smith",
      role: "Agricultural Expert",
      imgSrc: "jane-smith.jpg",
    },
    {
      name: "Michael Johnson",
      role: "Data Scientist",
      imgSrc: "michael-johnson.jpg",
    },
  ];
  
  // Function to create team member elements
  function createTeamMember(member) {
    const teamMember = document.createElement("div");
    teamMember.classList.add("team-member");
    const img = document.createElement("img");
    img.src = member.imgSrc;
    img.alt = member.name;
    const name = document.createElement("h3");
    name.textContent = member.name;
    const role = document.createElement("p");
    role.textContent = member.role;
    teamMember.appendChild(img);
    teamMember.appendChild(name);
    teamMember.appendChild(role);
    return teamMember;
  }
  
  // Function to populate the team members section
  function populateTeamMembers() {
    const teamMembersContainer = document.querySelector(".team-members");
    teamMembers.forEach((member) => {
      const teamMember = createTeamMember(member);
      teamMembersContainer.appendChild(teamMember);
    });
  }
  
  // Populate team members on page load
  populateTeamMembers();
  