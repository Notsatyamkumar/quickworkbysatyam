lucide.createIcons();

    const jobs = [
      {
        id: 1,
        title: "House Cleaning",
        location: "Gurgaon Sector 18",
        pay: "₹500",
        description: "Need help cleaning a 2-bedroom apartment 10am- 3pm",
        employer: "Satyam Kumar",
        postedDate: "2 hours ago"
      },
      {
        id: 2,
        title: "Home Shifting Help",
        location: "Noida sector 10",
        pay: "₹600",
        description: "shifting apartmentsn, need a person to help me shift, 10am - 5pm",
        employer: "Rakesh Arora",
        postedDate: "5 hours ago"
      },
      {
        id: 3,
        title: "Box Office",
        location: "JLN stadium",
        pay: "₹1000",
        description: "Need people to work in box office temporaily 10am - 10pm",
        employer: "Sarah Johnson",
        postedDate: "1 day ago"
      }
    ];

    function checkAuth() {
      const user = localStorage.getItem('currentUser');
      if (!user) {
        window.location.href = 'index.html'; // Redirect to signup if not logged in
      } else {
        showJobsPage();
      }
    }

    function showJobsPage() {
      const jobsList = document.getElementById('jobs-list');
      jobsList.innerHTML = jobs.map(job => `
        <div class="job-card card">
          <div class="job-card-content">
            <div class="job-card-header">
              <h3 class="job-card-title">${job.title}</h3>
              <div class="job-card-pay">${job.pay}</div>
            </div>
            <div class="job-card-location">
              <i data-lucide="map-pin" class="icon"></i>
              ${job.location}
            </div>
            <p class="job-card-description">${job.description}</p>
            <div class="job-card-footer">
              <div class="employer-info">
                <div class="employer-name">${job.employer}</div>
                <div class="job-posted">${job.postedDate}</div>
              </div>
              <button class="btn btn-primary" onclick="applyForJob(${job.id})">Apply</button>
            </div>
          </div>
        </div>
      `).join('');
      lucide.createIcons();
    }

    function applyForJob(jobId) {
      alert('Application submitted successfully!');
    }

    checkAuth();

    // Load mode on page load
    document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.getElementById('theme-toggle');
      const savedMode = localStorage.getItem('theme') || 'light';
      
      if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
      } else {
        document.body.classList.add('light-mode');
      }
  
      toggle.addEventListener('change', () => {
        if (toggle.checked) {
          document.body.classList.remove('light-mode');
          document.body.classList.add('dark-mode');
          localStorage.setItem('theme', 'dark');
        } else {
          document.body.classList.remove('dark-mode');
          document.body.classList.add('light-mode');
          localStorage.setItem('theme', 'light');
        }
      });
    });