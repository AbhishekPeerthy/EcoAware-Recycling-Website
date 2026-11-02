# EcoAware – Community Recycling Awareness Website

**CPU4106-20C | Level 4 Computing Group Project**

## 1. Project Overview

EcoAware is a responsive community recycling awareness website developed as part of the CPU4106-20C Group Project.

The project supports **United Nations Sustainable Development Goal 11 (SDG 11): Sustainable Cities and Communities** by encouraging responsible waste management, recycling awareness and environmentally friendly everyday habits.

The website was developed using **HTML5, CSS3 and JavaScript**, with an emphasis on accessibility, responsive design, simple navigation and interactive learning.

EcoAware is a front-end-only educational website. It does not require a database, server-side processing or external APIs.

## 2. Project Objectives

The main objectives of EcoAware are to:

- Increase awareness of recycling and responsible waste disposal.
- Provide clear information about different recyclable materials.
- Encourage community participation through interactive activities.
- Help users assess their recycling knowledge.
- Demonstrate how a recycling-centre locator could work.
- Deliver a responsive website suitable for desktop and mobile browsers.
- Apply Agile Scrum and Software Development Life Cycle (SDLC) principles during development.

## 3. Website Features

### Homepage
Introduces EcoAware, explains the purpose of the website and provides navigation to its main sections.

### About Recycling
Explains the importance of recycling, environmental responsibility and the project's relationship to SDG 11.

### Recycling Guide
Provides expandable information about recycling categories and responsible disposal practices.

### Recycling Centre Locator
Allows visitors to enter a UK-format postcode and view fictional recycling-centre examples.

**Important:** The locator is a demonstration feature. It does not connect to live location services or provide verified recycling-centre information.

### Eco Quiz
An interactive 10-question recycling quiz featuring:

- Multiple-choice questions.
- Question progression.
- Score calculation.
- Feedback on performance.
- An option to restart the quiz.

### Recycling Tips
Provides practical suggestions for reducing waste, reusing materials and improving recycling habits.

### Community Pledge
Allows visitors to select or write a recycling pledge.

Pledges are stored locally using JavaScript `localStorage` and can be removed by the visitor.

### Contact and FAQs
Provides frequently asked questions and a demonstration contact form.

The form includes input validation and confirmation feedback but does not send emails or store submitted messages on a server.

## 4. Project Team and Responsibilities

The project was organised using Agile Scrum principles, with responsibilities assigned to five group members.

| Team Member | Assigned Role | Main Responsibilities |
|---|---|---|
| Lemar | Product Owner | Define project requirements, prioritise features, manage the product backlog and review project objectives. |
| Ezekiel | Scrum Master | Coordinate sprint planning, facilitate team communication, monitor progress and identify development obstacles. |
| Christopher | UI/UX Designer | Plan the website layout, navigation, wireframes, visual consistency and user experience across screen sizes. |
| Abhishek Peerthy | Front-End Developer | Develop the website using HTML, CSS and JavaScript; implement navigation, responsive layouts and interactive features; support testing and deployment. |
| Angel | Quality Assurance and Documentation Lead | Coordinate functional testing, record results, review requirements and organise supporting project documentation. |

These responsibilities describe the team's assigned roles and do not imply that every proposed activity has been independently verified as completed.

## 5. Development Methodology

EcoAware followed an Agile Scrum-based development plan over four weeks, with Week 5 allocated to final submission and presentation.

| Week | Development Focus |
|---|---|
| Week 1 | Project selection, SDG 11, requirements, team roles, Gantt chart and milestones. |
| Week 2 | Research, website structure, sitemap, layout planning and responsive design. |
| Week 3 | Interactive feature development, UML use case diagrams and data flow diagrams. |
| Week 4 | Functional testing, responsive checks, refinements and GitHub Pages deployment. |
| Week 5 | Final documentation, submission preparation, presentation and viva. |

The team used project planning and documentation techniques, including a product backlog, sprint planning, milestone tracking and system modelling.

## 6. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure, content, navigation and forms. |
| CSS3 | Visual styling, page layouts and responsive design. |
| JavaScript | Interactive quiz, mobile navigation, postcode validation, contact form behaviour and community pledge. |
| Browser `localStorage` | Local storage of community pledges. |
| Git and GitHub | Source-code version control and repository hosting. |
| GitHub Pages | Deployment of the static website. |
| Browser Developer Tools | Responsive layout inspection and debugging. |

The website uses built-in Arial/Helvetica fonts and locally stored CSS and JavaScript files. It does not depend on external image libraries, CDN scripts or third-party APIs.

