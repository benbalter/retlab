---
title: Fourier Transforms and L2 Waveforms
description: Fourier Transform, 
categories: Digital Communication
---

>  

### **Fourier Transform**
The Fourier transform and its inverse are defined by  
$$\hat u(f) = \int_{-\infty}^{\infty} u(t) e^{-2\pi ift} dt \;\;\;\; u(t) = \int_{-\infty}^{\infty} \hat u(f) e^{2\pi ift} df$$  
If we use $$\omega = 2\pi f$$, these integral become  
$$\hat u(\omega) = \int_{-\infty}^{\infty} u(t) e^{-i\omega t} dt \;\;\;\; u(t) = \frac 1 {2\pi} \int_{-\infty}^{\infty} \hat u(\omega) e^{i\omega t} d\omega$$  
Some book denote as $$\hat u(j\omega)$$, that's in the view of systems, for set $$s=j\omega$$ then Laplace transform becomes Fourier transform; also frequency response lives on the $$j\omega$$ axis of the Laplace transform.  
##### **Eigenfunctions**  
If the output signal $$O\{ x(t)\}$$ is a scalar $$\lambda$$ multiple of the input signal $$x(t)$$, we refer to the signal as an eigenfunction and the multiplier as the eigenvalue.  
<center>$$O\{ x(t)\} =\lambda x(t)$$</center>  
If $$x(t) = e^{st}$$ and $$h(t)$$ is the impulse response of LTI then $$\O\{ e^{st}\} = (h*x)(t) = e^{st} \int_{-\infty}^{\infty} h(\tau)e^{-st} d\tau = H(s)e^{st}$$.  
Furthermore, the eigenvalue associated with $$e^{st}$$ is $$H(s)$$.  




Reference:  
1. Alan V.Oppenheim. Alan S.Willsky. (1998). *Signals and systems 2nd ed*. (China: Prentice-Hall International,Inc)  
2. MIT Opencourse. *6.02 Introduction to EECS II: Digital Communication Systems*.  
3. MIT Opencourse. *6.003 Signals and Systems*.  
4. MIT Opencourse. *6.450 Principles of Digital Communications I*.  
5. Robert G.Gallager. (2009). *Principles of Digital Communication* (New York: Cambridge University Press).  
6. Harvey Mudd College Opencourse. *E59 Administrative Information*  
7. Terence Tao. (2009). *Analysis I*. *Analysis II* (Hindustan Book Agency)
