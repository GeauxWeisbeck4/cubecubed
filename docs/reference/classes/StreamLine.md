[cubecubed](/reference/README.md) / [Exports](/reference/modules.md) / StreamLine

# Class: StreamLine

Render a continuous flow based on mathematical function
that forms a vector field. Initial position
(`Vector3(0, 0, 0)` by default) and maximum number of vertices
(`0` by default) must be defined. The next vertices will be
plotted by applying the specified function to the initial
position at each animation frame, resulting a stream line.

Note that the terms `flow` and `stream line` here are used
interchangably.

## Hierarchy

- `CanvasCubicon`

  ↳ **`StreamLine`**

## Constructors

### constructor

• **new StreamLine**(`params`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | An object that contains options to form the stream line. |
| `params.CONFIG?` | [`STREAMLINE_CONFIG`](/reference/interfaces/STREAMLINE_CONFIG.md) | Config options of the stream line.  **`default`** STREAMLINE_DEFAULT_CONFIG |
| `params.dt?` | `number` | Speed when changing the position of the stream line.  **`default`** 0.01 |
| `params.functionDef` | `VectorFunction` | The function to change the cubicon's position at each frame. |
| `params.group` | [`CanvasGroup`](/reference/classes/CanvasGroup.md) | The group that the stream line belongs to. |
| `params.maxVertices?` | `number` | Maximum number of vertices for the stream line.  **`default`** 0 |
| `params.position?` | [`Vector3`](/reference/classes/Vector3.md) | Position of the stream line.  **`default`** Vector3(0, 0, 0) |
| `params.scaleFactor?` | `number` | Scale the position vector of the stream line by this number.  **`default`** 1 |

#### Overrides

CanvasCubicon.constructor

#### Defined in

[src/canvas/cubicons/StreamLine.ts:71](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/StreamLine.ts#L71)

## Properties

### CONFIG

• **CONFIG**: [`STREAMLINE_CONFIG`](/reference/interfaces/STREAMLINE_CONFIG.md)

Config options of the stream line.

#### Defined in

[src/canvas/cubicons/StreamLine.ts:66](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/StreamLine.ts#L66)

___

### functionDef

• **functionDef**: `VectorFunction`

The function defining the position of the target
cubicon. This function should take a `Vector3()`
object as both input and output. The `Vector3()`
output object is the cubicon's position at next frame.

Example of a function defining a vector field:

```ts
const sineField = ({ x, y, z })
    => new Vector3(Math.sin(y), Math.sin(x), z);
}

```

#### Defined in

[src/canvas/cubicons/StreamLine.ts:51](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/StreamLine.ts#L51)

___

### group

• **group**: [`CanvasGroup`](/reference/classes/CanvasGroup.md)

The group that this cubicon belongs to.

#### Inherited from

CanvasCubicon.group

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:11](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L11)

___

### maxVertices

• **maxVertices**: `number`

Maximum number of vertices of the stream line.

#### Defined in

[src/canvas/cubicons/StreamLine.ts:61](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/StreamLine.ts#L61)

___

### position

• **position**: [`Vector3`](/reference/classes/Vector3.md)

Position of this cubicon.
This property changed after finishing animations (in real time).

#### Inherited from

CanvasCubicon.position

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:17](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L17)

___

### scaleFactor

• **scaleFactor**: `number`

Scale the position vector of this cubicon by this number.

#### Inherited from

CanvasCubicon.scaleFactor

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:22](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L22)

___

### token

• **token**: `string`

Token string for this cubicon.

#### Inherited from

CanvasCubicon.token

#### Defined in

[src/canvas/cubicons/CanvasCubicon.ts:27](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/CanvasCubicon.ts#L27)

___

### vertices

• **vertices**: [`Vector3`](/reference/classes/Vector3.md)[]

`maxVertices` vertices of the stream line curve.

#### Defined in

[src/canvas/cubicons/StreamLine.ts:56](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/StreamLine.ts#L56)

## Methods

### render

▸ **render**(`p`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `any` |

#### Returns

`void`

#### Defined in

[src/canvas/cubicons/StreamLine.ts:156](https://github.com/imaphatduc/cubecubed/blob/1d9e38f/src/canvas/cubicons/StreamLine.ts#L156)
