---
title: Lebesgue ingegration and $$L_2$$ functions
description: Euclidean spaces, Lebesgue measure, Lebesgue ingegration and $$L_2$$ functions 
categories: Digital Communication
---

> *Waveforms* denoted as arbitrarily varying real or complex valued functions of time. An individual waveform from an analog source should be viewed as a sample waveform from arandom process. Here the focus is on ways to map deterministic waveforms to sequences and vice versa. The notation $$\{u(t) : \mathbb{R} \rightarrow \mathbb{R}/\mathbb{C}\}$$ refers to a function that maps each real number $$t \in \mathbb{R}$$ into a real$$/$$complex number $$u(t) \in \mathbb{R}/\mathbb{C}$$.

Coding could change the input waveforms so as to make the decoding more effective:
![waveform]({{ https://github.com/lyons-zhang/lyons-zhang.github.io }}/update/201703/waveform.PNG)

For the antenna example, a real waveform at the input in the appropriate frequency band is converted by the input antenna into electromagnetic radiation, part of which is received at the receiving antenna and converted back to a waveform.

The function of a channel encoder, i.e., a modulator, is to convert the incoming sequence of binary digits into a waveform in such a way that the noise corrupted waveform at the receiver can, with high probability, be converted back into the original binary digits. This is typically done by first converting the binary sequence into a sequence of analog signals, which are then converted to a waveform.

These waveforms are a priori unknown, so much mathematical precision is necessary here.
### Finite energy functions
The energy in a real or complex waveform u(t) is defined to be $$\int_{-\infty}^\infty|u(t)|^2dt$$.
* The energy used over any finite interval T is limited both by regulatory agencies and by physical constraints on transmitters and antennas.
* Finite-energy waveforms have *measurability* properties, These finite-energy measurable functions are called L2 functions. When time-constrained, they always have Fourier series, and without a time constraint, they always have Fourier transforms.
* Perhaps the most important property, however, is that L2 functions can be treated essentially as conventional vectors.
* Unit impulses and constant functions are not physical waveforms, they are useful models of physical waveforms where energy is not important. However, that such waveforms can safely be limited to the finite-energy class.
### Lebesgue measure


Reference:

1. Robert G.Gallager. (2009). *Principles of Digital Communication* (New York: Cambridge University Press).
2. Terence Tao. (2009). *Analysis I*. *Analysis II* (Hindustan Book Agency)
