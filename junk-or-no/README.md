# Junk or No

A beginner-friendly Next.js app that tells users whether a food item is junk food or not.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

## How it works

- Users type a food name.
- The app normalizes the text (trim + lowercase).
- It checks the value against a small built-in `JUNK_FOODS` list.
- It shows a beginner-friendly result message.
