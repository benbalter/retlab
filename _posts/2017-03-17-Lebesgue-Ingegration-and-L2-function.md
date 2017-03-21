---
title: Lebesgue Ingegration and L2 functions
description: Topological space, Euclidean spaces, Lebesgue measure, Lebesgue ingegration and L2 functions 
categories: Digital Communication
---  
> Every piecewise continuous function is *Riemann integrable*. Lebesgue integral can handle a very large class of functions, including all the Riemann integrable functions, but also even very discontinuous functions. In fact, it's safe to say that it can integrate any function that one actually needs in mathematics in real-life applications.  
The passage from Riemann's theory of integration to that of Lebesque is a process of completion. It is of the same fundamental importance in analysis as is the construction of the real number system from the rationals.
### **Lebesgue Ingegration**
I have to pay a certain sum, which I have collected in my pocket. I take the bills and coins out of my pocket and give them to the creditor in the order I find them until I have reached the total sum. This is the Riemann integral. But I can proceed differently. After I have taken all the money out of my pocket I order the bills and coins according to identical values and then I pay the several heaps one after the other to the creditor. This is my integral.
![Lebesgue]({{ https://github.com/lyons-zhang/lyons-zhang.github.io }}/update/201703/Lebesgue.PNG)  
Whenever the Riemann integral exists (i.e.,the limit exists), the Lebesgue integral also exists and has the same value.  
The familiar rules for calculating Riemann integrals also apply for Lebesgue integrals.  
For some very weird functions, the Lebesgue integral exists, but the Riemann integral does not.  
There are also exceptionally weird functions for which not even the Lebesgue integral exists.  
##### **Lebesgue Measure**
In Lebesgue integration, the measure $${\mu}_m = {t : m\delta \le u(t) \lt (m+1)\delta }$$ in is called Lebesgue measure.
For any real $$a \le b$$, including $$a = -\infty$$, $$b = infty$$, the interval $$I = (a, b)$$ has measure $$\mu(I) = b − a$$. Same if either or both end points included.  
The measure of a finite union, $$I_1,\dotsc,I_k$$ of disjoint intervals is the sum of the measure of those intervals, $$\sum_{j=1}^k \mu(I_j)$$.  
The measure of a countable union $$I_1,\dotsc,I_k$$, of disjoint intervals is $$\mu(\cup I_j)=\lim_{k\rightarrow\infty} sum_{j=1}^k \mu(I_j)$$.  
Any *countable set* of real numbers has zero measure.  


Reference:

1. Robert G.Gallager. (2009). *Principles of Digital Communication* (New York: Cambridge University Press).
2. Terence Tao. (2009). *Analysis I*. *Analysis II* (Hindustan Book Agency)
3. Walter Rudin. (1987). *Real and complex analysis* (McGraw-Hill Book Company)
4. Siegmund-Schultze, Reinhard (2008), *Henri Lebesgue*, in Timothy Gowers, June Barrow-Green, Imre Leader, Princeton Companion to Mathematics, Princeton University Press.
5. MIT Opencourse 6.450. *Digital Communication*.