# WhalesTalesHomework
Prototype for electronic submission of the questions present here: http://www.killerwhaletales.org/pdfs/registration2010.pdf

## How to build the project on Unix and OSX
Open up a terminal and change directory to the current project then enter the following
```
./build.sh
```
a new file called `index.all.html` should now be in the current directory.

## How to build the project on Windows
Install npm (https://docs.npmjs.com/getting-started/installing-node).
Open upon a terminal and change directory to the current project and then do the following:
```
npm intall -g inliner
inliner index.html > index.all.html
```
a new file called `index.all.html` should now be in the current directory.