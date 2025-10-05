import React from "react";
import ProjectPage from "../components/ProjectPage";
import FiveCatsGroceryProcess from "../components/FiveCatsGroceryProcess";

const FiveCatsGroceryPage = () => {
  return (
    <ProjectPage
      title="Five Cats Grocery"
      youtube="https://www.youtube.com/embed/tF8Sx8MXX3k?si=x0OJVGTFD_Glz160"
      
      overview="Five Cats Grocery is a cozy, cat-themed grocery website designed for cat moms and dads. It features filterable categories, an interactive shopping cart linked to a backend server for real-time updates, and charming cat illustrations."
      timeline="4 weeks"
      team="Individual Project"
      role="Designer & Developer"
      tools="HTML/CSS, JavaScript, AJAX, MySQL"
      problem={
        <>
          This project began with a design brief to create a grocery website. Instead of building a generic store, I wanted to create something emotionally resonant and delightful. The idea: a playful grocery store made just for beloved cats and their humans. 
          <p className="mt-2">
            The challenge was to combine practicality (like search/filter functions and checkout logic) with heartfelt, custom visual storytelling.
          </p>
        </>
      }
      goal="To design a playful, emotionally warm online shopping experience that centers around a user’s love for their cat—easy to navigate, charming to use, and joyful to return to."
      process={`• Researched grocery website content and structure
• Listed and categorized playful product ideas
• Set the tone and color palette to reflect a light, cozy vibe
• Designed UI with custom cat illustrations
• Developed frontend and backend: category filters, cart system, real-time updates`}
      outcome={
        <>
          <p>
            The final website is a fully functional, heartwarming online store with:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Category filtering and responsive product grid</li>
            <li>Interactive cart with quantity controls</li>
            <li>Live cart total updates from backend</li>
            <li>Custom cat drawings for character and delight</li>
          </ul>
        </>
      }
    >
      <FiveCatsGroceryProcess />
    </ProjectPage>
  );
};

export default FiveCatsGroceryPage;
