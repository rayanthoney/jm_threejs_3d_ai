import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#4fad5a',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './meroitic.png',
    fullDecal: './threejs.png',
});

export default state;