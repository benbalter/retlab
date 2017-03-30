---
title: Fourier Series
description: Fourier Series
categories: Digital Communication
---

> Roughly speaking, the theory of Fourier series asserts that just about every periodic function can be decomposed as an(infinite) sum of sines and cosines (trigonometric polynomials). Periodic waveforms are not very interesting for carrying information; after observing one period, the rest of the waveform carries nothing new. Our interest here is almost exclusively in time-limited waveforms.  

#### **Linear Time-Invariant**
If $$O\{ x(t) \} = y(t)$$,  
Linearity(Additivity and Homogeneity) : $$O\{ a_1x_1(t) + a_2x_2(t)\} = a_1O\{ x_1(t)} + a_2O\{ x_2(t)} = a_1y_1(t) + a_2y_2(t)$$
Time-invariance : $$O\{ x(t-\tau ) \} = O\{ x(y-\tau ) \}$$   
#### **Why play a fundamental role**
* Many communication channels possess LTI property.  
* We hope the channels can be approximated as LTI in a range of applications.  
More explanation about the sencond:  
** Unit-sample response h[n] or unit-impulse response h(t) is a complete description of an LTI system.  
** Many systems are naturally described by their frequency response; LTI systems can be characterized by responses to eternal sinusoids; frequency response is easy to calculate from the system function.  
** Sinusoidal and complex exponential signals are used to describe the characteristics of many physical processes, in particular physical systems in which energy is conserved. Periodic complex exponentials serve as extremely useful building blocks for many other signals(harmonic). If the input to an LTI system is expressed as a linear combination of periodic complex exponentials or sinusoids, the output can also be expressed in this form, with coefficients that are related in a straightforward way to those of the input.  
** For many physical channels, they introduce distortions in their passbands, such a channel can be modeled by an LTI filter followed by AWGN noise, the approach to remove ISI(inter-symbol interference) is usually known as equalization.  
** Linear operations preserve Gaussianity.  
** A large class of interesting functions($$L^2$$) could be represented by linear combinations of complex exponentials(Fourier Theorem).  
#### **Fourier Series**  
The *Fourier series* for function $$\{ u(t) : [-T/2, T/2] \to \Bbb{C} \}$$ is given by  
$$u(t) = \cases{\sum\limits_{-\infity}^{\infity} \hat u_k e^{2\pi ikt} dt & T/2 \le t \le T/2 \\ 0 & \text{elsewhere} }  
Electrical engineers formerly reserved the symbol $$i$$ for electrical current and thus often use $$j$$ to denote $$\sqrt{-1}$$.
The Fourier series of a time-limited function maps function to a sequence of complex coefficients $$\hat u_k$$ satisfy  
$$\hat u_k = \frac 1 T \int_{-T/2}^{T/2} u(t)e^{-2\pi ikt/T} dt, -\infity < k < \infity$$  
For any integer $$n$$, the functions $$cos(2\pi nx), cos(2\pi nx), e^{2\pi inx}$$ are all *$$\Bbb Z$$-periodic(1-periodic). So in some math book the $$\hat u_k$$ often denoted as:  
$$\hat u_k = \int_0^1 u(t)e^{-2\pi ikt} dt, -\infity < k < \infity$$ 
#### **Fourier Theorem**


Reference:  
1. Alan V.Oppenheim. Alan S.Willsky. (1998). *Signals and systems 2nd ed*. (China: Prentice-Hall International,Inc)  
2. MIT Opencourse. *6.02 Introduction to EECS II: Digital Communication Systems*.  
3. MIT Opencourse. *6.003 Signals and Systems*.  
4. MIT Opencourse. *6.450 Principles of Digital Communications I*.  
5. Robert G.Gallager. (2009). *Principles of Digital Communication* (New York: Cambridge University Press).  
6. Harvey Mudd College Opencourse. *E59 Administrative Information*  
7. Terence Tao. (2009). *Analysis I*. *Analysis II* (Hindustan Book Agency)
