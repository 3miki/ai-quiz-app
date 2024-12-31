# AI Photo Quiz
#### Video Demo:  https://youtu.be/WrM1ZS2sPV8
#### Description: This app allows users to submit their own photos and transforms them into quizzes using generative AI vision capabilities. By generating fresh questions from the photos, it provides an unique quiz game experience. Ideal for parties or gatherings with friends and family, the app adds a fun twist to sharing their photos.

## Set up
1. Create supabase project 
   - Go to Supabase and create a new project.
   - After creating the project, get the project URL and the anon API key from the “Settings” section in the Supabase dashboard.

2. Setup environment variables
  
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
