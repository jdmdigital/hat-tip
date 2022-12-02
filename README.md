# Hat Tip
A super-simple, super-light notification bar using jQuery and British humor. 

![hattip-screenshot](https://user-images.githubusercontent.com/12448527/205358285-049082ff-6d9d-4f9b-9e34-95fd227ccac7.jpg)


## Unobtrusive Notifications
In cases when you don't really want notifications getting in the way of the every day use of your application, Toasts and Modals are literally the opposite.  We wanted a basic banner notification.  We'll be building on this over time, but here's MVP. 

## Usage
Simply include the hat-tip.js or hat-tip.min.js in your progress (or copy the raw code out), add the css you'll find in hat-tip.css, and put the following mark-up at the bottom of your page.

```html
<div id="hattip" role="alert">
    <span id="msg"></span>
    <button type="button" aria-label="Close"><span aria-hidden="true">&times;</span></button>
</div>
```

Then, use the following function to update the content of your notification and show it.
```js
hattip_fire('Top of the morning to ya!');
```
Notifications can be closed using the "X" button, or programatically by calling `hattip_die()`.

You can also update the classes that give the notification color.  Two such colors are included.

```js
hattip_fire('Pub is closed? Nightmare!', 'ht-danger');
```

```js
hattip_fire('Pub is open! Ideal.', 'ht-success');
```

The second argument can be any class name you wish.  For example, if you were already using Bootstrap, you could call a success alert with:
```js
hattip_fire('Bootstrap is everywhere.', 'alert alert-success');
```

## Changlog

v1.0 - Initial Release

![adrian-dascal-aQu92J-TrxY-unsplash-small](https://user-images.githubusercontent.com/12448527/205357306-d46b193b-6f9b-41a3-8e4a-b0252fb58089.jpg)

Photo Credit: Adrian Dascal https://unsplash.com/@dascal on Unspash
