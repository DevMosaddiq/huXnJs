# Emoji and Utility Web Components

## 1. Random Emojis Generator

### Functionality

- Clicking a button generates 1-10 random emojis on the screen, based on user input.
- An input field lets users specify the number of emojis (maximum limit: 10).

### Layout

- Minimalistic design with a centered button, input field, and a display area for emojis.

### Design

- **Background**: Gradient (#f0f4fd to #c1e4fc).
- **Button**: Rounded with hover effect (#007bff as primary, darkens slightly on hover).
- **Input Field**: Rounded corners with subtle border (#ddd).
- **Emoji Display**: Large emojis with a clean font size (e.g., 48px).

---

## 2. Interchangeable Colors

### Functionality

- Toggle between 3 predefined color themes (Light, Dark, and Gradient).
- Theme choice persists after refreshing using localStorage.

### Themes

- **Light**: `--background: #ffffff; --text: #333333;`
- **Dark**: `--background: #1a1a1a; --text: #f0f0f0;`
- **Gradient**: `--background: linear-gradient(to right, #6a11cb, #2575fc); --text: #ffffff;`

### Layout

- A dropdown or toggle switch to choose the theme.

---

## 3. Feedback Rating System

### Functionality

- Let users rate on a scale of 1-5 (using stars or emojis).
- Optional text area for additional comments.
- Feedback data is stored in localStorage.

### Layout

- Large stars or emojis (⭐, 🙂), interactive (hover highlights rating).
- Text area below the stars for comments.
- Submit button with feedback acknowledgment.

### Design

- **Background**: Soft pastel (#fff8e8).
- **Active Stars**: #ffc107 (golden-yellow).
- **Inactive Stars**: #ddd.
- **Text Area**: Rounded corners with subtle shadow.

---

## 4. KeyCode Detector

### Functionality

- Displays the key, keyCode, and code of any key pressed.

### Layout

- Center-aligned box to display the information.
- A message prompting the user to "Press any key."

### Design

- **Background**: Light gray (#f7f7f7).
- **Box**: Rounded corners with shadow (box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);).

---

## 5. Simple Calculator

### Functionality

- A calculator supporting addition, subtraction, multiplication, and division.
- Supports both keyboard input and button clicks.

### Layout

- A responsive grid layout for buttons (0-9, operations, clear, equals).
- Display area for input/output.

### Design

- **Background**: Light blue (#e6f7ff).
- **Buttons**: Flat design with hover effect (#007bff).
- **Display Area**: Rounded with subtle shadow.

---

## 6. To-Do List

### Functionality

- Add, edit, delete, and mark tasks as done.
- Tasks do not have a due date.
- Drag-and-drop functionality is optional and can be added later.

### Layout

- Input field with an "Add Task" button.
- List of tasks with checkboxes and delete buttons.

### Design

- **Background**: White (#ffffff).
- **Tasks**: Strikethrough on completion.
- **Buttons**: Flat design with hover effect (#28a745 for add, #dc3545 for delete).

---

## Color Palette (CSS Variables)

```css
:root {
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --danger: #dc3545;
  --warning: #ffc107;
  --info: #17a2b8;
  --light: #f8f9fa;
  --dark: #343a40;
}
```
