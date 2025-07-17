export const simpleHtmlCode = `<!DOCTYPE html>
<html>
<head>
<title>Simple Page</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`;

export const htmlElementsCode = `
<body>
<header>
  <h1>Website Header</h1>
</header>
<nav>
  <ul>
    <li><a href="#">Home</a></li>
  </ul>
</nav>
  <article>
    <h3>Article Title</h3>
  </article>
<footer>
  <p>&copy; 2025 My Website</p>
</footer>
</body>`;
export const HTMLAttributes = `<!DOCTYPE html>
<html>
<body>

<h2>The href Attribute</h2>

<p>HTML links are defined with the a tag. The link address is specified in the href attribute:</p>

<a href="https://www.w3schools.com">Visit W3Schools</a>

</body>
</html>`;
export const HTMLHeadings = `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`;
export const HTMLParagraphs = `<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>`;
export const HTMLStyles = `<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>`;
export const HTMLTextFormatting = `<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text`;
export const HTMLComments = `<!-- This is a comment -->

<p>This is a paragraph.</p>

<!-- Remember to add more information here -->`;
export  const HTMLImages = `<img src="pic_trulli.jpg" alt="Italian Trulli">`;
export  const HTMLDivElement = `<div>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>`;
export const HTMLclass = `<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>;
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
`;
export const HTMLIframes = `<iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe Example"></iframe>
`;
export const HTMLForms = `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
`;
export const HTMLFormAttributes = `<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
`;
export const HTMLFormElements = `<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
`;
export const HTMLInputTypes = `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
`;
export const HTMLMultimedia = `MPEG	.mpg
.mpeg	MPEG. Developed by the Moving Pictures Expert Group. The first popular video format on the web. Not supported anymore in HTML.
AVI	.avi	AVI (Audio Video Interleave). Developed by Microsoft. Commonly used in video cameras and TV hardware. Plays well on Windows computers, but not in web browsers.
WMV	.wmv	WMV (Windows Media Video). Developed by Microsoft. Commonly used in video cameras and TV hardware. Plays well on Windows computers, but not in web browsers.
QuickTime	.mov	QuickTime. Developed by Apple. Commonly used in video cameras and TV hardware. Plays well on Apple computers, but not in web browsers.
RealVideo	.rm
`;
export const HTMLVideo = `<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
`;
export const HTMLAudio = `<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
`;
