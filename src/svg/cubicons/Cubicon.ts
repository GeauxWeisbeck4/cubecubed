import { select } from "d3-selection";
//+++++++++++++++++++++++++++++++++++++++++++++++++++//

import { Vector2 } from "@math/vector";

import { Group } from "@group/Group";

export abstract class Cubicon {
    abstract readonly cubType: string;

    /**
     * The group that this cubicon belongs to.
     */
    group: Group;

    /**
     * Position of this cubicon.
     * This property changed after finishing animations (in real time).
     */
    position: Vector2;

    /**
     * The angle between this cubicon and the x axis.
     * This property changed after finishing animations (in real time).
     */
    angle = 0;

    /**
     * The sum vector of all translate vectors (if invoking translate animation).
     */
    moveVector = new Vector2(0, 0);

    /**
     * The sum of all rotate angles (if invoking rotate animation).
     */
    moveAngle = 0;

    /**
     * The `<svg/>` tag of this cubicon's group.
     */
    svg_group: any;

    /**
     * The `<g/>` tag that holds this cubicon.
     */
    g_cubiconWrapper: any;

    /**
     * The HTML tag that represents this cubicon.
     */
    def_cubiconBase: any;

    protected isRendered = false;

    constructor(params: { group: Group; position: Vector2 }) {
        this.group = params.group;

        this.position = params.position;

        this.svg_group = params.group.svg_group;

        this.def_cubiconBase = select(null);
    }

    checkIfRendered() {
        if (this.isRendered) {
            throw new Error(
                "Warning: render() shouldn't be called more than once. Returned nothing."
            );
        }
    }
}
