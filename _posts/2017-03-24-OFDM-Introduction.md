---
title: OFDM Introduction
description: OFDM, OFDMA
categories: Digital Communication
---

> Orthogonal frequency division multiplexing (OFDM) and orthogonal frequency division multiple access (OFDMA) are the modulation technique and the multiple access strategy adopted in long term evolution (LTE) 4G cellular network standards.

#### **Motivation**
#### **Chief advantages**
* the ease of implementation of both transmitter and receiver thanks to the use of fast Fourier transform (FFT) and inverse fast Fourier transform (IFFT) blocks
* the ability to counteract multi-path distortion
* the orthogonality of subcarriers, which eliminates intercell interference
* their easy coupling with adaptive modulation techniques
* the ease of integration with multi-antenna hardware, both at the transmitter and receiver.   

#### **Less-than-perfect**
* OFDM is based on the use of rectangular pulses in the time domain, which leads to a slowly decaying behavior in the frequency domain, this makes OFDM unsuited for use in fragmented spectrum scenarios, where strict constraints on the out-of-band(OOB) levels are to be fulfilled.  

Reference:

1. Robert G.Gallager. (2009). *Principles of Digital Communication* (New York: Cambridge University Press).
2. Terence Tao. (2009). *Analysis I*. *Analysis II* (Hindustan Book Agency)