## 7. Project File Structure

```text
EcoAware/
│
├── index.html
├── about.html
├── recycling-guide.html
├── locator.html
├── quiz.html
├── tips.html
├── pledge.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── quiz.js
│   ├── locator.js
│   └── pledge.js
│
└── README.md
```

### Main Files

- `index.html` - Homepage and introduction.
- `about.html` - Recycling awareness and SDG 11.
- `recycling-guide.html` - Expandable recycling information.
- `locator.html` - Demonstration recycling-centre locator.
- `quiz.html` - Interactive 10-question Eco Quiz.
- `tips.html` - Recycling advice and practical tips.
- `pledge.html` - Community pledge interface.
- `contact.html` - FAQs and demonstration contact form.
- `css/style.css` - Website styling and responsive layout rules.
- `js/main.js` - Navigation and contact form interactions.
- `js/quiz.js` - Quiz questions, progression, scoring and restart.
- `js/locator.js` - Postcode validation and fictional locator results.
- `js/pledge.js` - Local pledge storage and removal.

## 8. How to Run the Website

EcoAware can run locally without installing additional software.

1. Download or extract the EcoAware project files.
2. Open the `EcoAware` folder.
3. Locate `index.html`.
4. Double-click the file to open it in a modern web browser.
5. Use the navigation menu to explore the website and its interactive features.

An internet connection is not required for the locally stored website resources.

## 9. Live Website and Source Code

**Live website:**  
https://abhishekpeerthy.github.io/EcoAware-Recycling-Website/

**GitHub repository:**  
https://github.com/abhishekpeerthy/EcoAware-Recycling-Website

The website is deployed through GitHub Pages, which hosts the static HTML, CSS and JavaScript files.

## 10. Testing and Quality Assurance

The project documentation includes functional and responsive testing activities covering:

- Navigation between all eight pages.
- Homepage buttons and internal hyperlinks.
- Mobile navigation and responsive layouts.
- Recycling Guide expandable sections.
- Eco Quiz progression, scoring and restart.
- Demonstration postcode validation and results.
- Community pledge saving and deletion.
- Contact form input validation.
- Browser compatibility and HTML/CSS validation.
- Accessibility checks and Lighthouse audits.

Responsive testing included browser device emulation, which should not be confused with testing on physical mobile devices.

The project's test documentation records expected and observed results. Automated accessibility scores do not establish full compliance with all WCAG requirements.

## 11. Accessibility and Responsive Design

EcoAware was designed to support a consistent user experience across desktop and mobile screen sizes.

Design considerations include:

- Responsive page layouts.
- Readable typography and headings.
- Clear navigation and descriptive links.
- Keyboard-accessible controls.
- Form labels and validation feedback.
- Visible focus indicators.
- Appropriate colour contrast.

Further testing with representative users and assistive technologies would provide stronger accessibility and usability evidence.

## 12. Project Limitations

EcoAware is an educational prototype with the following limitations:

1. **No back-end database:** Website functionality is implemented in the browser.
2. **Demonstration locator:** Recycling-centre results are fictional and are not retrieved from a live service.
3. **No email submission:** The contact form validates inputs but does not transmit messages.
4. **Local pledge storage:** Pledges are saved only in the visitor's current browser using `localStorage`.
5. **No external API integration:** The website does not retrieve live recycling or location data.
6. **Local recycling rules:** Recycling guidance can vary between councils, so visitors should consult their local authority for current disposal requirements.

These limitations reflect the agreed front-end-only project scope.

## 13. Future Improvements

Potential future enhancements include:

- Integration with verified recycling-centre location data.
- A secure back-end database for community participation.
- Server-side contact form processing.
- Additional recycling educational activities.
- Formal user acceptance testing with representative users.
- More comprehensive accessibility testing using assistive technologies.

These are proposed improvements and are not features of the current implementation.

## 14. Conclusion

EcoAware demonstrates how HTML, CSS and JavaScript can be used to develop a responsive educational website that promotes recycling awareness and supports SDG 11.

The project provided opportunities to apply front-end development, Agile Scrum planning, system modelling, testing and collaborative project-management skills.

The completed website combines educational content with interactive features while remaining within the agreed front-end-only scope.

---

**Module:** CPU4106-20C Group Project  
**Project:** EcoAware - Community Recycling Awareness Website  
**Development Approach:** Agile Scrum  
**Project Type:** Responsive Front-End Website  
**Technologies:** HTML5, CSS3 and JavaScript