import { select } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

export interface SCENE_CONFIG {
    /**
     * @default window.innerWidth
     */
    sceneWidth: number;
    /**
     * @default window.innerHeight
     */
    sceneHeight: number;
}

const SCENE_DEFAULT_CONFIG: SCENE_CONFIG = {
    sceneWidth: window.innerWidth,
    sceneHeight: window.innerHeight,
};

/**
 * The granddad/grandma object of everything in the visualization.
 * Scene() here is a must in every result math videos.
 *
 * Please see the Quick Start page in official documentation for clearer understanding about this `Scene` term.
 */
export class Scene {
    /**
     * Name of this scene.
     */
    name: string;

    /**
     * Width of this scene.
     */
    sceneWidth: number;

    /**
     * Height of this scene.
     */
    sceneHeight: number;

    /**
     * The time passed by since this scene was created. (in milliseconds)
     *
     * > (aka the total time of all the animations of all groups included in this scene)
     */
    sceneElapsed = 0;

    /**
     * Include this scene to HTML flow.
     *
     * @param sceneName Name of the scene.
     */
    constructor(sceneName: string, CONFIG?: SCENE_CONFIG) {
        this.name = sceneName;

        ({
            sceneWidth: this.sceneWidth = SCENE_DEFAULT_CONFIG.sceneWidth,
            sceneHeight: this.sceneHeight = SCENE_DEFAULT_CONFIG.sceneHeight,
        } = CONFIG ?? SCENE_DEFAULT_CONFIG);
    }

    /**
     * Fade out and remove this scene away from HTML flow.
     * That means, everything in the scene will be removed, too.
     *
     * @param delay Delay (in milliseconds) before destroying this scene.
     * > This delay variable should be tracked by summing all Group().groupElapsed properties of all `Group()`s in this scene.
     */
    destroy(delay = 0) {
        select("#cubecubed")
            .selectAll(".group")
            .transition()
            .delay(this.sceneElapsed + delay)
            .duration(500)
            .style("opacity", 0)
            .remove();
    }
}
