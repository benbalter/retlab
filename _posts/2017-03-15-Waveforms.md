---
title: Waveforms
description: Fourier transforms stated here with considerably more precision and interpretation.
categories: Digital Communication
---

> *Waveforms* denoted as arbitrarily varying real or complex valued functions of time. An individual waveform from an analog source should be viewed as a sample waveform from arandom process. Here the focus is on ways to map deterministic waveforms to sequences and vice versa. The notation $$\{u(t) : \mathbb{R} \rightarrow \mathbb{R}/\mathbb{C}\}$$ refers to a function that maps each real number $$t \in \mathbb{R}$$ into a real/complex number $$u(t) \in \mathbb{R}/\mathbb{C}$$.

Coding could change the input waveforms so as to make the decoding more effective:
![waveform]({{ https://github.com/lyons-zhang/lyons-zhang.github.io }}/update/201703/waveform.PNG)

For the antenna example, a real waveform at the input in the appropriate frequency band is converted by the input antenna into electromagnetic radiation, part of which is received at the receiving antenna and converted back to a waveform.

The function of a channel encoder, i.e., a modulator, is to convert the incoming sequence of binary digits into a waveform in such a way that the noise corrupted waveform at the receiver can, with high probability, be converted back into the original binary digits.

These waveforms are a priori unknown, so much mathematical precision is necessary here.
### Fourier series







Reference:
1. Robert G.Gallager. (2009). *Principles of Digital Communication* (New York: Cambridge University Press).
