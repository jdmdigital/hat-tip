# Hat Tip
A super-simple, super-light notification bar using jQuery and British humor. 

![hattip-screenshot2](https://user-images.githubusercontent.com/12448527/205378576-36e696ed-ad00-4d21-a911-03541851bf24.jpg)

### Live Demo: https://jdmdigital.co/demo/hat-tip/

You can also learn all about why we created Hat Tip in its [announcement post](https://jdmdig.it/3P4eL2X). 

## Unobtrusive Notifications
In cases when you don't really want notifications getting in the way of the every day use of your application, Toasts and Modals are literally the opposite.  We wanted a basic banner notification.  We'll be building on this over time, but here's MVP. 

## Usage
Simply include the `hat-tip.js` in your project (or copy the raw code out), add the css you'll find in `hat-tip.css`, and put the following mark-up at the bottom of your page.  Minifed versions of both of those are also included, but their already SUPER-small (the bundle file is only 3kb, uncompressed). 

```html
<div id="hattip" data-loud="" role="alert">
    <span id="msg"></span>
    <button type="button" aria-label="Close"><span aria-hidden="true">&times;</span></button>
</div>
```

Since v1.1, there is also a "bundle" version which does all that for you.  Just include `hat-tip-bundle.js` in your project and it'll add the default CSS and HTML for you.

Then, use the `hattip_fire()` function to update the content of your notification and show it.  The function accepts two arguments: a string containing the message, and a string containing the class or classes you would like added to the notification wrapper. 

### Examples

Here's a default example.
```js
hattip_fire('Top of the morning to ya!');
```
Notifications can be closed using the "X" button, or programatically by calling `hattip_die()`.

You can also update the classes that give the notification color.  Three such colors are included in `hat-tip.css`.

```js
hattip_fire('Pub is closed? Nightmare!', 'ht-danger');
```

```js
hattip_fire('Pub is open! Ideal.', 'ht-success');
```

```js
hattip_fire('Pub closes at 10pm.', 'ht-info');
```

The second argument can be any class name you wish.  For example, if you were already using Bootstrap, you could call a success alert with:
```js
hattip_fire('Bootstrap is everywhere.', 'alert alert-success');
```
**NOTE:** You may have to overwrite any additional styles applied from external sources.

You can also include some basic styling in the message, thusly. 
```js
hattip_fire('I may be drunk, Miss, but in the morning I will be sober and <b>you will still be ugly.</b>');
```

Since v1.2, you have a third option which makes the notification a little "louder" with a bounce-in animation.  Simply add `dont-panic` as the final attribute.  Did you ever see "[Dad's Army](https://tenor.com/search/dads-army-gifs)?"
```js
hattip_fire('The time has come for us to no longer <b>keep calm and carry on...</b>', 'ht-danger', 'dont-panic');
```

If a second notification is fired while the first is still on the screen, it'll automatically close, clean-up, and fire the new notification. 

## Changlog

v1.0 - Initial Release

v1.1 - Adds Minified Versions as well as a "Bundle" option

v1.2 - Don't Panic! (louder animation) added

![adrian-dascal-aQu92J-TrxY-unsplash-small](https://user-images.githubusercontent.com/12448527/205357306-d46b193b-6f9b-41a3-8e4a-b0252fb58089.jpg)

Photo Credit: Adrian Dascal https://unsplash.com/@dascal on Unspash
