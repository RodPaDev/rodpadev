# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier
- `npm run codegen` - Generate GraphQL code

## Code Style Guidelines
- Use TypeScript for type safety with strict mode enabled
- Follow Next.js conventions for routing and components
- Path aliases: Use `@/*` imports for src directory paths
- Formatting: 150 character line width
- Use Prettier with tailwindcss and organize-imports plugins
- Use ESLint with Next.js core web vitals rules
- Component naming: PascalCase for components, camelCase for utilities
- Imports: Use organized imports (handled by Prettier plugin)
- Error handling: Use proper TypeScript typing for error states
- Styling: Use Tailwind CSS with class variance authority (cva)