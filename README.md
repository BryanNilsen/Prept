# Prept

Prept was created in the early stages of the Covid-19 pandemic. I quickly found myself in a worst-case-scenario mindset and began prepping for the imminent shelter-at-home order coming down from the powers that be. The only problem was… I didn’t know how much I needed to prep to provide for my family.

Prept allows a user to enter some basic vital info about their household members. From there, the app calculates minimum daily water and caloric intake needs for each member and then provides those totals as a baseline guide when hitting the local grocery store.

## App Visuals

## Data Relationships

![Prept Entity Relationship Diagram](/src/images/prept-ERD.png)

# How to Use this Repo:

From your terminal:

1. Clone this repo: `git@github.com:BryanNilsen/Prept.git`

2. navigate to the Prept root directory: `cd Prept`

3. Install dependencies: `npm install`

4. Remove path to this repository: `git remote rm origin`

## Create a New Repo in Your GitHub Account

From your browser:

5. [Create your own repository on GitHub](https://help.github.com/en/github/getting-started-with-github/create-a-repo)

6. After creating the repository, copy the repo URL ( _this example uses SSH_ )

## Push This Cloned Repo to Your New Repo

Back in your Terminal:

7. Add the URL to your repo: `git remote add origin git@github.com:{your GH username}/{name of your repo}.git`

8. Now you can push this cloned repo to the new repo you created under your username: `git push origin master`

So far we have cloned this repo, created a new repo and pushed up our copy and you should see the code on GitHub.

launch json server:
navigate to api directory and launch json-server -p
5000 -w db.json

run app
npm start to run app

\*\* current version of this app was built with faux authentication

\*\* no css libraries/frameworks were implemented in this version

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
