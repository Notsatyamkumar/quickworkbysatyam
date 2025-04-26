document.addEventListener('DOMContentLoaded', () => {
    const currentUser = getCurrentUser();
    const jobs = getJobs();

    const activeJobs = jobs.filter(job => job.status === 'active');
    const appliedJobs = jobs.filter(job => job.status === 'applied');

    const activeJobsContainer = document.getElementById('active-jobs');
    const appliedJobsContainer = document.getElementById('applied-jobs');
    const noActiveJobsMessage = document.getElementById('no-active-jobs');
    const noAppliedJobsMessage = document.getElementById('no-applied-jobs');

    if (activeJobs.length > 0) {
        activeJobsContainer.innerHTML = activeJobs.map(job => createJobCard(job)).join('');
        noActiveJobsMessage.style.display = 'none'; // hide if there are jobs
    } else {
        activeJobsContainer.innerHTML = ''; // clear
        noActiveJobsMessage.style.display = 'block'; // show "No active jobs"
    }

    if (appliedJobs.length > 0) {
        appliedJobsContainer.innerHTML = appliedJobs.map(job => createJobCard(job)).join('');
        noAppliedJobsMessage.style.display = 'none';
    } else {
        appliedJobsContainer.innerHTML = '';
        noAppliedJobsMessage.style.display = 'block';
    }

    lucide.createIcons();
});

        // Initialize icons
        lucide.createIcons();

        // Function to create a job card
        function createJobCard(job) {
            return `
                <div class="job-card">
                    <div class="job-card-header">
                        <h3>${job.title}</h3>
                        <span class="job-pay">${job.pay}</span>
                    </div>
                    <div class="job-card-body">
                        <p class="job-location">
                            <i data-lucide="map-pin" class="icon-sm"></i>
                            ${job.location}
                        </p>
                        <p class="job-description">${job.description}</p>
                        <div class="job-meta">
                            <span>
                                <i data-lucide="clock" class="icon-sm"></i>
                                ${job.hours}
                            </span>
                            <span>
                                <i data-lucide="calendar" class="icon-sm"></i>
                                ${job.date}
                            </span>
                        </div>
                    </div>
                </div>
            `;
        }

        // When the page loads
        document.addEventListener('DOMContentLoaded', () => {
            const currentUser = getCurrentUser();
            const jobs = getJobs();

            // Filter active jobs (mock data - you would typically get this from your backend)
            const activeJobs = jobs.filter(job => job.status === 'active');
            const appliedJobs = jobs.filter(job => job.status === 'applied');

            // Render active jobs
            const activeJobsContainer = document.getElementById('active-jobs');
            if (activeJobs.length > 0) {
                activeJobsContainer.innerHTML = activeJobs.map(job => createJobCard(job)).join('');
            } else {
                activeJobsContainer.innerHTML = '<div class="empty-state">No active jobs found</div>';
            }

            // Render applied jobs
            const appliedJobsContainer = document.getElementById('applied-jobs');
            if (appliedJobs.length > 0) {
                appliedJobsContainer.innerHTML = appliedJobs.map(job => createJobCard(job)).join('');
            } else {
                appliedJobsContainer.innerHTML = '<div class="empty-state">No applied jobs found</div>';
            }

            // Reinitialize icons for the newly added job cards
            lucide.createIcons();
        });
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