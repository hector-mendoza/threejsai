import { proxy } from "valtio";

// similar to react context/redux
const state = proxy({
    intro: true, // are we on the home page?
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',

});

export default state;