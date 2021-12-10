# Angular Developer PB 2021/22

---
## Lectures
### 1. Angular as a framework
[presentation](https://edu.chrum.it/ng2021/lecture_1.html) | [pdf](https://edu.chrum.it/ng2021/pdfs/Angular_developer.lecture_1.pdf) 

### 2. Typescript for angular developer
[presentation](https://edu.chrum.it/ng2021/lecture_2.html) | [pdf](https://edu.chrum.it/ng2021/pdfs/Angular_developer.lecture_2.pdf)

### 3. Template syntax
[presentation](https://edu.chrum.it/ng2021/lecture_3.html) | [pdf](https://edu.chrum.it/ng2021/pdfs/Angular_developer.lecture_3.pdf)

---

## Project
Requirements:
- app should consist of 2+ pages (DONT USE ROUTING FOR THAT :smiling_imp: as we dont know routing yet)
- use ngModel to build form with validators
- form should be user friendly: display errors and block buttons
- pass collected data between pages/components
- register user interactions and their timing (or any other data than be use as list)
- display list - filterable and sortable (pipes)


### Example project
Two pages
- Intro page with intro text and player form
- Game page

### Intro page specification

- some quick introductory text
- form with two inputs
    - player name
    - player email
- start game button
- upon clicking 'start' we check name and email and notify player whats wrong
- if name and email are fine then store this data and move to the game page

### Game page specification
**basic version**
- there should be a button 'exit game' which will move player to intro page
- there should be nice, personalized welcome message (with player name)
- integrate [ngx-tetris](https://www.npmjs.com/package/ngx-tetris) or [ngx-snake](https://www.npmjs.com/package/ngx-snake)
- big indication of the game status (ready, started, paused...)
- we need points counting mechanism (each cleared line counts)
- display current amount of points
- display time spent wile playing

**:rocket: extra points version should additionally have:**
- there should be a 'gameplay history' with all actions and each entry should have
    - timestamp
    - action name (player started the game, paused, line cleared...)
- gameplay history should be
    - filterable by event type (ie. show only 'line cleared' events)
    - sortable by timestamp (latest first or oldest first)




---
  
## Authors

[Chrystian Ruminowicz](http://chrum.it)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
