## HTML Live for Light Table

This plugin adds live-update functionality for the HTML editor in Light Table.  See your markup rendered as you type!

### Usage

To use it, open an HTML file and then use `ctrl-space` to run the command `HTML: Toggle live mode`.  A browser tab will open that will automatically reload the markup from your editor as you type.  A small toggle button will also appear in the top right of your editor that allows you to turn live updating on and off.

### Limitations / Known Issues

At present, the plugin only works with Light Table's native browser.  It should be possible to get it working with an external browser in a future version.

The document DOM is replaced without firing the typical window.load events, which may cause unpredictable results with Javascript on the page.  This may be fixed in a future version.

Any unsaved CSS that has been evaled into the browser will be lost when you update.

### Acknowledgements

The direct inspiration for having this functionality for HTML came from @MarcoPolo's [Markdown Plugin](https://github.com/MarcoPolo/lt-markdown).

And thanks of course to Chris and the Kodowa team for creating and sharing such an inspiring piece of software.

###License

Copyright (C) 2014 Rafe Rosen

Distributed under the GPLv3, see license.md for the full text.
