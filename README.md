

# AI Image Generator

A modern web application built with Next.js that allows users to generate AI-powered images using OpenAI's API. It features user authentication with Supabase, a clean UI styled with TailwindCSS and shadcn, and secure server-side API routes.

---

## Features

- User registration and login with email and password via Supabase  
- Real-time auth state monitoring and protected routes  
- Image generation using OpenAI's DALL·E model based on user prompts  
- Display of user's remaining credits (planned)  
- Responsive and accessible UI using TailwindCSS and shadcn UI components  
- Clean and maintainable TypeScript codebase  

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router & Server Components)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Supabase](https://supabase.com/) for authentication and user management  
- [OpenAI API](https://platform.openai.com/docs/api-reference/images) for image generation  
- [TailwindCSS](https://tailwindcss.com/) and [shadcn UI](https://ui.shadcn.com/) for styling  
- [Inngest](https://www.inngest.com/) (optional, for serverless workflows)  

---

## Getting Started

### Prerequisites

- Node.js 18 or newer  
- A Supabase project with auth enabled  
- OpenAI API key with access to image generation  

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ai-image-generator.git
   cd ai-image-generator
Install dependencies:

bash
Copy
Edit
npm install
Create a .env.local file with the following environment variables:

env
Copy
Edit
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
OPENAI_API_KEY=your_openai_api_key
INNGEST_EVENT_KEY=your_inngest_event_key # optional
Run the development server:

bash
Copy
Edit
npm run dev
Open http://localhost:3000 to see the app in action.

Usage
Register a new account or login

Enter a descriptive prompt to generate an AI image

View generated image results

(Future) Track your usage credits

Contributing
Contributions are welcome! Please fork the repo and create a pull request. For major changes, please open an issue first.
