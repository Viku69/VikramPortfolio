# Portfolio Architecture Documentation

## Overview
This portfolio has been completely re-architected with TypeScript, React Router, and best practices for reusability and maintainability.

## Project Structure

```
src/
├── assets/              # Static assets (images, etc.)
├── components/          # Reusable components
│   ├── ui/             # UI primitives (SectionHeader, Container, Section, SkillCard)
│   ├── Header.tsx      # Main navigation header
│   └── ExpCard.tsx     # Experience card component
├── config/             # Configuration files
│   └── routes.tsx      # Route definitions and navigation config
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── data/               # Data layer
│   └── portfolioData.ts # Portfolio data with TypeScript types
├── pages/              # Page components
│   └── Home/           # Home page and its sections
│       ├── index.tsx   # Main home page (with routing)
│       ├── AboutMe.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── Skill.tsx
│       ├── Project.tsx
│       ├── Achievements.tsx
│       └── ContactMe.tsx
├── types/              # TypeScript type definitions
│   ├── index.ts        # Main type definitions
│   └── react-app-env.d.ts # React app type declarations
├── utils/              # Utility functions
│   └── constants.ts    # App-wide constants
├── App.tsx             # Main app component with routing
└── index.tsx           # Entry point
```

## Key Features

### 1. TypeScript
- Full TypeScript implementation with strict type checking
- Comprehensive type definitions in `src/types/index.ts`
- Type-safe props and data structures

### 2. Routing
- React Router v6 implementation
- Lazy loading for better performance
- Route configuration in `src/config/routes.tsx`
- Support for both hash-based navigation (sections) and route-based navigation

### 3. Reusable Components
- **UI Components** (`src/components/ui/`):
  - `SectionHeader`: Reusable section headers with consistent styling
  - `Container`: Consistent container with responsive padding
  - `Section`: Wrapper for page sections
  - `SkillCard`: Reusable skill display card

- **Feature Components**:
  - `Header`: Navigation header with theme toggle
  - `ExpCard`: Experience card with flip animation

### 4. Best Practices
- **Separation of Concerns**: Clear separation between UI, data, and logic
- **Component Reusability**: Shared components reduce code duplication
- **Type Safety**: TypeScript ensures type safety across the application
- **Lazy Loading**: Pages are lazy-loaded for better performance
- **Consistent Styling**: Reusable components ensure consistent UI

## Type Definitions

All types are defined in `src/types/index.ts`:
- `PortfolioData`: Main data structure
- `PersonalInfo`, `Education`, `Experience`, `Project`, etc.: Individual data types
- `ThemeContextType`: Theme context interface
- Component prop types for reusable components

## Routing

Routes are defined in `src/config/routes.tsx`:
- Each route has a path, component, label, and id
- Components are lazy-loaded for performance
- Navigation items are also defined here for the header

## Data Layer

Portfolio data is in `src/data/portfolioData.ts`:
- Fully typed with TypeScript interfaces
- Ready for API integration (placeholder functions included)
- Single source of truth for all portfolio content

## Styling

- Tailwind CSS for utility-first styling
- Dark mode support via ThemeContext
- Responsive design with mobile-first approach
- Consistent spacing and typography via reusable components

## Development

### Running the Project
```bash
npm install  # Install dependencies including TypeScript
npm start    # Start development server
```

### Building
```bash
npm run build  # Build for production
```

## Future Enhancements

1. **API Integration**: Replace static data with API calls
2. **State Management**: Add Redux/Zustand if needed for complex state
3. **Testing**: Add unit and integration tests
4. **Performance**: Further optimize with code splitting
5. **Accessibility**: Enhance ARIA labels and keyboard navigation

