# ORB-Net
# End-to-end Planning Using Feature-based Imitation Learning for Autonomous Drone Racing

Accepted into [ISR europe 2023](https://ieeexplore.ieee.org/abstract/document/10363048)
## Key Contributions
- ORB-Net as a neural architecture that could regress motions (translational and yawn velocity) from RGB images and ORB feature maps extracted from a feature extractor (ORB)
- Technical contributions: Custom Dataloader implemented in PyTorch, used for batching ORB, ORB-mask, RGB images, RGBO to feed into the training pipeline.
- Imitation Learning pipeline to train the ORB-Net model from an expert PID-controlled agent, via continuous sampling trajectories and mixing policies from both the expert and the agent controller (ORB-Net).

## Acknowledgments
Special thanks to all the co-authors from [IVSR Lab](https://github.com/IVSR-SET-HUST/) and [Aarhus University's OpenAirlab](https://github.com/open-airlab). All the simulated trajectories data used in training are from OpenAirlab's Unreal Engine-made [Drone Racing Environment](https://github.com/open-airlab/autonomous-drone-racing).