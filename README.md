# Cafe Finder Web Application

This web application allows users to browse, search, add, and delete cafe information. It's built with Flask and JavaScript.

## How It Works

### (main.py)

This part is built with Flask and SQLAlchemy:

1. **Database**: Uses SQLite with SQLAlchemy ORM. The `Cafe` model defines the structure for cafe entries.

2. **Routes**:
   - `/`: Serves the main HTML page.
   - `/all`: Returns JSON of all cafes.
   - `/add`: POST endpoint to add a new cafe.
   - `/report-closed/<int:cafe_id>`: DELETE endpoint to remove a cafe.

### Frontend (index.html, script.js, styles.css)

The frontend is a single-page application:

1. **HTML (index.html)**: Provides the structure, including a search bar, cafe list area, and a form to add new cafes.

2. **JavaScript (script.js)**:
   - Fetches cafe data from the backend.
   - Implements search functionality.
   - Handles adding new cafes and deleting existing ones.
   - Dynamically updates the cafe list.

3. **CSS (styles.css)**: Styles the application for a clean, modern look 

## Requirements

To run this application, you need:

1. Python 3.7 or higher
2. Flask
3. Flask-SQLAlchemy

You can install the required Python packages using pip:
i.e pip install Flask
    pip install flask-sqlalchemy

## Running the Application

1. Ensure all files are in the correct directory structure.
2. Navigate to the project root in your terminal.
3. Run the following command: python main.py
4. Open a web browser and go to `http://127.0.0.1:5000`

## Note
This application uses a SQLite database (cafes.db) which will be created
in the project root directory when you first run the application. 
