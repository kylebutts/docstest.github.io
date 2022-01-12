import{_ as e,r as t,o as p,c as r,a as s,b as l,F as c,e as o,d as a}from"./app.f6845647.js";const i={},y=o('<h1 id="other-packages" tabindex="-1"><a class="header-anchor" href="#other-packages" aria-hidden="true">#</a> Other Packages</h1><p>While we think you can get pretty darn far in R with just <strong>data.table</strong> and <strong>fixest</strong>, of course those two don&#39;t cover everything.</p><p>This page covers a small list of packages you may find especially useful when getting started with R. We won&#39;t try to cover everything under the sun here. Just a few places to get going. For the rest, well, that&#39;s what Google is for (or, indeed, to learn about each of these in more detail).</p><p>All of the below packages have far more applications than is shown here. We&#39;ll just provide one or two examples of how each can be used. Finally, don&#39;t forget to install them with <code>install.packages(&#39;PKGNAME&#39;)</code> and load them with <code>library(PKGNAME)</code>. The former command you only have to run once per package (or as often as you want to update it); the latter whenever you want to use a package in a new R session.</p><h2 id="ggplot2-beautiful-and-customizable-plots" tabindex="-1"><a class="header-anchor" href="#ggplot2-beautiful-and-customizable-plots" aria-hidden="true">#</a> ggplot2: Beautiful and customizable plots</h2>',5),E={href:"https://ggplot2.tidyverse.org/",target:"_blank",rel:"noopener noreferrer"},d=s("strong",null,"ggplot2",-1),F=a(" is widely considered one of the preeminent plotting libraries available in any language. It provides an intuitive syntax that applies in the same way across many, many different kinds of vizualisations, and with a deep level of customization. Plus, endless additional plugins to do what you want, including easy interactivity, animation, maps, etc. We thought about giving "),u=s("strong",null,"ggplot2",-1),h=a(" its own dedicated page like "),g=s("strong",null,"data.table",-1),b=a(" and "),f=s("strong",null,"fixest",-1),D=a(". But instead we'll point you to the "),m={href:"https://lost-stats.github.io/Presentation/Figures/Figures.html",target:"_blank",rel:"noopener noreferrer"},v=a("Figures"),A=a(" section of the "),_=s("em",null,"Library of Statistical Techniques",-1),w=a(", which already shows how to do many different graphing tasks in both Stata and "),k=s("strong",null,"ggplot2",-1),C=a(". For a more in-depth overview you can always consult the excellent "),x={href:"https://ggplot2.tidyverse.org/",target:"_blank",rel:"noopener noreferrer"},B=a("package documentation"),q=a(", or a book like Kieran Healy's wonderful "),S={href:"https://socviz.co/",target:"_blank",rel:"noopener noreferrer"},N=s("em",null,"Data Visualization",-1),z=a("."),T=o(`<h3 id="basic-scatterplot" tabindex="-1"><a class="header-anchor" href="#basic-scatterplot" aria-hidden="true">#</a> Basic scatterplot</h3><div class="code--container"><div><div class="language-stata ext-stata line-numbers-mode"><pre class="shiki" style="background-color:#191724;"><code><span class="line"><span style="color:#31748F;">twoway</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">scatter</span><span style="color:#E0DEF4;"> yvar xvar</span></span>
<span class="line"><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">twoway</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">(scatter</span><span style="color:#E0DEF4;"> yvar xvar </span><span style="color:#31748F;">if</span><span style="color:#E0DEF4;"> group </span><span style="color:#31748F;">==</span><span style="color:#E0DEF4;"> </span><span style="color:#EBBCBA;">1</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">mc</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">blue</span><span style="color:#6E6A86;">)</span><span style="color:#31748F;">)</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">\\\\</span><span style="color:#E0DEF4;">\\</span></span>
<span class="line"><span style="color:#E0DEF4;">        </span><span style="color:#31748F;">(scatter</span><span style="color:#E0DEF4;"> yvar xvar </span><span style="color:#31748F;">if</span><span style="color:#E0DEF4;"> group </span><span style="color:#31748F;">==</span><span style="color:#E0DEF4;"> </span><span style="color:#EBBCBA;">2</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">mc</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">red</span><span style="color:#6E6A86;">)</span><span style="color:#31748F;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div><div class="language-r ext-r line-numbers-mode"><pre class="shiki" style="background-color:#191724;"><code><span class="line"><span style="color:#E0DEF4;font-style:italic;">ggplot</span><span style="color:#6E6A86;">(</span><span style="color:#E0DEF4;font-style:italic;">dat</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">aes</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">x</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">xvar</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">y</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">yvar</span><span style="color:#6E6A86;">))</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">+</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">geom_point</span><span style="color:#6E6A86;">()</span></span>
<span class="line"><span style="color:#E0DEF4;font-style:italic;">ggplot</span><span style="color:#6E6A86;">(</span><span style="color:#E0DEF4;font-style:italic;">dat</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">aes</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">x</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">xvar</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">y</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">yvar</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">color</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">group</span><span style="color:#6E6A86;">))</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">+</span><span style="color:#E0DEF4;"> </span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#E0DEF4;font-style:italic;">geom_point</span><span style="color:#6E6A86;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></div><h2 id="tidyverse" tabindex="-1"><a class="header-anchor" href="#tidyverse" aria-hidden="true">#</a> tidyverse</h2>`,3),R=a("The "),W={href:"https://www.tidyverse.org/",target:"_blank",rel:"noopener noreferrer"},P=s("strong",null,"tidyverse",-1),V=o(" provides an extremely popular framework for data science tasks in R. This meta-package is actually a collection of smaller packages that are all designed to work together, based on a shared philosophy and syntax. We&#39;ve already covered <strong>ggplot2</strong> above, but there are plenty more. These include <strong>dplyr</strong> and <strong>tidyr</strong>, which offer an alternative syntax and approach to data wrangling tasks. While we personally recommend <strong>data.table</strong>, these <strong>tidyverse</strong> packages have many ardent fans too. You may find that you prefer their modular design and verbal syntax. But don&#39;t feel bound either way: it&#39;s totally fine to combine them. Some other <strong>tidyverse</strong> packages worth knowing about include <strong>purrr</strong>, which contains a suite of functions for automating and looping your work, <strong>lubridate</strong> which makes working with date-based data easy, and <strong>stringr</strong> which offers functions with straightforward syntax for working with string variables.",19),I=o(`<h3 id="data-wrangling-with-dplyr" tabindex="-1"><a class="header-anchor" href="#data-wrangling-with-dplyr" aria-hidden="true">#</a> Data wrangling with dplyr</h3><p><em>Note: <strong>dplyr</strong> doesn&#39;t modify data in place. So you&#39;ll need to (re)assign if you want to keep your changes. E.g. <code>dat = dat %&gt;% group_by...</code></em></p><div class="code--container"><div><div class="language-stata ext-stata line-numbers-mode"><pre class="shiki" style="background-color:#191724;"><code><span class="line"><span style="color:#6E6A86;font-style:italic;">*</span><span style="color:#555169;font-style:italic;"> Subset by rows and then columns</span></span>
<span class="line"><span style="color:#31748F;">keep</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">if</span><span style="color:#E0DEF4;"> var1</span><span style="color:#31748F;">==</span><span style="color:#F6C177;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#31748F;">keep</span><span style="color:#E0DEF4;"> var1 var2 var3</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">*</span><span style="color:#555169;font-style:italic;"> Create a new variable by group</span></span>
<span class="line"><span style="color:#31748F;">bysort</span><span style="color:#E0DEF4;"> group1</span><span style="color:#6E6A86;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">egen</span><span style="color:#E0DEF4;"> mean_var1 </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">mean</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">var1</span><span style="color:#6E6A86;">)</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">*</span><span style="color:#555169;font-style:italic;"> Collapse by group</span></span>
<span class="line"><span style="color:#31748F;">collapse</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">(mean)</span><span style="color:#E0DEF4;"> arr_delay</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">by</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">carrier</span><span style="color:#6E6A86;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><div><div class="language-r ext-r line-numbers-mode"><pre class="shiki" style="background-color:#191724;"><code><span class="line"><span style="color:#6E6A86;font-style:italic;">#</span><span style="color:#555169;font-style:italic;"> Subset by rows and then columns</span></span>
<span class="line"><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">dat</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">%&gt;%</span><span style="color:#E0DEF4;">   </span><span style="color:#6E6A86;font-style:italic;">#</span><span style="color:#555169;font-style:italic;"> \`%&gt;%\` is the tidyverse &quot;pipe&quot; operator</span></span>
<span class="line"><span style="color:#E0DEF4;">   </span><span style="color:#EB6F92;font-style:italic;">filter</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">var1</span><span style="color:#31748F;">==</span><span style="color:#F6C177;">&quot;value&quot;</span><span style="color:#E0DEF4;">) </span><span style="color:#31748F;">%&gt;%</span></span>
<span class="line"><span style="color:#E0DEF4;">   </span><span style="color:#E0DEF4;font-style:italic;">select</span><span style="color:#6E6A86;">(</span><span style="color:#E0DEF4;font-style:italic;">var1</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">var2</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">var3</span><span style="color:#6E6A86;">)</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">#</span><span style="color:#555169;font-style:italic;"> Create a new variable by group</span></span>
<span class="line"><span style="color:#E0DEF4;font-style:italic;">dat</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">%&gt;%</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#E0DEF4;font-style:italic;">group_by</span><span style="color:#6E6A86;">(</span><span style="color:#E0DEF4;font-style:italic;">group1</span><span style="color:#6E6A86;">)</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">%&gt;%</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#E0DEF4;font-style:italic;">mutate</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">mean_var1</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">mean</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">var1</span><span style="color:#6E6A86;">)</span><span style="color:#E0DEF4;">)</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">#</span><span style="color:#555169;font-style:italic;"> Collapse by group</span></span>
<span class="line"><span style="color:#E0DEF4;font-style:italic;">dat</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">%&gt;%</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#E0DEF4;font-style:italic;">group_by</span><span style="color:#6E6A86;">(</span><span style="color:#E0DEF4;font-style:italic;">group1</span><span style="color:#6E6A86;">)</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">%&gt;%</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#E0DEF4;font-style:italic;">summarise</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">mean_var1</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">mean</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">var1</span><span style="color:#6E6A86;">)</span><span style="color:#E0DEF4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></div></div><h3 id="manipulating-dates-with-lubridate" tabindex="-1"><a class="header-anchor" href="#manipulating-dates-with-lubridate" aria-hidden="true">#</a> Manipulating dates with lubridate</h3><div class="code--container"><div><div class="language-stata ext-stata line-numbers-mode"><pre class="shiki" style="background-color:#191724;"><code><span class="line"><span style="color:#6E6A86;font-style:italic;">*</span><span style="color:#555169;font-style:italic;"> Shift a date forward one month (not 30 days, one month)</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">*</span><span style="color:#555169;font-style:italic;"> ???</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div><div class="language-r ext-r line-numbers-mode"><pre class="shiki" style="background-color:#191724;"><code><span class="line"><span style="color:#6E6A86;font-style:italic;">#</span><span style="color:#555169;font-style:italic;"> Shift a date forward one month (not 30 days, one month)</span></span>
<span class="line"><span style="color:#C4A7E7;font-style:italic;">shifted_date</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">date</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">+</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">months</span><span style="color:#E0DEF4;">(</span><span style="color:#EBBCBA;">1</span><span style="color:#E0DEF4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></div><h3 id="iterating-with-purrr" tabindex="-1"><a class="header-anchor" href="#iterating-with-purrr" aria-hidden="true">#</a> Iterating with purrr</h3><div class="code--container"><div><div class="language-stata ext-stata line-numbers-mode"><pre class="shiki" style="background-color:#191724;"><code><span class="line"><span style="color:#6E6A86;font-style:italic;">*</span><span style="color:#555169;font-style:italic;"> Read in many files and append them together</span></span>
<span class="line"><span style="color:#31748F;">local</span><span style="color:#E0DEF4;"> </span><span style="color:#9CCFD8;">filelist</span><span style="color:#31748F;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">dir</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">&quot;Data/&quot;</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">files</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">&quot;*.dta&quot;</span></span>
<span class="line"><span style="color:#31748F;">local</span><span style="color:#E0DEF4;"> </span><span style="color:#9CCFD8;">firsttime</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EBBCBA;">1</span></span>
<span class="line"><span style="color:#31748F;">foreach</span><span style="color:#E0DEF4;"> </span><span style="color:#9CCFD8;">f</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">in</span><span style="color:#E0DEF4;"> filelist </span><span style="color:#31748F;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#31748F;">use</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">\`</span><span style="color:#9CCFD8;">f</span><span style="color:#F6C177;">&#39;</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">clear</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#31748F;">if</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">\`</span><span style="color:#9CCFD8;">firsttime</span><span style="color:#F6C177;">&#39;</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">==</span><span style="color:#E0DEF4;"> </span><span style="color:#EBBCBA;">0</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">        </span><span style="color:#31748F;">append</span><span style="color:#E0DEF4;"> using compiled_data.dta</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#31748F;">}</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#31748F;">save</span><span style="color:#E0DEF4;"> compiled_data.dta</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> replace</span></span>
<span class="line"><span style="color:#31748F;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><div><div class="language-r ext-r line-numbers-mode"><pre class="shiki" style="background-color:#191724;"><code><span class="line"><span style="color:#6E6A86;font-style:italic;">#</span><span style="color:#555169;font-style:italic;"> Read in many files and append them together</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">#</span><span style="color:#555169;font-style:italic;"> (this combines purrr with the data.table function fread)</span></span>
<span class="line"><span style="color:#C4A7E7;font-style:italic;">filelist</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EB6F92;font-style:italic;">list.files</span><span style="color:#E0DEF4;">(</span><span style="color:#F6C177;">&#39;Data/&#39;</span><span style="color:#E0DEF4;">, </span><span style="color:#C4A7E7;font-style:italic;">pattern</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">&#39;.csv&#39;</span><span style="color:#E0DEF4;">)</span></span>
<span class="line"><span style="color:#C4A7E7;font-style:italic;">dat</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">filelist</span><span style="color:#E0DEF4;"> </span><span style="color:#31748F;">%&gt;%</span></span>
<span class="line"><span style="color:#E0DEF4;">    </span><span style="color:#E0DEF4;font-style:italic;">map_df</span><span style="color:#6E6A86;">(</span><span style="color:#E0DEF4;font-style:italic;">fread</span><span style="color:#6E6A86;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div></div><h3 id="string-operations-with-stringr" tabindex="-1"><a class="header-anchor" href="#string-operations-with-stringr" aria-hidden="true">#</a> String operations with stringr</h3><div class="code--container"><div><div class="language-stata ext-stata line-numbers-mode"><pre class="shiki" style="background-color:#191724;"><code><span class="line"><span style="color:#EB6F92;font-style:italic;">subinstr</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">string</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">&quot;remove&quot;</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">&quot;replace&quot;</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#EBBCBA;">.</span><span style="color:#6E6A86;">)</span></span>
<span class="line"><span style="color:#EB6F92;font-style:italic;">substr</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">string</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">start</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#C4A7E7;font-style:italic;">length</span><span style="color:#6E6A86;">)</span></span>
<span class="line"><span style="color:#EB6F92;font-style:italic;">regex</span><span style="color:#6E6A86;">(</span><span style="color:#C4A7E7;font-style:italic;">string</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">&quot;regex&quot;</span><span style="color:#6E6A86;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><div><div class="language-r ext-r line-numbers-mode"><pre class="shiki" style="background-color:#191724;"><code><span class="line"><span style="color:#E0DEF4;font-style:italic;">str_replace_all</span><span style="color:#6E6A86;">(</span><span style="color:#E0DEF4;font-style:italic;">string</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">&quot;remove&quot;</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">&quot;replace&quot;</span><span style="color:#6E6A86;">)</span></span>
<span class="line"><span style="color:#E0DEF4;font-style:italic;">str_sub</span><span style="color:#6E6A86;">(</span><span style="color:#E0DEF4;font-style:italic;">string</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">start</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">end</span><span style="color:#6E6A86;">)</span></span>
<span class="line"><span style="color:#E0DEF4;font-style:italic;">str_detect</span><span style="color:#6E6A86;">(</span><span style="color:#E0DEF4;font-style:italic;">string</span><span style="color:#6E6A86;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">&quot;regex&quot;</span><span style="color:#6E6A86;">)</span></span>
<span class="line"><span style="color:#6E6A86;font-style:italic;">#</span><span style="color:#555169;font-style:italic;"> Note all the stringr functions accept regex input</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div></div>`,9);function j(G,K){const n=t("ExternalLinkIcon");return p(),r(c,null,[y,s("p",null,[s("a",E,[d,l(n)]),F,u,h,g,b,f,D,s("a",m,[v,l(n)]),A,_,w,k,C,s("a",x,[B,l(n)]),q,s("a",S,[N,l(n)]),z]),T,s("p",null,[R,s("a",W,[P,l(n)]),V]),I],64)}var M=e(i,[["render",j]]);export{M as default};
