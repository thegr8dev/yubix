const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require('docx');
const fs = require('fs');

async function createContentDocument() {
  const docParagraphs = [];
  
  // Title and Instructions
  docParagraphs.push(
    new Paragraph({
      text: "YUBIX WEBSITE CONTENT - FOR EDITING",
      heading: HeadingLevel.TITLE,
      alignment: 'center'
    }),
    new Paragraph({ text: "" }),
    new Paragraph({
      text: "HOW TO EDIT:",
      heading: HeadingLevel.HEADING_2
    }),
    new Paragraph({ text: "1. Find the text you want to change" }),
    new Paragraph({ text: "2. Edit the text after the colon (keep labels unchanged)" }),
    new Paragraph({ text: "3. Save and send back to us" }),
    new Paragraph({ text: "" }),
    new Paragraph({ text: "═".repeat(60) }),
    new Paragraph({ text: "" })
  );

  // HOMEPAGE - HERO SECTION
  docParagraphs.push(
    new Paragraph({
      text: "HOMEPAGE - HERO SECTION",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Badge Text: ", bold: true }),
        new TextRun({ text: "AI-POWERED SECURITY ECOSYSTEM" })
      ]
    }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Main Title: ", bold: true }),
        new TextRun({ text: "Humanizing Technology" })
      ]
    }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Subtitle: ", bold: true }),
        new TextRun({ text: "Fortifying the Future" })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Description: ", bold: true }),
        new TextRun({ text: "Founded on 30+ years of elite security expertise, YUBIX humanizes technology to create intelligent security ecosystems that prevent threats in real-time while building resilient communities." })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Key Features:", bold: true })
      ]
    }),
    new Paragraph({ text: "- Intelligent Security" }),
    new Paragraph({ text: "- Real-Time Prevention" }),
    new Paragraph({ text: "- Resilience Ecosystems" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Buttons:", bold: true })
      ]
    }),
    new Paragraph({ text: "- Explore the Ecosystem" }),
    new Paragraph({ text: "- Talk to Our Experts" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "━".repeat(50) }),
    new Paragraph({ text: "" })
  );

  // HOMEPAGE - FEATURED PLATFORMS
  docParagraphs.push(
    new Paragraph({
      text: "HOMEPAGE - FEATURED PLATFORMS SECTION",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Section Title: ", bold: true }),
        new TextRun({ text: "Featured Security Platforms" })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Platform Cards:", bold: true })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Card 1 - Vertex Pro:", bold: true })
      ]
    }),
    new Paragraph({ text: "Title: Enterprise Command Center" }),
    new Paragraph({ text: "Description: Real-time threat prevention dashboard with AI-powered threat correlation for aviation, infrastructure, and corporate security." }),
    new Paragraph({ text: "Button: Learn More" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Card 2 - Buzz World:", bold: true })
      ]
    }),
    new Paragraph({ text: "Title: Secure Communication Hub" }),
    new Paragraph({ text: "Description: Smart social network for secure internal communications with live maps and department-based messaging." }),
    new Paragraph({ text: "Button: Explore Platform" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Card 3 - BYONN:", bold: true })
      ]
    }),
    new Paragraph({ text: "Title: Security for Everyone" }),
    new Paragraph({ text: "Description: Traffic light system protocols with B2B & B2C versions for community-wide security coordination." }),
    new Paragraph({ text: "Button: Get Started" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "━".repeat(50) }),
    new Paragraph({ text: "" })
  );

  // HOMEPAGE - STATISTICS SECTION
  docParagraphs.push(
    new Paragraph({
      text: "HOMEPAGE - STATISTICS SECTION",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Section Title: ", bold: true }),
        new TextRun({ text: "Trusted by Organizations Worldwide" })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Statistics:", bold: true })
      ]
    }),
    new Paragraph({ text: "- 180+ Sites Secured Globally" }),
    new Paragraph({ text: "- 99.7% Threat Detection Accuracy" }),
    new Paragraph({ text: "- 30+ Years of Security Expertise" }),
    new Paragraph({ text: "- ISO 27001 Certified" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "━".repeat(50) }),
    new Paragraph({ text: "" })
  );

  // HOMEPAGE - NEWS SECTION
  docParagraphs.push(
    new Paragraph({
      text: "HOMEPAGE - LATEST NEWS SECTION",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Section Title: ", bold: true }),
        new TextRun({ text: "Latest News & Updates" })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "News Articles:", bold: true })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "Article 1:" }),
    new Paragraph({ text: "Title: YUBIX Achieves ISO 27001 Recertification" }),
    new Paragraph({ text: "Summary: Strengthening our commitment to information security management excellence." }),
    new Paragraph({ text: "Date: August 2025" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "Article 2:" }),
    new Paragraph({ text: "Title: New AI Module: Predictive Threat Correlation" }),
    new Paragraph({ text: "Summary: Advanced machine learning algorithms now predict security threats 72 hours in advance." }),
    new Paragraph({ text: "Date: July 2025" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "Article 3:" }),
    new Paragraph({ text: "Title: Global Expansion: 180+ Sites Secured" }),
    new Paragraph({ text: "Summary: YUBIX ecosystem now protects critical infrastructure across 6 continents." }),
    new Paragraph({ text: "Date: June 2025" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "━".repeat(50) }),
    new Paragraph({ text: "" })
  );

  // HOMEPAGE - TESTIMONIALS
  docParagraphs.push(
    new Paragraph({
      text: "HOMEPAGE - CLIENT TESTIMONIALS SECTION",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Section Title: ", bold: true }),
        new TextRun({ text: "What Our Clients Say" })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Testimonials:", bold: true })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "Testimonial 1:" }),
    new Paragraph({ text: "Quote: YUBIX transformed our airport security operations. Real-time threat detection has prevented 14 incidents in the past 6 months." }),
    new Paragraph({ text: "Name: Sarah Chen" }),
    new Paragraph({ text: "Title: Chief Security Officer" }),
    new Paragraph({ text: "Company: International Aviation Authority" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "Testimonial 2:" }),
    new Paragraph({ text: "Quote: The AI-powered threat correlation saved our corporation from a sophisticated cyber attack. ROI achieved within 3 months." }),
    new Paragraph({ text: "Name: Michael Rodriguez" }),
    new Paragraph({ text: "Title: CISO" }),
    new Paragraph({ text: "Company: Global Financial Services" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "Testimonial 3:" }),
    new Paragraph({ text: "Quote: Training 500+ security professionals with YUBIX methodology increased our incident response efficiency by 65%." }),
    new Paragraph({ text: "Name: Dr. Emma Thompson" }),
    new Paragraph({ text: "Title: Director of Security" }),
    new Paragraph({ text: "Company: European Education Consortium" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "━".repeat(50) }),
    new Paragraph({ text: "" })
  );

  // ABOUT PAGE
  docParagraphs.push(
    new Paragraph({
      text: "ABOUT PAGE - HERO SECTION",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Badge Text: ", bold: true }),
        new TextRun({ text: "OUR STORY" })
      ]
    }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Main Title: ", bold: true }),
        new TextRun({ text: "About YUBIX" })
      ]
    }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Subtitle: ", bold: true }),
        new TextRun({ text: "Humanizing Technology. Fortifying the Future." })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Description: ", bold: true }),
        new TextRun({ text: "Founded on 30+ years of elite security expertise, YUBIX humanizes technology to create intelligent security ecosystems that prevent threats in real-time while building resilient communities." })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Trust Indicators:", bold: true })
      ]
    }),
    new Paragraph({ text: "- ISO 27001 Certified" }),
    new Paragraph({ text: "- Enterprise-Grade Security" }),
    new Paragraph({ text: "- Global Security Leader" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "━".repeat(50) }),
    new Paragraph({ text: "" })
  );

  // ABOUT PAGE - MISSION SECTION
  docParagraphs.push(
    new Paragraph({
      text: "ABOUT PAGE - MISSION & VISION SECTION",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Section Title: ", bold: true }),
        new TextRun({ text: "Our Mission & Vision" })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Mission Statement: ", bold: true }),
        new TextRun({ text: "To humanize technology and create intelligent security ecosystems that protect what matters most while building resilient communities worldwide." })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Vision Statement: ", bold: true }),
        new TextRun({ text: "A world where advanced technology and human expertise work together to create unbreakable security that adapts, learns, and evolves." })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Core Values:", bold: true })
      ]
    }),
    new Paragraph({ text: "- Innovation with Purpose" }),
    new Paragraph({ text: "- Human-Centered Technology" }),
    new Paragraph({ text: "- Proactive Protection" }),
    new Paragraph({ text: "- Global Collaboration" }),
    new Paragraph({ text: "- Continuous Evolution" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "━".repeat(50) }),
    new Paragraph({ text: "" })
  );

  // ABOUT PAGE - LEADERSHIP TEAM
  docParagraphs.push(
    new Paragraph({
      text: "ABOUT PAGE - LEADERSHIP TEAM SECTION",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Section Title: ", bold: true }),
        new TextRun({ text: "Leadership Team" })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Team Member 1:", bold: true })
      ]
    }),
    new Paragraph({ text: "Name: Alexander Mitchell" }),
    new Paragraph({ text: "Role: Chief Executive Officer & Founder" }),
    new Paragraph({ text: "Expertise: Strategic Security Leadership" }),
    new Paragraph({ text: "Experience: 30+ years in global security management" }),
    new Paragraph({ text: "Background: Former security consultant for international governments and Fortune 500 companies" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Team Member 2:", bold: true })
      ]
    }),
    new Paragraph({ text: "Name: Sarah Chen" }),
    new Paragraph({ text: "Role: Chief Technology Officer" }),
    new Paragraph({ text: "Expertise: AI & Security Technology" }),
    new Paragraph({ text: "Experience: 12+ years in AI and cybersecurity" }),
    new Paragraph({ text: "Background: Former lead architect at major tech companies, specializing in real-time threat detection" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Team Member 3:", bold: true })
      ]
    }),
    new Paragraph({ text: "Name: David Rodriguez" }),
    new Paragraph({ text: "Role: Head of Global Operations" }),
    new Paragraph({ text: "Expertise: International Security Coordination" }),
    new Paragraph({ text: "Experience: 18+ years in global security management" }),
    new Paragraph({ text: "Background: Former director of security for international organizations and critical infrastructure" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "━".repeat(50) }),
    new Paragraph({ text: "" })
  );

  // CONTACT PAGE
  docParagraphs.push(
    new Paragraph({
      text: "CONTACT PAGE - MAIN SECTION",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Main Title: ", bold: true }),
        new TextRun({ text: "Contact Us" })
      ]
    }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Subtitle: ", bold: true }),
        new TextRun({ text: "Ready to Secure Your Future?" })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Description: ", bold: true }),
        new TextRun({ text: "Get in touch with our security experts to discuss your unique requirements and discover how YUBIX can protect your organization." })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Contact Methods:", bold: true })
      ]
    }),
    new Paragraph({ text: "- Phone: +1 (555) 123-YUBIX" }),
    new Paragraph({ text: "- Email: contact@yubix.com" }),
    new Paragraph({ text: "- Live Chat: Available 24/7" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Buttons:", bold: true })
      ]
    }),
    new Paragraph({ text: "- Schedule a Demo" }),
    new Paragraph({ text: "- Get Free Consultation" }),
    new Paragraph({ text: "- Request Quote" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "━".repeat(50) }),
    new Paragraph({ text: "" })
  );

  // SERVICES PAGE
  docParagraphs.push(
    new Paragraph({
      text: "SERVICES PAGE - MAIN SECTION",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Main Title: ", bold: true }),
        new TextRun({ text: "Our Services" })
      ]
    }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Subtitle: ", bold: true }),
        new TextRun({ text: "Comprehensive Security Solutions" })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Description: ", bold: true }),
        new TextRun({ text: "Expert security services designed to protect, enhance, and optimize your organization's digital infrastructure." })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Service Categories:", bold: true })
      ]
    }),
    new Paragraph({ text: "- Advanced Security Advisory" }),
    new Paragraph({ text: "- Custom Feature Development" }),
    new Paragraph({ text: "- AI Module Integration" }),
    new Paragraph({ text: "- Simulations & Drills" }),
    new Paragraph({ text: "- Executive Training" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "━".repeat(50) }),
    new Paragraph({ text: "" })
  );

  // Footer content for all pages
  docParagraphs.push(
    new Paragraph({
      text: "FOOTER (APPEARS ON ALL PAGES)",
      heading: HeadingLevel.HEADING_1
    }),
    new Paragraph({ text: "" }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Company Tagline: ", bold: true }),
        new TextRun({ text: "Humanizing Technology. Fortifying the Future." })
      ]
    }),
    
    new Paragraph({
      children: [
        new TextRun({ text: "Copyright Text: ", bold: true }),
        new TextRun({ text: "© 2025 YUBIX Corporation. All rights reserved." })
      ]
    }),
    
    new Paragraph({ text: "" }),
    new Paragraph({
      children: [
        new TextRun({ text: "Contact Info:", bold: true })
      ]
    }),
    new Paragraph({ text: "- Email: contact@yubix.com" }),
    new Paragraph({ text: "- Phone: +1 (555) 123-YUBIX" }),
    new Paragraph({ text: "- Address: 123 Security Boulevard, Cyber City, CC 12345" }),
    
    new Paragraph({ text: "" }),
    new Paragraph({ text: "═".repeat(60) })
  );

  // Create Word document
  const doc = new Document({
    sections: [{
      properties: {},
      children: docParagraphs
    }]
  });

  // Save document
  const buffer = await Packer.toBuffer(doc);
  const filename = `yubix-website-content.docx`;
  fs.writeFileSync(filename, buffer);
  
  console.log(`✅ Content document created: ${filename}`);
  console.log(`📄 Ready for client editing!`);
}

createContentDocument().catch(console.error);