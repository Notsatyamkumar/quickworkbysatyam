
# QuickWork - Find Jobs Near You

A platform connecting job seekers with local employers for quick work opportunities.

## Project Description

QuickWork is built with plain HTML, CSS, and JavaScript, making it lightweight and easy to maintain. The application allows:

- Job seekers to browse and apply for local jobs
- Employers to post jobs and manage applications
- Authentication via phone number or email
- Location-based job searching
- Rating system for both workers and employers

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles/            
│   └── main.css       # Main stylesheet
└── js/                # JavaScript files
    ├── app.js         # Main application logic
    ├── auth.js        # Authentication functionality
    ├── data.js        # Mock data and services
    ├── employer.js    # Employer-specific functionality
    └── jobSeeker.js   # Job seeker-specific functionality
```

## Features

- **Phone Number Authentication**: Users can sign up using their phone number and OTP verification
- **Email Authentication**: Traditional email and password authentication
- **Job Listings**: Browse available jobs with details
- **Job Map View**: See jobs on a map (location-based)
- **User Profiles**: For both job seekers and employers

## Getting Started

1. Clone this repository
2. Open `index.html` in your web browser
3. To deploy, simply upload these files to any static web hosting service

## Development

This project uses vanilla JavaScript with no build tools required. Simply edit the files and refresh your browser to see changes.

For styling, we use plain CSS with a mobile-first responsive design approach.

## Deployment

The project can be deployed to any static hosting service. Just upload all the files maintaining the directory structure.

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Lucide Icons
