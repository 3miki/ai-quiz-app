# AI Photo Quiz
#### Video Demo:  https://youtu.be/WrM1ZS2sPV8
#### Description: This app allows users to submit their own photos and transforms them into quizzes using generative AI vision capabilities. By generating fresh questions from the photos, it provides an unique quiz game experience. Ideal for parties or gatherings with friends and family, the app adds a fun twist to sharing their photos.

## How to Use (Play quiz game)
1.	Players choose a quiz level to start the game.
2.	Upload photos: Scan the QR code or click the “Upload” button to navigate to the photo upload page.
3. Start the game, and the app will display quiz questions alongside the photos.
4.	Answer the questions and reveal the answers to see how you scored!

## Features
1.	Image Upload:
	-	Allows multiple players to upload photos simultaneously via a QR code or direct interface.
2.	AI-Generated Quizzes:
	-	Utilizes the OpenAI API to generate unique quiz questions based on uploaded photos.
3.	Photo Display:
	-	Displays uploaded photos alongside the quiz questions for sharing their memories.
4.	Seamless Navigation:
	-	Built with React components to handle button click events for seamless page transitions and navigation.

## Technology
- Open AI API:
  - Used `gpt-4o-mini` model to generate unique quiz questions based on uploaded photos.
- React with TypeScript and Next.js:
  - Used for building a responsive user interface.
- Supabase:
  - Used for image storage and a database to store and manage quiz data.

## Set Up
1. Create supabase project :
   - Go to Supabase and create a new project.
   - After creating the project, get the project URL and the anon API key from the “Settings” section in the Supabase dashboard.

2. Setup environment variables:
  
   `cp .env.example .env`
      
      Fill in the values:
     
     - OPENAI_API_KEY: Open AI API key
     - NEXT_PUBLIC_SUPABASE_URL: The Supabase project URL you obtained from the Supabase dashboard.
     - NEXT_PUBLIC_SUPABASE_ANON_KEY: The Supabase anon API key you got from the Supabase dashboard.
     - NEXT_PUBLIC_TEST_AUTH_EMAIL: The email address you want to use for testing. 
     - NEXT_PUBLIC_TEST_AUTH_PASSWORD: The password for the test email account. 
     - NEXT_PUBLIC_SERVER_URL: The default is set to `localhost`, but if you’re hosting the app on a server or want to share the upload page, set this to the IP address or domain of your server.
  
3. Install the dependencies
   
   `pnpm install`

4. Run the script
   
   `pnpm run dve`

5. Access the Client
   
   `http://localhost:3000/`

## Files Descriptions
- app/page.tsx & layout.tsx:
  - The main landing page of the app where users can choose quiz levels and start the game.
  - Generates a QR code to allow multiple users to access the uploader page.
- app/upload/upload/page.tsx:
  - Manages the file upload, allowing players to upload photos for quiz generation.
  - fileUpload.tsx: Connects to the Supabase database and storage to save uploaded images and AI-generated quiz data.
  - signin.tsx: Handles user authentication for Supabase accounts.
- app/game/page.tsx:
  - Displays the quiz game, showing questions alongside the corresponding photos.
  - Navigation buttons for moving between questions and answers.
- app/api/quiz/route.ts:
  - The backend route responsible for generating quiz questions, by integrating with the OpenAI API to process uploaded photos and create quiz questions and answers.
- .env file:
  - Stores environment variables (API keys and Supabase configuration) for handle data safely.

## Database Set Up (Supabase)
- Run this SQL commands in Supabase to set up the database schema and storage:
  - Create quiz table
  - Add Row Level Security (RLS) to quiz table and photo storage

```sql
-- Create the table
create table quiz (
  id bigint primary key generated always as identity,
  question text not null,
  answer text not null,
  url text not null
);
-- Enable RLS for quiz table and storage
alter table quiz enable row level security;
alter table storage.objects enable row level security;
```
- Create new bucket for photo storage `album` (any bucket name)
  - Storage > New bucket
- Register test account
  - Authentication > Add User > Create new user
- Update database policies
  - Database > Policies > quiz (table) > 
    - Enable insert for authenticated users only with authenticated role
    - Enable read access for all users with authenticated role
  - Update storage policies
    - Storage > Policies > album (bucket name)


