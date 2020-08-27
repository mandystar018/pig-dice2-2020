# _Pig Dice_

#### _A web page that simulate the game of the Pig Dice, August 27, 2020._

#### By _**Jaki Widby & Amanda Otero**_

## Description

_This project simulates the game of pig dice. Two users are able to play together and take turns rolling a single die. If the die roll is 1, the player's turn will end and all collected turn points will be lost. If the die roll is any other number(2-5) the user can choose to continue rolling or to press the hold button and have their collected turn points added to their total score. The first player to reach 100 points wins. This project utilizes two constructors with unique prototypes and functions._

## Spec

| Behavior                                                   |               Input              |                     Output |
|------------------------------------------------------------|:--------------------------------:|---------------------------:|
| A random number between 1 & 6 is generated upon dice roll  |     user clicks  roll button     |              5             |
| Number rolled is added to player turn total                |           user rolls 4           |   turn total updates to 9  |
| If a 1 is rolled, turn total is 0                          |           user rolls 1           |   turn total updates to 0  |
| Turn score is added to total score at turn's end           |     user's turn  score is 15     |  total score updates to 22 |
| Player is switched when current player holds               | player 1 presses hold or rolls 1 | game switches to  player 2 |
| Game ends when either player's score reaches 100 or higher | player 2 score reaches 102       | alert(player 2 wins!       |

## Setup/Installation Requirements

* _Go to GitHub_
* _Clone repository_
* _In terminal use Git Clone_
* _To play the game you can use click the HTML file and open it in your favorite browser_
* _For editing open you favorite text editor_

## Known Bugs

_ Upon winning the game an alert pops up to notify the players of the winner. Alert currently loops and window must be closed manually._

## Support and contact details

_With questions or concerns, please email jaki.widby@gmail.com or mandystar018@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Java Scripts_
* _jQuery_

### License

Copyright (c) 2020 _**Jaki Widby & Amanda Otero_**
This software is licensed under the MIT license.