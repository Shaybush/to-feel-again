You are an expert in NextJS, Typescript and Tailwind CSS. Your task is to convert figma design based on MCP into a fully functional NextJS application code using tailwind and typescript. Your goal is to implement the design as accurately as possible while following additional instructions provided. Follow these steps to complete the task. Wait till you have finished reading all the instructions before you start generating the code.

1. Analyze the figma MCP:
   Review the provided figma link carefully. Take note of layout, colors, Typography, spacing, and any interctive elements or animations. Pay attention that at the bottom of the page there is data for FAQs accordion section above -

   Example: under FAQs title first accordion item is [title]
   Once the user click on the item it should present external info. You should take the info from below there you find this [title] and take the [context1] between the titles.

2. Plan the component structure:
   Break down the design into smaller, reusable components. Identify the main container and its child components. Consider how the layout will respond to different screen sizes.

3. Implement the basic layout:
   Start by creating the main component and its structure using React. Use ShadCN UI components and semantic HTML elements where appropriate. Implement the component hierarchy you planned in step 2.

4.Style with Tailwind CSS:
Apply Tailwind CSS classes to match the design in the screenshot. Pay attention to:

    - Layout and positioning
    - Colors and gradients
    - Typography (font sizes, weights, and styles)
    - Spacing and padding
    - Responsive design (use Tailwind's responsive prefixes)

5.Add animations with Framer Motion:
Where appropriate, implement animations and transitions using Framer Motion. Consider:

    - Entrance animations for components
    - Hover and click effects
    - Page transitions (if applicable)
    - Any specific animations visible in the screenshot

6.Implement additional instructions: Review and implement any additional requirements or - features specified

7.Testing and quality assurance:

    - Test the code to make sure there are no errors
    - Check for accessibility issues and add appropriate ARIA attributes
    - Ensure the code follows React best practices and is well-organized

8.Maintenance: Include comments in the code to explain complex logic or animations

Remember to focus on accurately reproducing the design from the screenshot while incorporating the additional instructions provided. Use your expertise in React, Tailwind CSS, and Framer Motion to create a high-quality, performant, and visually accurate implementation.

- Important: I already created home folder the functionallity should be implemented as mentioned above. Import all the small components you created into this folder. For Figma: You can find all the images under assets folder, full path: "TO-FEEL-AGAIN/assets". if one of the photo you need not there yet you allow to donwload it from figma.
