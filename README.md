# Phaser3-Button
Button for Phaser 3

# Demo
[Click here](https://ivopc.000webhostapp.com/phaser-button/)

# Usage
Import phaser3-button file:
``` html
<script src="path/to/phaser3.button.js"></script>
```

In the preload load the button spritesheet:
```javascript
function preload () {
  this.load.spritesheet("button", "/img/button.png", {frameWidth: 84, frameHeight: 29});
};
```

In the game instance (create) add a Phaser.Button like this:
```javascript
function create () {
    new Phaser.Button(this, {
        x: 0,
        y: 0,
        spritesheet: "button",
        on: {
            click: () => {
              console.log("Clicked!");
        },
        frames: {click: 0, over: 2, up: 1, out: 1}
    });
};
```

The button sprite is full configurable at instance.button, like this:
```javascript
var butt = new Phaser.Button({...});
butt.sprite;
console.log(butt.sprite); // will return the sprite object
```

# Configuration

new Phaser.Button(this, config);
```javascript
new Phaser.Button(this, {
    x: 0,
    y: 0,
    spritesheet: "button",
    on: {
        click: () => {
            console.log("Clicked!");
        },
        over: () => {
            console.log("Mouse over!");
        },
        up: () => {
            console.log("Released!");
        },
        out: () => {
            console.log("Mouse out!");
        }
    },
    frames: {click: 1, over: 2, up: 0, out: 0}
});
```

- **this:** (self) instance of the game

**config:**
- **x:** initial x position.
- **y:** initial y position.
- **spritesheet:** the button spritesheet.
- **on:** the button event listeners controllers.
- **on.click:** this event is called when user click on the button.
- **on.over:** this event is called when the mouse is over of the button (hover).
- **on.up:** this event is called when the user release the click after clicked on the button.
- **on.out:** this event is called when the mouse is out of button (only will call if the user interact with the button).
- **frames:** change the sprite (button) frame when the event is called.
- **frames.click:** will change the sprite(sheet) of the button when user click.
- **frames.over:** will change the sprite(sheet) of the button when mouse over.
- **frames.up:** will change the sprite(sheet) of the button when the user release the button after click.
- **frames.out:** change when the cursor is out of the button (by default this frame is set as initial frame).

# License

phaser3.button is released under the [MIT License](https://opensource.org/licenses/MIT).

