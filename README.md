<h1>Inventory Management Redux</h1>

<p>A full-stack inventory management application built with React, Redux Toolkit, TypeScript, Vite, Tailwind CSS (frontend) and Node.js/Express (backend). It supports CRUD operations for inventory items, category management, and user authentication.</p>

<h2>Features</h2>
<ul>
  <li>Modern React + Redux Toolkit architecture</li>
  <li>TypeScript for type safety</li>
  <li>Vite for fast frontend development</li>
  <li>Tailwind CSS for rapid UI styling</li>
  <li>Modular component structure</li>
  <li>RESTful backend API (Node.js/Express)</li>
  <li>MongoDB integration (assumed for item IDs)</li>
  <li>Form validation with Zod</li>
  <li>Accessible dialogs and forms</li>
</ul>

<h2>Folder Structure</h2>
<pre><code>backend/
  package.json
  server.ts
  tsconfig.json
frontend/
  package.json
  vite.config.ts
  src/
    App.tsx
    main.tsx
    components/
    redux/
    home/
      items/
      itemAdd/
      updateItem/
</code></pre>

<h2>Prerequisites</h2>
<ul>
  <li>Node.js (v18+ recommended)</li>
  <li>npm (v9+ recommended)</li>
  <li>MongoDB (if using database features)</li>
</ul>

<h2>Installation</h2>

<h3>1. Clone the repository</h3>
<pre><code>git clone https://github.com/alamin6688/inventory-management-redux.git
cd inventory-management-redux
</code></pre>

<h3>2. Install dependencies</h3>
<h4>Frontend</h4>
<pre><code>cd frontend
npm install
</code></pre>

<h4>Backend</h4>
<pre><code>cd ../backend
npm install
</code></pre>

<h3>3. Environment setup</h3>
<ul>
  <li>Create <code>.env</code> files in both <code>frontend</code> and <code>backend</code> if needed (e.g., for API URLs, database URIs).</li>
  <li>Example for backend:</li>
</ul>
<pre><code>MONGODB_URI=mongodb://localhost:27017/inventory
PORT=5000
</code></pre>

<h3>4. Running the app locally</h3>
<h4>Start the backend server</h4>
<pre><code>cd backend
npm run dev
</code></pre>

<h4>Start the frontend dev server</h4>
<pre><code>cd ../frontend
npm run dev
</code></pre>

<ul>
  <li>Frontend will be available at <code>http://localhost:5173</code> (default Vite port)</li>
  <li>Backend will be available at <code>http://localhost:5000</code> (or your configured port)</li>
</ul>

<h2>Usage</h2>
<ul>
  <li>Add, update, and delete inventory items</li>
  <li>View item details and categories</li>
  <li>Responsive UI with accessible dialogs</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li>React 19</li>
  <li>Redux Toolkit</li>
  <li>TypeScript</li>
  <li>Vite</li>
  <li>Tailwind CSS</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>MongoDB</li>
  <li>Zod (form validation)</li>
</ul>

<h2>Scripts</h2>
<h3>Frontend</h3>
<ul>
  <li><code>npm run dev</code> — Start Vite dev server</li>
  <li><code>npm run build</code> — Build for production</li>
  <li><code>npm run lint</code> — Lint code</li>
  <li><code>npm run preview</code> — Preview production build</li>
</ul>

<h3>Backend</h3>
<ul>
  <li><code>npm run dev</code> — Start backend server (with ts-node or nodemon)</li>
  <li><code>npm run build</code> — Compile TypeScript</li>
</ul>

<h2>Contributing</h2>
<p>Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.</p>

<h2>License</h2>
<p>MIT</p>
