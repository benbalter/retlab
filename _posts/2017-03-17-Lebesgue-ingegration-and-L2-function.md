---
title: Lebesgue ingegration and L2 functions
description: Topological space, Euclidean spaces, Lebesgue measure, Lebesgue ingegration and L2 functions 
categories: Digital Communication
---

> Every piecewise continuous function is *Riemann integrable*. Lebesgue integral can handle a very large class of functions, including all the Riemann integrable functions, but also even very discontinuous functions. In fact, it's safe to say that it can integrate any function that one actually needs in mathematics in real-life applications.

The passage from Riemann's theory of integration to that of Lebesque is a process of completion. It is of the same fundamental importance in analysis as is the construction of the real number system from the rationals.
### **Set Notations and Terminology**
The words *collection*, *family*, and *class* will be used synonymously with set.
##### **Cartesian product**
The ***cartesian product*** $$A_1 \times\dotsm\times A_n$$ of the sets $$A_1,\dotsc, A_n$$ is the set of all ordered n-tuples$$(a_1,\dotsc,a_n)$$ where $$a_i \in A_i$$ for $$i=1,\dotsc,n$$.

The *real number system* is $$R^1$$, and $$R^k = R^1 \times \dotsm \times R^1$$. The *extended real number system* is $$R^1$$ with $$-\infty$$ and $$\infty$$.
##### **Supremum and Infimum**
If $$E\subset[-\infty,\infty]$$ and $$E\ne\varnothing$$, the least upper bound(supremum) and greatest lower bound(infimum) of $$E$$ exist in $$[-\infty,\infty]$$ and are denoted by $$\sup E$$ and $$\inf E$$.
### **Topological space**
In mathematics, a *structure* on a set is an additional mathematical object that, in some manner, attaches (or relates) to that set to endow it with some additional meaning or significance. In modern mathematics **spaces** are defined as sets with some added structure. For instance, the space of real numbers comes with operations such as addition and multiplication.
##### **topological space**
A *topological space* is a pair $$(X,F)$$, where $$X$$ is a set, and $$F \subset 2^X$$ is a collection of subsets of $$X$$, whose elements are referred to as *open sets*. Furthermore:
* The empty set $$\varnothing$$ and the whole set $$X$$ are open; in other words, $$\varnothing \in F $$ and $$X \in F$$.
* (Any finite intersection of open sets is open;in other words, if $$V_i\in F$$ for $$i=1,\dotsc,n$$, then $$V_1 \cap V_2\cap\dotsm\cap V_n\in F$$.
* Any arbitrary union of open sets is open(including infinite unions); in other words, if $$(V_\alpha)_{\alpha\in I}$$ is a family of sets in $F$, then $$\bigcup_{\alpha\in I} V_{\alpha}$$.

$$X$$ is called a topological space when the collection $$F$$ of open sets can be deduced from context. 
$$F$$ is said to be a *topology* in $$X$$.
##### **open sets**
The members of $$F$$ are called the *open sets* in $$X$$.
##### **neighbourhood**
Let $$(X,F)$$ be a topological space, and let $$x\in X$$. A *neighbourhood* of $$x$$ is defined to be any open set in $$F$$ which contains $$x$$.
##### **Topological convergence**
Let $$m$$ be an integer, $$(X,F)$$ be a topological space and let $$(x^{(n)})_{n=m}^{\infty}$$ be a sequence of points in $$X$$. Let $$x$$ be a point in $$X$$. We say that $$(x^{(n)})_{n=m}^{\infty}$$ *converges* to $$x$$ if and only if, for every neighbourhood $$V$$ of $$x$$, there exists an $$N\ge m$$ such that $$x^{(n)} \in V$$ for all $$n\ge N$$.
##### **Continuous functions**
If $$X$$ and $$Y$$ are topological spaces and if $$f$$ is a mapping of $$X$$ into $$Y$$, then $$f$$ is said to be *continuous* provided that $$f^{-1}(V)$$ is an open set in $$X$$ for every open set $$V$$ in $$Y$$.
### Lebesgue measure


Reference:

1. Robert G.Gallager. (2009). *Principles of Digital Communication* (New York: Cambridge University Press).
2. Terence Tao. (2009). *Analysis I*. *Analysis II* (Hindustan Book Agency)
3. Walter Rudin. (1987). *Real and complex analysis* (McGraw-Hill Book Company)
