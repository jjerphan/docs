---
title: Connecting to M2j by Qutech in Python
sidebar_label: M2j
description: The M2j module is a low noise amplifier initially designed for use in reflectometry. It has been optimised for use with the F1d IQ Demodulator with a 40 MHz to 1.5 GHz frequency range. This is reflected in the gain flatness of M2j-> within 3dB from 40 MHz to 1.4 GHz.
keywords: [lockin amplifiers, Qutech, QCodes Community]
slug: /instruments-wiki/lockin-amplifiers/qutech/m2j
image: https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395777/Instruments/Lockin%20Amplifiers/M2j/file.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# M2j

## Instrument Card

<div className="flex">

<div>

The M2j module is a low noise amplifier initially designed for use in reflectometry. It has been optimised for use with the F1d IQ Demodulator with a 40 MHz to 1.5 GHz frequency range. This is reflected in the gain flatness of M2j: within 3dB from 40 MHz to 1.4 GHz.

</div>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/e_bgremoval/v1692395777/Instruments/Lockin%20Amplifiers/M2j/file.png" style={{ width: "325px", height: "200px", objectFit: "scale-down" }} />

</div>

<div className="flex text-center">

<p>Device Specification: <a target="\_blank" href="/instruments-wiki/all-instruments/">here</a></p>

</div>

<details style={{ marginTop: "15px"}}>
<summary><h2>Manufacturer Card</h2></summary>

<img src="https://res.cloudinary.com/dhopxs1y3/image/upload/v1692806156/Instruments/Vendor%20Logos/QuTech.png" style={{ width: "100%", height: "170px",objectFit: "scale-down" }} />

At QuTech, we work on a radically new technology with world-changing potential. Our mission: to develop scalable prototypes of a quantum computer and an inherently safe quantum internet, based on the fundamental laws of quantum mechanics.

<ul>
  <li>Headquarters: CJ Delft, Netherlands</li>
  <li>Yearly Revenue (millions, USD): 41.3</li>
  <li>Vendor Website: <a href="https://qutech.nl/">here</a></li>
</ul>
</details>

## Connect to the M2j in Python

[Read our guide for turning Python scripts into Flojoy nodes.](https://docs.flojoy.ai/custom-nodes/creating-custom-node/)
<Tabs>
<TabItem value="QCodes Community" label="QCodes Community">

To connect to an M2j Lockin Amplifier using Qcodes Community, you can use the following Python script:

```python
from qcodes.instrument.base import Instrument
from qcodes.utils.validators import Numbers
import numpy as np

try:
    from spirack import M2j_module, SPI_rack
except ImportError:
    raise ImportError(('The M2j_module class could not be found. '
                       'Try installing it using pip install spirack'))


class M2j(Instrument):
    # The code for the M2j class is provided in the question


# Create an instance of the SPI_rack class
spi_rack = SPI_rack()

# Connect to the M2j Lockin Amplifier
m2j = M2j('m2j', spi_rack, module=1)

# Set the gain of the amplifier
m2j.gain(50)

# Get the RF level after amplification
rf_level = m2j.RF_level()
print(f"RF level: {rf_level} dBm")

# Clear RF clip
m2j.clear_rf_clip()

# Check if RF is clipped
is_rf_clipped = m2j.is_rf_clipped()
print(f"RF clipped: {is_rf_clipped}")
```

This script creates an instance of the `SPI_rack` class and then connects to the M2j Lockin Amplifier using the `M2j` class. It sets the gain of the amplifier to 50 dB, measures the RF level after amplification, clears the RF clip, and checks if the RF is clipped.

</TabItem>
</Tabs>