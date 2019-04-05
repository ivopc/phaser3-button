# Phaser3-Button
Button for Phaser 3

# Demo
Not avaliable

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
