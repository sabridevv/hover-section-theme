# Hover Section Theme for Shopify

This repository contains a custom-built hover section theme for Shopify, designed to create an interactive, visually appealing experience for showcasing products and features.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)



## Overview

The Hover Section Theme is a Shopify section with a responsive design and dynamic hover effects. It’s composed of three main content blocks:

1. **Product View Card** - Displays individual products.
2. **Top Small Card** - Allows for feature highlights with icons and descriptions.
3. **Middle Wide Card and Bottom Wide Narrow Card** - Provides a layout for more detailed content.

## Features

- **Responsive Design**: Optimized for mobile and desktop.
- **Flexible Content Blocks**: Configurable images, text, and icons.
- **Hover Effects**: Adds interactivity, making the user experience more engaging.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sabridevv/hover-section-theme.git
   cd hover-section-theme
1. **Clone the Repository**:
   ```bash
   shopify theme dev

## Usage
You can use the Shopify customizer to add the Hover Section to your theme, and then configure the section's different blocks to add your content.
1. Product View Card: Displays a single product, with options for a background image and product details.
2. Top Small Card: Ideal for quick highlights with customizable icons, headings, and descriptions.
3. Middle Wide Card: Use for in-depth product details or feature descriptions, with multiple title-description pairs.
4. Bottom Wide Narrow Card: A simple, concluding block for a final message or call-to-action.

## Customization

You can use the code to adapt the Hover Section to your specific needs, adding new features or styling as desired. To modify and enhance the section, you can edit the following files:

- **CSS Files**:
  - `hover-middle-wide-card.css`
  - `hover-product-card.css`
  - `hover-small-card.css`
  - `hover-wide-narrow.css`
  - `hover.css`

  These files control the layout, styles, and responsive behavior for each block, allowing you to customize visuals and animations.

- **JavaScript File**:
  - `hover.js`

  This file manages interactivity, including hover effects and animations. Modify it to enhance or add new behaviors to the section.

- **Liquid Template**:
  - `sections/hover.liquid`

  This is the main Liquid file for the section, where you can update the structure, include new settings, or add new blocks.

By editing these files, you can adapt the Hover Section to meet specific design requirements or integrate additional functionality to improve user engagement on your Shopify store.
