;(function (Phaser) {
    Phaser.Button = function (self, config) {
        this.self = self;
        this.button = null;

        config.x = config.x || 0;
        config.y = config.y || 0;
        config.spritesheet = config.spritesheet || "button";

        config.on = config.on || {};
        config.on.click = config.on.click || function () {};
        config.on.over = config.on.over || function () {};
        config.on.up = config.on.up || function () {};
        config.on.out = config.on.out || function () {};

        config.frames = config.frames || {};
        config.frames.click = config.frames.click || 0;
        config.frames.over = config.frames.over || 0;
        config.frames.up = config.frames.up || 0;
        config.frames.out = config.frames.out || 0;

        this.config = config;

        this.addButtSprite();
        this.setListeners();
    };

    Phaser.Button.prototype.addButtSprite = function () {
        this.button = this.self.add.sprite(
            this.config.x,
            this.config.y,
            this.config.spritesheet
        )
        .setOrigin(0, 0)
        .setFrame(this.config.frames.out);
    };

    Phaser.Button.prototype.setListeners = function () {
        this.button.setInteractive({
            useHandCursor: true
        });

        this.button.on("pointerdown", this.listeners.click.bind(this));
        this.button.on("pointerover", this.listeners.over.bind(this));
        this.button.on("pointerup", this.listeners.up.bind(this));
        this.button.on("pointerout", this.listeners.out.bind(this));
    };

    Phaser.Button.prototype.listeners = {
        click: function () {
            this.button.setFrame(this.config.frames.click);
            this.config.on.click();
        },
        over: function () {
            this.button.setFrame(this.config.frames.over);
            this.config.on.over();
        },
        up: function () {
            this.button.setFrame(this.config.frames.up);
            this.config.on.up();
        },
        out: function () {
            this.button.setFrame(this.config.frames.out);
            this.config.on.out();
        }
    };
})(Phaser);
