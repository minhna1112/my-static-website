# MonoIS3DLoc
# Simulation to Reality Learning Based Monocular Instance Segmentation to 3D Objects Localization From Aerial View

Published in [IEEE Access](https://ieeexplore.ieee.org/document/10156844)

## Key Contributions
- A neural architecture making use of monocular instance segmentation as intermediate representation to indirectly regress 3D object position from RGB aerial images.
![End-to-end simulation-based 3D object localization system. The system contains two main modules: stemming performs instance
segmentation with the RGB input while the 3D positions prediction module interpolates the location of the object from the semantic mask. All the
data for training the 3D pose prediction module was generated from the simulation environment](img/monois3dloc.png)
- A new training objective (loss) function to reduce the gap between simulated and real-world data used for training neural pose estimator, without the needs for a robust photo-realistic simulator or domain randomization.  
$$
\min_{\theta} \mathcal\{L\}(\tilde{f}_{\theta}(\tilde{x}), \tilde{y})
$$

The variable is represented by $x$.