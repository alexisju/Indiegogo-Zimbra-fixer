# indiegogo-zimbra-fixer
A simple Greasemonkey script to fix images display of Indiegogo Newsletter on Zimbra webmail.

# Purpose

Latest Zimbra webmail seems to have a bug to display correctly images on some HTML emails. In some circumstances, HTML tags are modifed by Zimbra and broke the image url source. For example, it affected Indiegogo's newsletters where some `<img src="...">` are changed to `<img pnrsc="...">`.
This script fix that bug.

# Use

1. You need to have Greasmonkey addon installed on your browser (more info : https://greasyfork.org/)
2. Download and install this script (just click here : https://raw.githubusercontent.com/alexisju/indiegogo-zimbra-fixer/master/indiegogo-zimbra-fixer.js)
3. Add the domain of your Zimbra webmail (by default it is only configured for https://webmail.web4all.fr/)
