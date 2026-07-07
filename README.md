# Pacific Mobile Home Service Website

A modern, responsive business website built for **Pacific Mobile Home Service**, a mobile home roofing company serving San Diego County.

This project was created as a real-world business website with a focus on clear service presentation, lead generation, mobile responsiveness, and a professional customer experience.

## Live Website

https://www.pacificmobilehomeservice.com/

## Project Overview

Pacific Mobile Home Service needed a clean and trustworthy website to present its roofing services, show business credibility, and allow potential customers to submit service requests online.

The website is designed to help visitors quickly understand:

- What services the company provides
- Where the company operates
- How to contact the business
- How to request an estimate
- Why the company is reliable and experienced

The project focuses on practical business goals rather than only visual design. The main objective is to convert website visitors into customer inquiries.

## Key Features

### Responsive Website Design

The website is fully responsive and works across desktop, tablet, and mobile devices. The layout adjusts based on screen size so customers can easily browse services and submit requests from any device.

### Professional Homepage

The homepage includes a clear hero section with the company name, main value proposition, phone call button, request estimate button, license information, and a contact form.

### Contact Form Integration

The website includes a working contact form powered by FormSubmit. Customers can submit their name, phone number, email, city, service needed, and project message.

The form sends customer requests directly to the business email and includes:

- Custom email subject
- Table-formatted submission
- CAPTCHA disabled for a smoother user experience
- Redirect logic after successful form submission
- FormSubmit email masking to avoid exposing the real business email in the source code

### Success Popup After Submission

After a customer submits a request successfully, the website can redirect back with a success signal and display a simple confirmation popup. This improves user experience by clearly confirming that the message was sent.

### Service Pages

The website includes dedicated service content for the company’s main roofing services:

- Roof Installation
- Roof Repair
- Metal Roofing
- Roof Refurbishing

Each service is presented in a way that helps customers understand what the company offers and when they may need that service.

### Real Project Images

The website uses real project images instead of generic placeholder content where possible. This helps make the website feel more authentic and trustworthy.

### Business Contact Information

The website displays important contact and trust information, including:

- Phone number
- Email address
- Service area
- Business hours
- Contractor license number

### Vercel Deployment

The website is deployed through Vercel and connected to a GitHub repository. Future updates can be pushed to GitHub and automatically deployed through Vercel.

### Domain Configuration

The live production domain is connected to the Vercel project:

https://www.pacificmobilehomeservice.com/

## Tech Stack

This project uses:

- **Next.js** - React framework for building the website
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **FormSubmit** - Contact form email handling
- **Vercel** - Hosting and deployment
- **GitHub** - Version control and portfolio hosting

## Project Structure

```txt
app/
  page.tsx
  layout.tsx
  services/
    page.tsx
    roof-installation/
    roof-repair/
    metal-roofing/
    roof-refurbishing/

components/
  header.tsx
  hero-section.tsx
  contact-section.tsx
  services-section.tsx
  why-choose-us-section.tsx
  testimonials-section.tsx
  footer.tsx
  ui/

hooks/
  use-mobile.ts
  use-toast.ts

lib/
  utils.ts

public/
  Pictures/
  images/
  favicon.jpg

Folder Explanation

app/

The app folder contains the website routes and pages. In Next.js App Router, every page.tsx file represents a URL.

Examples:

* app/page.tsx creates the homepage /
* app/services/page.tsx creates /services
* app/services/roof-installation/page.tsx creates /services/roof-installation

components/

The components folder contains reusable UI sections such as the header, footer, hero section, contact form, and service sections.

These components do not create URLs by themselves. They are imported into pages and used to build the website layout.

hooks/

The hooks folder contains reusable React logic, such as detecting mobile screen size or handling toast behavior.

lib/

The lib folder contains shared utility functions used across the project.

public/

The public folder stores static assets such as images, icons, logos, and project photos.

Files inside public can be referenced directly from the website using paths like:
/Pictures/project_1.jpeg

Business Goals

The website was built with the following business goals in mind:

* Make the company look professional and trustworthy
* Clearly explain the company’s roofing services
* Make it easy for customers to call or submit a request
* Improve the company’s online presence
* Support future SEO and local business visibility
* Create a foundation that can be expanded with more pages, photos, testimonials, and service content

What I Built and Improved

During this project, I worked on:

* Creating a clean and responsive website layout
* Updating the company branding to Pacific Mobile Home Service
* Improving the homepage structure and visual hierarchy
* Replacing placeholder images with project photos
* Creating a contact form connected to FormSubmit
* Hiding the real email address using FormSubmit’s secure endpoint
* Adding redirect logic after form submission
* Preparing a success popup for better user feedback
* Cleaning up outdated wording such as “Free Estimate”
* Connecting the project to GitHub
* Connecting the production Vercel project to the correct GitHub repository
* Deploying the updated website to the live domain

Lessons Learned

This project helped me practice several real-world web development skills:

* Working with a production business website
* Managing local development with Next.js
* Understanding how GitHub and Vercel deployment workflows work
* Debugging deployment and domain issues
* Handling form submissions without a custom backend
* Managing project structure in a Next.js application
* Improving UI clarity and customer experience
* Using Git to track, commit, and deploy changes

Future Improvements

Possible future improvements include:

* Add spam protection using CAPTCHA or a honeypot field
* Add a dedicated thank-you page or improved popup confirmation
* Add more real project photos
* Add before-and-after roofing project gallery
* Improve SEO metadata for each service page
* Add Google Analytics or Vercel Analytics
* Add customer testimonials from real clients
* Add schema markup for local business SEO
* Add email routing through a dedicated business inbox such as contact@pacificmobilehomeservice.com

Author
Hieu Nguyen
