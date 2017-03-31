---
title: Fourier Series
description: Fourier Series
categories: Digital Communication
---

> Roughly speaking, the theory of Fourier series asserts that just about every periodic function can be decomposed as an(infinite) sum of sines and cosines (trigonometric polynomials). Periodic waveforms are not very interesting for carrying information; after observing one period, the rest of the waveform carries nothing new. Our interest here is almost exclusively in time-limited waveforms.  

### **Linear Time-Invariant System**
If $$O\{ x(t) \} = y(t)$$,  
Linearity(Additivity and Homogeneity) :  
<center> $$O\{ a_1x_1(t) + a_2x_2(t)\} = a_1O\{ x_1(t)\} + a_2O\{ x_2(t)\} = a_1y_1(t) + a_2y_2(t)$$ </center>  
Time-invariance :  
<center> $$O\{ x(t-\tau ) \} = O\{ x(y-\tau ) \}$$ </center>   
##### **Why play a fundamental role**
* Many communication channels possess LTI property.  
* We hope the channels can be approximated as LTI in a range of applications.  

More explanation about the sencond item:  
* Unit-sample response h[n] or unit-impulse response h(t) is a complete description of an LTI system.  
* Many systems are naturally described by their frequency response; LTI systems can be characterized by responses to eternal sinusoids; frequency response is easy to calculate from the system function.  
* Sinusoidal and complex exponential signals are used to describe the characteristics of many physical processes, in particular physical systems in which energy is conserved. Periodic complex exponentials serve as extremely useful building blocks for many other signals(harmonic). If the input to an LTI system is expressed as a linear combination of periodic complex exponentials or sinusoids, the output can also be expressed in this form, with coefficients that are related in a straightforward way to those of the input.  
* For many physical channels, they introduce distortions in their passbands, such a channel can be modeled by an LTI filter followed by AWGN noise, the approach to remove ISI(inter-symbol interference) is usually known as equalization.  
* Linear operations preserve Gaussianity.  
* A large class of interesting functions($$L^2$$) could be represented by linear combinations of complex exponentials(Fourier Theorem).  

### **Fourier Series**  
The *Fourier series* for function $$\{ u(t) : [-T/2, T/2] \to \Bbb{C} \}$$ is given by  
<center> $$u(t) = \begin{cases} \sum\limits_{-\infty}^{\infty} \hat{u_k} e^{2\pi ikt} dt & T/2\le t\le T/2 \\ 0 & elsewhere \end{cases}$$ </center>  
Electrical engineers formerly reserved the symbol $$i$$ for electrical current and thus often use $$j$$ to denote $$\sqrt{-1}$$. 
The Fourier series of a time-limited function maps function to a sequence of complex coefficients $$\hat u_k$$ satisfy  
<center>$$\hat u_k = \frac 1 T \int_{-T/2}^{T/2} u(t)e^{-2\pi ikt/T} dt, -\infty < k < \infty$$ </center>  
For any integer $$n$$, the functions $$cos(2\pi nx), cos(2\pi nx), e^{2\pi inx}$$ are all *$$\Bbb Z$$-periodic*(1-periodic). So in some math book the $$\hat u_k$$ often denoted as:  
<center> $$\hat u_k = \int_0^1 u(t)e^{-2\pi ikt} dt, -\infty < k < \infty$$ </center>  
$$u(t)$$ can be expressed as a linear combination of truncated complex sinusoids by the standard rectangular function as follows:  
<center> $$u(t) = \sum\limits_{-\infty}^{\infty} \hat{u_k} e^{2\pi ikt/T} rect(t/T) = \sum\limits_{k \in \Bbb(Z)} \hat{u_k}{\theta}_k(t)$$ </center>  
where  
<center> $$rect(t) = \begin{cases} 1 & -1/2 \le t \le 1/2 \\ 0 & elsewhere \end{cases} \; \text{and} \; \theta_k(t) = e^{2\pi ikt/T}rect(t/T)$$ </center>  
### **Fourier Theorem**


Reference:  
1. Alan V.Oppenheim. Alan S.Willsky. (1998). *Signals and systems 2nd ed*. (China: Prentice-Hall International,Inc)  
2. MIT Opencourse. *6.02 Introduction to EECS II: Digital Communication Systems*.  
3. MIT Opencourse. *6.003 Signals and Systems*.  
4. MIT Opencourse. *6.450 Principles of Digital Communications I*.  
5. Robert G.Gallager. (2009). *Principles of Digital Communication* (New York: Cambridge University Press).  
6. Harvey Mudd College Opencourse. *E59 Administrative Information*  
7. Terence Tao. (2009). *Analysis I*. *Analysis II* (Hindustan Book Agency)
