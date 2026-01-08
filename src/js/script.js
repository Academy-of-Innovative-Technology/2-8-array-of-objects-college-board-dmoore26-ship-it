let colleges = [
  {
    rank: 1,
    name: "University of Example",
    location: "123 College Ave, City, Country",
    program: "Computer Science",
    website: "https://www.exampleuniversity.edu",
    image: "https://via.placeholder.com/200?text=University+1"
  },
  {
    rank: 2,
    name: "Tech Trade School",
    location: "456 Skill St, City, Country",
    program: "Electrical Engineering",
    website: "https://www.techtradeschool.edu",
    image: "https://via.placeholder.com/200?text=School+2"
  },
  {
    rank: 3,
    name: "Global Business Institute",
    location: "789 Market Rd, City, Country",
    program: "Business Administration",
    website: "https://www.gbi.edu",
    image: "https://via.placeholder.com/200?text=Institute+3"
  },
  {
    rank: 4,
    name: "Creative Arts College",
    location: "321 Art Blvd, City, Country",
    program: "Graphic Design",
    website: "https://www.creativearts.edu",
    image: "https://via.placeholder.com/200?text=College+4"
  },
  {
    rank: 5,
    name: "NextGen Tech Company",
    location: "654 Innovation Way, City, Country",
    program: "Software Development Internship",
    website: "https://www.nextgentech.com",
    image: "https://via.placeholder.com/200?text=Company+5"
  }
];


let container = document.querySelector(".list-group");


colleges.forEach(college => {
  let html = `
    <div class="list-group-item college-card">
      <div class="row">
        <div class="col-12 col-md-2">
          <img src="${college.image}" alt="${college.name} Logo" class="college-image img-fluid">
        </div>
        <div class="col-12 col-md-10 college-info">
          <h5>${college.rank}. ${college.name}</h5>
          <p><strong>Location:</strong> ${college.location}</p>
          <p><strong>Program/Position:</strong> ${college.program}</p>
          <p><strong>Website:</strong> <a href="${college.website}" target="_blank">${college.website}</a></p>
          <p><strong>Google Maps:</strong> 
            <a href="https://maps.google.com?q=${encodeURIComponent(college.location)}" target="_blank">View on Google Maps</a>
          </p>
        </div>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", html);
});
