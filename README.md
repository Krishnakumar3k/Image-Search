
## Project 
PROJECT LIVE LINK [https://imgcaption.netlify.app/](https://imgcaption.netlify.app/)
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)






### TasK Assign By VEGA6
#### Objective: 
Objective: Develop a web application that leverages a Free Image API to allow users to search for images, add custom captions and shapes, and download the modified images.

# Functional Requirements:
## Search Page Design:
Implement a search input and a result area to display images fetched from any Free Image API (e.g., Unsplash, Pixabay, Pexels, Flickr).
Each search result should include an "Add Captions" button.


### Image Handling and Display:
Upon clicking "Add Captions," display the selected image on a canvas using fabric.js, allowing users to manipulate it.

#### Canvas Interaction:
Enable users to add text layers (editable and resizable) and basic shapes (Triangle, Circle, Rectangle, Polygon) on the canvas.
Support layering of elements where shapes can be placed above the image and text layers above shapes.
Provide functionality to drag, resize, and reposition both shapes and text layers.

##### Download Functionality:
Include a "Download" button adjacent to the canvas.
Clicking this button should generate and download the modified image with added captions and shapes.

###### Error Handling and Validation:
Implement proper error handling for API requests and canvas interactions.
Validate user inputs such as search queries and ensure appropriate feedback is given.

###### Technical Stack:
>>Frontend: HTML, CSS (for layout and styling), JavaScript (React or Vanilla JS for functionality), fabric.js for canvas manipulation.
>>API Integration: Choose and integrate any suitable Free Image API.
>>Deployment: Use platforms like CodeSandbox, CodePen, or similar for deployment and showcasing.

##### Submission Details:
Create an account on a preferred platform (e.g., CodeSandbox, CodePen).
Deploy the working application with clear instructions on how to use it.
Include a sketch or mockup of the layout to guide your design process.

##### Bonus Points:
Log all canvas layers and their attributes (e.g., image, shapes, text) in an array format for debugging and transparency.

###### Resources:
Free Image APIs: Unsplash, Pixabay, Pexels, Flickr.
fabric.js Documentation: Fabric.js.