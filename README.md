# Echo News
Echo News is a React application that fetches and displays the latest news articles from various categories. The app uses the News API to gather news and allows users to select their preferred news categories.

# Video Demonstration

![Echo News Demo](https://www.youtube.com/watch?v=JAl6BmLOdk8)

# Features
- Display top news stories
- Category-based news filtering
- Responsive design
- Fetch news data from the News API
- User preferences for news categories
  
# Getting Started
### These instructions will help you set up and run the project on your local machine for development and testing purposes.

# Prerequisites
Node.js and npm installed on your machine.
A Currents API key. You can get one by signing up at News API.

# Installation


## Clone the repository:
```
bash
Copy code
git clone https://github.com/mrud0004/news-react-app.git
cd echo-news
```

## Install dependencies:
```
bash
Copy code
npm install
Create a .env file in the root directory and add your Currents API key:

makefile
Copy code:
REACT_APP_CURRENTS_API_KEY=your_actual_api_key
```

## Start the development server:
``
bash
Copy code
npm start
``
The application will open in your default browser at http://localhost:3000.

## Deployment

The application can be deployed using Vercel or any other hosting service. Follow these steps to deploy on Vercel:
- Push your code to GitHub.
- Import your GitHub repository into Vercel.
- Add the REACT_APP_CURRENTS_API_KEY environment variable in the Vercel dashboard.
- Deploy your project.


