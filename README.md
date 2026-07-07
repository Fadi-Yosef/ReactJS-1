# EcoTracker – Personal Sustainability Dashboard

## Overview
EcoTracker is a modern React application designed to help users monitor and improve their environmental impact. Built from scratch with React, TypeScript, and Tailwind CSS, it demonstrates component-based architecture and data-driven rendering.

## Components Created

### 1. `Navbar`
- **Purpose**: Provides high-level navigation and brand identity.
- **Features**: Glassmorphism effect, responsive layout, and call-to-action buttons.

### 2. `Hero`
- **Purpose**: Introduction to the platform's value proposition.
- **Features**: Animated headline, key metric cards (Carbon Footprint, Trees Saved, Energy Saved), and primary actions.

### 3. `Goals`
- **Purpose**: Displays the user's active sustainability challenges.
- **Composite Components**: Uses `GoalCard` for individual progress tracking.
- **Props used in `GoalCard`**:
    - `icon`: Lucide icon representing the goal type.
    - `title`: Name of the challenge.
    - `progress`: Percentage completed.
    - `target`: The specific metric to reach.
    - `color`: Tailwind color class for visual differentiation.

### 4. `Footer`
- **Purpose**: Site map and social connectivity.
- **Features**: Organized link columns, brand presence, and legal information.

## Technical Implementation
- **Framework**: React 19
- **Build System**: Vite
- **Styling**: Tailwind CSS v4 (using CSS-first configuration)
- **Icons**: lucide-react (for consistent, accessible vector icons)
- **Type Safety**: Full TypeScript integration for props and component definitions.
