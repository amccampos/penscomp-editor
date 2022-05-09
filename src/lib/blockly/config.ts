
interface Config {
  move: any,
  zoom: any,
  toolbox?: any
}

export const config: Config = {
  move: {
    scrollbars: false,
    drag: true,
    wheel: false,
  },
  zoom: {
    controls: true,
    wheel: true,
    maxScale: 1.5,
    minScale: 0.4,
    scaleSpeed: 1.1,
  }
}
