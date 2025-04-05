# THE TIER LIST MAKER (Work in Progress)

## Overview

This project is a simple, interactive tier list maker built using React. It allows users to drag and drop items between different tiers (S, A, B, C, D, F) and a central tray. This is a personal learning project focused on implementing drag and drop functionality in React.

**Current Features:**

- **Drag and Drop:** Items can be dragged from the tray and between the different tier sections.
- **Basic Tiers:** Includes S, A, B, C, D, and F tiers for categorization.
- **Item Tray:** A section to hold all available items.
- **Dynamic Rendering:** Items are dynamically rendered based on their assigned tier.
- **Visual Feedback:** Basic styling provides visual cues for drag and drop actions.
- **Uses `motion`:** Leverages the `motion` library for smooth layout transitions during drag and drop.

**Goals for this Project:**

- **More Tiers:** Implement the ability to add and customize the number of tiers.
- **More Cards:** Allow users to add new items/cards to the tray.
- **Reordering Items:** Enable users to reorder items within the same tier.
- **Image Export:** Implement functionality to convert the created tier list into a shareable image.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Next.js:** A React framework for building server-rendered applications and static websites (using the `use client` directive for client-side rendering).
- **motion:** A library for creating smooth animations and interactions, used here for layout transitions during drag and drop.
- **CSS:** For basic styling.
- **pnpm:** A package manager.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/lumix103/tier-list
    cd tier-list
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    pnpm dev
    ```

4.  Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## How to Use

1.  The page will load with a "THE TIER LIST" heading and several tier sections (S, A, B, C, D, F) above an item tray.
2.  The tray initially contains items labeled "AB", "CD", "EF", and "GH".
3.  **To move an item to a tier:**
    - Click and hold an item in the tray (or from another tier).
    - Drag the item over the desired tier section.
    - Release the mouse button to drop the item into that tier.
4.  **To move an item between tiers:**
    - Click and hold an item in a tier.
    - Drag it to another tier section.
    - Release the mouse button.
5.  Items within each tier will be displayed in a flexible grid layout.

## Current Limitations

- This is a work-in-progress, and the functionality is basic.
- You cannot currently add new items or tiers.
- Items cannot be reordered within a tier.
- There is no functionality to save or export the tier list as an image.
- Styling is minimal and for demonstration purposes.

## Contributing

This is a personal learning project, so I am not actively seeking external contributions at this time. However, if you have suggestions or feedback, feel free to open an issue.

## License

MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
