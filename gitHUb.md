# to check git version 
  git --version

## to Add Name 
 git config --global user.name "Devendra Gour"

## to Add Email

git config --global user.email "devendragour907@gmail.com"

## to check aded or not 
 git config --global user.email

## creating NEw folder
mkdir LearnGit

## to navigate to folder 
    cd LernGit

## initialising git After opening folder in vs
    $ git init

## to know status
    $ git status

## to add file for tracking changes

    $ git add index.html
    1. it started staginng phase here changes are hold before commiting

# to commit the code 
    $ git commit -m "initial commit"

## to see all changes or commits
    $ git log

## 
    1. to stage all available file
    $ git add .

## to revet changes 
1. copy hash code of previous commit from log 
2. $ git checkout 54d59bb05b5a99e2ceee6dd8bd245c8a3645f263
3. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

## to get branch info
    $ git branch

## to switch to master branch 

    $ git checkout master

## to make new branch 
1. git branch <branch name>

## to switch that branch 
1. git checkout dev
2. or we can directly create and switch branch 
    1. git checkout -b dev

## to merge 2 branch 
1. switch  to branch in which you want merge anathor branch
2. git merge otherbranchname

## gitignore 
 you know man 

## git push to push master brach to git hub after commit

## to push other branch 
1. switch to other branch
2. git push -u origin nameofbranch





