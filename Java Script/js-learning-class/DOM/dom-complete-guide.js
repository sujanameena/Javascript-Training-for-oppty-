// ============================================
// DOM (Document Object Model) - Complete Guide
// ============================================

// What is the DOM?
// The DOM is a programming interface for HTML/XML documents. It represents the page structure as a tree of objects
// that JavaScript can manipulate to change document structure, style, and content dynamically.

// DOM Tree Structure:
// Document
// └── html
//     ├── head
//     │   ├── title
//     │   └── meta
//     └── body
//         ├── div
//         │   ├── h1
//         │   └── p
//         └── script


// ============================================
// 1. SELECTING ELEMENTS
// ============================================

// --- Single Element Selection ---

// By ID (fastest method)
const element = document.getElementById('myId');

// First match by CSS selector (most flexible)
const element1 = document.querySelector('.myClass');
const element2 = document.querySelector('#myId');
const element3 = document.querySelector('div > p');
const element4 = document.querySelector('[data-id="123"]');

// By tag name (returns HTMLCollection, access first with [0])
const element5 = document.getElementsByTagName('div')[0];

// By class name (returns HTMLCollection, access first with [0])
const element6 = document.getElementsByClassName('myClass')[0];


// --- Multiple Elements Selection ---

// All matching CSS selector (returns NodeList - can use forEach)
const elements = document.querySelectorAll('.myClass');
const allDivs = document.querySelectorAll('div');
const nestedElements = document.querySelectorAll('.parent .child');

// By tag name (returns HTMLCollection - live collection)
const divs = document.getElementsByTagName('div');

// By class name (returns HTMLCollection - live collection)
const items = document.getElementsByClassName('item');

// By name attribute (useful for form inputs)
const inputs = document.getElementsByName('username');


// --- Built-in Document Properties ---
document.anchors;        // All <a> elements with name attribute
document.body;          // The <body> element
document.documentElement; // The <html> element
document.embeds;        // All <embed> elements
document.forms;         // All <form> elements
document.head;          // The <head> element
document.images;        // All <img> elements
document.links;         // All <a> and <area> elements with href
document.scripts;       // All <script> elements
document.title;         // The document title


// ============================================
// 2. MANIPULATING CONTENT
// ============================================

// --- Text Content ---
element.textContent = 'New text';           // Get/Set text (ignores HTML)
element.innerText = 'Visible text';         // Get/Set visible text only
element.innerHTML = '<strong>Bold</strong>'; // Get/Set HTML content

// --- HTML Content ---
element.outerHTML = '<div>Replace entire element</div>';

// --- Attributes ---
element.getAttribute('data-id');            // Get attribute
element.setAttribute('data-id', '123');     // Set attribute
element.removeAttribute('data-id');         // Remove attribute
element.hasAttribute('data-id');            // Check if exists

// --- Data Attributes ---
element.dataset.userId = '456';             // Set data-user-id="456"
const userId = element.dataset.userId;      // Get data-user-id

// --- Value (for form elements) ---
inputElement.value = 'New value';
const inputValue = inputElement.value;


// ============================================
// 3. MODIFYING STYLES
// ============================================

// --- Inline Styles ---
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';
element.style.display = 'none';
element.style.visibility = 'hidden';

// Multiple styles at once
element.style.cssText = 'color: red; font-size: 20px; margin: 10px;';

// Get computed style (final rendered style)
const styles = window.getComputedStyle(element);
const color = styles.color;
const fontSize = styles.fontSize; 


// ============================================
// 4. WORKING WITH CLASSES
// ============================================

// --- classList API (modern and preferred) ---
element.classList.add('active');           // Add class
element.classList.add('class1', 'class2'); // Add multiple
element.classList.remove('active');        // Remove class
element.classList.toggle('active');        // Toggle class
element.classList.contains('active');      // Check if exists
element.classList.replace('old', 'new');   // Replace class

// --- className (older method) ---
element.className = 'class1 class2';       // Set all classes
const classes = element.className;          // Get all classes


