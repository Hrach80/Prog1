export const CSSSyntax = `body {
  background-color: lightblue;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}`;

export const typographyProperties = `p {
  color: red;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.5;
}`;

export const boxModelProperties = `.box-model-example {
  width: 300px;
  height: 200px;
  padding: 20px;
  padding-top: 10px;
  margin: 15px auto;
  border: 2px solid #333;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}`;

export const backgroundProperties = `.background-styles {
  background-color: #f0f0f0;
  background-image: url('image.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}`;

export const flexboxLayout = `.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.flex-item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 150px;
}`;

export const gridLayout = `.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 15px;
}

.grid-item {
  grid-column: 1 / 3;
  grid-row: 1;
}`;

export const responsiveDesign = `.responsive-text-highlight {
  color: #007bff;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.6;
  text-align: left;
  text-decoration: underline;
  letter-spacing: 1px;
  word-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`;

export const mediaQueries = `@media (max-width: 768px) {
  .box-model-example {
    width: 100%;
    margin: 10px 0;
  }
}`;

export const transitionsAndAnimations = `.transform-example {
  transform: rotate(45deg) scale(1.2) translateX(10px);
  transition: all 0.3s ease-in-out;
}

.transform-example:hover {
  transform: rotate(0deg) scale(1) translateX(0);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animated-element {
  animation: fadeIn 2s ease-in-out infinite alternate;
}`;

export const pseudoClassesAndElements = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
a:hover {
  color: blue;
  text-decoration: none;
}

p::first-line {
  font-weight: bold;
}

input:focus {
  border-color: green;
  outline: none;
}`;

export const CSSSelectors = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
.my-class {
  background-color: lightgray;
}

#my-id {
  border: 1px solid black;
}

div p {
  margin-left: 10px;
}

[type="text"] {
  border: 1px solid #ccc;
}`;

export const CSSVariables = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
:root {
  --primary-color: #4CAF50;
  --spacing-unit: 16px;
}

.element-with-vars {
  background-color: var(--primary-color);
  padding: var(--spacing-unit);
}`;

export const CSSSpecificity = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
/* Ուշադրություն. Specificity-ն կոդի մեջ ուղղակիորեն չի երևում, այլ սահմանվում է ընտրիչների կառուցվածքով: */
/* Այս հատվածը ցույց է տալիս տարբեր specificity ունեցող ընտրիչներ: */
p { /* Ցածր specificity */
  color: purple;
}

.some-class { /* Միջին specificity */
  color: orange;
}

#some-id { /* Բարձր specificity */
  color: darkblue;
}`;

export const CSSBoxModel = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
.box {
  width: 100px;
  height: 100px;
  padding: 15px;
  margin: 20px;
  border: 5px solid brown;
  box-sizing: content-box; /* կամ border-box */
}`;

export const CSSUnits = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
.unit-example {
  font-size: 1.2em; /* հարաբերական չափ */
  width: 50vw; /* դիտման դաշտի լայնության 50%-ը */
  height: 100px; /* բացարձակ չափ */
  padding: 2rem; /* root em */
  margin: 5%; /* ծնող տարրի չափի % */
}`;

export const CSSColors = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
.color-example {
  color: #FF5733; /* Hex գույն */
  background-color: rgb(75, 192, 192); /* RGB գույն */
  border-color: rgba(255, 99, 71, 0.8); /* RGBA գույն թափանցիկությամբ */
  box-shadow: 0 0 10px hsl(240, 100%, 50%); /* HSL գույն */
}`;

export const CSSFunctions = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
.function-example {
  width: calc(100% - 20px); /* Օգտագործում է calc() ֆունկցիա */
  transform: translate(10px, 20px); /* Օգտագործում է translate() ֆունկցիա */
  background-image: linear-gradient(to right, red, yellow); /* Օգտագործում է linear-gradient() ֆունկցիա */
}`;

export const CSSPositioning = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
.static-pos {
  position: static; /* Լռելյայն դիրք */
}

.relative-pos {
  position: relative;
  top: 10px;
  left: 10px;
}

.absolute-pos {
  position: absolute;
  top: 0;
  right: 0;
}

.fixed-pos {
  position: fixed;
  bottom: 0;
  left: 0;
}

.sticky-pos {
  position: sticky;
  top: 0;
}`;

export const CSSOverflow = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
.overflow-container {
  width: 200px;
  height: 100px;
  overflow: auto; /* auto, scroll, hidden, visible */
  border: 1px solid gray;
}`;

export const CSSZIndex = `/* Ուշադրություն: Սրանք նոր օրինակներ են, որոնք համապատասխանում են անվանմանը */
.element-one {
  position: relative;
  z-index: 1;
  background-color: lightcoral;
}

.element-two {
  position: relative;
  z-index: 2;
  background-color: lightgreen;
}`;
