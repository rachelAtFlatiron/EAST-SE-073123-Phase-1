---
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "02_dom_manipulation"
---

# DOM Manipulation

---

#### Learning Goals

- Review what the DOM is
- Explain how the DOM is able to read code written in JS files
- Explain what CRUD actions are
- Observe how to do CRUD actions on the DOM

<aside class="notes">
</aside>

---

#### Single Page Applications


    
- JavaScript renders the content of the page dynamically
- Avoids page refreshes
- Page transitions are much faster


<aside class="notes">

- renders based on user behaviors, information from servers <br />
- click on a link - it directs you to a new page <br />
- show in console how everything resets to prove refresh <br /> 
**(type something in, see it disappear) (do NOT use network tab yet) <br />

Steps to Manually Detect SPA
1. Open developer tools / inspector
2. Reload the page or navigate to it
3. Notice the timeline/waterfall of the requests
4. Click on a link or other interaction you have in concern
5. If the timeline refreshes and causes a page reload then it's not an SPA
6. If the timeline shows the first hits and additional hits after your interaction then you have an SPA.

</aside>

---

<p style="font-size: 5rem">
<b>D</b>ocument <br/>
<b>O</b>bject <br/>
<b>M</b>odel

</p>

<aside class="notes">

- use JS to find piece of page to repaint

- QUESTION: what does document remind you of (html document delivered to browser) <br />
- QUESTION: what does object remind you of (key value pairs, data type) <br />
- Model: representation of something <br />
- OBJECT THAT REPRESENTS YOUR WEB PAGE/HTML in javascript so we can access nodes and create new nodes <br />
- can find, access, and update a specific part of the page
</aside>

---

<img src="./dom-is-a-tree.drawio.svg" alt="The DOM as a Tree" style="width: 80%" />

[MDN: Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) - [MDN: Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

<aside class="notes">
- elements: HTML tag (script, p, form, etc.)<br />
- all elements have access to specific methods inherited from the base class (show MDN list) <br />
- all elements can have children: above is a tree, each 'leaf' is a node <br />
- you can see parents/children/hierarchy based on indentation in HTML <br />
- element is a type of node, all nodes also have methods inherited from base class (show MDN list) <br />
- methods accessible to DOM objects come from node and elements <br />
- innerText (aware of break elements, ignores hidden elements) vs textContent
</aside>

---

#### Tasks

-  Select single DOM elements with:
    - `.querySelector()` and 
    - `.getElementById()`
-  Select multiple elements with:
    - `.querySelectorAll()` and 
    - `.getElementsByClassName()`
- Add content with `.textContent=`
- Create elements with `.createElement`
- Append elements to the DOM with `.appendChild` and `.append`
- Explain the dangers of `innerHTML=`
- Remove content with `.remove`
- Visit <a href="https://en.wikipedia.org/wiki/The_Most_Unwanted_Song" rel="noopener noreferrer" target="_blank">Wikipedia</a> to practice

<aside class="notes">
- elements inherit from nodes, nodes can also be text or comments <br />
- what does querySelector return (first matching node)?  what does getElementById return? (single node) <br />
- what does querySelectorAll/getElementsByClassName return? (array, NodeList) <br />
- textContent, innerHTML, see and read <br />
- HTMLCollection (document elements), NodeList (document nodes) <br />
- demo the above with wikipedia article: changing text content, getting individual/list nodes, mapping over lists, accessing nested nodes etc. <br />
- appendChild(), can only receive on node, append(x, y, ...) can receive multiple nodes
</aside>

---


#### The Dangers of innerHTML=

<iframe src="https://codesandbox.io/embed/dark-silence-5rbq0x?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:700px; border:0; border-radius: 4px; overflow:hidden;"
  title="dark-silence-5rbq0x"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<aside class="notes">
- one can run their own code in your website
</aside>

---

#### Bread and Butter tools
- Create
  - `document.createElement()`
- Read
  - `querySelector()` & `querySelectorAll()`
- Update 
  - `textContent =`
  - `append()`
  - `classList` for adding and removing classes from an element
  - dot notation for editing properties (eg. `img.src = imageUrl`, or `div.className = "card"`)
- Destroy 
  - `remove()`

<aside class="notes">
</aside>

---


#### Features

- `renderHeader()`: renders the header content via JS
- `renderFooter()`: renders the footer content via JS
- `renderBook()`: create a list item for a book and inserts it into the list
- `removeBook(index)`: removes a book li from the DOM by its index in the `ul`

<aside class="notes">
- render: use to describe displaying to user, putting in HTML, render to DOM <br />
- hardcode things you know will stay on the page and won't change
</aside>

---

#### Links!

- [DOM chapter in Eloquent JavaScript](https://eloquentjavascript.net/14_dom.html)
- [The Dangers of InnerHTML](https://betterprogramming.pub/dom-manipulation-the-dangers-of-innerhtml-602f4119d905)
- [MDN - NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [MDN - HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [MDN - Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [MDN - Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN - Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

<aside class="notes">
</aside>