ajax-request-tester
===================

A simple AJAX request tester.

# Overview

There are times when you need a "quick and dirty" AJAX request tester. This aims to fill that gap.
There are many similar tools, including some built in to IDEs (I often use PHPStorm, which I recommend)... 
However, the point is that this gives very quick results for situations where you might be limited.
It uses javascript/jQuery (which is included). It is optimised for modern browsers.


# Compatibility

This is a simple HTML form using jQuery to fire off an AJAX request.
CSS is for modern browsers, but should gracefully degrade.

In order to use this software, you should have a program/OS that allows you to run HTML files. There's no PHP or
server side requirement, so you can use this almost everywhere.

Obviously within Windows, Mac and (graphical) Linux distros, running this is usually simply a case of running the
files (for example - double clicking).

Should you need to support old browsers, you can find older versions of jQuery here:
http://jquery.com/

# Usage

## Basic

1. Run ajax_request_tester.html in your browser of choice
2. Enter the url you wish to test
3. Click submit

The response will be shown below the form.

## Pr0-tips

* Ensure you're on the same domain as your target else you my get cross scripting security
* Ensure you log in to your application before you send a request
* There is only basic HTML5 validation - this is not robust, and I'm assuming you want this to work, not break

## Future plans

* Add in the ability to POST data

# Comments

I am aware I use php style variables, and end my line endings with semi-colons. Deal with it.

Please feel free to add any support/feedback requests to:

* rick@floor9design.com
