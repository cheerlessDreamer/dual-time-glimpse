# Dual Time Glimpse

A modern web application that displays both standard time and decimal time side by side. This project provides an interactive way to compare our conventional 24-hour time system with the decimal time system, featuring both digital and analog clock displays.

## About Decimal Time

Decimal time (also known as French Revolutionary Time) was introduced during the French Revolution as part of a larger attempt to decimalize various types of measurements. In this system:

- The day is divided into 10 hours
- Each hour contains 100 minutes
- Each minute contains 100 seconds

This means that:
- 1 decimal hour = 2.4 standard hours
- 1 decimal minute = 1.44 standard minutes
- 1 decimal second = 0.864 standard seconds

The system was officially introduced in France on November 24, 1793, but was suspended by Napoleon on April 7, 1795, and was officially abandoned in 1806. Although it didn't gain widespread adoption, it represents a fascinating attempt to rationalize time measurement using the decimal system.

## Features

- Real-time display of both standard and decimal time
- Interactive analog clock faces
- Dark/light theme toggle
- Responsive design
- 12/24-hour format toggle for standard time

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage your Node.js versions.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd dual-time-glimpse
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit:
```
http://localhost:5173
```

## Built With

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the French Revolutionary decimal time system
- Built with modern web technologies
- Made with ❤️ by [Thomas](https://thomashallen.com) in 🇸🇪