// ============================================
// 5. CREATING ELEMENTS
// ============================================

// Create new element
const newDiv = document.createElement('div');
const newP = document.createElement('p');
const newImg = document.createElement('img');

// Set content and attributes
newDiv.textContent = 'Hello World';
newDiv.id = 'myDiv';
newDiv.className = 'container';
newImg.src = 'image.jpg';
newImg.alt = 'Description';

// Create text node
const textNode = document.createTextNode('Plain text');

// Create document fragment (for batch operations)
const fragment = document.createDocumentFragment();


// ============================================
// 6. INSERTING ELEMENTS
// ============================================

// --- appendChild (adds as last child) ---
parentElement.appendChild(newDiv);

// --- insertBefore (adds before reference node) ---
parentElement.insertBefore(newDiv, referenceElement);

// --- Modern insert methods ---
element.prepend(newDiv);                   // Add as first child
element.append(newDiv);                    // Add as last child
element.before(newDiv);                    // Add before element
element.after(newDiv);                     // Add after element

// --- insertAdjacentHTML ---
element.insertAdjacentHTML('beforebegin', '<div>Before</div>');
element.insertAdjacentHTML('afterbegin', '<div>First child</div>');
element.insertAdjacentHTML('beforeend', '<div>Last child</div>');
element.insertAdjacentHTML('afterend', '<div>After</div>');

// --- insertAdjacentElement ---
element.insertAdjacentElement('beforebegin', newDiv);


// ============================================
// 7. REMOVING ELEMENTS
// ============================================

// Modern method
element.remove();

// Classic method (still works)
parentElement.removeChild(element);

// Remove all children
element.innerHTML = '';
// Or
while (element.firstChild) {
    element.removeChild(element.firstChild);
}


// ============================================
// 8. REPLACING ELEMENTS
// ============================================

// Modern method
oldElement.replaceWith(newElement);

// Classic method
parentElement.replaceChild(newElement, oldElement);


// ============================================
// 9. CLONING ELEMENTS
// ============================================

// Shallow clone (element only)
const clone = element.cloneNode(false);

// Deep clone (element and all children)
const deepClone = element.cloneNode(true);


// ============================================
// 10. NAVIGATING THE DOM
// ============================================

// --- Parent Navigation ---
element.parentNode;                  // Parent node
element.parentElement;               // Parent element
element.closest('.container');       // Nearest ancestor matching selector

// --- Child Navigation ---
element.childNodes;                  // All child nodes (including text)
element.children;                    // Only child elements
element.firstChild;                  // First child node
element.firstElementChild;           // First child element
element.lastChild;                   // Last child node
element.lastElementChild;            // Last child element
element.hasChildNodes();             // Check if has children

// --- Sibling Navigation ---
element.nextSibling;                 // Next sibling node
element.nextElementSibling;          // Next sibling element
element.previousSibling;             // Previous sibling node
element.previousElementSibling;      // Previous sibling element


// ============================================
// 11. EVENT HANDLING
// ============================================

// --- addEventListener (modern, recommended) ---
element.addEventListener('click', function(event) {
    console.log('Clicked!', event);
});

// With arrow function
element.addEventListener('click', (e) => {
    console.log('Clicked!', e);
});

// --- Event Types ---
// Mouse events: click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave, mouseover, mouseout
// Keyboard events: keydown, keyup, keypress
// Form events: submit, change, input, focus, blur
// Window events: load, resize, scroll, DOMContentLoaded

// --- Event Options ---
element.addEventListener('click', handler, {
    once: true,        // Remove after first execution
    capture: true,     // Use capture phase
    passive: true      // Won't call preventDefault()
});

// --- Remove Event Listener ---
element.removeEventListener('click', handler);

// --- Event Object Properties ---
event.target;              // Element that triggered event
event.currentTarget;       // Element listener is attached to
event.type;                // Event type (e.g., 'click')
event.preventDefault();    // Prevent default action
event.stopPropagation();   // Stop event bubbling
event.stopImmediatePropagation(); // Stop other listeners

