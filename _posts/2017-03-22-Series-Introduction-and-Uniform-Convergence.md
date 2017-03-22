---
title: Series Introduction and Uniform Convergence
description: Limits of sequences, Series, Series of functions, Power series
categories: Digital Communication
---

> The *limit* is a concept which on one level is quite intuitive, but to pin down rigorously turns out to be quite difficult.  

### **Limit Notion**
To get real numbers from retional numbers, that is to pass from a "discrete" system to a "continuous" one, and requires the *limit* notion.  
##### **Cauchy sequences**
A sequence $$(a_n)_{n=0}^\infty$$ of rational numbers is said to be a *Cauchy sequence* iff for every $$\varepsilon \gt 0$$, there exists an $$N \ge 0$$ such that $$d(a_j, a_k) \le \varepsilon$$ for all $$j,k \ge N$$.  
##### **Real numbers**
A real number is defined to be an object of the form $$LIM_{n\rightarrow\infty} a_n$$, where $$(a_n)_{n=1}^\infty$$ is a Cauchy sequence of rational numbers.  Two real numbers $$LIM_{n\rightarrow\infty} a_n$$ and $$LIM_{n\rightarrow\infty} b_n$$ are said to be equal iff $$(a_n)_{n=1}^\infty$$ and $$(b_n)_{n=1}^\infty$$ are equivalent Cauchy sequences.  
##### **Cauchy sequences of reals**
Let $$\varepsilon \gt 0$$ be a real number. A sequence $$(a_n)_{n=m}^\infty$$ starting at some integer index $$m$$ is said to be *eventually $$\varepsilon$$-steady* iff there exists an $$N \le m$$ such that $$(a_n)_{n=m}^\infty$$ is $$\varepsilon$$-steady. We say that $$(a_n)_{n=m}^\infty$$ is a *Cauchy sequence* iff it is eventually $$\varepsilon$$-steady for every $$\varepsilon \gt 0$$.  
##### **Convergence of sequences**
Let $$\varepsilon \gt 0$$ be a real number, and let $$L$$ be a real number. A sequence $$(a_n)_{n=1}^\infty$$ of real numbers is said to be $$\varepsilon$$-close to $$L$$ iff an is $$\varepsilon$$-close to $$L$$ for every $$n \le N$$, i.e., we have $$|a_n - L| \le \varepsilon$$ for every $$n \le N$$. We say that a sequence $$(a_n)_{n=m}^\infty$$ is eventually $$\varepsilon$$-close to $$L$$ iff there exists an $$N \le m$$ such that $$(a_n)_{n=1}^\infty$$ is $$\varepsilon$$-close to $$L$$. We say that a sequence $$(a_n)_{n=m}^\infty$$ *converges* to $$L$$ iff it is eventually $$\varepsilon$$-close to $$L$$ for every real $$\varepsilon \lt 0$$.
##### **Uniqueness of limits**
Let $$(a_n)_{n=m}^\infty$$ be a real sequence starting at some integer index $$m$$, and let $$L \neq L'$$ be two distinct real numbers. Then it is not possible for $$(a_n)_{n=m}^\infty$$ to converge to $$L$$ while also converging to $$L'$$.  
##### **Limits of sequences**
If a sequence $$(a_n)_{n=m}^\infty$$ converges to some real number $$L$$, we say that $$(a_n)_{n=m}^\infty$$ is convergent and that its limit is $$L$$; we write   
$$L = lim an n-+ooto$$ denote this fact. If a sequence (an)~=m is not converging to any real number L, we say that the sequence (an)~=m is divergent and we leave limn-+oo an undefined


Reference:

1. Robert G.Gallager. (2009). *Principles of Digital Communication* (New York: Cambridge University Press).
2. Terence Tao. (2009). *Analysis I*. *Analysis II* (Hindustan Book Agency)
