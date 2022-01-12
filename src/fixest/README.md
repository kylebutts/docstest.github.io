---
title: fixest
---

# Regression analysis with fixest

[**fixest**](https://lrberge.github.io/fixest) (by Laurent Bergé) is a package 
designed from the ground up in C++ to make running regressions fast and 
incredibly easy. It provides in-built support for a variety of linear and 
non-linear models, as well as regression tables and plotting methods.

Before continuing, make sure that you have installed **fixest**. You only 
have to do this once (or as often as you want to update the package).
<div class="code--container">
<div>

```r
# Install from CRAN (recommended)
install.packages('fixest')
# Install the development version from GitHub (advanced)
# Requires Rtools and the remotes package
# remotes::install_github('lrberge/fixest')
```
</div>
<div>
</div>
</div>

Once **fixest** is installed, don't forget to load it whenever you want to 
use it. Unlike Stata, you have to re-load a package every time you start a new R 
session.

<div class="code--container">
<div>

```r
# Load fixest into our current R session
library(fixest)
```
</div>
<div>
</div>
</div>


In the examples that follow, we will use a modified dataset from the CPS (plus
some added variables for demonstration purposes). To load the data run the 
following:

<div class="code--container">
<div>

```stata

import delimited using "https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv", clear
```
</div>
<div>

```r
# Base R reads CSVs too, but we'll use data.table here
dat = data.table::fread('https://raw.githubusercontent.com/stata2r/stata2r.github.io/main/data/cps_long.csv')
```
</div>
</div>


## Introduction to fixest

The [**fixest**](https://lrberge.github.io/fixest/index.html) package contains a
highly flexible set of tools that allow you to estimate a fairly large set of
standard regression models. While the package certainly doesn't cover every
model that exists, there is a non-negligible subset of Stata users for whom
every model they've ever needed to run is covered by **fixest**.

This includes regular ol' linear regression in the `feols()` function, which
builds off of the Base R standard regression function `lm()`, but also includes
things like instrumental variables via 2SLS, and of course support for as many
fixed effects as you'd like. **fixest** isn't limited to linear regression
either, covering IV and fixed-effects support for a wide range of GLM models
like logit, probit, Poisson, negative binomial, and so on in `feglm()` and
`fepois()`.

**fixest** covers all of this while being very fast. If you felt a speed boost
going from Stata's `xtreg` to `reghdfe`, get ready for another significant 
improvement when moving to **fixest**.

You also get a _lot_ of convenience features. **fixest** makes it easy to 
produce publication-ready regression tables, as well as coefficient and
interaction-margin plots. You can select long lists of controls without having
to type them all in, adjust standard errors for existings model on-the-fly,
retrieve estimated fixed effects from your high-dimensional models, conduct Wald
tests, adjust reference categories for factor variables, etc. etc.  You even get
some stuff that's rather tricky in Stata, like multi-model estimations, basic
and staggered difference-in-difference support, or Conley standard errors.

Using fixest for regression starts with writing a formula. While there are
plenty of bells and whistles to add, at its core regression formulas take the
form `y ~ x1 + x2 | fe1 + fe2` where `y` is the outcome, `x1` and `x2` are
predictors, and `fe1` and `fe2` are fixed effects.