// --- Old method (inline, not recommended) ---
element.onclick = function() { };


// ============================================
// 12. FORM HANDLING
// ============================================

// Get form element
const form = document.querySelector('form');

// Access form elements
const input = form.elements['username'];
const input2 = form.elements[0];

// Form events
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(form);
    // Process form data
});

// Get/Set input values
input.value = 'John';
const value = input.value;

// Checkbox/Radio
checkbox.checked = true;
if (checkbox.checked) { }

// Select dropdown
select.value = 'option1';
const selectedIndex = select.selectedIndex;
const selectedOption = select.options[selectedIndex];


// ============================================
// 13. ELEMENT PROPERTIES
// ============================================

// --- Size and Position ---
element.offsetWidth;        // Width including border, padding
element.offsetHeight;       // Height including border, padding
element.clientWidth;        // Width including padding (no border)
element.clientHeight;       // Height including padding (no border)
element.scrollWidth;        // Total scrollable width
element.scrollHeight;       // Total scrollable height

element.offsetTop;          // Distance from offsetParent top
element.offsetLeft;         // Distance from offsetParent left
element.offsetParent;       // Reference parent element

// --- Bounding Rectangle ---
const rect = element.getBoundingClientRect();
rect.top;                   // Distance from viewport top
rect.bottom;
rect.left;                  // Distance from viewport left
rect.right;
rect.width;
rect.height;

// --- Scrolling ---
element.scrollTop;          // Vertical scroll position
element.scrollLeft;         // Horizontal scroll position
element.scrollTo(0, 100);   // Scroll to position
element.scrollBy(0, 50);    // Scroll by amount
element.scrollIntoView();   // Scroll element into view


// ============================================
// 14. CHECKING ELEMENT STATE
// ============================================

element.hidden;                    // Check if hidden
element.disabled;                  // Check if disabled (form elements)
element.matches('.my-class');      // Check if matches selector
element.contains(otherElement);    // Check if contains child
element.isEqualNode(otherElement); // Check if nodes are equal


// ============================================
// 15. DOCUMENT METHODS
// ============================================

// Check if document is loaded
document.readyState; // 'loading', 'interactive', 'complete'

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // DOM is ready
});

// Wait for everything to load (images, styles, etc.)
window.addEventListener('load', () => {
    // Everything is loaded
});

// Get active element
document.activeElement;

// Query from specific element
parentElement.querySelector('.child');
parentElement.querySelectorAll('.child');


// ============================================
// 16. PERFORMANCE BEST PRACTICES
// ============================================

// ✅ Cache DOM queries
const button = document.querySelector('.btn'); // Good
button.addEventListener('click', handler);

// ❌ Don't query repeatedly
document.querySelector('.btn').addEventListener('click', handler); // Avoid in loops

// ✅ Use DocumentFragment for batch insertions
const fragments = document.createDocumentFragment(); 
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    fragment.appendChild(div);
}
document.body.appendChild(fragment); // Single reflow

// ✅ Event delegation (attach to parent)
document.querySelector('.list').addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        // Handle item click
    }
});

// ✅ Use classList instead of className
element.classList.add('active'); // Good
element.className += ' active';   // Avoid


// ============================================
// 17. COMMON PATTERNS
// ============================================

// Toggle visibility
element.style.display = element.style.display === 'none' ? 'block' : 'none';

// Loop through NodeList/HTMLCollection
document.querySelectorAll('.item').forEach(item => {
    console.log(item);
});


// Convert HTMLCollection to Array
const divsArray = Array.from(document.getElementsByTagName('div'));

// Check if element exists
if (document.querySelector('.element')) {
    // Element exists
}

// Create element with attributes
function createElementWithAttrs(tag, attrs) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => {
        el.setAttribute(key, value);
    });
    return el;
}

// Debounce scroll/resize events
let timeout;
window.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        // Handle scroll
    }, 200);
});
