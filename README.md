# functional-tictactoe

This repository is for a fellow nerd learning react. The assignment uses class based components where as this repository uses functional components so that ye ol nerd feller can view the difference between class based and functional components.

## Challenges:

- [x] Build a react component called Box, render that component to the page.

- [x] Give Box a property (prop) that dictates what text it renders and render an 'X'.

- [x] Give Box some style! Make it a button with height 100px and width 100px.

- [x] Have Box render text based on its state.

- [x] Have Box's state change every 300ms, alternating between 'X' and 'O'.

  - Where should this be written?
  - This is a good moment to learn about the component cycle!
  - Make sure to clear your interval!

- [x] Have Box's state change based on clicks. Set initial state to '-'.

  - How do we set up an event handler for React components?
  - Make Box alternate between 'X' and 'O' on clicks.

- [x] Let's make a new component called Row that renders 3 Box components.

- [ ] Pull the state out of each Box and into the higher level Row component.

  - Don't forget to pass each child Box a key property.
