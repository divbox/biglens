# Big Lens Drupal 8 App
  
## Requirements

* PHP > 7.2
* NodeJs - latest stable version
* Composer - https://getcomposer.org/doc/00-intro.md
* Drush  9.x - http://docs.drush.org/en/master/install/

## Setup


## Deployment

## Build the app

1. Git Clone the repo and checkout develop branch

```
$ git clone https://github.com/divbox/biglens.git
$ cd biglens && git checkout develop
```

2. Run Composer (only locally - stage/prod run automatically via git hook)

```
$biglens: composer install

If for some reason the drupal scafold files are missing, you may need to run the following:
$biglens: composer drupal:scaffold
```

3. Load sql dump into database

```
$biglens: mysql -u biglens -p d8_biglens < biglens.sql
```

4. Build the theme

```
$biglens: cd web/themes/custom/biglens
$biglens/web/themes/custom/biglens: npm install
$biglens/web/themes/custom/biglens: ./node_modules/gulp/bin/gulp.js
```
## HTTPS

* Certs are manged by LetsEncrypt(https://letsencrypt.org/) using certbot python tool on the production hosts

## Environment Variables Needed

```
* MYSQL_DATABASE='d8_biglens'
* MYSQL_HOSTNAME='localhost'
* MYSQL_PASSWORD='root'
* MYSQL_PORT='3306'
* MYSQL_USER='root'
```

```
# Another common use case is to set Drush's --uri via environment.
DRUSH_OPTIONS_URI=http://thebiglens.test (use your local domain here)
```