// ============================================================================
// Love Configuration - Personalize this file for your Valentine! 💕
// ============================================================================

/**
 * IMPORTANT: This is an EXAMPLE file to show you the structure.
 * 
 * For your actual configuration:
 * 1. Copy this file and rename it to: loveConfig.ts (without _example)
 * 2. Customize all the values with your personal information
 * 3. Make sure loveConfig.ts is in your .gitignore if keeping it private
 * 
 * OR simply edit the existing loveConfig.ts file directly.
 */

export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  // === PERSONAL DETAILS ===
  // Replace with your actual names
  yourName: "Neha",
  partnerName: "My Love",
  
  // === RELATIONSHIP START DATE ===
  // Set this to when your relationship began (Singapore timezone: +08:00)
  // Format: "YYYY-MM-DDTHH:MM:SS+08:00"
  relationshipStart: "2023-09-05T12:53:06+08:00",
  
  // === VALENTINE'S DATE ===
  valentineDate: "2026-02-14",
  
  // === HEADLINE AND INTRO ===
  heroHeadline: "To My Dearest Valentine",
  heroSubtext: "A journey through our moments together, celebrating every laugh, every adventure, and every heartbeat we've shared.",
  
  // === PHOTO GALLERY ===
  // How many photos are in /public/photos/ ?
  // Photos should be named: photo_1.jpg, photo_2.jpg, photo_3.jpg, etc.
  photoCount: 8,
  
  // === TIMELINE MILESTONES ===
  // Add your relationship milestones here
  milestones: [
    {
      title: "First Date",
      date: "June 29, 2023",
      description: "The day our story began. Conversation turned into hours of relationships, and I knew you were special."
    },
    {
      title: "First Adventure",
      date: "September 8, 2024",
      description: "Our first Zoo trip together! From all  snakes, birds to all wild animals, every moment with you felt like magic."
    },
    {
      title: "Your Birthday",
      date: "October 11, 2025",
      description: "Celebrating you was pure joy. Every smile you gave made my heart soar."
    },
    {
      title: "Our Little Traditions",
      date: "October 20, 2025",
      description: "From Diwali to fort adventure, we've built a life full of beautiful routines."
    },
    {
      title: "Late Nights",
      date: "December 21, 2025",
      description: "Countless evenings of laughter, wondering every where, and creating our own little world together."
    },
    {
      title: "New Year Together",
      date: "January 1, 2026",
      description: "Starting the year in your arms, knowing I wanted every year to begin and end with you."
    },
    {
      title: "First Anniversary",
      date: "January 03, 2026",
      description: "One year of growing, learning, and loving together. Here's to forever more."
    },
   
    {
      title: "This Moment",
      date: "February 14, 2026",
      description: "Right now, as you read this, know that you are my greatest adventure and my safest home."
    }
  ],
  
  // === EMAIL CONFIGURATION ===
  // For the "Send me your answer" button
  yourEmail: "nehakoshti33@gmail.com", // Replace with your actual email
  emailSubject: "My Valentine's Answer 💐",
  emailBody: "Yes! I'd love to be your Valentine! 💕\n\nLove always,\n",
  
  // === INVITE DETAILS ===
  inviteTitle: "Will You Be My Valentine?",
  inviteMessage: "Join me for a magical evening on February 14th. Let's make more beautiful memories together.",
  inviteDate: "February 14, 2026",
  inviteTime: "7:00 PM",
  inviteLocation: "A romantic surprise awaits...",
};

export default loveConfig;
