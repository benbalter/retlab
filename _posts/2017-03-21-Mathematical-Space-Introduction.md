---
title: Mathematical Space Introduction
description: Euclidean spaces, Topological space, Open sets, Metric spaces, Measurable space
categories: Digital Communication
---

> The analysis will let you know when the common mathematical rules(e.g. Interchanging sums/integrals/limits/derivatives) are justified, and when they are illegal. 

We start here by introduce the mathematical space, these concept will provide deeper insight for $$L^2$$ functions.
### **Set Notations and Terminology**
The words *collection*, *family*, and *class* will be used synonymously with set.
##### **Countable set**
A collection of distinguishable objects is *countably infinite* if the objects can be put into one-to-one correspondence with the positive integers. Stated more intuitively, the collection is countably infinite if the set of elements can be arranged as a sequence a1, a2, . . . ,. A set is countable if it contains either a finite or countably infinite set of elements.  
e.g.: The set of rational numbers are countable; the set of real numbers in [0, 1) is uncountable.
##### **Cartesian product**
The *cartesian product* $$A_1 \times\dotsm\times A_n$$ of the sets $$A_1,\dotsc ,A_n$$ is the set of all ordered n-tuples$$(a_1,\dotsc,a_n)$$ where $$a_i\in A_i$$ for $$i=1,\dotsc,n$$.  
The *real number system* is $$R^1$$, and $$R^k = R^1 \times\dotsm\times R^1$$. The *extended real number system* is $$R^1$$ with $$-\infty$$ and $$\infty$$.
##### **Supremum and Infimum**
If $$E\subset[-\infty,\infty]$$ and $$E\ne\varnothing$$, the least upper bound(supremum) and greatest lower bound(infimum) of $$E$$ exist in $$[-\infty,\infty]$$ and are denoted by $$\sup E$$ and $$\inf E$$.
### **Topological Space**
In mathematics, a *structure* on a set is an additional mathematical object that, in some manner, attaches (or relates) to that set to endow it with some additional meaning or significance. In modern mathematics **spaces** are defined as sets with some added structure. For instance, the space of real numbers comes with operations such as addition and multiplication.
##### **Topological space**
A *topological space* is a pair $$(X,F)$$, where $$X$$ is a set, and $$F \subset 2^X$$ is a collection of subsets of $$X$$, whose elements are referred to as *open sets*. Furthermore:
* The empty set $$\varnothing$$ and the whole set $$X$$ are open; in other words, $$\varnothing \in F$$ and $$X \in F$$.
* (Any finite intersection of open sets is open;in other words, if $$V_i\in F$$ for $$i=1,\dotsc,n$$, then $$V_1 \cap V_2\cap\dotsm\cap V_n\in F$$.
* Any arbitrary union of open sets is open(including infinite unions); in other words, if $$(V_\alpha)_{\alpha\in I}$$ is a family of sets in $$F$$(finite, countable, ro uncountable), then $$\bigcup_{\alpha\in I} V_{\alpha}$$.

$$X$$ is called a topological space when the collection $$F$$ of open sets can be deduced from context. 
$$F$$ is said to be a *topology* in $$X$$.
##### **Open sets**
The members of $$F$$ are called the *open sets* in $$X$$.
##### **Neighbourhood**
Let $$(X,F)$$ be a topological space, and let $$x\in X$$. A *neighbourhood* of $$x$$ is defined to be any open set in $$F$$ which contains $$x$$.
##### **Topological convergence**
Let $$m$$ be an integer, $$(X,F)$$ be a topological space and let $$(x^{(n)})_{n=m}^{\infty}$$ be a sequence of points in $$X$$. Let $$x$$ be a point in $$X$$. We say that $$(x^{(n)})_{n=m}^{\infty}$$ *converges* to $$x$$ if and only if, for every neighbourhood $$V$$ of $$x$$, there exists an $$N\ge m$$ such that $$x^{(n)} \in V$$ for all $$n\ge N$$.
##### **Continuous functions**
If $$X$$ and $$Y$$ are topological spaces and if $$f$$ is a mapping of $$X$$ into $$Y$$, then $$f$$ is said to be *continuous* provided that $$f^{-1}(V)$$ is an open set in $$X$$ for every open set $$V$$ in $$Y$$.
### **Euclidean Space**
##### **Metric spaces**
A *metric space* $$(X,d)$$ is a space $$X$$ of objects(called points), together with a *distance function* of *metric* $$d:X\times X\rightarrow [0,+\infty)$$, which associates to each pair $$x,y$$ of points in $$X$$ a non-negative real number $$d(x,y)\ge 0$$. Furthermore:
* For any $$x\in X$$, we have $$d(x,x)=0$$.
* (Positivity) For any *distinct* $$x,y\in X$$, we have $$d(x,y)\gt 0$$.
* (Symmetry) For any $$x,y\in X$$, we have $$d(x,y)=d(y,x)$$.
* (Triangle inequality) For any $$x,y,z\in X$$, we have $$d(x,z)\le d(x,y)+d(y,z)$$.

##### **Euclidean spaces**
Let $$n\ge 1$$ be a natural number, and let $$R^n$$ be the space of $$n$$-tuple of real numbers:
$$R^n=\{(x_1,x_2,\dotsm,x_n):x_1,x_2,\dotsm,x_n\in R\}$$.

We define the *Euclidean metric*(also called the *$$l^2$$ metric*) $$d_{l^2}:R^n\times R^n \rightarrow R$$ by
$$\eqalign{d_{l^2}((x_1,x_2,\dotsm,x_n),(y_1,y_2,\dotsm,y_n)):=\sqrt{(x_1-y_1)^2+\dots +(x_n-y_n)^2}=(\sum_{i=1}^n (x_i-y_i)^2)^{1/2}}$$.

### **Measurable Space**
A collection $$F$$ of subsets of a set $$X$$ is said to be a **$$\sigma\text{-field}$$**(or $$\sigma\text{-algebra}$$), with the following properties:
* $$\varnothing \in F$$.
* If $$A\in F$$,then $$A^c\in F$$.
* If $$A_i \in F$$ for every $$i\in \mathbb{N}$$, then $$\bigcup_{i=1}^{\infty} A_i\in F$$.   
If $$F$$ is a $$\sigma$$-field$ in $$X$$, then $$X$$ is called a **measurable space**, and the members of $$F$$ are called the *measurable sets* in $$X$$.  
If $$X$$ is a measurable space, $$Y$$ is a topological space, and $$f$$ is a mapping of $$X$$ into $$Y$$, then $$f$$ is said to be **measurable** provided that $$f^{-1}(V)$$ is a measurable set in $$X$$ for every open set $$V$$ in $$Y$$.  
##### **Measurable functions**
Let $$\Omega$$ be a measurable subset of $$R^n$$, and let $$f : \Omega \rightarrow \mathbb(R)^m$$ be a function. A function $$f$$ is *measurable* iff $$f^{-1}(V)$$ is measurable for every open set $$V \subseteq \mathbb(R)^m$$.

Reference:

1. Robert G.Gallager. (2009). *Principles of Digital Communication* (New York: Cambridge University Press).
2. Terence Tao. (2009). *Analysis I*. *Analysis II* (Hindustan Book Agency)
3. Walter Rudin. (1987). *Real and complex analysis* (McGraw-Hill Book Company)
