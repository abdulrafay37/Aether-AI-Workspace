# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Deployment (Vercel)

Quick steps to deploy the `client` on Vercel:

1. Push your cleaned repository to GitHub (make sure secrets are removed from history).
2. Go to https://vercel.com/new and import the `abdulrafay37/Aether-AI-Workspace` repository.
3. Set the Project Root to `client`.
4. Use these build settings:
	- Framework Preset: `Vite`
	- Build Command: `npm run build`
	- Output Directory: `dist`
5. Add the required environment variables in the Vercel project settings (see `client/.env.example`).
6. Deploy — Vercel will provide a production URL after the build finishes.

Environment variables (create these in Vercel or locally as needed):

- `GEMINI_API_KEY`=your_gemini_api_key_here
- `GCP_API_KEY`=your_gcp_api_key_here

Notes:
- Never commit actual secret values to the repository. Keep them in Vercel environment settings or a local `client/.env` that is ignored by Git.
- After first deploy you can add a custom domain in Vercel settings.
