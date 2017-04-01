---
title: Functional Series
description: Functional series, Pointwise and uniform convergence, Power series
categories: Digital Communication
---

> Fourier series is an example of a functional series. Here we look at important tools in our later discussion of Fourier series.  

There are three main results:  
* Uniform convergence of a sequence of continuous functions gives us a continuous function as a limit
* Weierstrass’ Majorant Theorem, gives a condition that guarantees that a functional series converges to a continuous function
* Integrals of a sequence of functions which converges uniformly to a limit function $$f(x)$$ also converge with the limit being the integral of $$f(x)$$  

### **Pointwise and uniform convergence**
##### **Pointwise convergence**
Let $$(f^{(n)})_{n=1}^\infty$$ be a sequence of functions from one metric space $$(X,d_X)$$ to another $$(Y,d_Y)$$, and let $$f : X \rightarrow Y$$ be another function. We say that $$(f^{(n)})_{n=1}^\infty$$ *converges pointwise* to $$f$$ on $$X$$ if we have <center> $$\lim\limits_{n\rightarrow\infty} f^{(n)}(x) = f(x)$$ </center> for all $$x\in X$$, i.e. <center> $$\lim\limits_{n\rightarrow\infty} d_Y(f^{(n)}(x),f(x)) = 0$$ </center>   
We call the function $$f$$ the *pointwise limit* of the functions $$f^{(n)}$$.  
Note that $$f^{(n)}(x)$$ and $$f(x)$$ are points in $$Y$$, rather than functions.
##### **Uniform convergence**
Let $$(f^{(n)})_{n=1}^\infty$$ be a sequence of functions from one metric space $$(X,d_X)$$ to another $$(Y,d_Y)$$, and let $$f : X \rightarrow Y$$ be another function. We say that $$(f^{(n)})_{n=1}^\infty$$ *converges uniformly* to $$f$$ on $$X$$ if for every $$\varepsilon \gt 0$$ there exists $$N \gt 0$$ such that $$d_Y(f^{(n)}(x),f(x)) \lt \varepsilon$$ for every $$n \gt N$$ and $$x\in X$$.  
We call the function $$f$$ the *uniform limit* of the functions $$f^{(n)}$$.  
Note that in the definition of pointwise convergence, $$N$$ was allowed to depend on $$x$$; here uniform convergence it is not.  
##### **Uniform convergence and continuity**
Suppose $$(f^{(n)})_{n=1}^\infty$$ is a sequence of continuous functions on an interval $$I$$ and suppose also that $$(f^{(n)})_{n=1}^\infty$$ converges uniformly to $$f$$ on the interval $$I$$. Then the limit function $$f$$ is also continuous.  

### **Functional series**
A functional series is a series $$\sum\limits_{k=0}^\infty u_k(x)$$ where each term of the series $$u_k(x)$$ is a function on an interval $$I$$.  
##### **Pointwise convergent**
The functional series $$\sum\limits_{k=0}^\infty u_k(x)$$ is *pointwise convergent* for each $$x \in I$$ if the limit $$\sum\limits_{k=0}^\infty u_k(x) = \lim\limits_{N\rightarrow\infty}\sum\limits_{k=0}^N u_k(x) $$ exists for each $$x \in I$$.  
##### **Weierstrass’ Majorant Theorem**
Suppose that the functional series $$\sum\limits_{k=0}^\infty u_k(x)$$ is defined on an interval $$I$$ and that there is a sequence of positive constants $$M_k$$ so that $$|u_k(x)| \le M_k, k = 0,1,2,\dotsc$$ for all $$x \in I$$. If $$\sum\limits_{k=0}^\infty M_k$$ converges, then $$\sum\limits_{k=0}^\infty u_k(x)$$ converges uniformly on $$I$$.   
So fortunately, while most continuous functions are not as well behaved as polynomials, they can always be uniformly approximated by polynomials. Polynomials are always very well behaved, e.g. being always differentiable.  

If   
   $$(i)$$ the functional series $$u_k(x)$$ converges uniformly on interval $$I$$;  
   $$(ii)$$ $$u_k(x)$$ is a continuous function on $$I$$ for each $$k = 0,1,2,\dotsc$$.   
then  
   $$S(x)$$ is continuous on $$I$$;   
   $$\int_a^x (\sum\limits_{k=0}^\infty u_k(t))\,d(t) = \sum\limits_{k=0}^\infty (\int_a^x u_k(t)\,dt)$$;
### **Power series**   
A formal power series centered at $$a$$ is any series of the form <center>$$\sum\limits_{n=0}^\infty c_n(x-a)^n$$</center> where the coefficients $$c_0, c_1, c_2, \dotsc$$ are real or complex numbers.  
##### **Radius of convergence**
Let $$\sum\limits_{n=0}^\infty c_n(x-a)^n$$ be a formal power series. The *radius of convergence R* of this series to be the quantity <center>$$R := \dfrac{1}{\limsup_{n\rightarrow\infty} |c_n|^{1/n}}$$</center>
##### **Real analytic functions**
A function $$f(x)$$ which is lucky enough to be representable as a power series has a special name, it is a real analytic function.  
Let $$E$$ be a subset of $$\mathbb{R}$$, and let $$f : E \rightarrow\mathbb{R}$$ be a function. If a is an interior point of $$E$$, we say that $$f$$ is *real anlytic* at a if there exists an open interval $$(a-r, a+r)$$ in $$E$$ for some $$r \gt 0$$ such that there exists a power series $$\sum\limits_{n=0}^\infty c_n(x-a)^n$$ centered at $$a$$ which has a radius of convergence greater than or equal to $$r$$, and which converges to $$f$$ on $$(a-r, a+r)$$. If $$E$$ is an open set, and $$f$$ is real analytic at every point $$a$$ of $$E$$, we say that $$f$$ is real analytic on $$E$$.

Reference:

1. Terence Tao. (2009). *Analysis I*. *Analysis II* (Hindustan Book Agency)
2. TATA57 Transform Theory. *Linköping University* (Sweden)

