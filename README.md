# Flashcards

## Table of contents
* [General info](#general-info)
* [Description](#description)
* [Screenshot](#screenshot)
* [Technolgies](#technolgies)
* [Setup & Start](#setup)
* [State](#state)
* [Routes](#routes)
* [To test](#to-test)
* [Questions](#questions)
* [Deploy](#deploy)
* [Created](#created)
* [License](#license)

## General info <a id="general-info"></a>

A web application, built with React, Redux and Redux Toolkit to manage the complex state of a flashcard-style quiz app. 

## Description <a id="description"></a>

Users be able to create their own topics, quizzes for those topics, and flashcards for those quizzes. Users also be able to interact with their quizzes by flipping flashcards over.

## Screenhot <a id="screenshot"></a>

![image](./public/background.jpg)

## Technolgies <a id="technolgies"></a>

* Node.js - version 16.20.0
* React - Front End Library
* Redux
* Redux Toolkit

## Setup & Start <a id="setup"></a>

* Clone or download the repo
* Open the directory and run `npm install` in the project root.
* Run `npm start` in the project root and the app will be available on port 3000.

## State <a id="state"></a>

The app's state is totally normalized, with slices for topics, quizzes, and cards.

## Routes <a id="routes"></a>

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

## To Test <a id="to-test"></a>

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

## Questions <a id="questions"></a>

Is this appropriately scoped? Does it have too many features? Too few?

## Deploy <a id="deploy"></a>

* You can start by installing surge globally. **npm install --global surge**.
* `npm run build`
* Select the build folder and check it
* [Check the documentation](https://surge.sh/)
* Deployed on [flashcards-ivor.surge.sh](https://flashcards-ivor.surge.sh)

## Created <a id="created"></a>

2023

## License <a id="licence"></a>

Copyright

MIT
